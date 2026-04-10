import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { PixelDto } from './PixelInterface';
import { IPixel } from '../features/main-page/Pixel.Mock';

@Injectable({
  providedIn: 'root',
})
export class PixelApi extends Api{
  public getPixels = () : Observable<PixelDto[]> =>{
    return this.client.get<PixelDto[]>(`${this.URL}/pixel`).pipe()
  }

  public updatePixel = (data: IPixel): Observable<void> => {
    return this.client.post<void>(`${this.URL}/pixel`, data).pipe()
  }
}