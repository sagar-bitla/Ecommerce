import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myReactiveForm!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'course':new FormControl('Angular',Validators.required),
      
    })
  }

  onSubmit(){
    console.log(this.myReactiveForm.value)
  }

}
