"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentPageOnKeyPress = documentPageOnKeyPress;
exports.richTextOnKeyPress = richTextOnKeyPress;
function documentPageOnKeyPress(event) {
    switch (event.key) {
        case "A":
            break;
        case "Enter":
            return "";
        default:
            break;
    }
}
function richTextOnKeyPress(event) { }
