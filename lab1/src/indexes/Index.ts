import { File } from '../models/File';

export abstract class Index<T extends File | string> {
  private _isUpdated: boolean;
  private _index: Map<string, T[]>;

  public get isUpdated(): boolean {
    return this._isUpdated;
  }

  constructor() {
    this._index = new Map<string, T[]>();
    this._isUpdated = false;
  }

  abstract update(files?: File[]): Promise<void>;

  abstract search(query: string): T[];
}
