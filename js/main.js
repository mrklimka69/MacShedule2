document.getElementById('dateInput').onchange = countAll;
// document.getElementById('row_time_start_pn').onchange = countAll;
// document.getElementById('row_time_finish_pn').onchange = countAll; 

document.getElementById('body2').onchange = countAll;
document.getElementById('count_btn').onclick = countAll;
document.getElementById('btn_Nikita').onmousemove = countAll;
document.getElementById('btn_Masha').onmousemove = countAll;

document.getElementById('row_input_jobName_pn').oninput = countAll;
document.getElementById('row_input_jobName_vt').oninput = countAll;
document.getElementById('row_input_jobName_sr').oninput = countAll;
document.getElementById('row_input_jobName_cht').oninput = countAll;
document.getElementById('row_input_jobName_pt').oninput = countAll;
document.getElementById('row_input_jobName_sb').oninput = countAll;
document.getElementById('row_input_jobName_vs').oninput = countAll;


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
        if (document.getElementById('choose_wrapper_bottom_checkbox_pn').checked) {
            pnSalary *= 2;
        }
        salaryOfTheWeek += pnSalary;

        let jobName = getJobTitle(document.getElementById('row_input_jobName_pn').value);

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_pn').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
            if (document.getElementById('choose_wrapper_bottom_checkbox_pn').checked) {
                salaryOfTheWeek -= getSalary() * 0.5;
            }
        }
        document.getElementById('row_allTime_label_pn').innerHTML = dayWorkTime;

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_pn').value + ' - ';
        result += document.getElementById('row_time_finish_pn').value + ' (';
        result += dayWorkTime;

        if (document.getElementById('choose_wrapper_top_checkbox_pn').checked) {
            result += ' б';
        }
        if (document.getElementById('choose_wrapper_bottom_checkbox_pn').checked) {
            result += ' дп';
        }

        result += ')'

        result += " " + jobName;
    }
    iterator++;

    //////////////////// ВТОРНИК
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_vt').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_vt').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let vtSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        if (document.getElementById('choose_wrapper_bottom_checkbox_vt').checked) {
            vtSalary *= 2;
        }
        salaryOfTheWeek += vtSalary;

        let jobName = getJobTitle(document.getElementById('row_input_jobName_vt').value);

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_vt').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
            if (document.getElementById('choose_wrapper_bottom_checkbox_vt').checked) {
                salaryOfTheWeek -= getSalary() * 0.5;
            }
        }
        document.getElementById('row_allTime_label_vt').innerHTML = dayWorkTime;

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_vt').value + ' - ';
        result += document.getElementById('row_time_finish_vt').value + ' (';
        result += dayWorkTime;

        if (document.getElementById('choose_wrapper_top_checkbox_vt').checked) {
            result += ' б';
        }
        if (document.getElementById('choose_wrapper_bottom_checkbox_vt').checked) {
            result += ' дп';
        }

        result += ')'
        result += " " + jobName;
    }
    iterator++;

    //////////////////// СРЕДА
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_sr').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_sr').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let srSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        if (document.getElementById('choose_wrapper_bottom_checkbox_sr').checked) {
            srSalary *= 2;
        }
        salaryOfTheWeek += srSalary;

        let jobName = getJobTitle(document.getElementById('row_input_jobName_sr').value);

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_sr').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
            if (document.getElementById('choose_wrapper_bottom_checkbox_sr').checked) {
                salaryOfTheWeek -= getSalary() * 0.5;
            }
        }
        document.getElementById('row_allTime_label_sr').innerHTML = dayWorkTime;

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_sr').value + ' - ';
        result += document.getElementById('row_time_finish_sr').value + ' (';
        result += dayWorkTime;

        if (document.getElementById('choose_wrapper_top_checkbox_sr').checked) {
            result += ' б';
        }
        if (document.getElementById('choose_wrapper_bottom_checkbox_sr').checked) {
            result += ' дп';
        }

        result += ')'
        result += " " + jobName;
    }
    iterator++;

    //////////////////// ЧЕТВЕРГ
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_cht').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_cht').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let chtSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        if (document.getElementById('choose_wrapper_bottom_checkbox_cht').checked) {
            chtSalary *= 2;
        }
        salaryOfTheWeek += chtSalary;

        let jobName = getJobTitle(document.getElementById('row_input_jobName_cht').value);

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_cht').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
            if (document.getElementById('choose_wrapper_bottom_checkbox_cht').checked) {
                salaryOfTheWeek -= getSalary() * 0.5;
            }
        }
        document.getElementById('row_allTime_label_cht').innerHTML = dayWorkTime;

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_cht').value + ' - ';
        result += document.getElementById('row_time_finish_cht').value + ' (';
        result += dayWorkTime;

        if (document.getElementById('choose_wrapper_top_checkbox_cht').checked) {
            result += ' б';
        }
        if (document.getElementById('choose_wrapper_bottom_checkbox_cht').checked) {
            result += ' дп';
        }

        result += ')'
        result += " " + jobName;
    }
    iterator++;

    //////////////////// ПЯТНИЦА
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_pt').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_pt').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let ptSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        if (document.getElementById('choose_wrapper_bottom_checkbox_pt').checked) {
            ptSalary *= 2;
        }
        salaryOfTheWeek += ptSalary;

        let jobName = getJobTitle(document.getElementById('row_input_jobName_pt').value);

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_pt').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
            if (document.getElementById('choose_wrapper_bottom_checkbox_pt').checked) {
                salaryOfTheWeek -= getSalary() * 0.5;
            }
        }
        document.getElementById('row_allTime_label_pt').innerHTML = dayWorkTime;

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_pt').value + ' - ';
        result += document.getElementById('row_time_finish_pt').value + ' (';
        result += dayWorkTime;

        if (document.getElementById('choose_wrapper_top_checkbox_pt').checked) {
            result += ' б';
        }
        if (document.getElementById('choose_wrapper_bottom_checkbox_pt').checked) {
            result += ' дп';
        }

        result += ')'
        result += " " + jobName;
    }
    iterator++;

    //////////////////// СУББОТА
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_sb').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_sb').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let sbSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        if (document.getElementById('choose_wrapper_bottom_checkbox_sb').checked) {
            sbSalary *= 2;
        }
        salaryOfTheWeek += sbSalary;

        let jobName = getJobTitle(document.getElementById('row_input_jobName_sb').value);

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_sb').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
            if (document.getElementById('choose_wrapper_bottom_checkbox_sb').checked) {
                salaryOfTheWeek -= getSalary() * 0.5;
            }
        }
        document.getElementById('row_allTime_label_sb').innerHTML = dayWorkTime;

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_sb').value + ' - ';
        result += document.getElementById('row_time_finish_sb').value + ' (';
        result += dayWorkTime;

        if (document.getElementById('choose_wrapper_top_checkbox_sb').checked) {
            result += ' б';
        }
        if (document.getElementById('choose_wrapper_bottom_checkbox_sb').checked) {
            result += ' дп';
        }

        result += ')'
        result += " " + jobName;
    }
    iterator++;

    //////////////////// ВОСКРЕСЕНЬЕ
    startTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_start_vs').value);
    finishTimeMillies = getMilliesFromNormalTime(document.getElementById('row_time_finish_vs').value);
    if (getAllMoneyByDay(startTimeMillies, finishTimeMillies) > 0) {
        let vsSalary = getAllMoneyByDay(startTimeMillies, finishTimeMillies);
        if (document.getElementById('choose_wrapper_bottom_checkbox_vs').checked) {
            vsSalary *= 2;
        }
        salaryOfTheWeek += vsSalary;

        let jobName = getJobTitle(document.getElementById('row_input_jobName_vs').value);

        let dayWorkTime;
        if (document.getElementById('choose_wrapper_top_checkbox_vs').checked) {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies);
            timeOfTheWeek += finishTimeMillies - startTimeMillies;
        } else {
            dayWorkTime = getNormalTimeFromMillies(finishTimeMillies - startTimeMillies - 1800000);
            timeOfTheWeek += finishTimeMillies - startTimeMillies - 1800000;
            salaryOfTheWeek -= getSalary() * 0.5;
            if (document.getElementById('choose_wrapper_bottom_checkbox_vs').checked) {
                salaryOfTheWeek -= getSalary() * 0.5;
            }
        }
        document.getElementById('row_allTime_label_vs').innerHTML = dayWorkTime;

        result += "\n" + daysOfTheWeek[iterator] + '(';
        result += getDateByIterator(iterator) + ') > ';
        result += document.getElementById('row_time_start_vs').value + ' - ';
        result += document.getElementById('row_time_finish_vs').value + ' (';
        result += dayWorkTime;

        if (document.getElementById('choose_wrapper_top_checkbox_vs').checked) {
            result += ' б';
        }
        if (document.getElementById('choose_wrapper_bottom_checkbox_vs').checked) {
            result += ' дп';
        }

        result += ')'
        result += " " + jobName;
    }
    iterator++;

    if (timeOfTheWeek > 0) {
        result += '\n' + 'Итого ' + getNormalTimeFromMillies(timeOfTheWeek) + ' (~' + salaryOfTheWeek.toFixed(0) + 'грн)';
    }



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

function getJobTitle(userTitle) {
    userTitle = userTitle.trim();

    const FRY = ["fry", "фри", "картошка"];
    const FRITYUR = ["kfr", "фритюр", "фритюрщик"];
    const GRILL = ["kgr", "гриль", "гриля", "грильщик"];
    const ZAPRAVSHIK = ["kas", "заправка", "заправщик", "грильщик"];
    const INITSIATOR = ["kip", "инициатор", "булки"];
    const FINISHER = ["kfi", "финиш", "финишер"];
    const ZAL = ["ll", "зал", "лл"];
    const OUT = ["out", "улица", "аут"];
    const BD = ["bd", "bdap", "бд", "бдап"];
    const KASSA = ["sot", "сот", "кассир", "касса", "каса"];
    const SBORSHIK = ["sru", "сру", "сборщик", "сборка"];
    const PREZENTER = ["spe", "спе", "презентёр", "презентер"];
    const EKSPEDITOR = ["sep", "сеп", "експедитор", "экспедитор"];
    const TABLE_SERVIS = ["sts", "стс", "тенты", "тент", "тейбл", "тэйбл", "разнос", "вынос", "тейбл сервис"];
    const DRIVE = ["dt", "дт", "драйв",];
    const DOSTAVKA = ["mds", "мдс", "доставка", "доставщик"];
    const ZAPASY = ["frs", "фрс", "запасы"];
    const ACTIVE_CASH = ["ach", "кэш", "эктив кэш", "ач", "active cash"];
    const KASYR = ["csh", "кеш", "кэш", "кассир"];
    const SERVIS = ["ser", "сервис", "сер"];

    /////////////////////// Картошка
    for (let i = 0; i < FRY.length; i++) {
        if (FRY[i] === userTitle.toLowerCase()) {
            return "фри";
        }
    }

    /////////////////////// Фритюр
    for (let i = 0; i < FRITYUR.length; i++) {
        if (FRITYUR[i] === userTitle.toLowerCase()) {
            return "фритюрщик";
        }
    }

    /////////////////////// Гриля
    for (let i = 0; i < GRILL.length; i++) {
        if (GRILL[i] === userTitle.toLowerCase()) {
            return "гриля";
        }
    }

    /////////////////////// Заправщик
    for (let i = 0; i < ZAPRAVSHIK.length; i++) {
        if (ZAPRAVSHIK[i] === userTitle.toLowerCase()) {
            return "заправщик";
        }
    }

    /////////////////////// Зал
    for (let i = 0; i < ZAL.length; i++) {
        if (ZAL[i] === userTitle.toLowerCase()) {
            return "зал";
        }
    }

    /////////////////////// Аут
    for (let i = 0; i < OUT.length; i++) {
        if (OUT[i] === userTitle.toLowerCase()) {
            return "аут";
        }
    }

    /////////////////////// Бд
    for (let i = 0; i < BD.length; i++) {
        if (BD[i] === userTitle.toLowerCase()) {
            return "бд";
        }
    }

    /////////////////////// Касса
    for (let i = 0; i < KASSA.length; i++) {
        if (KASSA[i] === userTitle.toLowerCase()) {
            return "касса";
        }
    }

    /////////////////////// Сборщик
    for (let i = 0; i < SBORSHIK.length; i++) {
        if (SBORSHIK[i] === userTitle.toLowerCase()) {
            return "сборщик";
        }
    }

    /////////////////////// Презентёр
    for (let i = 0; i < PREZENTER.length; i++) {
        if (PREZENTER[i] === userTitle.toLowerCase()) {
            return "презентёр";
        }
    }

    /////////////////////// Экспедитор
    for (let i = 0; i < EKSPEDITOR.length; i++) {
        if (EKSPEDITOR[i] === userTitle.toLowerCase()) {
            return "экспедитор";
        }
    }

    /////////////////////// Тейбл сервис
    for (let i = 0; i < TABLE_SERVIS.length; i++) {
        if (TABLE_SERVIS[i] === userTitle.toLowerCase()) {
            return "тейбл сервис";
        }
    }

    /////////////////////// Инициатор
    for (let i = 0; i < INITSIATOR.length; i++) {
        if (INITSIATOR[i] === userTitle.toLowerCase()) {
            return "инициатор";
        }
    }

    /////////////////////// Финишер
    for (let i = 0; i < FINISHER.length; i++) {
        if (FINISHER[i] === userTitle.toLowerCase()) {
            return "финишер";
        }
    }

    /////////////////////// Драйв
    for (let i = 0; i < DRIVE.length; i++) {
        if (DRIVE[i] === userTitle.toLowerCase()) {
            return "драйв";
        }
    }

    /////////////////////// Доставка
    for (let i = 0; i < DOSTAVKA.length; i++) {
        if (DOSTAVKA[i] === userTitle.toLowerCase()) {
            return "доставка";
        }
    }

    /////////////////////// Запасы
    for (let i = 0; i < ZAPASY.length; i++) {
        if (ZAPASY[i] === userTitle.toLowerCase()) {
            return "запасы";
        }
    }

    /////////////////////// Active cash
    for (let i = 0; i < ACTIVE_CASH.length; i++) {
        if (ACTIVE_CASH[i] === userTitle.toLowerCase()) {
            return "active cash";
        }
    }

    /////////////////////// Кассир
    for (let i = 0; i < KASYR.length; i++) {
        if (KASYR[i] === userTitle.toLowerCase()) {
            return "csh";
        }
    }

    /////////////////////// Сервис
    for (let i = 0; i < SERVIS.length; i++) {
        if (SERVIS[i] === userTitle.toLowerCase()) {
            return "сервис";
        }
    }

    return "";
}
