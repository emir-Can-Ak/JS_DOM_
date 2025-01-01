function type1(){

    var x = prompt("Select an operation: \nAddition\nSubtraction\nDivision\nMultiplication").toLowerCase();
    
    switch (x) {
        case "addition": return Addition();
        case "subtraction": return Subtraction();
        case "division": return Division();
        case "multiplication": return Multiplication();
        default: alert("Enter a valid option");
    }

    function Addition(){
        let x = parseInt(prompt("First Number: "));
        let y = parseInt(prompt("Second Number: "));
        alert(x + y);
    }
    function Subtraction(){
        let x = parseInt(prompt("First Number: "));
        let y = parseInt(prompt("Second Number: "));
        alert(x - y);

    }
    function Division(){
        let x = parseFloat(prompt("First Number: "));
        let y = parseFloat(prompt("Second Number: "));
        alert(x / y);

    }
    function Multiplication(){
        let x = parseInt(prompt("First Number: "));
        let y = parseInt(prompt("Second Number: "));
        alert(x * y);
    }

}

function type2(){

    let frst = document.querySelector("#frst");
    let scnd = document.querySelector("#scnd");
    let thrd = document.querySelector("#thrd");
    let frth = document.querySelector("#frth");

        frst.addEventListener("click", (event) =>{
        
        if (event.defaultPrevented) return;
        event.preventDefault();

        let x = parseInt(prompt("First Number: "));

        if(x === null || isNaN(Number(x))){
            alert("Process Canceled!");
        }
        else{
            let y = parseInt(prompt("Second Number: "));
            if(y === null || isNaN(Number(y))){
                alert("Process Canceled!");
            }
            else{
                alert(x + y);
            }
        }
        

        });
    

        
        scnd.addEventListener("click", (event) =>{
        
        if (event.defaultPrevented) return;
        event.preventDefault();

        let x = parseInt(prompt("First Number: "));

        if(x === null || isNaN(Number(x))){
            alert("Process Canceled!");
        }
        else{
            let y = parseInt(prompt("Second Number: "));
            if(y === null || isNaN(Number(y))){
                alert("Process Canceled!");
            }
            else{
                alert(x - y);
            }
        }
        

        }
    );

        thrd.addEventListener("click", (event) =>{
        
        if (event.defaultPrevented) return;
        event.preventDefault();

        let x = parseInt(prompt("First Number: "));

        if(x === null || isNaN(Number(x))){
            alert("Process Canceled!");
        }
        else{
            let y = parseInt(prompt("Second Number: "));
            if(y === null || isNaN(Number(y))){
                alert("Process Canceled!");
            }
            else{
                alert(parseFloat(x / y));
            }
        }
        

        });

        frth.addEventListener("click", (event) =>{
        
        if (event.defaultPrevented) return;
        event.preventDefault();

        let x = parseInt(prompt("First Number: "));

        if(x === null || isNaN(Number(x))){
            alert("Process Canceled!");
        }
        else{
            let y = parseInt(prompt("Second Number: "));
            if(y === null || isNaN(Number(y))){
                alert("Process Canceled!");
            }
            else{
                alert(x * y);
            }
        }
        });
}

function type3(){

    let frst = document.querySelector("#frst1");
    let scnd = document.querySelector("#scnd2");
    let thrd = document.querySelector("#thrd3");
    let frth = document.querySelector("#frth4");

    frst.addEventListener("click", function(){
        Addition();
    });
    scnd.addEventListener("click", function(){
        Subtraction();
    });
    thrd.addEventListener("click", function(){
        Division();
    });
    frth.addEventListener("click", function(){
        Multiplication();
    });

    function Addition(){
        let x = parseInt(prompt("First Number: "));
        let y = parseInt(prompt("Second Number: "));
        alert(x + y);
    }
    function Subtraction(){
        let x = parseInt(prompt("First Number: "));
        let y = parseInt(prompt("Second Number: "));
        alert(x - y);

    }
    function Division(){
        let x = parseFloat(prompt("First Number: "));
        let y = parseFloat(prompt("Second Number: "));
        alert(x / y);

    }
    function Multiplication(){
        let x = parseInt(prompt("First Number: "));
        let y = parseInt(prompt("Second Number: "));
        alert(x * y);
    }
}
type3();
type2();

function type4(){

    let x = Math.random();

    alert(parseInt(x * 100));

}