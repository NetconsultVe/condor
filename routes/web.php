<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/comunidad','ComunidadesControler@index');
// Rutas Contenidad CNE
route::post('get_geomp','cne_controler@GetMunicipios');
Route::post('get_geopq/{id}','cne_controler@GetParroquias');

//Fin de la Rutas

//Ruras contenidas Psuv
Route::post('get_listUbch/{mp}/{pq}','psuv_controler@get_listUbch');
Route::get('get_SearchUbch/{id}','psuv_controler@get_SearchUbch');
Route::get('ubch','psuv_controler@index');
Route::get('dashboard','dashboardController@index');
Route::get('comunidad','comunidadController@index');
Route::get('manzana','manzanaController@index');
Route::post('addUser','AutoUsuarioController@addUser');

//Rutas RegCdno
Route::get('getRegCdno/{id}','RegCdnoControler@getRegCdno');

//Fin de las Rutas

