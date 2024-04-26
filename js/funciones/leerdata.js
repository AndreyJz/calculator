const result = document.querySelector(".result")
const boton = document.querySelectorAll("a");

let numbers = [];
let operation = null;
let number = 0;

boton.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        if (result.textContent === "0"){
            result.textContent = "";
        }

        if (btn.id === "syntax"){
            if (btn.textContent === "Bin"){
                result.innerHTML = parseInt(result.textContent).toString(2).toUpperCase();
            } else if (btn.textContent === "Oct"){
                result.innerHTML = parseInt(result.textContent).toString(8).toUpperCase();
            } else if (btn.textContent === "Hex"){
                result.innerHTML = parseInt(result.textContent).toString(16).toUpperCase();
            } else if (btn.textContent === "Dec"){
                console.log("pepe") 
                result.innerHTML = parseInt(result.textContent, 2).toString(10).toUpperCase();
            }
        } else if (btn.textContent === "C"){
            numbers = []
            operation = null
            result.innerHTML = "0";
        } else if (btn.id === "op"){
            number = result.textContent;
            
            if (btn.textContent === "Sin"){
                const seno = Math.sin(number * Math.PI/180);
                result.innerHTML = seno.toFixed(2);
            } else if (btn.textContent === "Cos"){
                const coseno = Math.cos(number * Math.PI/180);
                result.innerHTML = coseno.toFixed(2);
            } else if (btn.textContent === "Tan"){
                const tan = Math.tan(number * Math.PI/180);
                result.innerHTML = tan.toFixed(2);
            } else if (btn.textContent === "xy" ){
                operation = "**";
            } else if (btn.textContent === "√"){
                const raiz = Math.sqrt(number);
                result.innerHTML = raiz;
            } else {
                numbers.push(parseFloat(number));
                result.innerHTML = "0";
                operation = btn.textContent;
            }
            
        } else {
            result.innerHTML += btn.textContent;
        } if (btn.textContent === "="){
            number = result.textContent;
            numbers.push(parseFloat(number));
            result.innerHTML = outputs(operation,numbers);
            numbers = [];
        }
        function outputs (operation,numbers){
            let expression = numbers.join(operation);
            let total = eval(expression);
            console.log(expression);
            return total;
        }
    })
})