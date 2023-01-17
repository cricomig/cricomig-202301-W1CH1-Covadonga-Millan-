let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
buttons.map(btn => {
    debugger
    btn.addEventListener("click", (event) => {
        switch(event.target.innerText){
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Syntax ERROR";
                }
                break;            
            
            case "CLEAR":
                display.innerText = "";
                break;

            case "⌫":
                display.innerText = display.innerText.slice(0, -1);
                break;
                
            default:
                display.innerText += event.target.innerText;
        }debugger
    });
});

