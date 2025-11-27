function press(value){
    document.getElementById("display").value += value;
}

function calculate(){
    let expression = document.getElementById("display").value;
    try{
        let result = eval(expression);
        document.getElementById("display").value = result;
    }catch(err){
        alert("Invalid Expression");
    }
}

function clearDisplay(){
    document.getElementById("display").value = "";
}
