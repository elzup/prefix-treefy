import { buildCharTrie } from './utils/buildCharTrie'
import { readFileSync, writeFile, writeFileSync } from 'fs'

const raw = readFileSync('data/poke.txt', 'utf-8')
const names = raw
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)

const trie = buildCharTrie(names)

writeFileSync('data/poke-trie.json', JSON.stringify(trie, null, 2))
