import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './Pages/catalog/catalog.component';
import { CatalogExpressionComponent } from './Pages/catalog-expression/catalog-expression.component';
import { OneExpressionComponent } from './Pages/one-expression/one-expression.component';
import { MapaComponent } from './Pages/mapa/mapa.component';
import { CultureComponent } from './Pages/culture/culture.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent },
  { path: 'expression', component:CatalogExpressionComponent  },
  { path: 'one', component:  OneExpressionComponent },
  { path: 'mapa', component:  MapaComponent },
  { path: 'culture', component:  CultureComponent },
  { path: 'home', component:  HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
