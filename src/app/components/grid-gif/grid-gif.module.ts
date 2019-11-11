import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { GridGifComponent } from './grid-gif.component'; 
import { GridGifService } from './grid-gif.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [GridGifComponent],
    exports: [GridGifComponent],
    providers: [GridGifService]
})

export class GridGifModule {

}