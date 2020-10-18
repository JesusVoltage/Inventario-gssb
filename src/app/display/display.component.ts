import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  materiales : any;

  constructor(private service: StoreService) { }

  ngOnInit(): void {
    this.materiales = this.service.getMateriales();
    console.log(this.materiales)
  }

}
