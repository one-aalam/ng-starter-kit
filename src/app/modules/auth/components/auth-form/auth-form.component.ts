import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

type AuthProps = {
    email: string
    password: string
}
type AuthMode = 'Sign In' | 'Sign Up'

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
    isSignIn = true
    currActionLabel: AuthMode = 'Sign In'
    authForm!: FormGroup;

  @Input() resetOnSubmit = true
  @Input() resetOnAuthModeChange = true
  @Input() loading: boolean = false
  @Output() change = new EventEmitter<boolean>()
  @Output() submit = new EventEmitter<AuthProps>()


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
        'email': [
            '', [
                Validators.required,
                Validators.email
            ]
        ],
        'password': [
            '', [
                    // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    Validators.minLength(6),
                    Validators.maxLength(25)
                ]
        ]
    })
  }

  handleChange(e: Event) {
      e.preventDefault()
      this.isSignIn = !this.isSignIn
      this.change.emit(this.isSignIn)
      this.currActionLabel = this.isSignIn ? 'Sign In' : 'Sign Up'
      if(this.resetOnAuthModeChange) {
        this.authForm.reset()
      }
  }

  handleSubmit(e: Event) {
      e.preventDefault()
    const email = this.authForm.value['email']
    const password = this.authForm.value['password']
    this.submit.emit({ email, password })
    if(this.resetOnSubmit) {
        this.authForm.reset()
    }
  }

}
