const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    let arr = [];
    for (let j = 0; j < expr.length; j += 10) {
      arr.push(expr.slice(j, j + 10));
    };
    let x = arr.join(",");
    for (let i = 0; i < x.length; ) {
      if (x[i] === "0") {
        i++;
      } else if (x[i] === "1" && x[i + 1] === "0") {
        i += 2;
        result += ".";
      } else if (x[i] === "1" && x[i + 1] === "1") {
        i += 2;
        result += "-";
      } else if (x[i] === ",") {
        i++;
        result += ",";
      } else if (x[i] === "*") {
        i += 10;
        result += " ";
      }
    }
    let resultFinish = result.split(",").map((item) => {
      if (item === " ") {
        item = " ";
        return item;
      }
      for (let key in MORSE_TABLE) {
        if (key === item) {
          item = MORSE_TABLE[key];
          return item;
        }
      }
    });
    return resultFinish.join(""); // write your solution here
}

module.exports = {
    decode
}