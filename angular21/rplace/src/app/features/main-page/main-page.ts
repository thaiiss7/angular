import { Component } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { PixelApi } from '../../domain/pixel.api';
import { PixelDto } from '../../domain/PixelInterface';

@Component({
  selector: 'app-main-page',
  imports: [ɵInternalFormsSharedModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  pixels?: PixelDto[] 
  isChange: boolean = false
  title: string = "Digite a cor: "
  color: string = ""
  pixelChange!: PixelDto

  constructor (private api: PixelApi){
    // this.pixels = 
  }

  getPixel = () => {
    this.api.getPixels().subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("pixels", JSON.stringify(res))
        this.pixels = JSON.parse(sessionStorage.getItem("pixels") || "[]")
        console.log(this.pixels)
      }
    )
  }
  
  ngOnInit(): void {
    this.getPixel()
  }

  onChangeColor = (pixel: PixelDto) => {
    this.pixelChange = pixel
    this.isChange = true
  }

  closeModal = () =>{
    this.pixelChange.color = this.color
    this.isChange = false
  }
}