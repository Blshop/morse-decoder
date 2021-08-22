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
    // write your solution here
    let letter = ''
    let phrase = ''
    for (let i=0; i<expr.length;i+=10){
        letter = expr.slice(i,i+10)
        if (letter[0]=='*'){
            phrase +=' '
        }
        else{
            let morse = ''
            for (let j=0; j<letter.length; j+=2){
                switch (letter.slice(j,j+2)){
                    case '00':
                        break
                    case '10':
                        morse +='.'
                        break
                    case '11':
                        morse +='-'
                        break
                }
            }
            phrase += MORSE_TABLE[morse]
        }
    }
    return phrase
}

module.exports = {
    decode
}