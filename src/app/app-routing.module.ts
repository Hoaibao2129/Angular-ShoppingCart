import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRouterComponent } from './test-router/test-router.component';

const routes: Routes = [{ path: 'home', component: TestRouterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
