 Nama : M Afnan Baihaqi
 Nim : H1D022080
 Shift : B

 ## SCREENSHOT



 ## PENJELASAN
 
 <ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>{{ folder }}</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">{{ folder }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-searchbar placeholder="Search" (ionInput)="handleSearch($event)"></ion-searchbar>
  <ion-grid>
    <ion-row>
      <ion-col size="6" size-md="4" *ngFor="let item of filteredItems">
        <ion-card>
          <img [src]="item.image" alt="Image for {{ item.name }}" />
          <ion-card-header>
            <ion-card-title>{{ item.name }}</ion-card-title>
            <ion-card-subtitle>Meuble</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>Here's a brief description for {{ item.name }}. You can add more details here.</p>
            <p><strong>Stock:</strong> {{ item.stock }}</p>
            <ion-row class="ion-justify-content-center">
              <ion-button color="primary" (click)="increaseStock(item)">+</ion-button>
              <ion-button color="light" [disabled]="item.stock === 0" (click)="decreaseStock(item)">-</ion-button>
            </ion-row>
          </ion-card-content>
          <ion-row class="ion-justify-content-between ion-padding">
            <ion-button color="success" (click)="onEdit(item)">Edit</ion-button>
            <ion-button color="danger" (click)="onDelete(item)">Delete</ion-button>
          </ion-row>
          <input type="file" (change)="onImageSelected($event, item)" hidden #fileInput />
          <ion-button color="primary" expand="block" (click)="fileInput.click()">Upload Image</ion-button>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button (click)="addItem()">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>

Kode ini memanfaatkan fitur Ionic untuk menyusun antarmuka aplikasi yang interaktif dan responsif, dengan berfokus pada pengalaman pengguna yang mulus. Pada bagian atas, ion-header dan ion-toolbar menampilkan judul dan menu navigasi samping melalui ion-menu-button, yang memungkinkan pengguna untuk membuka menu dengan mudah. Untuk membantu pencarian item, ion-searchbar menangani input pengguna dan memfilter item secara real-time menggunakan metode handleSearch yang memanfaatkan binding Angular untuk memperbarui data.
Struktur grid item ditata dengan ion-grid, ion-row, dan ion-col, di mana setiap item muncul dalam ion-card individual yang menampilkan gambar, nama, dan deskripsi stok. Komponen ion-card mendukung elemen multimedia serta tombol untuk menambah atau mengurangi stok menggunakan ion-button, yang diatur dalam satu baris untuk akses yang cepat. Selain itu, setiap kartu memiliki tombol "Edit" dan "Delete" yang memungkinkan pengguna mengedit atau menghapus item secara langsung, bersama dengan fitur unggah gambar baru yang 
memanfaatkan <input type="file">. Di bagian bawah layar, ion-fab berfungsi sebagai tombol aksi mengambang untuk menambahkan item baru, memberikan akses cepat ke fungsi tambah tanpa mengganggu tata letak utama aplikasi.

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


Kode ini menggunakan fitur-fitur dari Ionic dan Angular untuk membuat tampilan aplikasi yang interaktif dan mudah digunakan dalam mengelola data item. Salah satu fitur utama adalah AlertController dari Ionic, yang memunculkan pop-up atau dialog ketika pengguna ingin mengedit atau menambah item baru. Misalnya, fungsi onEdit akan memunculkan pop-up yang memungkinkan pengguna mengganti nama item dan menyimpannya atau membatalkan perubahan. Fungsi addItem juga memunculkan pop-up untuk menambah item baru dengan input
nama dan stok awal. Jika data yang dimasukkan sudah sesuai, item baru otomatis ditambahkan ke dalam daftar. Pencarian item juga dibuat praktis dengan fitur handleSearch. Saat pengguna mengetik di search bar, fungsi ini otomatis menyaring daftar item dan hanya menampilkan yang sesuai dengan teks pencarian. Karena terhubung langsung dengan Angular, setiap perubahan dalam daftar akan segera terlihat di layar tanpa perlu di-refresh. Selain itu, aplikasi ini memungkinkan pengguna mengganti gambar item menggunakan onImageSelected.
Dengan memilih file gambar, FileReader membaca gambar tersebut dan memperbarui tampilan gambar item secara langsung. Ada juga fungsi untuk menambah atau mengurangi stok barang, yaitu increaseStock dan decreaseStock, yang diakses dengan tombol. Dengan fitur-fitur ini, pengguna bisa mengelola data item dengan mudah langsung dari antarmuka yang dibuat responsif oleh Ionic.
