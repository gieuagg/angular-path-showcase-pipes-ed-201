import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-built-in',
  templateUrl: './built-in.component.html',
  styleUrls: ['./built-in.component.css']
})
export class BuiltInComponent implements OnInit {

  aDate = new Date();

  car: any = {
    brand: "Audi",
    year: 2022,
    color: {
      main: "red",
      secondary: "blue"
    }
  }

  $car = of(this.car);

  constructor() { }

  ngOnInit(): void {
  }

}
