import { Component } from '@angular/core'
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms'
import { RouterLink } from '@angular/router'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { Observable, Observer } from 'rxjs'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzRadioModule,
    NzDatePickerModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  passwordVisible = false
  radioValue = 'A'

  validateForm: FormGroup<{
    userName: FormControl<string>
    email: FormControl<string>
    phone: FormControl<string>
    gender: FormControl<string>
    dob: FormControl<string>
    password: FormControl<string>
    confirm: FormControl<string>
  }>

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value)
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity())
  }

  userNameAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === '0123456789') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true })
        } else {
          observer.next(null)
        }
        observer.complete()
      }, 1000)
    })

  confirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return { error: true, required: true }
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required], [this.userNameAsyncValidator]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]]
    })
  }
}
