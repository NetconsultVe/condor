@extends('layouts.adminlte')


@section('css')

@endsection

@section('content')
<div class="col-md-12">
      <div class="box">
         <div class="box-body">
            <div ><label>Seleccione un Municipio</label><select id='cmb-mp' class="form-control"></select></div>
            <div><label>Seleccione una Parroquia</label><select id='cmb-pq'class="form-control"><option value='' disabled selected>SELECCIONE UN OPCIÓN</option></select></div>
            <button type="button" class="btn btn-primary" id="btnPrueba">Prueba</button>
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
                 <th>Cod. Ubch</th>
                 <th>Nombre Ubch</th>
                 <th>Cédula</th>
                 <th>Responsable</th>
                 <th>Teléfono</th>
                 <th id="thOperaciones">Operaciones</th>
              </tr>
           </thead>
           <tfoot>
           <tr>
                 <th>Cod. Ubch</th>
                 <th>Nombre Ubch</th>
                 <th>Cédula</th>
                 <th>Responsable</th>
                 <th>Teléfono</th>
                 <th id="thOperaciones">Operaciones</th>
              </tr>
           </tfoot>
        </table>
</div>
</div>
</div>
</div>

<!---Aqui va el Modal--->





@include('psuv.modalUpdate')
@endsection

@section('script')
<script src="{{ asset('js/netInit.js') }}" defer></script>
@endsection
