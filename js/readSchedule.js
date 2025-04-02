document.getElementById('fullText_input').oninput = read;


function read() {
    let fullText = document.getElementById('fullText_input').value + "\n";
    let rows = getOnlyNeededRows(getRows(fullText));

    console.log(getJobTitle("Пн(31.03) > 11:30 - 20:00 (08:00) инициатор"));

    for (let i = 0; i < rows.length; i++) {
        let dayOfTheWeek = getDay(rows[i]);

        

        // switch (dayOfTheWeek) {
        //     case "пн": {
        //         document.getElementById("row_time_start_pn").value = getStartTime(rows[i]);
        //         document.getElementById("row_time_finish_pn").value = getFinishTime(rows[i]);
        //         document.getElementById("row_input_jobName_pn").value = getJobTitle(rows[i]);
                


        //         continue;
        //     }
        //     case "вт": {
        //         console.log("Это вторник");
        //         continue;
        //     }
        //     case "ср": {
        //         console.log("Это среда");
        //         continue;
        //     }
        //     case "чт": {
        //         console.log("Это четверг");
        //         continue;
        //     }
        //     case "пт": {
        //         console.log("Это пятница");
        //         continue;
        //     }
        //     case "сб": {
        //         console.log("Это суббота");
        //         continue;
        //     }
        //     case "вс": {
        //         console.log("Это воскресенье");
        //         continue;
        //     }
        // }
    }
}

function getRows(fullText) {
    const rows = [];
    let row = "";
    let iterator = 0;
    let letter = fullText[iterator];

    for (let i = 0; i < fullText.length; i++) {
        if (letter == '\n') {
            row = row.trim();
            rows.push(row);
            row = "";
        }

        row += letter;
        fullText[iterator] = ' ';

        iterator++;

        letter = fullText[iterator];
    }

    return rows;
}

function getOnlyNeededRows(rows = []) {
    const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    const newRows = [];

    rows.forEach((row) => {
        for (let i = 0; i < days.length; i++) {
            if (row.toLowerCase().indexOf(days[i]) != -1) {
                if (row.length > 32) {
                    newRows.push(row);
                }
            }
        }
    });

    return newRows;
}

function getStartTime(row) {
    return row.substring(12, 17);
}

function getFinishTime(row) {
    return row.substring(20, 25);
}

function getJobTitle(row) {
    let jobTitle = "";
    let iterator = row.length - 1;
    let counter = 0;
    console.log("Вызов функции");

    while (row[iterator] != " ") {
        iterator--;
        counter++;
    }
    iterator++;

    for (let i = 0; i < counter; i++) {
        jobTitle += row[iterator];
        iterator++;
    }

    
    console.log("Возвращаю - " + jobTitle);

    return jobTitle.trim();
}

function getDay(row) {
    return row.toLowerCase().substring(0, 2);
}