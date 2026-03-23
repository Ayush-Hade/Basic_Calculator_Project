let btns = document.querySelectorAll("button");
let inp = document.querySelector("input");
let opr = document.querySelectorAll(".opr");
let str = "";
btns.forEach( (ele) => {
    ele.addEventListener("click", function(event) {
        console.dir(event);
        console.log(event.target.innerText);
        if(event.target.innerText == "=") {
            str = eval(str);
        }
        else if(event.target.innerText == "AC") {
            str = "";
        }
        else if(event.target.innerText == "DEL") {
            str = str.slice(0,-1);
        }
        console.log(event.target.className);
        // else if(event.target.className == "opr" )
        console.log(event.target.innerText);
        if(event.target.innerText != "=" && event.target.innerText != "AC" && event.target.innerText != "DEL") str = str + event.target.innerText;
        inp.value = str;
        console.log(str);
    })
})
