import { FORWARD_INDEX_FILE } from './../../config';
import fs from 'fs';
import { File } from '../../models/File';
import { Index } from '../Index';

export class ForwardIndex extends Index<string> {
  // abstract
  private filesToIndex(files: File[]): Record<string, string[]> {
    return files.reduce((acc, file) => {
      const { name, content } = file;
      const words = content.split(' ').map(word => word.toLowerCase());
      acc[name] = words;
      return acc;
    }, {} as Record<string, string[]>);
  }

  // share
  private async loadIndex(): Promise<Record<string, string[]>> {
    return fs.promises.readFile(FORWARD_INDEX_FILE, 'utf-8').then(JSON.parse);
  }

  // share
  async update(files?: File[]): Promise<void> {
    if (files) {
      this._index = this.filesToIndex(files);
      await fs.promises.writeFile(
        FORWARD_INDEX_FILE,
        JSON.stringify(this._index),
      );
    }
    this._index = await this.loadIndex();
    this._isUpdated = true;
  }

  // share
  search(filename: string): string[] {
    if (!this._isUpdated) {
      throw new Error('Index is not updated');
    }
    return this._index[filename] ?? null;
  }
}
