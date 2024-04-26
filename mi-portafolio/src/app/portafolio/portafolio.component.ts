import { Component } from '@angular/core';
import { PortafolioModule } from "./portafolio.module";
import { InformacionComponent } from "./informacion/informacion/informacion.component";
import { PasatiempoComponent } from './pasatiempo/pasatiempo/pasatiempo.component';

@Component({
    selector: 'app-portafolio',
    standalone: true,
    templateUrl: './portafolio.component.html',
    styleUrl: './portafolio.component.css',
    imports: [PortafolioModule, InformacionComponent,PasatiempoComponent]
})
export class PortafolioComponent {

}
