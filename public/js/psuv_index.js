$(document).ready(function () {
    boxResize();
    g_CargarCombo('get_geomp', 'cmb-mp', 'NameMunicipio', 'CodMunicipio', 'post');
    g_listarGrid();
});

$("#cmb-mp").change(function () {
    var idcmb = $("#cmb-mp").val()
    g_CargarCombo('get_geopq/' + idcmb, 'cmb-pq', 'NameParroauia', 'CodParroquia', 'post');
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
        "language": lenguaje_espanol,
        "ajax": {
            "url": rute,
            headers: { 'X-CSRF-TOKEN': getToken() },
            dataType: 'JSON',
            "type": "post"
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
                    btn += '<div class="tdButton"><button type="button" class="btn btn-info btn-flat" id="btn_oper"><i class="fa fa-align-right" id = btn_'+ data.CodUBCH +'></i></button></div>';
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








