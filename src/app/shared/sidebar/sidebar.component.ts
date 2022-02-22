import { GifsService } from './../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent  {

  get historial(): string[]{
    return this.gifsService.historial
  }
  constructor(private gifsService:GifsService) { }

  search(item:string){
    this.gifsService.searchGifs(item)
  }

}
