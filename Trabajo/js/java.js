function operation(){
    let op = document.getElementById("selector").value;
    let n1 = document.getElementById("n1").value;
    let n2= document.getElementById("n2").value;
    let res= document.getElementById("res");
    let r=0.0;
    switch(op){
        case '1': r=parseFloat(n1)+parseFloat(n2) ; break
        case '2': r = parseFloat(n1) - parseFloat(n2); break
        case '3': r = parseFloat(n1) * parseFloat(n2); break
        case '4': r = parseFloat(n1) / parseFloat(n2); break
    }
    
    res.value = r;
    }