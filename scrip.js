var operadorA, operadorB, operador;
function init(){
    //variable
    var resultado = document.getElementById("resultado");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var modulo = document.getElementById("modulo");
    var potencia = document.getElementById("potencia");
    var raiz = document.getElementById("raiz");
    var mayor = document.getElementById("mayor");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var reset = document.getElementById("reset");
    var igual = document.getElementById("igual");
    //eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    uno.onclick = function(e){resultado.textContent = resultado.textContent + "1";}
    dos.onclick = function(e){ resultado.textContent = resultado.textContent + "2";}
    tres.onclick = function(e){resultado.textContent = resultado.textContent + "3";}
    cuatro.onclick = function(e){resultado.textContent = resultado.textContent + "4";}
    cinco.onclick = function(e){ resultado.textContent = resultado.textContent + "5";}
    seis.onclick = function(e){ resultado.textContent = resultado.textContent + "6"; }
    siete.onclick = function(e){ resultado.textContent = resultado.textContent + "7"; }
    ocho.onclick = function(e){ resultado.textContent = resultado.textContent + "8"; }
    nueve.onclick = function(e){ resultado.textContent = resultado.textContent + "9"; }
    cero.onclick = function(e){ resultado.textContent = resultado.textContent + "0"; }
    reset.onclick = function(e){ 
        resetear();

     }
   
    }
    suma.onclick = function(e){ 
        operadorA = resultado.textContent;
        operador="suma";
        limpiar();
     }

     resta.onclick = function(e){ 
        operadorA = resultado.textContent;
        operador="resta";
        limpiar();
     }
     multiplicacion.onclick = function(e){ 
        operadorA = resultado.textContent;
        operador="multiplicacion";
        limpiar();
     }
     potencia.onclick = function(e){ 
        operadorA = resultado.textContent;
        operador="potencia";
        limpiar();
     }
     division.onclick = function(e){ 
        operadorA = resultado.textContent;
        operador="division";
        limpiar();
     }
    modulo.onclick = function(e){ 
       operadorA = resultado.textContent;
       operador="modulo";
       limpiar();
    }
    raiz.onclick = function(e){ 
   operadorA = resultado.textContent;
   operador="raiz";
  
   }
   mayor.onclick = function(e){ 
    operadorA = resultado.textContent;
    operador="mayor";
    limpiar();
    }

   



     

     



     igual.onclick = function(e){ 
        operadorB = resultado.textContent;
       
        limpiar();
        resolver();

     }
    


    function limpiar(){
        resultado.textContent = " ";

    }  
    function resetear(){
        operadorA =0;
        operadorB=0;
        operador=" ";
        limpiar()
    } 
    function resolver(){
        var res=0;
        switch (operador) {
            case "suma":
                res = parseFloat(operadorA) + parseFloat(operadorB)
                
                break;

            case "resta":
                res = parseFloat(operadorA) -parseFloat(operadorB)
                
                break; 
            case "multiplicacion":
                res = parseFloat(operadorA) * parseFloat(operadorB)
                
                break;

            case "potencia":
                res = Math.pow(parseFloat(operadorA), parseFloat(operadorB));
               
                
                break;
            case "division":
                if (parseFloat(operadorB)!== 0) {
                    res = parseFloat(operadorA) /parseFloat(operadorB) ;
                } else  if (parseFloat(operadorB) == 0)  {
                    res="ERROOR";
                    
                }
               
                
                break;

            case "modulo":
                res = parseInt(operadorA)%parseInt(operadorB);
                
                
                break;
            case "mayor":
                if (parseFloat(operadorA)>parseFloat(operadorB)) {
                    res =  "el numero mayor es " + parseFloat(operadorA) ;
                    
                }else{

                    res =  "el numero mayor es "  + parseFloat(operadorB) ;
                }
               

                
                break;

            case "raiz":
            res = Math.sqrt(parseFloat(operadorA));
            
            
            break;
        
            default:
                alert("no se pudo");
                break;
        }
        resetear();
        resultado.textContent=res;
        




    }
    