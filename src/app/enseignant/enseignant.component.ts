import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery_code();
  }

  jquery_code(){

    $(document).ready(function(){
      $('.parallax').parallax();
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});


  }


}
