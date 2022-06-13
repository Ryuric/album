import { Component, OnInit } from '@angular/core';
import { ImagesService} from './service/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  albumsId = [1, 2, 3];
  constructor(public imagesService: ImagesService){}
  saveNewImage(title: HTMLInputElement, albumId: HTMLSelectElement, url:HTMLInputElement){
    console.log(title.value, albumId.value, url.value);
    return false;
  }
}
