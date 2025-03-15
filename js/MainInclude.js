document.addEventListener("DOMContentLoaded", async function(){
    //cargar el header
    fetch("../html/componentes/MainHeader.html")
        .then(Response => Response.text())
        .then(data =>{
            document.getElementById("header").innerHTML = data;
        });

        //cargar el footer
        fetch("../html/componentes/Footer.html")
        .then(Response => Response.text())
        .then(data =>{
            document.getElementById("footer").innerHTML = data;
        });
    
    
});
