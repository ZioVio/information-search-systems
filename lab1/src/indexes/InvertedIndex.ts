import { INVERTED_INDEX_FILE } from './../config';
import { File } from '../models/File';
import { Index } from './Index';

export class InvertedIndex extends Index<File> {
  protected indexFilePath: string;

  protected filesToIndex(files: File[]): Record<string, File[]> {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super();
    this.indexFilePath = INVERTED_INDEX_FILE;
  }
}
