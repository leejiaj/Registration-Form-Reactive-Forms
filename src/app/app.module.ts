import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroService } from './hero.service';

import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';
import { RegisterFormValidateOnSubmitComponent } from './register-form-validate-on-submit/register-form-validate-on-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormValidateOnSubmitComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot()
  ],
  exports: [
    AppComponent
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
