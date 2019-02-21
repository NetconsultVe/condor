@extends('layouts.adminlte')


@section('css')
    <!-- Bootstrap 3.3.7 -->
    <link href="{{ asset('adminLte/bower_components/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- DataTables -->
    <link href="{{ asset('adminLte/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}" rel="stylesheet">
    <!-- Custom Fonts -->
    <link rel='stylesheet' type='text/css' href="{{ asset('font-awesome/css/font-awesome.min.css') }}" />
@endsection

@section('content')


<div class="col-md-11">
<div class="box box-solid">
<div class="box-body">

<div >
<label>Seleccione un Municipio</label>
    <select id='cmb-mp' class="form-control"> </select>
</div>
<div>
<label>Seleccione una Parroquia</label>
    <select id='cmb-pq'class="form-control"> </select>
</div>

</div>
</div>
</div>

<div class="center-block">
<div class="col-md-11">

<div class="box box-solid">
<div class="box-body">

        <table id="grid-ubch" class="display" cellspacing="0">
           <thead>
              <tr>
                 <th >Cod. Ubch</th>
                 <th >Nombre Ubch</th>
                 <th >Cédula</th>
                 <th >Responsable</th>
                 <th >Teléfono</th>
                 <th align="center" >Operaciones</th>
              </tr>
           </thead>
           <tfoot>
              <tr>
                 <th >Cod. Ubch</th>
                 <th >Nombre Ubch</th>
                 <th >Cédula</th>
                 <th >Responsable</th>
                 <th >Teléfono</th>
                 <th  align="center" >Operaciones</th>
              </tr>
           </tfoot>
        </table>
</div>
</div>
</div>
</div>

<!---Aqui va el Modal--->


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
Launch demo modal
</button>

<button type="button" class="btn btn-primary"  onclick="g_MostrarUbch('110101001');">prueba</button>



<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header">
         <!--
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
        -->

 <i align="right">{{ $_ENV['APP_NAME'] }}</i>
         </div>
         <div class="modal-body">
            <div class="box-body">
               <div class="form-group">
                  <label>Cod. Ubch</label>
                  <input class="form-control input-sm" type="text" placeholder="" id='txt_codubch' disabled="">
               </div>
               <div class="form-group">
                  <label>Cod. Nombre Ubch</label>
                  <input class="form-control input-sm" type="text" placeholder="" id = 'txt_nombreubch'>
               </div>
               <div class="form-group">
                  <label>Dir. Ubch</label>
                  <textarea class="form-control" rows="3" placeholder="" id = 'txt_dirubch'></textarea>
               </div>
               <div class="input-group input-group-sm">
               <span class="input-group-addon"><i></i>V -</span>
                  <input type="text" class="form-control input-sm input-number" placeholder="Escriba la Cédula (12123123) y Presione Buscar..." id='txt_cedresponsable'>
                  <span class="input-group-btn">
                  <button type="button" class="btn btn-primary btn-flat" onclick="MostrarCdno();">...</button>
                  </span>
               </div>
               <div class="form-group">
                  <label>Nombre del Responsable</label>
                  <input class="form-control input-sm" type="text" placeholder="" id=txt_nombreresponsable disabled="">
               </div>
               <div class="form-group">
                  <label>Teléfono Responsable:</label>
                  <div class="input-group">
                     <div class="input-group-addon">
                        <i>+58</i>
                     </div>
                     <input type="text" class="form-control input-sm input-number" data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;" data-mask="" id="txt_teleppal">
                  </div>
               </div>

               <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                  <input type="email" class="form-control" placeholder="Email" id="txt_emailresp">



               </div>
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
         </div>
      </div>
   </div>
</div>


<!--Fin del Modal--->






@endsection



@section('script')
<!-- jQuery 3 -->
<script src="{{ asset('adminLte/bower_components/jquery/dist/jquery.min.js') }}" defer></script>
<!-- Bootstrap 3.3.7 -->
<script src="{{ asset('adminLte/bower_components/bootstrap/dist/js/bootstrap.min.js') }}" defer></script>
<!-- DataTables -->
<script src="{{ asset('adminLte/bower_components/datatables.net/js/jquery.dataTables.min.js') }}" defer></script>
<script src="{{ asset('adminLte/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js') }}" defer></script>
<!-- InputMask -->

<script src="{{ asset('adminLte/plugins/input-mask/jquery.inputmask.js') }}"></script>
<script src="{{ asset('adminLte/plugins/input-mask/jquery.inputmask.bundle.js') }}"></script>
<script src="{{ asset('adminLte/plugins/input-mask/jquery.inputmask.date.extensions.js') }}"></script>
<script src="{{ asset('adminLte/plugins/input-mask/jquery.inputmask.extensions.js') }}"></script>


<script src="{{ asset('js/form/psuv_index.js') }}" defer></script>

@endsection
