import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { LogPageComponent } from './pages/log-page/log-page.component';
import { GvPageComponent } from './pages/gv-page/gv-page.component';

const routes: Routes = [
  {
    path: '',
    component: TestingPageComponent
  },
  {
    path: 'test',
    component: TestingPageComponent
  },
  {
    path: 'logs',
    component: LogPageComponent
  },
  {
    path: 'gv',
    component: GvPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
