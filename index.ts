import { buildCharTrie } from './utils/buildCharTrie'
import { readFileSync, writeFileSync } from 'fs'

const inputPath = process.argv[2]

if (!inputPath) {
  console.error('ts-node index.ts data/poke.txt)')
  process.exit(1)
}

const raw = readFileSync(inputPath, 'utf-8')
const words = raw
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
const trie = buildCharTrie(words)

writeFileSync('data/trie.json', JSON.stringify(trie, null, 2), 'utf-8')

console.log('data/trie.json created')
