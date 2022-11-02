import { File } from '../models/File';
import { Index } from './Index';

export class InvertedIndex extends Index<File> {
  update(files?: File[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
  search(word: string): File[] {
    throw new Error('Method not implemented.');
  }
}
