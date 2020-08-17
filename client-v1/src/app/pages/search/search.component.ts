import { Component, OnInit } from '@angular/core';
import { NodeComponent } from './Node/node.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // Grid Related Initialization
  numCols: number = 50;
  numRows: number = 25;

  // Grid is a 2-d array
  grid: [];

  constructor() {}

  ngOnInit(): void {}

  initializeGrid() {
    const grid = [];
  }
}