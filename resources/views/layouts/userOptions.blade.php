<ul class="dropdown-menu dropdown-user">
   <li><a href="/passwordreset" ><i class="fa fa-user fa-fw"></i>Reset Pasword</a></li>
   <li><a href="/emailreset"><i class="fa fa-envelope fa-fw"></i>Cambio de Email</a></li>
   <li class="divider"></li>
   <li>
      <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-user fa-fw"></i>Cerrar Sesion</a>
      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
   </li>
</ul>