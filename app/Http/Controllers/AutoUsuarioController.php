<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use c\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Mail;
use App\Role;
use App\Mail\WelcomeUser;

class AutoUsuarioController extends Controller
{
    function addUser(Request $data){
        $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
        'confirmation_code' => $data['confirmation_code'] = str_random(25),
        'cod_ubch' => $data['cod_ubch'],
        'cod_mp' => $data['cod_mud'],
        'cod_pq' => $data['cod_pq'],
        'cod_comun' => $data['cod_comun'],
        'cod_manzana' => $data['cod_manzana'],
        'cod_familia' => $data['cod_familia'],
        'validaEmail' => $data['validaEmail'],
        'validaSms' => $data['validaSms'],
        'activo' => $data['activo'],
        'foto' => $data['foto'],
        ]);
         $user
             ->roles()
             ->attach(Role::where('name', 'user')->first());
             Mail::to('jonathanjimenez2201@gmail.com')->send(new WelcomeUser($data));
             return $data;
    }
    
    public function mail(){
        $User=['nombre'=>'goyo',
        'token' => '585845ccaad'];
        Mail::to('jonathanjimenez2201@gmail.com')->send(new WelcomeUser($User));
    }
}
