let display = document.getElementById("screen");
let button= document.querySelectorAll(".J");
document.addEventListener("keydown",function(tap){
    if ("0123456789+-)(*.".includes(tap.key)){
        display.textContent+=tap.key;
    }
    else if(tap.key=="Backspace"){
        display.textContent=display.textContent.slice(0,-1);
    }
    else if(tap.key=="Enter"){
        try{
            let result= eval(display.textContent);
            if(Number.isNaN(result)){
                display.textContent="Error";
            }
            else{
                display.textContent=result;
            }
        }
        catch{
            display.textContent="Error";
        }
    }
    else if(tap.key=="%"){
        display.textContent=Number(display.textContent/100);
    }
});
button.forEach(function(btn){
    btn.addEventListener("click",function(){
        if (btn.textContent=="C"){
            display.textContent="";
        }
        else if(btn.textContent=="Back"){
            display.textContent=display.textContent.slice(0,-1);
        }
        else if (btn.textContent=="="){
            try{
                let result =eval(display.textContent);
                 display.textContent= result;
                 if(Number.isNaN(result)){
                    display.textContent="Error";
                 }
                 else{
                    display.textContent=result;
                 }
            }
            catch{
                display.textContent="Error";
            }
        }
        else if (btn.textContent=="()"){
            if (display.textContent.edsWith("(")){
            display.textContent+=")";
            }
            else{
                display.textContent+="(";
            }
        }
        else if (btn.textContent=="%"){
            display.textContent+="/100";
        }
        else{
            display.textContent+=btn.textContent;
        }
})});
