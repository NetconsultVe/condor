window.checkInput = function(a, b, c){
    var sw = false;
    if(a == ""){
        Notify(b, c);
        sw = true;
    }
    return sw;
};

window.getToken = function(){
    var resp = "";
    Object.values(document.getElementsByTagName("meta")).forEach(function(a){
        if(a.name == "csrf_token"){
            resp = a.content;
        }
    });
    return resp;
};

window.Notify = function(a, b, c){
    var time = c == undefined ? 500 : c;
	window.NotifyEvents = $.notify({message: a},{ z_index: 100000, delay: time, animate: {enter: 'animated fadeInDown', exit: 'animated fadeOutUp'}, type: b });
};

window.AddUserApp = function(
    cod_ubch,
    cod_mp,
    cod_pq,
    id_nivel,
    cod_comunidad,
    cod_manzana,
    cod_familia,
    userName,
    userPass,
    userEmail,
    validaEmail,
    validaSms,
    activo,
    foto
) {
    //inicio de la funcion
    var token = $("#token").val();

    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': getToken()
        }
      });


    $.ajax({
        url: 'addUser',
        data: {

            name: userName,
            email: userEmail,
            password: userPass,
            cod_ubch: cod_ubch,
            cod_mud: cod_mp,
            cod_pq: cod_pq,
            cod_comun: cod_comunidad,
            cod_manzana: cod_manzana,
            cod_familia: cod_familia,
            validaEmail: validaEmail,
            validaSms: validaSms,
            activo: activo,
            foto: foto
        },
        dataType: "json",
        method: "post",
        success: function (response) {
            console.log(response)
        },
        error: function (msg) {
            console.log(msg)
        }
    });
}
