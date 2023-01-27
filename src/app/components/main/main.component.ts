import { Component, OnInit } from '@angular/core';
import { MethodService } from '../method.service';
import { Item } from '../items';

const emptyItem: Item = {
  id: '',
  name: '',
  period: '',
  enrolled: false
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  scheduledItem = emptyItem;
  items = [] 

  

  constructor(private itemService: MethodService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.all().subscribe((result:any) => this.items = result);
  }

  saveItem(item) {
    this.itemService.create(item).subscribe(result => this.fetchItems());
  }

  deleteItem(itemId) {
    this.itemService.delete(itemId).subscribe(result => this.fetchItems());

  }



}
