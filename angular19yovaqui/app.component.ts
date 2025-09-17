import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToastModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular19';

  constructor(private messageService: MessageService) {}

  mostrarNotificacion() {
    this.messageService.add({
      severity: 'success',
      summary: 'Compra exitosa',
      detail: 'Tu pedido fue registrado correctamente'
    });
  }
}
