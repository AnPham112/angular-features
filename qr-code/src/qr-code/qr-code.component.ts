import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css',
})
export class QrCodeComponent implements OnInit {
  @ViewChild('canvasRef', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  width = 250;
  qrGenerate = 'https://maps.app.goo.gl/bXxvRFyyd4RHQw8t9'; // Link QR Code

  constructor() {
    // this.generateQRCodeWithLogo();
  }
  ngOnInit(): void {
    this.generateQRCodeWithLogo();
  }

  async generateQRCodeWithLogo() {
    const canvas = this.canvasRef.nativeElement!;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, this.width, this.width);

    const virtualCanvas = document.createElement('canvas');

    await QRCode.toCanvas(virtualCanvas, this.qrGenerate, {
      width: this.width,
      margin: 1.5,
      errorCorrectionLevel: 'Q',
    });
    // Draw the QR Code on the actual canvas
    ctx.drawImage(virtualCanvas, 0, 0, this.width, this.width);

    // Draw white background for the logo
    const logoContainer = 30;
    const x = (this.width - logoContainer) / 2;
    const y = (this.width - logoContainer) / 2;
    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y, logoContainer, logoContainer);

    // Load and draw the logo
    const logo = new Image();
    logo.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMkoe8L9ml9WA27WBuB6BTl5xH4uzayJJEg&s';
    logo.onload = () => {
      const logoSize = 20;
      const logoX = (this.width - logoSize) / 2;
      const logoY = (this.width - logoSize) / 2;
      ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
    };
  }
}
