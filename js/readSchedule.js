document.getElementById('fullText_input').oninput = read;






let rows;

let temp = "";

function read() {
    let fullText = document.getElementById('fullText_input').value;
    let iterator = 0;
    let letter = fullText[iterator];

    while (letter != '\n') {
        temp += letter;
        fullText[iterator] = ' ';

        iterator++;

        letter = fullText[iterator];


    }

    console.log(temp);
    console.log("\n");
    console.log(fullText);
}