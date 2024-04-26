import { Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { InformacionComponent } from './portafolio/informacion/informacion/informacion.component';

export const routes: Routes = [
    { path: '', redirectTo: 'mifoto', pathMatch: 'full' }, // Ruta raíz que redirige a "mifoto"
    { path: 'mifoto', component: PortafolioComponent },
    { path: 'information', component: InformacionComponent }
    
];
