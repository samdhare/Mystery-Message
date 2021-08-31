//Array to list the characters
const characters = ['Miss Scarlet', 'Colonel Mustard', 'Mrs. White', 'Reverend Green', 'Mrs. Peacock', 'Professor Plum']

//Array to list the rooms
const rooms = ['Kitchen', 'Ballroom', 'Conservatory', 'Dining Room', 'Cellar', 'Billiard Room', 'Library', 'Lounge', 'Hall', 'Study']

//Array to list the weapons
const weapons = ['Revolver', 'Dagger', 'Lead Pipe', 'Rope', 'Candlestick', 'Wrench']

//Function selects a random element of an array
var generateRandomComponent = (arr) => {
    const randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
};

//Function uses generateRandomComponent to print a string of a Cluedo guess
var generateRandomGuess = () => {
    console.log(`It was ${generateRandomComponent(characters)} in the ${generateRandomComponent(rooms)} with the ${generateRandomComponent(weapons)}.`)
};

generateRandomGuess();