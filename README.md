# Esker File Report

This is a Node.js script used to evaluate a given .txt file for common information such as line/word counts, count of character types, etc.

### Requirements
Running this script requires that you have a recent version of Node.js installed. It also requires that you install the readline javascript library, which can be done with the following command: npm install readline.

### Running the script
If you're using Node.js 13: You can simply run the command "node fileReport.mjs <path_of_file_to_evaluate>".

If you're using Node.js 12: You need to use the experimental-modules flag when running the command. The command for this version looks like the following: "node --experimental-modules fileReport.mjs <path_of_file_to_evaluate>".