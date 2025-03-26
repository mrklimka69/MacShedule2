let salary = 136.88;
setSalary();

document.getElementById('btn_Nikita').onclick = () => { salary = 136.88; setSalary(); };
document.getElementById('btn_Masha').onclick = () => { salary = 164.66; setSalary(); };

function setSalary() {
    document.getElementById('header_container_input').value = salary;
    setClearSalary();
}


function setClearSalary() {
    let dirtySalary = document.getElementById('header_container_input').value;

    let clearSalary = dirtySalary * 0.77;

    document.getElementById('clear_salary').innerHTML = 'Чистыми - ' + clearSalary.toFixed(2);
}