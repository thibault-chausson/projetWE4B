import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //{path: '', redirectTo:'login', pathMatch:'full'},
  //{path: 'login', component: LoginComponent},
  //{path: 'accueil', component: AccueilComponent },
  //{path: 'register', component : RegisterUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
