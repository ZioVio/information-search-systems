import { File } from '../models/File';

export abstract class Index<T extends File | string> {
  protected _index: Record<string, T[]>;
  protected _isUpdated: boolean;

  public get isUpdated(): boolean {
    return this._isUpdated;
  }

  constructor() {
    this._index = {};
    this._isUpdated = false;
  }

  abstract update(files?: File[]): Promise<void>;

  abstract search(query: string): T[];
}
