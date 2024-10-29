import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  folder = 'Home';
  items = [
    { name: 'Item 1', image: 'assets/placeholder-image.jpg', stock: 10 },
    { name: 'Item 2', image: 'assets/placeholder-image.jpg', stock: 5 },
    { name: 'Item 3', image: 'assets/placeholder-image.jpg', stock: 8 }
  ];
  filteredItems = [...this.items];

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(query));
  }

  async onEdit(item: any) {
    const alert = await this.alertController.create({
      header: 'Edit Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter new name',
          value: item.name
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Edit cancelled');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            if (data.name.trim()) {
              item.name = data.name;
              this.filteredItems = [...this.items];
            }
          }
        }
      ]
    });

    await alert.present();
  }

  onDelete(item: any) {
    this.items = this.items.filter(i => i !== item);
    this.filteredItems = [...this.items];
  }

  async addItem() {
    const alert = await this.alertController.create({
      header: 'Add New Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter item name',
        },
        {
          name: 'stock',
          type: 'number',
          placeholder: 'Enter initial stock',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Add cancelled');
          }
        },
        {
          text: 'Add',
          handler: (data) => {
            if (data.name.trim() && data.stock) {
              const newItem = { name: data.name, image: 'assets/placeholder-image.jpg', stock: Number(data.stock) };
              this.items.push(newItem);
              this.filteredItems = [...this.items];
            }
          }
        }
      ]
    });

    await alert.present();
  }

  onImageSelected(event: any, item: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        item.image = reader.result as string;
        this.filteredItems = [...this.items];
      };
      reader.readAsDataURL(file);
    }
  }

  increaseStock(item: any) {
    item.stock++;
    this.filteredItems = [...this.items];
  }

  decreaseStock(item: any) {
    if (item.stock > 0) {
      item.stock--;
      this.filteredItems = [...this.items];
    }
  }
}
