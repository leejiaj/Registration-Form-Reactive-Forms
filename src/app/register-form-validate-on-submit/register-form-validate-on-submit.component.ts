import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl} from '@angular/forms'
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-register-form-validate-on-submit',
  templateUrl: './register-form-validate-on-submit.component.html',
  styleUrls: ['./register-form-validate-on-submit.component.css']
})
export class RegisterFormValidateOnSubmitComponent implements OnInit, OnChanges {



  registrationForm: FormGroup; //registrationForm is of type FormGroup
  captchaSuccess = false;
  submitted = false;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.registrationForm = this.fb.group({
      firstname: ['First Name', Validators.required],
      lastname: ['Last Name', Validators.required],
      emailaddress: ['sophie@example.com', [Validators.required, Validators.email]],
      phonenumber: [1234567890, [Validators.required, Validators.pattern("[0-9]*"),
                    Validators.minLength(10),Validators.maxLength(10)]],
      password: ['passWORD123', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$")]],
      confirmpassword: ['passWORD123', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$")]]
    },{validator: this.passwordConfirming});
   }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmpassword').value) {
        return {invalid: true};
    }
  }
  onSubmit(){
    this.submitted = true;
    this.registrationForm.controls['firstname'].markAsTouched();
    this.registrationForm.controls['lastname'].markAsTouched();
    this.registrationForm.controls['emailaddress'].markAsTouched();
    this.registrationForm.controls['phonenumber'].markAsTouched();
    this.registrationForm.controls['password'].markAsTouched();
    this.registrationForm.controls['confirmpassword'].markAsTouched();
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captchaSuccess = true;
  }


  formSubmitAttempt = false;

  newRegister(){
    this.formSubmitAttempt = true;
    //this.submitted = true;
  }
 
  ngOnInit() {
  }

  ngOnChanges(){
   // this.rebuildForm();
  }

}
