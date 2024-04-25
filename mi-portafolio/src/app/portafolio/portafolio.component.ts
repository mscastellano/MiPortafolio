import { Component } from '@angular/core';
import { PortafolioModule } from "./portafolio.module";

@Component({
    selector: 'app-portafolio',
    standalone: true,
    templateUrl: './portafolio.component.html',
    styleUrl: './portafolio.component.css',
    imports: [PortafolioModule]
})
export class PortafolioComponent {

}
