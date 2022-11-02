/**
 * Class File
 * - name
 * - content
 *
 * Class ForwardIndex
 * - ctor (files?: File[])
 *
 *   Writes index file to disk if files are in ctor. Otherwise loads index
 *   from disk
 * - build()
 * - isBuilt: boolean
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
 * - build()
 * - isBuilt: boolean
 *
 *   Search only by full filename. Returns a list of Files the word is on.
 *   Throws an error is no index is built
 * - search(word: string): File[]
 *
 * - index: Map<string, File[]>
 */

export {};
