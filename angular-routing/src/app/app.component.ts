import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildBComponent } from './components/child-b/child-b.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  title = 'angular-routing';
  test = 2;
  loadComponent() {
    if (this.test === 1) {
      this.container.clear();
      this.container.createComponent(FirstComponent);
    } else {
      this.container.clear();
      this.container.createComponent(SecondComponent);
    }
  }
}
