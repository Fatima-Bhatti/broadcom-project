import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 


@Injectable({
  providedIn: 'root'
})
export class ActiveUsersService {

  constructor(public http : HttpClient) { }

    // getUser(id:Number){
    //   return this.http.get('./data.json');
    // }

    getAllUser(){
      return this.http.get('assets/Data.json');
    }
}
