import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  formData = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    message: ''
  };

  sendEmail(f: any) {
    emailjs.send(
      'service_i0e3bfh',     
      'template_6zspkr4',      
      {
        first_name: this.formData.first_name,
        last_name: this.formData.last_name,
        phone: this.formData.phone,
        email: this.formData.email,
        message: this.formData.message
      },
      'bpPdoNlor7qLMiDFn'          
    ).then(
      () => {
        alert('Сообщение успешно отправлено ✅');
        this.formData = {
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          message: ''
        };
         f.resetForm()
      },
      (error) => {
        console.error(error);
        alert('Отправка не удалась ❌');
      }
    );
  }
}
