import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorsContainerComponent } from './editors/editors-container/editors-container.component';


const routes: Routes = [ { path: 'stack', component: EditorsContainerComponent/* hug */ } ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
