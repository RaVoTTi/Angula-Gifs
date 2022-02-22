import { GifsService } from './../services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [
  ]
})
export class ResultComponent {
  get results (){
    return this.gifsService.results
  }

  constructor(private gifsService:GifsService) { }



}
