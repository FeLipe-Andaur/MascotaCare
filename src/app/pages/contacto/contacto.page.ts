import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  // Inicialización del formulario
  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {}

  // Inicializar EmailJS con la clave pública
  ngOnInit() {
    emailjs.init('xvMq2shwa8oi_bdEZ'); // Reemplaza 'YOUR_PUBLIC_KEY' con tu clave pública real
  }

  // Función para enviar el correo
  sendMail() {
    const serviceID = 'service_s4celvf'; // Reemplaza con tu Service ID
    const templateID = 'template_o41f974'; // Reemplaza con tu Template ID

    emailjs.send(serviceID, templateID, this.form)
      .then((response: EmailJSResponseStatus) => {
        console.log('Correo enviado correctamente:', response);
        alert('¡Mensaje enviado correctamente!');
        // Resetea el formulario
        this.form = { name: '', email: '', message: '' };
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Error al enviar el mensaje, intenta nuevamente.');
      });
  }
}
