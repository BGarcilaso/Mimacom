import { OnInit, Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { Gif } from 'src/app/share/models/gif.model';
import { InputSearchService } from './input-search.service';

@Component({
    selector: 'app-bgm-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['input-search.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InputSearchComponent implements OnInit {

    @Output()
    inputFocusIndicator = new EventEmitter();
    
    @Output()
    isSearchingSomethingIndicator = new EventEmitter();

    listadoGifs: Gif[];

    searchText = '';
    @Input() totalHeight = true;

    constructor(private inputSearchService: InputSearchService) { }

    ngOnInit() {

    }

    searchGifs() {
        this.totalHeight = false;
        this.inputFocusIndicator.emit(this.totalHeight);
        this.isSearchingSomethingIndicator.emit({flag: true, text: this.searchText});
    }

    inputFocus() {
        if (this.totalHeight) {
            this.totalHeight = false;
            this.inputFocusIndicator.emit(this.totalHeight);
        }
    }

    onKeydown(event) {
        if (event.key === 'Enter') {
            this.searchGifs();
        }
    }
}
