import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from './user';
import { passwordValidator } from './form-validation/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-angular-app';
  roles = ['Vendor', 'User'];

  get first_name() {
    return this.registerForm.get('first_name');
  }
  get last_name() {
    return this.registerForm.get('last_name');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  userModel = new User(
    'vendor',
    'Vivian',
    'Samson',
    '06773786557',
    'viviansamson@gmail.com',
    ''
  );

  constructor(private fb: FormBuilder) {}
  registerForm = this.fb.group(
    {
      role: ['Vendor', Validators.required],
      first_name: ['Vivian', [Validators.required, Validators.minLength(3)]],
      last_name: ['Samson', [Validators.required, Validators.minLength(3)]],
      phone: [
        '0673786557',
        [
          Validators.required,
          // Validators.pattern('^[0-9*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: [
        'viviansamson@gmail.com',
        [Validators.required, Validators.email],
      ],
      acceptTerms: [true, Validators.requiredTrue],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
    },
    { validator: passwordValidator }
  );

  oldData() {
    this.registerForm.setValue({
      role: 'User',
      first_name: 'Enock',
      last_name: 'Mussa',
      phone: '0624155994',
      email: 'enock.mussa@bphacoh.ac.tz',
      acceptTerms: true,
      password: '',
      confirm_password: '',
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
}
