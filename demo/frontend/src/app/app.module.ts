import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';
import { BannerComponent } from './Companent/banner/banner.component';
import { HeaderComponent } from './Companent/header/header.component';
import { FooterComponent } from './Companent/footer/footer.component';
import { ExpressionComponent } from './Companent/expression/expression.component';
import { StorieComponent } from './Companent/storie/storie.component';
import { MenuComponent } from './Companent/menu/menu.component';
import { CatalogExpressionComponent } from './Pages/catalog-expression/catalog-expression.component';
import { OneExpressionComponent } from './Pages/one-expression/one-expression.component';
import { OneExpreComponent } from './Companent/one-expre/one-expre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MapaComponent } from './Pages/mapa/mapa.component';
import { MapComponentComponent } from './Companent/map-component/map-component.component';
import { CultureComponent } from './Pages/culture/culture.component';
import { HomeComponent } from './Pages/home/home.component';
import { BannerHomeComponent } from './Companent/banner-home/banner-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    ExpressionComponent,
    StorieComponent,
    MenuComponent,
    CatalogExpressionComponent,
    OneExpressionComponent,
    OneExpreComponent,
    MapaComponent,
    MapComponentComponent,
    CultureComponent,
    HomeComponent,
    BannerHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {

          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
