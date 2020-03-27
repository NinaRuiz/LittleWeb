//Variables
const inpt = document.getElementById('text-input');
const number = document.getElementsByClassName('number');
const action = document.getElementsByClassName('action');
const equal = document.getElementById('equal');
const erase = document.getElementById('erase');
const save = document.getElementById('save');
const use = document.getElementById('use');
let saver;

//Number buttons
for (let numb of number) {
    numb.addEventListener('click', function () {
        this.innerHTML;
        inpt.value = "" + inpt.value + this.innerHTML;
    });
}

//Action buttons
for (let act of action) {
    act.addEventListener('click', function () {
        this.innerHTML;
        inpt.value = "" + inpt.value + this.innerHTML;
    });
}

//Equal button
equal.addEventListener('click', function () {
    if (inpt.value.includes('/0')){
        alert("¡Math Error!");
        inpt.value = "";
    }else{
        inpt.value = eval(inpt.value);
    }
});

//Erase button
erase.addEventListener('click', function () {
    inpt.value = "";
});

//Save button
save.addEventListener('click', function () {
    saver = inpt.value;
    inpt.value = "";
});

//Use button
use.addEventListener('click', function () {
    inpt.value = "" + inpt.value + saver;
});
