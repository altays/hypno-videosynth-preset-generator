const fs = require('node:fs/promises');

async function readwrite (filePath, outputFileName) {
 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        await fs.writeFile(outputFileName,data);
    } 
    catch (error){
        console.error(error)
    }
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomFloat() {
    return Math.floor(Math.random());
}


export function getRandomBinaryFloat() {
    let vals = [0.0,1.0]
    return Math.floor(Math.random());
}

module.exports = { readwrite }
