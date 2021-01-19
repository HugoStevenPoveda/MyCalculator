var operadorA, operadorB, operador;
function init() {
     //variable

     class numeros{

        constructor( id ){
             this.nombre = document.getElementById(id); }
          
        evento(numero){
           this.nombre.onclick = function(e){resultado.textContent = resultado.textContent + numero;}
         }  
         
       }//fin clase numeros

       class operacion{

        constructor( id ){
            this.nombre = document.getElementById(id); }
        
        evento(nombre){
            this.nombre.onclick = function(e){ 
                operadorA = resultado.textContent;
                operador= nombre;
                limpiar();
             }

        }

   
         
       }//fin clase operacion

     var resultado = document.getElementById("resultado");
  // operaciones
  
     var suma = new operacion ("suma");
     suma.evento("suma");
     var resta = new operacion ("resta");
     resta.evento("resta");
     var multiplicacion = new operacion ("multiplicacion");
     multiplicacion.evento("multiplicacion");
     var division= new operacion ("division");
     division.evento("division");
     var modulo= new operacion ("modulo");
     modulo.evento("modulo");
     var potencia = new operacion ("potencia");
     potencia.evento("potencia");
     var raiz = new operacion ("raiz");
     raiz.evento("raiz");
     var mayor = new operacion ("mayor");
     mayor.evento("mayor");
     //numeros
     var uno =new numeros("uno");
    uno.evento("1");
    var uno =new numeros("dos");
    uno.evento("2");
    var uno =new numeros("tres");
    uno.evento("3");
    var uno =new numeros("cuatro");
    uno.evento("4");
    var uno =new numeros("cinco");
    uno.evento("5");
    var uno =new numeros("seis");
    uno.evento("6");
    var uno =new numeros("siete");
    uno.evento("7");
    var uno =new numeros("ocho");
    uno.evento("8");
    var uno =new numeros("nueve");
    uno.evento("9");
    var uno =new numeros("dies");
    uno.evento("10");
    var uno =new numeros("once");
    uno.evento("11");
    var uno =new numeros("doce");
    uno.evento("12");
    var uno =new numeros("trece");
    uno.evento("13");
    var uno =new numeros("cero");
    uno.evento("0");

    var reset = document.getElementById("reset");
    var igual = document.getElementById("igual");
    
}
    reset.onclick = function(e){ 
        resetear(); }
   
    

     igual.onclick = function(e){ 
     operadorB = resultado.textContent;
     limpiar();
     resolver();

     }
    


    function limpiar(){
        resultado.textContent = "  ";

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


    
