import { Component, OnInit } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  // boolean!: true;
  switch: boolean = false
  res:any;
  sell: any;
  

  constructor(private seller:SellerService,private router:Router ) { }

  ngOnInit(): void {
  }
   
  signUp(){

  }
  // signUp(data:any){
  //   console.log(data)
  //   this.seller.userSignUp(data).subscribe((res) =>{
  //     console.log("lllllddl",res)
  //     this.sell = res;
  //   if(res){
  //     this.router.navigate(['seller-home'])
  //   }
  // //  
  // })
  // }

// 
}
