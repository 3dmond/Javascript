function calc(){
    var x = parseInt(document.querySelector("#digit_x_input").value);
    var y = parseInt(document.querySelector("#digit_y_input").value);
    var sign = document.querySelector("#select").value;
    var calculate;
    
    if (sign=="+"){
        calculate = x +y;
    }else if (sign == "-"){
        calculate = x-y;
    }else if (sign == "*"){
        calculate = x*y;
    }else if (sign == "/"){
        calculate = x/y;
    }
    
document.querySelector("#calculate_text").textContent =  calculate;   
 return false;
}
