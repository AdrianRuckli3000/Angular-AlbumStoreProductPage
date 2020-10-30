import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'; // just here so that the tests (using deprecated logic) succeed...


@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json';

  constructor( private _http: Http ) { }

  //Observable<Response>
  // cannot define return type yet due to predefined tests...
  getAlbum( id: number ) {
    return this._http.get( this._albumUrl ).pipe( map( response => response.json() ));
  }

}
