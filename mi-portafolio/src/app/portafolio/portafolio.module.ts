import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MifotoComponent } from './mifoto/mifoto/mifoto.component'; 
import { InformacionComponent } from './informacion/informacion/informacion.component';

@NgModule({
  declarations: [
    MifotoComponent,   // Otros componentes del módulo PortafolioModule
  ],
  imports: [
    CommonModule,
    // Otros módulos necesarios
  ],
  exports: [
    MifotoComponent,
    
  ]
})
export class PortafolioModule { }