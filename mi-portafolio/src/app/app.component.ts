import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MifotoComponent } from './portafolio/mifoto/mifoto/mifoto.component';
import { InformacionComponent } from './portafolio/informacion/informacion/informacion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-portafolio';
}
