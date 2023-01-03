import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient ) { }

  url="http://localhost:3000/posts"

  userSignUp(data:any){
    let result= this.http.post(this.url,data)
    console.log("ressasss",result)
    return false
  
  }
}
