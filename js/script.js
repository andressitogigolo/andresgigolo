$(document).ready(function(){

    $('#btnsend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p><img src="../public/js.galeria/img/roja-cruz.png">Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p><img src="../public/js.galeria/img/roja-cruz.png">Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p><img src="../public/js.galeria/img/roja-cruz.png">Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
         '<div class="mensaje_modal">'+
      '<h3>Herrores encontrados</h3>'+
        errores+
 '<span id="btnclose">cerrar</span>'+
     '</div>'+
     '</div>'

    $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnclose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
