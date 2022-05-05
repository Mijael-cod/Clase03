function validar(){


    var n = document.getElementById("n").value;
    if(n>0 && n<20){
        document.querySelector("#d1").style.display="block";
    }else{
        document.querySelector("#d2").style.display="block";


    }
}