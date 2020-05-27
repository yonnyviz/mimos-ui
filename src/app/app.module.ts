import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardCarouselComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
