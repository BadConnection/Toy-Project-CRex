//Sum Of Sequence Function
function sumOfSequence(){
                   
    let sum = 0.0;
    //Retrieve First and Last Number values
    var firstNum=document.getElementById("fnum").value;
    var lastNum=document.getElementById("lnum").value;
    var step=document.getElementById("step").value;

    //Catch if not a number or if last is smaller or equal to first number
    if (firstNum!=null && lastNum!=null && firstNum<lastNum){
        //For loop for sequence
        let i = firstNum;
        while(i <= lastNum){
            sum = parseInt(sum)+parseInt(i);
            i = parseInt(i)+parseInt(step);
        }
    return sum;
    }
    else {
        return "Both Must Be A Number And First Number Must Be Smaller";
    }
}

//Reverse Word Function
function wordReverse() {

    var input = document.getElementById("revWord").value;
    var reverseWord = input.split("").reverse().join("");
   
    return reverseWord;
   
}

//Shows the Dialog Box for the form
function openBox(output, answ, func){
    //Output dialog variable
    var dialogue = document.getElementById(output);
    var answer = document.getElementById(answ);
    //Displays function return value
    answer.innerHTML = func;
    dialogue.show();

}
//Displays Sum Form on Submit
const sumForm = document.getElementById("sumForm");
//Submit Event Listener to open Dialog Box
sumForm.addEventListener("submit", (e) => {
    e.preventDefault();

    openBox("sumOut", "sum", sumOfSequence());
})

//Displays reverse form on submit
const reverseForm = document.getElementById("reverseForm");
//Submit Event Listener to open Dialog Box
reverseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    openBox("revOut", "rev", wordReverse());
})


document.querySelectorAll('#close').forEach(item => {
    item.addEventListener('click', event => {
    event.preventDefault();

    dialog = document.getElementById("sumOut");
    dialog2 = document.getElementById("revOut");

    dialog.close();
    dialog2.close();
    
    })
})