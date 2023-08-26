import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-four0four',
  templateUrl: './four0four.component.html',
  styleUrls: ['./four0four.component.css']
})
export class Four0fourComponent {

  constructor(private location: Location){}

  goBack(){
    this.location.back();
  }
}
