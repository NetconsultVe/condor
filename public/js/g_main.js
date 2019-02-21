var site = '/condor/public/'

// FUNCION GENERICA DEL COMBO
function g_CargarCombo(
    laruta,
    eliddelcombo,
    NombreDelCampoIdEnLaTabla,
    NombreDelCampoTextEnLaTabla,
    elmetodo
) {

    var str_opcion =
        "<option value=”” disabled selected>Seleccione una Opción</option>";
    var el__texo = "";
    var el__id = "";
    var ejecuraCombo = "";
    $.ajax({
        url: site + laruta,
        headers: { "X-CSRF-TOKEN": $("#token").val() },
        type: elmetodo,
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                el__id = eval("data[i]." + NombreDelCampoTextEnLaTabla);
                el__texo = eval("data[i]." + NombreDelCampoIdEnLaTabla);
                str_opcion +=
                    '<option value ="' + el__id + '">' + el__texo + "</option>";
            }

            ejecuraCombo = '$("#' + eliddelcombo + '").empty()';
            //console.log(ejecuraCombo);
            eval(ejecuraCombo);
            ejecuraCombo = "$('#" + eliddelcombo + "').append(str_opcion)";
            //console.log(ejecuraCombo);
            eval(ejecuraCombo);
        }
    });
}
// FIN DE LA FUNCIÓN


var lenguaje_espanol = {
    "decimal": "",
    "emptyTable": "No hay datos disponibles en la tabla",
    "info": "Showing _START_ to _END_ of _TOTAL_ entries",
    "infoEmpty": "Mostrando 0 a 0 de 0 entradas",
    "infoFiltered": "(Filtrado de _MAX_ entradas totales)",
    "infoPostFix": "",
    "thousands": ",",
    "lengthMenu": "Mostrar _MENU_ entradas",
    "loadingRecords": "Cargando...",
    "processing": "Procesando...",
    "search": "Buscar:",
    "zeroRecords": "No se encontraron registros coincidentes",
    "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
    },
    "aria": {
        "sortAscending": ": Activar para ordenar la columna ascendente",
        "sortDescending": ": activate to sort column descending"
    }
};


