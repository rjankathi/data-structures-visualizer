import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StackComponent } from './stack/stack.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ 
   StackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'stack', component: StackComponent },
      // { path: 'home', component: HomeViewComponent },
      // { path: 'catalog', component: CatalogViewComponent },
      // { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    CommonModule,
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


