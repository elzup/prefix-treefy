export type CharTrie = {
  [char: string]: CharTrie
}

export function buildCharTrie(words: string[]): CharTrie {
  const root: CharTrie = {}

  for (const word of words) {
    let node = root
    for (const char of [...word]) {
      if (!node[char]) node[char] = {}
      node = node[char]
    }
  }

  return root
}
