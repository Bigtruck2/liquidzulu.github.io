//had to remove this function because of paragaphs that shared the same top 10 words
/**function getTopCommonWords(inputString: string, numWords: number = 10): string {
  // Split the input string into words
  const words: string[] = inputString.split(/\s+/);

  // Create a map to count word occurrences
  const wordCountMap: Map<string, number> = new Map();
  for (const word of words) {
      const cleanedWord: string = word.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-alphabetic characters
      if (cleanedWord) {
          wordCountMap.set(cleanedWord, (wordCountMap.get(cleanedWord) || 0) + 1);
      }
  }

  // Sort word-count pairs by count (descending order)
  const sortedWords: [string, number][] = [...wordCountMap.entries()].sort((a, b) => b[1] - a[1]);

  // Get the top N words
  const topWords: string[] = sortedWords.slice(0, numWords).map(([word]) => word);

  return topWords.join('');
  }**/
  function seededRandom(seed:number) {
      const a = 1664525;
      const c = 1013904223;
      const m = 4294967296; // 2^32
      seed = (a * seed + c) % m;
      return seed / m;
  }
  function numToHash(seed:number,length:number){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(seededRandom(Math.abs(seed+i*seed))*1000000);
      //numToHash(hasher('hewhfrefiuhreu'))
      result += characters.charAt(randomIndex%characters.length);
  }
  return result;
  }
  const hasher = (x:string) => {
  var hash = 0,
      i, chr;
  if (x.length === 0) return hash;
  for (i = 0; i < x.length; i++) {
      chr = x.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
  }
  return hash;
  }
  export const paragraphRegex = (
    node: Element,
) => {
    if (node.children && node.tagName=='p') {
    let text = ''
    node.children.forEach((child) => {
        if (child.type === 'text') {
        text+=child.value
        }
    
    });
    node.properties.id = numToHash(hasher(text),8)
    }
    
};

