import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren('mediaPlayLists') public mediaPlayLists!: QueryList<ElementRef>;

  title = 'school';
  
  constructor() {

  }

  ngOnInit(): void {
    
  }
  swipeRow(clicked: string, row: number) {
    if (clicked == 'Left') {
        (this.mediaPlayLists.get(row) as any).nativeElement.scrollLeft -= 340;
    }
    else {
        (this.mediaPlayLists.get(row) as any).nativeElement.scrollLeft += 340;
    }
}
}
