export default interface Types {
  word: string;
  phonetic: string;
  meanings: Array<{
    partOfSpeech: string;
  }>;
  phonetics: Array<{ audio: string }>;
}
