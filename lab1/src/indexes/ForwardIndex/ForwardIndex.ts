import { File } from '../../models/File';
import { Index } from '../Index';

export class ForwardIndex extends Index<string> {
  update(files?: File[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
  search(filename: string): string[] {
    throw new Error('Method not implemented.');
  }
}
