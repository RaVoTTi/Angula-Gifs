import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: [
  ]
})
export class SearcherComponent  {
  @ViewChild('txtBuscar') textBuscar!:ElementRef<HTMLInputElement>
  @ViewChild('txtLimit') textLimit!:ElementRef<HTMLInputElement>
  
  get limit():number{
    return this.gifsService.limit
  }
  constructor(private gifsService:GifsService) { }
  search(){
    
    let query = this.textBuscar.nativeElement.value
    if (query.trim().length > 0){

      this.gifsService.searchGifs(query)
      this.textBuscar.nativeElement.value = ''
    }
  }
  limitSearch(){
    let value = this.textLimit.nativeElement.value
    if (value.trim().length > 0){
 
      this.gifsService.limitGifs(Number(value))
      this.textLimit.nativeElement.value = ''
    }
    
  }

}
