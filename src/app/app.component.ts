import { Component, OnInit, HostListener } from '@angular/core';
import { InputSearchService } from './components/input-search/input-search.service';
import { GifService } from './share/service/gif.service';
import { Gif } from './share/models/gif.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mimacom-test-app';

  gifCollection: Gif[];
  // Indicate if the input div height equals to 100vh
  totalHeight = true;

  // Flag Gif/Sticker (true/false)
  isGif = true;
  isSearchingGif = true;

  // Flag to check if we are searching or showing the trending
  isSearching = false;
  searchText: string;

  constructor(
    private gifService: GifService,
  ){}

  ngOnInit(){
  }

  inputFocusIndicator(event) {
    this.totalHeight = event;
  }

  changeFlagGifSticker(flag) {
    this.isGif = flag;
  }

  changeFlagSearchingGifSticker(flag) {
    this.isSearchingGif = flag;
  }

  goToTop() {
    window.scroll(0, 0);
    this.totalHeight = true;
  }

  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
      if (document.documentElement.scrollTop === 0) {
        this.totalHeight = true;
      } else if (
        this.totalHeight &&
        document.documentElement.scrollTop >= 0 &&
        document.documentElement.scrollTop <= document.documentElement.scrollHeight
      ) {
        this.totalHeight = false;
      }
    }

    isSearchingSomethingIndicator(flag) {
      this.isSearching = flag.flag;
      this.searchText = flag.text;
      console.log(this.searchText);
    }
}
