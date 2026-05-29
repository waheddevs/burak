"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('EXECUTED!');
const moment_1 = __importDefault(require("moment"));
const currentDate = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss');
console.log(`Current date and time: ${currentDate}`);
const person = 'Burak';
const count = 43;
