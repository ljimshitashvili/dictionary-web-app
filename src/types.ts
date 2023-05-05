export default interface Types {
  word: string;
  phonetic: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
    }>;
    synonyms: Array<string>;
  }>;
  phonetics: Array<{ audio: string }>;
  sourceUrls: Array<string>;
}
