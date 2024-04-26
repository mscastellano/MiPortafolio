import { Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { InformacionComponent } from './portafolio/informacion/informacion/informacion.component';

export const routes: Routes = [
    {path:"mifoto", component:PortafolioComponent},
    {path:"information", component:InformacionComponent}
];
