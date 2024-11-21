import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from '../components/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dynamic-content';
  isShow = false;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  @ViewChild('dynamicContent', { static: true })
  dynamicContent!: TemplateRef<any>;
  @ViewChild('notFoundContent', { static: true })
  notFoundContent!: TemplateRef<any>;
  toggleShow() {
    this.isShow = !this.isShow;
    this.createComponent();
  }

  createComponent() {
    this.container.clear();
    const template = this.isShow ? this.dynamicContent : this.notFoundContent;

    const componentRef = this.container.createComponent(DynamicComponent);

    componentRef.instance.contentTemplate = template;
    componentRef.instance.title = 'Dynamic component';
    componentRef.instance.isShow = this.isShow;
  }
}
