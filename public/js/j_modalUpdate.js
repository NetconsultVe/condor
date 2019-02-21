N("#btnSearchCed").click(function(){
    if(N("#txt_cedresponsable").val().trim() == ""){
        Notify("DEBE INGRESAR UNA CEDULA...", "danger");
    }else{
        if(N("#txt_cedresponsable").val().match(/^([0-9]{1,8})$/)){
            var id = $("#txt_cedresponsable").val();
            var route = 'getRegCdno/' + id;
            $.ajax({
                url: route,
                headers: {'X-CSRF-TOKEN': getToken()},
                type: 'get',
                dataType: 'json',
                success: function(res){
                    if(res.length !== 0){
                        $("#txt_nombreresponsable").val(res[0].NombreCdno);
                        $("#txt_teleppal").val(res[0].TelMovilPpal);
                        $("#txt_emailresp").val(res[0].BigDataCorreo);
                    }else{
                        Notify("EL CDNO DEBE ESTAR INSCRITO EN EL REGISTRO ELECTORAL PERMANENTE...", "warning");
                    }

                }
            });
        }else{
            Notify("EL FORMATO DE LA CEDULA NO ES EL CORRECTO...", "danger");
        }
    }
});

N(".btnAt").click(function(){
    if(N("#txt_emailresp").val().indexOf("@") == -1){
        if(N("#txt_emailresp").val() == ""){
            N("#txt_emailresp").val("correo@dominio.com")
        }else{
            N("#txt_emailresp").val(N("#txt_emailresp").val() + "@");
        }
    }
    
});

N("#btnUpdate").click(function(){
    if(checkInput(N("#txt_cedresponsable").val(), "DEBE INGRESAR LA CEDULA DEL RESPONSABLE.", "danger")){return};
    if(checkInput(N("#txt_nombreresponsable").val(), "DEBE ASIGNAR UN RESPONSABLE.", "danger")){return};
    if(checkInput(N("#txt_teleppal").val(), "DEBE INGRESAR UN NUMERO DE TELEFONO.", "danger")){return};
    if(checkInput(N("#txt_emailresp").val(), "DEBE INGRESAR UN CORREO ELECTRONICO.", "danger")){return};
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(N("#txt_emailresp").val()) == false){
        Notify("EL FORMATO DEL CORREO NO ES EL CORRECTO.", "danger");
        return;
    }
    
    Notify("PROCESANDO INFORMACION ESPERE POR FAVOR...", "info", 10000);
});

N("#btnPrueba").click(function(){
    CreateUser();
});

function CreateUser(){
    AddUserApp(
        '110101001',
        '1',
        '1',
        '4',
        '99',
        '99',
        '99',
        'pepito perez',
        '123456',
        'jonathanjimenez2201@gmail.com',
        '0',
        '0',
        '0',
        '/img/avatar01.png'
    )
}