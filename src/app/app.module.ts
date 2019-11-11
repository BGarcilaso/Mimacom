import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { InputSearchModule } from './components/input-search/input-search.module';
import { GridGifModule } from './components/grid-gif/grid-gif.module';
import { GifService } from './share/service/gif.service';
import { StickerService } from './share/service/stickers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridGifModule,
    HttpClientModule,
    InputSearchModule
  ],
  providers: [GifService, StickerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
