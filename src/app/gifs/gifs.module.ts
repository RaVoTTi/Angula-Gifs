import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultComponent } from './result/result.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';



@NgModule({
  declarations: [
    SearcherComponent,
    ResultComponent,
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
