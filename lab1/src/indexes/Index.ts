import fs from 'fs';
import { CACHE_DIR } from '../config';
import { File } from '../models/File';

export abstract class Index<T extends File | string> {
  protected _index: Record<string, T[]>;
  protected _isUpdated: boolean;
  protected abstract indexFilePath: string;

  constructor() {
    this._index = {};
    this._isUpdated = false;
  }

  protected async loadIndex(): Promise<Record<string, T[]>> {
    return fs.promises.readFile(this.indexFilePath, 'utf-8').then(JSON.parse);
  }

  public get isUpdated(): boolean {
    return this._isUpdated;
  }

  public search(query: string): T[] {
    if (!this._isUpdated) {
      throw new Error('Index is not updated');
    }
    return this._index[query] ?? null;
  }

  // share
  public async update(files?: File[]): Promise<void> {
    if (files) {
      this._index = this.filesToIndex(files);
      // todo: move this to a separate function
      await fs.promises.mkdir(CACHE_DIR);
      await fs.promises.writeFile(
        this.indexFilePath,
        JSON.stringify(this._index),
      );
      //
    }
    this._index = await this.loadIndex();
    this._isUpdated = true;
  }

  protected abstract filesToIndex(files: File[]): Record<string, T[]>;
}
