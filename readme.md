# Prefix Trie Builder (文字単位トライ構造ジェネレータ)

A TypeScript utility to build a character-based prefix trie (dictionary) from an array of strings.

### Usage

```poke.txt
フシギダネ
フシギソウ
フシギバナ
```

```
npx ts-node index.ts data/poke.txt
```

## Output

```json
{
  "フ": {
    "シ": {
      "ギ": {
        "ダ": { "ネ": {} },
        "ソ": { "ウ": {} }
      }
    }
  }
}
```
