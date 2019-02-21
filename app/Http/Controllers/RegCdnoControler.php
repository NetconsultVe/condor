<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class RegCdnoControler extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getRegCdno($id)
    {
        $sql_string = "SELECT
            lara_regcdno.NombreCdno,
            lara_regcdno.TelMovilPpal,
            lara_regcdno.BigDataCorreo
            FROM
            lara_regcdno
            WHERE
            lara_regcdno.CedulaCdno = " . $id;
            $resp = DB::select($sql_string);
            return response()->json($resp);
    }
}
