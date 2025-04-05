document.getElementById('fullText_input').oninput = read;


function read() {
    clearAllInfo();

    let fullText = document.getElementById('fullText_input').value + "\n";
    let rows = getOnlyNeededRows(getRows(fullText));

    for (let i = 0; i < rows.length; i++) {
        let dayOfTheWeek = getDay(rows[i]);

        switch (dayOfTheWeek) {
            case "пн": {
                document.getElementById("row_time_start_pn").value = getStartTime(rows[i]);
                document.getElementById("row_time_finish_pn").value = getFinishTime(rows[i]);
                document.getElementById("row_input_jobName_pn").value = getJobTitleOnly(rows[i]);

                document.getElementById("choose_wrapper_top_checkbox_pn").checked = isBreak(rows[i]);
                document.getElementById("choose_wrapper_bottom_checkbox_pn").checked = isDoublePunch(rows[i]);

                continue;
            }
            case "вт": {
                document.getElementById("row_time_start_vt").value = getStartTime(rows[i]);
                document.getElementById("row_time_finish_vt").value = getFinishTime(rows[i]);
                document.getElementById("row_input_jobName_vt").value = getJobTitleOnly(rows[i]);

                document.getElementById("choose_wrapper_top_checkbox_vt").checked = isBreak(rows[i]);
                document.getElementById("choose_wrapper_bottom_checkbox_vt").checked = isDoublePunch(rows[i]);

                continue;
            }
            case "ср": {
                document.getElementById("row_time_start_sr").value = getStartTime(rows[i]);
                document.getElementById("row_time_finish_sr").value = getFinishTime(rows[i]);
                document.getElementById("row_input_jobName_sr").value = getJobTitleOnly(rows[i]);

                document.getElementById("choose_wrapper_top_checkbox_sr").checked = isBreak(rows[i]);
                document.getElementById("choose_wrapper_bottom_checkbox_sr").checked = isDoublePunch(rows[i]);

                continue;
            }
            case "чт": {
                document.getElementById("row_time_start_cht").value = getStartTime(rows[i]);
                document.getElementById("row_time_finish_cht").value = getFinishTime(rows[i]);
                document.getElementById("row_input_jobName_cht").value = getJobTitleOnly(rows[i]);

                document.getElementById("choose_wrapper_top_checkbox_cht").checked = isBreak(rows[i]);
                document.getElementById("choose_wrapper_bottom_checkbox_cht").checked = isDoublePunch(rows[i]);

                continue;
            }
            case "пт": {
                document.getElementById("row_time_start_pt").value = getStartTime(rows[i]);
                document.getElementById("row_time_finish_pt").value = getFinishTime(rows[i]);
                document.getElementById("row_input_jobName_pt").value = getJobTitleOnly(rows[i]);

                document.getElementById("choose_wrapper_top_checkbox_pt").checked = isBreak(rows[i]);
                document.getElementById("choose_wrapper_bottom_checkbox_pt").checked = isDoublePunch(rows[i]);

                continue;
            }
            case "сб": {
                document.getElementById("row_time_start_sb").value = getStartTime(rows[i]);
                document.getElementById("row_time_finish_sb").value = getFinishTime(rows[i]);
                document.getElementById("row_input_jobName_sb").value = getJobTitleOnly(rows[i]);

                document.getElementById("choose_wrapper_top_checkbox_sb").checked = isBreak(rows[i]);
                document.getElementById("choose_wrapper_bottom_checkbox_sb").checked = isDoublePunch(rows[i]);

                continue;
            }
            case "вс": {
                document.getElementById("row_time_start_vs").value = getStartTime(rows[i]);
                document.getElementById("row_time_finish_vs").value = getFinishTime(rows[i]);
                document.getElementById("row_input_jobName_vs").value = getJobTitleOnly(rows[i]);

                document.getElementById("choose_wrapper_top_checkbox_vs").checked = isBreak(rows[i]);
                document.getElementById("choose_wrapper_bottom_checkbox_vs").checked = isDoublePunch(rows[i]);

                continue;
            }
        }
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

function getJobTitleOnly(row) {
    let jobTitle = "";
    let iterator = row.length - 1;
    let counter = 0;

    while (row[iterator] != " ") {
        iterator--;
        counter++;
    }
    iterator++;

    for (let i = 0; i < counter; i++) {
        jobTitle += row[iterator];
        iterator++;
    }

    return jobTitle.trim();
}

function getDay(row) {
    return row.toLowerCase().substring(0, 2);
}

function isDoublePunch(row) {
    row = row.slice(0, getJobTitleOnly(row).length * -1);

    if (row.indexOf(' дп') == -1) {
        return false
    } else {
        return true;
    }
}

function isBreak(row) {
    row = row.slice(0, getJobTitleOnly(row).length * -1);

    if (row.indexOf(' б') == -1) {
        return false
    } else {
        return true;
    }
}

function clearAllInfo() {
    document.getElementById('row_time_start_pn').value = "00:00";
    document.getElementById('row_time_finish_pn').value = "00:00";
    document.getElementById('choose_wrapper_top_checkbox_pn').checked = false;
    document.getElementById('choose_wrapper_bottom_checkbox_pn').checked = false;
    document.getElementById('row_input_jobName_pn').value = '';

    document.getElementById('row_time_start_vt').value = "00:00";
    document.getElementById('row_time_finish_vt').value = "00:00";
    document.getElementById('choose_wrapper_top_checkbox_vt').checked = false;
    document.getElementById('choose_wrapper_bottom_checkbox_vt').checked = false;
    document.getElementById('row_input_jobName_vt').value = '';

    document.getElementById('row_time_start_sr').value = "00:00";
    document.getElementById('row_time_finish_sr').value = "00:00";
    document.getElementById('choose_wrapper_top_checkbox_sr').checked = false;
    document.getElementById('choose_wrapper_bottom_checkbox_sr').checked = false;
    document.getElementById('row_input_jobName_sr').value = '';

    document.getElementById('row_time_start_cht').value = "00:00";
    document.getElementById('row_time_finish_cht').value = "00:00";
    document.getElementById('choose_wrapper_top_checkbox_cht').checked = false;
    document.getElementById('choose_wrapper_bottom_checkbox_cht').checked = false;
    document.getElementById('row_input_jobName_cht').value = '';

    document.getElementById('row_time_start_pt').value = "00:00";
    document.getElementById('row_time_finish_pt').value = "00:00";
    document.getElementById('choose_wrapper_top_checkbox_pt').checked = false;
    document.getElementById('choose_wrapper_bottom_checkbox_pt').checked = false;
    document.getElementById('row_input_jobName_pt').value = '';

    document.getElementById('row_time_start_sb').value = "00:00";
    document.getElementById('row_time_finish_sb').value = "00:00";
    document.getElementById('choose_wrapper_top_checkbox_sb').checked = false;
    document.getElementById('choose_wrapper_bottom_checkbox_sb').checked = false;
    document.getElementById('row_input_jobName_sb').value = '';

    document.getElementById('row_time_start_vs').value = "00:00";
    document.getElementById('row_time_finish_vs').value = "00:00";
    document.getElementById('choose_wrapper_top_checkbox_vs').checked = false;
    document.getElementById('choose_wrapper_bottom_checkbox_vs').checked = false;
    document.getElementById('row_input_jobName_vs').value = '';
}