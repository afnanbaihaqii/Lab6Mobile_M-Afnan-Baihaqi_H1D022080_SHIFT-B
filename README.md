 Nama : M Afnan Baihaqi
 Nim : H1D022080
 Shift : B

 ## SCREENSHOT

![Screenshot 2024-10-29 185311](https://github.com/user-attachments/assets/0ed5587a-196f-4729-bfcc-c062b62259a9)
![Screenshot 2024-10-29 185250](https://github.com/user-attachments/assets/8a868395-f358-4046-84c4-57aefbcd0d13)
![Screenshot 2024-10-29 185237](https://github.com/user-attachments/assets/050ffa81-269f-4c54-96c8-d8271164f770)

 ## PENJELASAN
 
Kode ini memanfaatkan fitur Ionic untuk menyusun antarmuka aplikasi yang interaktif dan responsif, dengan berfokus pada pengalaman pengguna yang mulus. Pada bagian atas, ion-header dan ion-toolbar menampilkan judul dan menu navigasi samping melalui ion-menu-button, yang memungkinkan pengguna untuk membuka menu dengan mudah. Untuk membantu pencarian item, ion-searchbar menangani input pengguna dan memfilter item secara real-time menggunakan metode handleSearch yang memanfaatkan binding Angular untuk memperbarui data.
Struktur grid item ditata dengan ion-grid, ion-row, dan ion-col, di mana setiap item muncul dalam ion-card individual yang menampilkan gambar, nama, dan deskripsi stok. Komponen ion-card mendukung elemen multimedia serta tombol untuk menambah atau mengurangi stok menggunakan ion-button, yang diatur dalam satu baris untuk akses yang cepat. Selain itu, setiap kartu memiliki tombol "Edit" dan "Delete" yang memungkinkan pengguna mengedit atau menghapus item secara langsung, bersama dengan fitur unggah gambar baru yang 
memanfaatkan <input type="file">. Di bagian bawah layar, ion-fab berfungsi sebagai tombol aksi mengambang untuk menambahkan item baru, memberikan akses cepat ke fungsi tambah tanpa mengganggu tata letak utama aplikasi.

Kode ini menggunakan fitur-fitur dari Ionic dan Angular untuk membuat tampilan aplikasi yang interaktif dan mudah digunakan dalam mengelola data item. Salah satu fitur utama adalah AlertController dari Ionic, yang memunculkan pop-up atau dialog ketika pengguna ingin mengedit atau menambah item baru. Misalnya, fungsi onEdit akan memunculkan pop-up yang memungkinkan pengguna mengganti nama item dan menyimpannya atau membatalkan perubahan. Fungsi addItem juga memunculkan pop-up untuk menambah item baru dengan input
nama dan stok awal. Jika data yang dimasukkan sudah sesuai, item baru otomatis ditambahkan ke dalam daftar. Pencarian item juga dibuat praktis dengan fitur handleSearch. Saat pengguna mengetik di search bar, fungsi ini otomatis menyaring daftar item dan hanya menampilkan yang sesuai dengan teks pencarian. Karena terhubung langsung dengan Angular, setiap perubahan dalam daftar akan segera terlihat di layar tanpa perlu di-refresh. Selain itu, aplikasi ini memungkinkan pengguna mengganti gambar item menggunakan onImageSelected.
Dengan memilih file gambar, FileReader membaca gambar tersebut dan memperbarui tampilan gambar item secara langsung. Ada juga fungsi untuk menambah atau mengurangi stok barang, yaitu increaseStock dan decreaseStock, yang diakses dengan tombol. Dengan fitur-fitur ini, pengguna bisa mengelola data item dengan mudah langsung dari antarmuka yang dibuat responsif oleh Ionic.
