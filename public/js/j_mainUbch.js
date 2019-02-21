$("#grid-ubch").on("click", "#btn_oper", function(){
    var fila = $(this).closest('tr').index();
    var idUbch = $('#grid-ubch tbody').find('tr').eq(fila).find('td').eq(0).text();
    var route = 'get_SearchUbch/' + idUbch;
    $.ajax({
        url: route,
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        type: "get",
        dataType: "json",
    })
    .done(function(res){
        $("#txt_codubch").val(res[0].CodUBCH);
        $("#txt_nombreubch").val(res[0].NombreUBCH);
        $("#txt_dirubch").val(res[0].DireccionUBCH);
        $("#txt_cedresponsable").val(res[0].CedulaCdno);
        $("#txt_nombreresponsable").val(res[0].NombreCdno);
        $("#txt_teleppal").val(res[0].TelMovilPpal);
        $("#txt_emailresp").val(res[0].BigDataCorreo);
        $('#myModal').modal('toggle');        
    })
});

$("#myModal").on("hidden.bs.modal", function(){
    $('.ctrUpdate').val(''); 
});