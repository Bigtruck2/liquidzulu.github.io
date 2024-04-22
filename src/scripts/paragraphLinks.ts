function getTopCommonWords(inputString: string, numWords: number = 10): string {
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
    }
    function seededRandom(seed:number) {
        const a = 1664525;
        const c = 1013904223;
        const m = 4294967296; // 2^32
        seed = (a * seed + c) % m;
        return seed / m;
    }
    function numToHash(seed:number,length:number){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        console.log(seededRandom(seed-i))
        const randomIndex = Math.floor(seededRandom(Math.abs(seed+i*seed))*1000);
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
    const paragraphElements = document.querySelectorAll('p');
    let paragraphs = [...paragraphElements]
    let blockquotes = document.querySelectorAll('blockquote');
    [...blockquotes].forEach((quoteElement)=>{
            console.log(quoteElement)
            const quote = quoteElement.querySelector('p');
            if(quote){
                paragraphs.splice(paragraphs.indexOf(quote),1)
            }
        });
    paragraphs.forEach((element)=> {
        if(element.innerText.length>250 && element.outerHTML[1]!='<blockquote>'){ 
            const id = numToHash(Math.abs(hasher(getTopCommonWords(element.innerText))),8);
            element.outerHTML = `<div class='paragraph-wrapper'><a class='section-paragraph-link' href=#${id}></a><p class='' id=${id}>${element.innerHTML}</p>`
        }
    });