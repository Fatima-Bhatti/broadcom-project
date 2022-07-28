import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  
  title = 'broadcom-project';

  @Output() newItemEvent = new EventEmitter<number>();

  @ViewChild("sideBarMenu") sideBarMenu: ElementRef;
  /**
   *
   */
  constructor() {
   this.sideBarMenu = new ElementRef("sideBarMenu");
  }

  ngAfterViewInit(): void {
    
  }

  
  toggleSidebar() {
    this.sideBarMenu.nativeElement.style.width = '210px';
    }

  toggleSidebarOut(){
      this.sideBarMenu.nativeElement.style.width = '40px';
    }

}

