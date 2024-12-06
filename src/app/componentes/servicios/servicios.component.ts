import { Component } from '@angular/core';
import { ServiciosEmpresaService } from '../../servicios/empresa/servicios-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  solicitudes_formulario:any;

  constructor(private obtenerServiciosSrv:ServiciosEmpresaService){
  }

  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
    this.obtenerServiciosEmpresa();
  }

  obtenerServiciosEmpresa(){
    this.obtenerServiciosSrv.obtenerServicios().subscribe(
      (response:any) => {        
        this.solicitudes_formulario = response.servicios_empresa;          
        console.log(this.solicitudes_formulario);
      }, error => {
        console.log(error);
      }
    )
  }
}
