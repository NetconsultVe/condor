<?php

namespace App\Http\Controllers;

use DB;

use Illuminate\Http\Request;

class psuv_controler extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function get_listUbch($mp, $pq)
    {
        $sql_string = "SELECT DISTINCT
        psuv_ubch.id_ubch,
        psuv_ubch.CodUBCH,
        psuv_ubch.NombreUBCH,
        psuv_ubch.DireccionUBCH,
        lara_regcdno.CedulaCdno,
        lara_regcdno.NombreCdno,
        lara_regcdno.TelMovilPpal
        FROM
        psuv_ubch
        LEFT JOIN lara_regcdno ON psuv_ubch.CedulaJefeUbch = lara_regcdno.CedulaCdno
        WHERE
        psuv_ubch.CodMun = " . $mp . "  AND
        psuv_ubch.CodPaq = " . $pq;
        $resp = DB::select($sql_string);
        $arreglo["data"] = $resp;
        return response()->json($arreglo);
    }

    public function get_SearchUbch($id)
    {

        $sql_string = "SELECT DISTINCT
        psuv_ubch.id_ubch,
        psuv_ubch.CodUBCH,
        psuv_ubch.NombreUBCH,
        psuv_ubch.DireccionUBCH,
        lara_regcdno.CedulaCdno,
        lara_regcdno.NombreCdno,
        lara_regcdno.TelMovilPpal,
        lara_regcdno.BigDataCorreo
        FROM
        psuv_ubch
        LEFT JOIN lara_regcdno ON psuv_ubch.CedulaJefeUbch = lara_regcdno.CedulaCdno
        WHERE
        psuv_ubch.CodUBCH = " . $id;
        $resp = DB::select($sql_string);
        return response()->json($resp);


    }




    public function index()
    {
        return view('psuv.index');
    }

}
