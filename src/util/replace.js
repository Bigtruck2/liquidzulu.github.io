// @ts-ignore
import { $ } from "bun";
//generate hash
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

//files to add paragraph links for
let files = "src/content/libertarian-ethics/childrens-rights.md src/content/libertarian-ethics/contract-theory.md src/content/libertarian-ethics/defensive-force-and-proportionality.md src/content/libertarian-ethics/homesteading-and-property-rights.md src/content/libertarian-ethics/law-subset.md src/content/libertarian-ethics/the-nap.md src/content/libertarian-ethics/the-nature-of-law.md"
files.split(" ")
// Use Response as stdin.
//number of paragraphs
const occurances = await $`grep -v '^[^[:blank:]]*(#|>|<)' ${files.split(" ")} | wc -l`.text();
//mark all paragraphs
await $`sed -i '/^[^-<>\#]/!b; s/^/<p id="0"\/>/' ${files.split(" ")}`
await $`sed -i '/^---$/,/^---$/ s/<p id="0"\/>//' ${files.split(" ")}`
//add hash as id and link to hash
for(let i=1; i<occurances;i++){
    let hash = generateRandomString(6)
    await $`sed -i '0,/<p id="0"\/>/ s/<p id="0"\/>/<p id="${hash}"\/><a href='#${hash}'>${i}.<\/a> /' ${files.split(" ")}`
}
