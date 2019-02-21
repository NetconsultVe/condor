$(document).ready(function () {
    g_CargarCombo('get_geomp', 'cmb-mp', 'NameMunicipio', 'CodMunicipio', 'get');
    g_listarGrid();
    $('.input-number').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g,'');
    });
});

$("#cmb-mp").change(function () {

    var idcmb = $("#cmb-mp").val()
    g_CargarCombo('get_geopq/' + idcmb, 'cmb-pq', 'NameParroauia', 'CodParroquia', 'get');
    g_listarGrid()
});

$("#cmb-pq").change(function () {

    var mp = $("#cmb-mp").val();
    var pq = $("#cmb-mp").val();
    //g_Listarubch(mp ,pq);
    g_listarUbch()
});


function g_listarUbch() {
    var token = $("#token").val();
    var rute = site + "get_listUbch/2/5";
    var table = $("#grid-ubch").DataTable({
        "responsive": "true",
        "destroy": "true",
        "ajax": {
            "url": rute,
            headers: { 'X-CSRF-TOKEN': token },
            dataType: 'JSON',
            "type": "get"
        },

        "columns": [
            { "data": "CodUBCH" },
            { "data": "NombreUBCH" },
            { "data": "CedulaCdno" },
            { "data": "NombreCdno" },
            { "data": "NombreCdno" },
            {
                sortable: false,
                "render": function (data, type, data, meta) {
                    var buttonID = "";
                    var MostarDetalle = "";
                    var callModificar = "";
                    var callEliminar = "";
                    var btn = '';
                    btn += '<button type="button" class="btn btn-info btn-flat btn_jj"><i class="fa fa-align-right" id = btn_'+ data.CodUBCH +'></i></button>';
                    return btn;
                }
            },


        ],
    });
}


function g_listarGrid() {
    var table = $("#grid-ubch").DataTable({
        "responsive": "true",
        "destroy": "true",
        "language": lenguaje_espanol
    });
    table
        .clear()
        .draw();
}



function g_MostrarUbch(cod_ubch) {
    var route = 'get_SearchUbch/' + cod_ubch;
    $.ajax({
        url: route,
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        type: 'get',
        dataType: 'json',
        success: function (res) {
            console.log(res[0].id_ubch);
            console.log(res[0].CodUBCH);
            console.log(res[0].NombreUBCH);
            console.log(res[0].DireccionUBCH);
            console.log(res[0].CedulaCdno);
            console.log(res[0].NombreCdno);
            console.log(res[0].TelMovilPpal);
            console.log(res[0].BigDataCorreo);

            $("#txt_codubch").val(res[0].CodUBCH);
            $("#txt_nombreubch").val(res[0].NombreUBCH);
            $("#txt_dirubch").val(res[0].DireccionUBCH);
            $("#txt_cedresponsable").val(res[0].CedulaCdno);
            $("#txt_nombreresponsable").val(res[0].NombreCdno);
            $("#txt_teleppal").val(res[0].TelMovilPpal);
            $("#txt_emailresp").val(res[0].BigDataCorreo);

        },
        error: function (msj) {
        }
    });
}

function MostrarCdno(){
    var id = $("#txt_cedresponsable").val();
    var route = 'getRegCdno/' + id;
    $.ajax({
        url: route,
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        type: 'get',
        dataType: 'json',
        success: function (res) {
            console.log(res[0].NombreCdno);
            console.log(res[0].TelMovilPpal);
            console.log(res[0].BigDataCorreo);
            $("#txt_nombreresponsable").val(res[0].NombreCdno);
            $("#txt_teleppal").val(res[0].TelMovilPpal);
            $("#txt_emailresp").val(res[0].BigDataCorreo);

        },
        error: function (msj) {
        }
    });





}







