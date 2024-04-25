const result = document.querySelector(".result")
const boton = document.querySelectorAll("a");

let numbers = [];
let operation = null;

boton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let number = 0;
        if (btn.id === "syntax"){
            if (btn.textContent === "Bin"){
                
            } else if (btn.textContent === Oct){
                
            } else if (btn.textContent === Hex){
                
            } else if (btn.textContent === Dec){
                
            }
            result.innerHTML = btn.textContent;
        } else if (btn.textContent === "C"){
            numbers = []
            operation = null
            result.innerHTML = "0";
        } else if (btn.id === "op"){
            number = result.textContent;
            numbers.push(parseFloat(number));
            result.innerHTML = "0";
            
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
                operation = btn.textContent;
            }
            
        } else {
            result.innerHTML += btn.textContent;
        } if (btn.textContent === "="){
            number = result.textContent;
            numbers.push(parseFloat(number));
            result.innerHTML = outputs(operation,numbers);
        }
        function outputs (operation,numbers){
            let expression = numbers.join(operation);
            let total = eval(expression);
            return total;
        }
    })
})