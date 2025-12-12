import { readFile } from '../utils/readFile';

function main() {
    const lines = readFile('input.txt');
    let position = 50;
    let password = 0;
    for (const line of lines) {
        const rotation = +line.substring(1)
        if (line[0] === 'L') {
            position = (position - rotation) % 100
        } else if (line[0] === 'R') {
            position = (position + rotation) % 100
        }

        if (position === 0) {
            password++;
        }
    }
    console.log(password)
}

function main2() {
    const lines = readFile('input.txt');
    let position = 50;
    let password = 0;
    for (const line of lines) {
        const rotation = +line.substring(1)
        if (line[0] === 'L') {
            position = (position - rotation)
        } else if (line[0] === 'R') {
            position = (position + rotation)
        }
        console.log(`end position: ${position}`)
        if (position <=0 || position > 99) {
            password++;
            console.log("added")
        }

        position = position % 100
        if (position < 0) {
            position = position + 100
        }
    }
    console.log(password)
}

main()
main2()
