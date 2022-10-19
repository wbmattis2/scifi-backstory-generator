//Random message generator describing a sci-fi character

const wordBank = {
    names: [ 'Bob', 'Jean', 'Sally', 'René', 'Alex' ],
    planets: [ 'Blorg', 'Arju', 'Krantz', 'Xanor', 'Zyz' ],
    adjectives: [ 'silly', 'skilled', 'formidable', 'error-prone', 'functional' ],
    occupations: [ 'bounty hunter', 'technician', 'space marine', 'wizard', 'space pirate']
};

const outputWordsArray = []
for (const wordArray in wordBank){
  const index = Math.floor(Math.random() * wordBank[wordArray].length);
  const randomWord = wordBank[wordArray][index];
  outputWordsArray.push(randomWord);
}

console.log(`It's ${outputWordsArray[0]} from the planet ${outputWordsArray[1]}! The most ${outputWordsArray[2]} ${outputWordsArray[3]} in the galaxy!`);