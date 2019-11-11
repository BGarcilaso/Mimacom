import { OnInit, Component, ViewEncapsulation, Input, HostListener } from '@angular/core';
import { Gif } from 'src/app/share/models/gif.model';
import { GifService } from 'src/app/share/service/gif.service';
import { StickerService } from 'src/app/share/service/stickers.service';

/*
* GRID OF GIFS OR STICKERS
*/
@Component({
    selector: 'app-bgm-grid-gif',
    templateUrl: './grid-gif.component.html',
    styleUrls: ['grid-gif.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GridGifComponent implements OnInit {

    isGifIndicator = true;
    textSearch = '';
    detail: Gif;
    detailGifCollection: Gif[] = [];

    // Pagination
    offset = 0;
    limit = 8;

    urlFace = 'http://www.facebook.com/sharer/sharer.php?u=';
    urlTwitter = 'https://giphy.com/login/twitter?next=https://giphy.com/login/twitter/finalize?next=https://giphy.com/gifs/id_giphy/tweet';

    @Input() gifCollection: Gif[] = [];

    @Input() trending = false;
    @Input()
    set searchText(value) {
        this.textSearch = value;
        // Reset Pagination
        this.offset = 0;
        this.limit = 8;

        this.gifCollection = [];
        if (this.isGifIndicator) {
            this.loadGif();
        } else {
            this.loadSticker();
        }
    }

    // If change flag Gif/Sticker
    @Input()
    set isGif(value) {
        if (this.textSearch === '') {
            this.isGifIndicator = value;
            // Reset Pagination
            this.offset = 0;
            this.limit = 8;

            this.gifCollection = [];
            if (value) {
                this.loadGif();
            } else {
                this.loadSticker();
            }
        }
    }

    buscar = false;

    constructor(
        private gifService: GifService,
        private stickerService: StickerService
    ) { }

    ngOnInit() {
    }

    loadGif() {
        if (this.trending) {
            this.gifService.getTrendingGifs(this.offset, this.limit).subscribe((response) => {
                this.gifCollection = this.gifCollection.concat(response.data);
            });
        } else {
            this.gifService.getSearchingGifs(this.offset, this.limit, this.textSearch).subscribe((response) => {
                this.gifCollection = this.gifCollection.concat(response.data);
            });
        }
    }

    loadSticker() {
        if (this.trending) {
            this.stickerService.getTrendingStickers(this.offset, this.limit).subscribe((response) => {
                this.gifCollection = this.gifCollection.concat(response.data);
            });
        } else {
            this.stickerService.getSearchingStickers(this.offset, this.limit, this.textSearch).subscribe((response) => {
                this.gifCollection = this.gifCollection.concat(response.data);
            });
        }
    }

    loadMore() {
        this.offset += this.limit;
        if (this.isGifIndicator) {
            this.loadGif();
        } else {
            this.loadSticker();
        }
    }

    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        //In chrome and some browser scroll is given to body tag
        let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        let max = document.documentElement.scrollHeight;
        // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
        if(pos == max )   {
         this.loadMore();
        }
    }

    showDetail(gif: Gif) {
        if (this.detail) {
            this.detail.showDetail = false;
        }
        gif.showDetail = true;
        this.detail = gif;
    }

    closeDetail(gif: Gif) {
        gif.showDetail = false;
        if ( this.detail) {
            this.detail.showDetail = false;
        }
    }

    shareFacebook(url: string) {
        return this.urlFace.concat(url);
    }

    shareTwitter(id: string) {
        return this.urlTwitter.replace('id_giphy', id);
    }

}
