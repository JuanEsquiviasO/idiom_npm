# Idiom

Idiom invented in JS

## Description

- If the word ends with "ar", those two letters are removed
- If the word starts with Z, "pe" is added at the end
- If the translated word has 10 or more letters, it must split in half in half and join with a half dash
- Finally, if the original word is a palindrome, no previous rule counts and returns the same word but inserting uppercase and lowercase letters

## Installation

```
npm install idiom
```

## Use

```
import idiom from 'idiom'

idiom("Programar") // Program
```

## License

[MIT] (https://opensource.org/licenses/MIT)