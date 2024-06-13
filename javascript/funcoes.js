function somar(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = res;
}//fim do método somar

function subtrair(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = res;
}//fim do subtrair

function dividir(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o cálculo
    if(num2 <= 0){
       res = "Impossível dividir por zero!";
    }else{
        res = num1 / num2;
    }
    document.getElementById("resultado").innerHTML = res;
}//fim do dividir

function multiplicar(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = res;
}//fim do multiplicar

function tabuada(){
    var num1;
    var num2;

    //Coletar os números
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i=0;i<=10;i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;
}//fim do método tabuada

function potencia(){
    var num1;//Declaração de variáveis
    var num2;
    var res;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o cálculo
    res = Math.pow(num1,num2);//Calcula a potência
    document.getElementById("resultado").innerHTML = res;
}//fim do método

function raiz(){
    var num1;//Declaração de variáveis
    var num2;
    var resNum1;
    //Coletar os dados do formulário
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    //Realizar o cálculo
    resNum1 = Math.sqrt(num1);
    resNum2 = Math.sqrt(num2);

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;
}//fim do método


