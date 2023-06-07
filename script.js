const number = document.querySelectorAll(".numbers");
const operand = document.querySelectorAll (".operand");

const C = document.querySelector (".C");
const X = document.querySelector (".X");

const equal = document.querySelector (".equal");

const prev = document.querySelector(".previus");
const curr = document.querySelector(".current");

const msg = document.getElementById ("message");


let a='',b='',operator=null;
let counter=0; 
let divWith0=0;

function add (a,b) {
    return parseInt(a)+parseInt(b);
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}



function operate (a,b,operator) {
    console.log("operator is "+ operator);
    console.log("a is "+a);
    console.log("b is "+b);
    switch (operator) {
        case '+': return add (a,b);           
            break;
        case '-': return subtract (a,b);
            break;
        case '×': return multiply (a,b);
            break;
        case '÷': return divide (a,b);
            break;
        default :
            console.log("wrong");
    }
}




function display (value,flag) {
    console.log("flag is "+flag);
    if (flag===0) {
        curr.innerHTML = value;
    }
    
    if (flag===1) {
        prev.innerHTML = value + operator;
    }
    
    if (flag===3) {
        curr.innerHTML = value;
        prev.innerHTML +=a + " = ";
    }
    
}

function handleNumber (value) {
    handleDivision0();
    const test = prev.innerHTML.toString().charAt(prev.innerHTML.length-1);
    
     let temp1=curr.innerHTML;
     let temp2 =prev.innerHTML.substr(0,prev.innerHTML.length-1);
    
    if ((test==="+" || test ==="-" || test ==="÷" || test ==="×") && (value ===".") && (temp1===temp2))  ////////HERE  

            return;
    
    if (a.toString().length<=9) {
        
        if  (curr.innerHTML!='' || value!='.') {
             if (!curr.innerHTML.includes(".") || value!='.') 
            {
                    a+=value;
                    display(a,0);               
                
            }
        }
                   
           } 
    
    
            
        }
            
 

function handleOperand (value) {
    let test = prev.innerHTML.includes("=");
    
    
    if (a!='' && b!='' && test!=true) {
        let res= operate(b,a,operator);
        res = res.toFixed(5);
        if (res==="Infinity" || res==="-Infinity") {
            divWith0++;
            msg.innerHTML = "You can't divide with 0";
            return;
        }
        display (res,3);
        a = res;
        
    }
    
    if (a!='' || b!='' && counter/2==0) {
        operator = value;
        b=a;
        a='';
        display(b,1);
    }
 
}

function handleDivision0 () {
    if (divWith0>=0){
        msg.innerHTML=" ";
        divWith0=0;
    }
}

number.forEach(item => {
    item.addEventListener ('click',function () {
        handleNumber(item.innerHTML);
        console.log ("a is "+a);
        console.log("b is "+b);
    })
})

operand.forEach (item => {
    item.addEventListener('click',function () {
        counter++;
        handleOperand(item.innerHTML);
    })
});

equal.addEventListener('click', function () {
    {
    let test = prev.innerHTML.includes("=");
    if (a!='' && b!='') {
        {
            if (!test) {
                let res= operate(b,a,operator);
                res = res.toFixed(5);              
                if (res==="Infinity" || res==="-Infinity") {
                divWith0++;
                msg.innerHTML = "You can't divide with 0";
                return;
        }
                display (res,3);
                a = res;
            }
        }
    }
}
});

C.addEventListener('click',function () {
    a='';
    b='';
    curr.innerHTML = '';
    prev.innerHTML ='';
})

X.addEventListener('click',function(){

        a= parseInt(a.toString().substring(0,a.toString().length-1));
        console.log("AFTER MATH A IS "+a);
        console.log("THE LENGTH OF A IS " + a.toString().length);
    
        if (isNaN(a)) {
            a = '';
        }

    display(a,0);

})

