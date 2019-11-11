import { NgModule } from '@angular/core';
import { InputSearchComponent } from './input-search.component';
import { InputSearchService } from './input-search.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [InputSearchComponent],
    exports: [InputSearchComponent],
    providers: [InputSearchService]
})

export class InputSearchModule {

}