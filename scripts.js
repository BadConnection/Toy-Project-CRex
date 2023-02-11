

function sumOfSequence(){
                   
    let sum = 0.0;
    var firstNum=document.getElementById("fnum").value;
    var lastNum=document.getElementById("lnum").value;
    if (firstNum!=null && lastNum!=null && firstNum<lastNum){
   
        for(let i = firstNum; i <= lastNum; i++){
            sum = parseInt(sum)+parseInt(i);
        }
    return sum;
    }
    else
        return "Both Must Be A Number And First Number Must Be Smaller";
}

const dialog = document.getElementById("sumOut");

function openSum(){
    const answer = document.getElementById("sum");
    answer.innerHTML = sumOfSequence();
    dialog.show();
}

const sumForm = document.getElementById("sumOf");

sumForm.addEventListener("submit", (e) => {
    e.preventDefault();

    openSum();
})

const close = document.getElementById("close");

close.addEventListener("click", (e) =>{
    e.preventDefault();
    dialog.close();
    
})