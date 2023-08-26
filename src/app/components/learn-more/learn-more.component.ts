import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent {
  constructor(private location: Location){}

  goBack(){
    this.location.back()
  }

}
