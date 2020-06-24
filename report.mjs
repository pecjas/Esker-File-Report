export class ReportInfo {
    constructor() {
        this.lines = 0;
        this.spaces = 0;

        this.words = 0;
        this.wordsOfLength = new Map();

        this.totalCharacters = 0;
        this.alphaCharacters = 0;
        this.numericCharacters = 0;
    }

    updateLengthOfWord(word) {
        var length = word.length;

        if (this.wordsOfLength.has(length)) {
            this.wordsOfLength.set(length, this.wordsOfLength.get(length) + 1);
        } else {
            this.wordsOfLength.set(length, 1);
        }
    }

    getNonAlphaNumericCharacters() {
        return this.totalCharacters - (this.alphaCharacters + this.numericCharacters);
    }

    printReport() {
        console.log('Number of lines: ' + this.lines);
        console.log('Number of spaces: ' + this.spaces);
        console.log('Number of total characters: ' + this.totalCharacters);
        console.log('Number of numeric characters: ' + this.numericCharacters);
        console.log('Number of letters: ' + this.alphaCharacters);
        console.log('Number of non alpha-numeric characters: ' + this.getNonAlphaNumericCharacters());

        console.log('Number of words: ' + this.words);
        this.wordsOfLength.forEach(function (value, key) {
            console.log('Number of ' + key + ' letter words: ' + value);
        });
    }
}