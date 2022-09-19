import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchProduct } from 'src/app/store/action';
import { AppState } from 'src/app/store/reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private store: Store) {}
  public searchTerm: string = '';
  ngOnInit(): void {}
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.store.dispatch(searchProduct({ searchProduct: this.searchTerm }));
  }
}
