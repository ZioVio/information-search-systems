import { File } from '../models/File';

export abstract class Index<T extends File | string> {
  private _isBuilt: boolean;
  private _index: Map<string, T[]>;

  public get isBuild(): boolean {
    return this._isBuilt;
  }

  constructor() {
    this._index = new Map<string, T[]>();
    this._isBuilt = false;
  }

  abstract build(files?: File[]): void;

  abstract search(query: string): T[];
}
