import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal/animal.component';
import { VacinaComponent } from './vacina/vacina/vacina.component';

const routes: Routes = [
  {path: 'vacina', component: VacinaComponent},
  {path: 'animal', component: AnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
