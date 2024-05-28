"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFive = void 0;
const addFive = (num) => {
    if (typeof num === 'number') {
        return num += 5;
    }
    else {
        return "Error: Not a Number";
    }
};
exports.addFive = addFive;
