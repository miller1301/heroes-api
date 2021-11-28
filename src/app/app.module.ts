import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

// Module Http
import { HttpClientModule } from '@angular/common/http';
import { BuscarComponent } from './pages/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    FooterComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
