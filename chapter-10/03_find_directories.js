const fs = require('fs');
const path = require('path');

function findDirectories(directory) {
    const entries = fs.readdirSync(directory);

    for (const entry of entries) {
        const fullPath = path.join(directory, entry);
        if (fs.statSync(fullPath).isDirectory() && entry !== '.' && entry !== '..') {
            console.log(fullPath);

            const innerEntries = fs.readdirSync(fullPath);
            for (const innerEntry of innerEntries) {
                const innerPath = path.join(fullPath, innerEntry);
                if (fs.statSync(innerPath).isDirectory() && innerEntry !== '.' && innerEntry !== '..') {
                    console.log(innerPath);
                }
            }
        }
    }
}

function findDirectoriesRecursive(directory) {
    const entries = fs.readdirSync(directory);

    for (const entry of entries) {
        const fullPath = path.join(directory, entry);
        if (fs.statSync(fullPath).isDirectory() && entry !== '.' && entry !== '..') {
            console.log(fullPath);
            findDirectoriesRecursive(fullPath);
        }
    }
}
