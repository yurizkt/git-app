import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit{
    loginForm: FormGroup
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router ){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })

    }

    login() {
        const username = this.loginForm.get('username').value
        const password = this.loginForm.get('password').value
        
        this.authService
            .authenticate(username, password)
            .subscribe(
                data => {console.log('autorizou')
                // () => this.router.navigate(['https://api.github.com/users/' + userName + '/repos']),
                },
                err => {
                    console.log(err)
                    this.loginForm.reset()
                    this.userNameInput.nativeElement.focus()
                    alert('Usuário ou senha estão errados')
                }
            )
    }
}