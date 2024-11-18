import { Component } from '@angular/core';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QrCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'qr-code';
}
