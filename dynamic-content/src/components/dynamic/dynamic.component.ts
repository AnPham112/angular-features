import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css',
})
export class DynamicComponent {
  @Input() contentTemplate!: TemplateRef<any>;
  @Input() title!: string;
  @Input() isShow!: boolean;
}
