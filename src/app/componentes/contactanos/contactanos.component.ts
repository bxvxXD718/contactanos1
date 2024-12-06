import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicosEmpresaService } from '../../servicios/tecnicos_empresa/tecnicos-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  solicitudes_recibidas:any;
  
  constructor(private formBuild: FormBuilder, private solicitudFormularioSrv: SolicitudFormularioService, private obtenereProfesionalesSrv: TecnicosEmpresaService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  enviarDatos(){
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response:any) => {
        
        this.datos_formulario = response.solicitud_formulario
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },error => {
        console.log(error);
      }
    )   
  }
  ngOnInit(){
    //console.log("Hola");
    //console.log(this.formularioForm);
    this.obtenerTodosTecnicos();
  }

  obtenerTodosTecnicos(){
    this.obtenereProfesionalesSrv.obtenerTecnicos().subscribe(
      (response:any) => {        
        this.solicitudes_recibidas = response.profesionales;          
        console.log(this.solicitudes_recibidas);
      }, error => {
        console.log(error);
      }
    )
  }
}
