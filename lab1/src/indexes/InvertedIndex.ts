import { File } from '../models/File';
import { Index } from './Index';

export class InvertedIndex extends Index<File> {
  build(files?: File[]): void {
    throw new Error('Method not implemented.');
  }
  search(word: string): File[] {
    throw new Error('Method not implemented.');
  }
}
