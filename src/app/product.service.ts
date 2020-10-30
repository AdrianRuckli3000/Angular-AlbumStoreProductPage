import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable()
export class ProductService {

  _albumUrl: String = '.../assets/album.json';

  constructor(private http: Http) { }

}
