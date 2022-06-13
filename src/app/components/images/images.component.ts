import { Component, OnInit } from "@angular/core";
import { ImagesService } from "src/app/service/images.service";
import { Image } from 'src/app/model/Image';

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit{
    images: Image[] = [];
    constructor(public imagesService: ImagesService){}
    ngOnInit(): void {
        this.imagesService.getImages().subscribe(images => {
            console.log(images);
            this.images = images;
        })
    }
    something(){alert('Funciona!')}
}