document.getElementById('dateInput').onchange = countAll;
// document.getElementById('row_time_start_pn').onchange = countAll;
// document.getElementById('row_time_finish_pn').onchange = countAll; 

document.getElementById('body2').onchange = countAll;
document.getElementById('count_btn').onclick = countAll;
document.getElementById('btn_Nikita').onmousemove = countAll;
document.getElementById('btn_Masha').onmousemove = countAll;

let mondayDate;
let sundayDate;
const daysOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let iterator = 0;

function countAll() {
    let result = '';
    let dateRange = getDateOfStartAndEndWeek();
    result = "////" + dateRange + "////";

    let salaryOfTheWeek = 0;
    let timeOfTheWeek = 0;

    //////////////////// ПОНЕДЕЛЬНИК
    let startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_pn').value);
    let finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_pn').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let pnSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        salaryOfTheWeek += pnSalary;

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_pn').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
        }

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_pn').value + ' - ';
        result += document.getElementById('row_time_finish_pn').value + ' (';
        result += dayWorkTime + ')';
    }
    iterator++;

    //////////////////// ВТОРНИК
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_vt').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_vt').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let vtSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        salaryOfTheWeek += vtSalary;

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_vt').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
        }

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_vt').value + ' - ';
        result += document.getElementById('row_time_finish_vt').value + ' (';
        result += dayWorkTime + ')';
    }
    iterator++;

    //////////////////// СРЕДА
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_sr').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_sr').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let srSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        salaryOfTheWeek += srSalary;

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_sr').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
        }

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_sr').value + ' - ';
        result += document.getElementById('row_time_finish_sr').value + ' (';
        result += dayWorkTime + ')';
    }
    iterator++;

    //////////////////// ЧЕТВЕРГ
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_cht').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_cht').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let chtSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        salaryOfTheWeek += chtSalary;

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_cht').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
        }

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_cht').value + ' - ';
        result += document.getElementById('row_time_finish_cht').value + ' (';
        result += dayWorkTime + ')';
    }
    iterator++;

    //////////////////// ПЯТНИЦА
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_pt').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_pt').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let ptSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        salaryOfTheWeek += ptSalary;

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_pt').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
        }

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_pt').value + ' - ';
        result += document.getElementById('row_time_finish_pt').value + ' (';
        result += dayWorkTime + ')';
    }
    iterator++;

    //////////////////// СУББОТА
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_sb').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_sb').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let sbSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        salaryOfTheWeek += sbSalary;

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_sb').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
        }

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_sb').value + ' - ';
        result += document.getElementById('row_time_finish_sb').value + ' (';
        result += dayWorkTime + ')';
    }
    iterator++;

    //////////////////// ВОСКРЕСЕНЬЕ
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_vs').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_vs').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let vsSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        salaryOfTheWeek += vsSalary;

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_vs').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
        }

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_vs').value + ' - ';
        result += document.getElementById('row_time_finish_vs').value + ' (';
        result += dayWorkTime + ')';
    }
    iterator++;

    if (timeOfTheWeek > 0) {
        result += '\n' + 'Итого ' + getNormalTimeFromMillies(timeOfTheWeek) + ' (~' + salaryOfTheWeek.toFixed(0) + 'грн)';
    }

    console.log(timeOfTheWeek);



    document.getElementById('itog_label').innerHTML = 'Итого: ' + getNormalTimeFromMillies(timeOfTheWeek) + ' = ' + salaryOfTheWeek.toFixed(2) + 'грн';

    iterator = 0;
    document.getElementById('fullText_output').innerHTML = result;
}

function getMilliesFromNormalTime(normalTime) {
    let hours = normalTime.charAt(0) + normalTime.charAt(1);
    let minutes = normalTime.charAt(3) + normalTime.charAt(4);

    let result = parseInt(hours) * 3600000;
    result += parseInt(minutes) * 60000;
    return result;
}

function getNormalTimeFromMillies(millies) {
    let hours = 0;
    while (millies >= 3600000) {
        hours++;
        millies -= 3600000;
    }

    let minutes = 0;
    while (millies >= 60000) {
        minutes++;
        millies -= 60000;
    }

    let result = '';

    if (hours < 10) {
        result += '0';
    }
    result += hours + ':';
    if (minutes < 10) {
        result += '0';
    }
    result += minutes;




    return result;
}

function getDateOfStartAndEndWeek() {
    let oldDate = document.getElementById('dateInput').value;

    let year = oldDate.charAt(0) + oldDate.charAt(1) + oldDate.charAt(2) + oldDate.charAt(3);
    let month = oldDate.charAt(5) + oldDate.charAt(6);
    let day = oldDate.charAt(8) + oldDate.charAt(9);

    mondayDate = new Date(month + '.' + day + '.' + year);

    let tmp = new Date(mondayDate.getFullYear(), mondayDate.getMonth(), mondayDate.getDate() + 6, 5, 5);

    sundayDate = new Date(tmp);

    ////////////////////////////
    let mn = '';
    if (mondayDate.getDate() < 10) {
        mn += '0';
    }
    mn += mondayDate.getDate() + ".";
    if ((mondayDate.getMonth() + 1) < 10) {
        mn += '0';
    }
    mn += (mondayDate.getMonth() + 1) + ".";
    mn += mondayDate.getFullYear();
    ////////////////////////////
    let vs = '';
    if (sundayDate.getDate() < 10) {
        vs += '0';
    }
    vs += sundayDate.getDate() + ".";
    if ((sundayDate.getMonth() + 1) < 10) {
        vs += '0';
    }
    vs += (sundayDate.getMonth() + 1) + ".";
    vs += sundayDate.getFullYear();
    ////////////////////////////
    return mn + ' - ' + vs;
}

function getSalary() {
    return document.getElementById('header_container_input').value * 0.77;
}

function getAllMoneyByDay(startMillies, finishMillies) {
    return getMoneyFromMillies(finishMillies - startMillies);
}

function getMoneyFromMillies(millies) {
    return millies / 3600000 * getSalary();
}

function getDateByIterator(iterator) {
    let tmp = new Date(mondayDate.getFullYear(), mondayDate.getMonth(), mondayDate.getDate() + iterator);

    let day = tmp.getDate();
    if (day < 10) {
        day = '0' + tmp.getDate();
    }

    let month = tmp.getMonth() + 1;
    if (month < 10) {
        month = '0' + (tmp.getMonth() + 1);
    }

    return day + '.' + month;
}