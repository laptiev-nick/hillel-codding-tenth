const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateKey(length, characters){
    let newStr = '';

    for(let i = 0; i < length; i++){
        newStr += characters[getRandomInt(characters.length)];
    }

    return newStr;
}

console.log(key);