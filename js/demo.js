// var cal = document.getElementById("cal");

// cal.addEventListener("click", e => {
//     var num1 = parseFloat(document.getElementById("int1").value);
//     var num2 = parseFloat(document.getElementById("int2").value);
//     var sym = document.getElementById("sym").value;

//     // if(sym === "+"){
//     //     console.log(num1 + num2);
//     // }
//     // else if(sym === "-"){
//     //     console.log(num1 - num2);
//     // }
//     // else if(sym === "*"){
//     //     console.log(num1 * num2);
//     // }
//     // else if(sym === "/"){
//     //     console.log(num1 / num2);
//     // }
//     // else if(sym === "%"){
//     //     console.log(num1 % num2);
//     // }
//     // else{
//     //     console.log("Invalid Symbol");
//     // }


//     switch(sym){
//         case "+":{
//             console.log(num1 + num2);
//             break;
//         }
//         case "-":{
//             console.log(num1 - num2);
//             break;
//         }
//         case "*":{
//             console.log(num1 * num2);
//             break;
//         }
//         case "/":{
//             console.log(num1 / num2);
//             break;
//         }
//         case "%":{
//             console.log(num1 % num2);
//             break;
//         }
//         default :{
//             console.log("Invalid Symbol");
//         }
//     }

//     event.preventDefault();
// })

// const cur = document.getElementById("cursor");
// const cur2 = document.getElementById("cursor2");

// document.addEventListener("mousemove", e => {
//     cur.style.top=`${e.clientY}px`;
//     cur.style.left=`${e.clientX}px`;
// });
// cur.addEventListener("mousedown", function() {
//     cur2.style.animationPlayState = "paused";
// })

// calculator //
var numbercd1 = document.querySelectorAll(".numbercd");
var num = document.querySelectorAll(".num");
var symbol = document.getElementById("symbol");
var input1 = document.getElementById("input");
var clr = document.getElementById("clr");


var in1 = 0;
var in2 = 0;
var opp = "";
// let a=0;


function cal(event){
    input1.textContent += event.target.textContent;
}
clr.addEventListener("click",e=>{
    input1.textContent="";
    in1 = 0;
    in2 = 0;
    opp = "";
})


function sym(event){
    if(input1.textContent == ""){
        alert("Invalid");
    }
    else{
        // a++;
        // if(a > 1)
        // {
        //     if(opp === "+"){
        //         in1.innerHTML = (in1 + in2)
        //         console.log(in1 + in2);
        //     }
        //     else if(opp === "-"){
        //         in1.innerHTML = (in1 - in2)
        //         console.log(in1 - in2);
        //     }
        //     else if(opp === "*"){
        //         in1.innerHTML = (in1 * in2)
        //         console.log(in1 * in2);
        //     }
        //     else if(opp === "/"){
        //         in1.innerHTML = (in1 / in2)
        //         console.log(in1 / in2);
        //     }
        //     in1 = parseInt(input1.textContent);
        //     opp = event.target.textContent;
        //     input1.innerHTML="";
        //     console.log(in1 + opp);
        //     // console.log(in1);
        // }
        // else{
            in1 = parseInt(input1.textContent);
            opp = event.target.textContent;
            input1.innerHTML="";
            console.log(in1 + opp);
        // }
    }
}

function total(){
    in2 = parseInt(input1.textContent);

    if(opp === "+"){
        input1.innerHTML = (in1 + in2)
        console.log(in1 + in2);
    }
    else if(opp === "-"){
        input1.innerHTML = (in1 - in2)
        console.log(in1 - in2);
    }
    else if(opp === "*"){
        input1.innerHTML = (in1 * in2)
        console.log(in1 * in2);
    }
    else if(opp === "/"){
        input1.innerHTML = (in1 / in2)
        console.log(in1 / in2);
    }
    else{
        alert("Invalid");
    }
}