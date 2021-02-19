import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpClient ) { }

  getusers(){
    return this.httpService.get("https://localhost:5001/api/users");
  }
}
