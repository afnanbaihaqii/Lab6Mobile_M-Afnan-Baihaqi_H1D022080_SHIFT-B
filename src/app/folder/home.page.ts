import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  folder = 'Home';
  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];
  filteredItems = [...this.items];

  
  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(query));
  }

  
  onCardButtonClick() {
    console.log('Card button clicked!');
  }


  addItem() {
    const newItem = { name: `Item ${this.items.length + 1}` };
    this.items.push(newItem);
    this.filteredItems.push(newItem);
  }
}
