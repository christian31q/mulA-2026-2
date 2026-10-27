  window.onload = () => {
            const colores = ["red", "yellow", "brown", "purple", "pink"];
            let index = 1;
            let circulo = document.getElementsByClassName("circulo");
            document.getElementById("arrow-right").addEventListener("click", function () {
                cambiarColor(circulo.item(0), index);
                validarFlecha(index);
                index++;
                index = Math.min(colores.length - 1, index);
            });

             document.getElementById("arrow-left").addEventListener("click", function () {
                cambiarColor(circulo.item(0), index);
                validarFlecha(index);
                index--;
                index = Math.max(0, index);
            });
        
        function cambiarColor(element, index) {  
            element.style.backgroundColor = colores[index];
            console.log(colores[index]);
            validarFlecha(index);
                
        }
        function validarFlecha(index) {
            const arrowLeft = document.getElementById("arrow-left");
            const arrowRight = document.getElementById("arrow-right");  
            index<= 0 ? arrowLeft.disabled = true : arrowLeft.disabled = false;
            index >= colores.length - 1 ? arrowRight.disabled = true : arrowRight.disabled = false;
        }   
    }