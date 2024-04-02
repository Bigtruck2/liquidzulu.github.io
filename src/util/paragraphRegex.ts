

const e = (x:string) => {
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
    str: string,
): string => {
    try {
        let newStr = str;
        const matches = str.match(/^(?!\s*$)(?![0-9#<>\s-.]).{100,}(?=\n|$)/gm);
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            if (match != null) {
                newStr = newStr.replace(match, `<p id="${e(match)}"/> <a href='#${e(match)}'><svg height="30px" width="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#e5e7eb" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></a>` + match);
            }
        }
        return newStr;
    } catch (e) {
        return str;
    }
};
