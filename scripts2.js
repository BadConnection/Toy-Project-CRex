//Name Function
function Name(){
    //Retrieve Name value
    var name = document.getElementById("fname").value;
    return name;
}

function openBox(output, answ, func){
    //Output dialog variable
    var dialogue = document.getElementById(output);
    var answer = document.getElementById(answ);
    //Displays function return value
    answer.innerHTML = func;
    dialogue.show();

}

const nameForm = document.getElementById("nameForm");

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    openBox("nameOut", "nameMsg", Name());
})

document.querySelectorAll('#close').forEach(item => {
    item.addEventListener('click', event => {
    event.preventDefault();

    dialog = document.getElementById("nameOut");

    dialog.close();
    
    })
})