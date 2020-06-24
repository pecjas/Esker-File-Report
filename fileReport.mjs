import { ReportInfo } from './report.mjs';
import { createReadStream, existsSync, exists } from 'fs';
import { createInterface } from 'readline';

var REPORT_INFO = new ReportInfo();
var filePath = process.argv[2];

if (!existsSync(filePath)) {
    throw new Error("Invalid filepath provided.");
}

var fileStream = createReadStream(filePath);
var rl = createInterface({
    input: fileStream
})

rl.on('line', evaluateLine)
    .on('close', finalizeReport)

function evaluateLine(line) {
    REPORT_INFO.lines++;

    var words = line.split(" ")
    REPORT_INFO.spaces += words.length - 1

    words.forEach(evaluateWord)
}

function evaluateWord(word) {
    if (word == "") { //Occurs for consecutive spaces
        REPORT_INFO.spaces++;
        return;
    }

    REPORT_INFO.words++;
    REPORT_INFO.updateLengthOfWord(word);

    var chars = word.split("");
    chars.forEach(evaluateCharacter)
}

function evaluateCharacter(character) {
    REPORT_INFO.totalCharacters++;
    if (character.match(/^[a-z]/i)) {
        REPORT_INFO.alphaCharacters++;

    } else if (!isNaN(character)) {
        REPORT_INFO.numericCharacters++;
    }
}

function finalizeReport() {
    rl.close();
    fileStream.close();

    REPORT_INFO.printReport();
}