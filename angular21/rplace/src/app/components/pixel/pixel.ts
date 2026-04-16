import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PixelDto } from '../../domain/Pixelnterface';

@Component({
  selector: 'app-pixel',
  imports: [],
  templateUrl: './pixel.html',
  styleUrl: './pixel.css',
})
export class Pixel {
  @Input()
  data!: PixelDto;

  @Output()
  onChange:EventEmitter<PixelDto> = new EventEmitter();

  change(event: string){
    this.data.color = event;
    this.onChange.emit(this.data);
  }
}