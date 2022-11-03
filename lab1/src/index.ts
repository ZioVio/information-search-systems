import { InvertedIndex } from './indexes/InvertedIndex/InvertedIndex';
/**
 * Class File
 * - name
 * - content
 *
 * Class ForwardIndex
 * 
 *   Writes index file to disk if files are in ctor. Otherwise loads index
 *   from disk
 * - update(files?: File[])
 * - isUpdated: boolean
 *
 *   Search only by full filename. Returns a list of words.
 *   Throws an error is no index is built
 * - search(query: string): string[]
 *
 * - index: Map<string, File[]>
 *
 * Class InvertedIndex
 * - ctor (files?: File[])
 *
 * Writes index file to disk if files are in ctor. Otherwise loads index
 *   from disk
 * - update()
 * - isUpdated: boolean
 *
 *   Search only by full filename. Returns a list of Files the word is on.
 *   Throws an error is no index is built
 * - search(word: string): File[]
 *
 * - index: Map<string, File[]>
 */

import { ForwardIndex } from './indexes/ForwardIndex';

const forwardIndex = new ForwardIndex();
const invertedIndex = new InvertedIndex();

forwardIndex.update().then(() => console.log('forward index loaded'));
invertedIndex.update().then(() => console.log('inverted index loaded'));
