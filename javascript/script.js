// creamos la funcion
function validarFormulario(){

    //declaracion de variables 
    var nombre=$('#nombre').val();
        correo=$('#correo').val();
        asunto=$('#asunto').val();
        mensaje=$('#mensaje').val();

    //validamos el campo nombre
    if(nombre=="" || nombre==null){

        cambiarColor("nombre");
        //mostramos el msg de alert
        mostrarAlerta("Campo obligatorio");
        return false;
    }

    
}

// Creamos una funcion para cambiar de color a su bordes delos input

function cambiarColor(){
    $('#' + dato).css({
        border: "1px solid #dd5144"
    })
}

// funcion para mostrar la alerta

function mostrarAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>')
}