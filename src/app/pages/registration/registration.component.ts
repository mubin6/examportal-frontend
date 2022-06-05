import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  toggle = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.registrationForm = this.fb.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      password: [''],
      email: [''],
      phone: ['']
    })
  }

  saveUser() {
    this.loginService.registerUser(this.registrationForm.value).subscribe(
      user => {
        console.log('user', user);
        this.loginService.openSnackBar('User registered succefully', 'REGISTERD SUCCESSFULLY!!!');
      },
      err => {
        console.log('err', err)
        this.loginService.openSnackBar('User already exists with same username', 'DUPLICATE USER');
      }
    )
  }

  showPassword() {
    this.toggle = !this.toggle;
  }

}
