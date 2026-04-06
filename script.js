let input = document.querySelector(".screen input");
let buttons = document.getElementsByClassName("btn");


let str = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let previous_char = str[str.length - 1];
        console.log("", previous_char);

        if (e.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
            return;
        }
        else if (e.target.innerHTML == "AC") {
            str = "";
            input.value = str;
        }
        else if (e.target.innerHTML == "DEL") {
            str = str.substring(0, str.length - 1);
            input.value = str;
        }
        // else if ((str="")&& (e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "/" || e.target.innerHTML == "%" || e.target.innerHTML == "*")) {            
        //     return;
        // }
        else if ((previous_char == "+" || previous_char == "-" || previous_char == "/" || previous_char == "*" || previous_char == "%") && (e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "/" || e.target.innerHTML == "%" || e.target.innerHTML == "*")) {
            str = str.substring(0, str.length - 1) + e.target.innerHTML;
            input.value = str;
            return;
        }
        else {
            str += e.target.innerHTML;
            input.value = str;
        }
    });
});
