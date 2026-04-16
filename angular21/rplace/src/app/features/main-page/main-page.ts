import { Component } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { PixelApi } from '../../domain/pixel.api';
import { PixelDto } from '../../domain/Pixelnterface';
import { Pixel } from '../../components/pixel/pixel';

@Component({
  selector: 'app-main-page',
  imports: [ɵInternalFormsSharedModule, Pixel],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  protected pixels?: PixelDto[][] = []
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
    let lines = [];
    for (let y = 0; y < 100; y++) {
      let row : PixelDto[] = [];
      for(let x = 0; x < 100; x++ ) {
        row.push({
            color: 'white',
            x: x,
            y: y
        })
      }
      lines.push(row);
    }
    this.pixels = lines;
    this.getPixel()
  }

  onChangeColor = (pixel: PixelDto) => {
    this.pixelChange = pixel
    this.isChange = true
  }

  closeModal = () =>{
    this.pixelChange.color = this.color
    this.isChange = false

    this.api.updatePixel(this.pixelChange).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}