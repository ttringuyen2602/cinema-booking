import { Component } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, NzFormModule, ReactiveFormsModule, NzInputModule, NzButtonModule, NzIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  passwordVisible = false
  validateForm: FormGroup<{
    email: FormControl<string>
    password: FormControl<string>
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

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }
}
