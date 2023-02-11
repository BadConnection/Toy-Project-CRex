
//Sum Of Sequence Function
function sumOfSequence(){
                   
    let sum = 0.0;
    //Retrieve First and Last Number values
    var firstNum=document.getElementById("fnum").value;
    var lastNum=document.getElementById("lnum").value;

    //Catch if not a number or if last is smaller or equal to first number
    if (firstNum!=null && lastNum!=null && firstNum<lastNum){
        //For loop for sequence
        for(let i = firstNum; i <= lastNum; i++){
            sum = parseInt(sum)+parseInt(i);
        }
    return sum;
    }
    else
        return "Both Must Be A Number And First Number Must Be Smaller";
}

//Output dialog variable
const dialog = document.getElementById("sumOut");
//Open Dialog Box with Answer
function openSum(){
    const answer = document.getElementById("sum");
    answer.innerHTML = sumOfSequence();
    dialog.show();
}
//Form Variable
const sumForm = document.getElementById("sumOf");
//Submit Event Listener to open Dialog Box
sumForm.addEventListener("submit", (e) => {
    e.preventDefault();

    openSum();
})
//Close button variable
const close = document.getElementById("close");
//Close Event Listener to close Dialog Box
close.addEventListener("click", (e) =>{
    e.preventDefault();
    dialog.close();
    
})