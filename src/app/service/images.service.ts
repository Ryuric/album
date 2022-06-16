import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from "../model/Image";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {}
  getImages(){
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=5');
  }
}
