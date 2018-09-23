import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { SignInComponent } from './acesso/signin/signin.component';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
        path: 'repositorios',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }