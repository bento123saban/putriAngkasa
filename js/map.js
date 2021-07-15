const data = [
    {
        ID : 1,
        nama : "menu 01",
        harga : 20000,
        img : "Food1.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 2,
        nama : "menu 02",
        harga : 20000,
        img : "Food2.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 3,
        nama : "menu 03",
        harga : 20000,
        img : "Food3.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 4,
        nama : "menu 04",
        harga : 20000,
        img : "Food4.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 5,
        nama : "menu 05",
        harga : 20000,
        img : "Food5.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 6,
        nama : "menu 06",
        harga : 20000,
        img : "Food6.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 7,
        nama : "menu 07",
        harga : 20000,
        img : "Food7.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 8,
        nama : "menu 08",
        harga : 20000,
        img : "Food8.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 9,
        nama : "menu 09",
        harga : 20000,
        img : "Food9.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    },
    {
        ID : 10,
        nama : "menu 10",
        harga : 20000,
        img : "Food10.jpg",
        deskripsi : "yam Geprek berkualitas, dari ayam pilihan, dengan 5 tingkat kepedasan. massa eloquentiam repudiare menandri aliquip atqui instructior dolor viderer quidam quaeque vim decore aliquid ultrices"
    }
]

let list = ''
data.forEach(function(menu) {
    list += `
    <!-- card box -->
    <div class="card" data-nama="${menu.nama}">
        <div class="card-konten">
            <span class="tambah" data-id="${menu.ID}">+${menu.ID}</span>
                <img src="image/menu/${menu.img}" alt="">
                <p class="card-deskripsi">${menu.deskripsi}</p>
                <p class="card-harga">Rp. ${menu.harga},-</p>
        </div> <!-- card image -->
        <p class="menu-nama">${menu.nama}</p>
    </div> <!-- card box -->
    `
})



document.querySelector('#menu-list-content').innerHTML = list


function daftarOrder() // menyusun daftar item yang telah diorder
{
    let daftar = '' // menampung hasil dari daftar order
    if (orderArray.length == 0 ) // jika orderArray kosong, panjang = 0, maka
    { 
        daftar = 
        `
            <p class="no-item">Belum ada item yang diorder</p> 
        ` // daftar order kosong
    }
    else// tapi, jika daftar order tidak kosong, maka
    { 
        orderArray.forEach(function(item){
            let html = `
                <div class="order-item" data-id="${item.ID}">
                    <li>${item.nama}</li>
                    <input type="number" class="jumlah-item order-input" value="${item.jumlah}" required>
                    <i class="fas fa-trash"></i>
                </div>
            `
            daftar += html
        })
    }
    return document.querySelector('.order-pilih').innerHTML = daftar // mengembalikan hasil dari daftar order menjadi HTML dari kelas order-pilih
}

function hitungTotal() // menghitung total bayar
{
    let total = 0 // varibal menampung hasil hitung total bayar
    orderArray.map(item => { // perulangan untuk setiap item dalam daftar order
        total += parseFloat(item.harga) * parseFloat(item.jumlah) // mengalikan harga dari item 
    });
    document.querySelector('.total-harga').innerHTML = 'Total Harga : Rp. ' + total // mengembalikan/menampilkan hasil hitung pada element total harga
}

// mendapatkan data dari item dalam array, dengan parameter id sebagai id yang akan dicari dan parameter array sebagai array tempat mengambil data


function tambahOrder(element) {
    let ID = element.getAttribute('data-id') //mengambil ID item
    console.log(ID)
    console.log(orderArray)
    let parameter = 0 //parameter ; jika 0 beluk ditambahkan, jika 1 sudah ditambahkan
    orderArray.forEach( index => { //perulangan untuk mengecek item sudah ditambahkan atau belum
        if (index.ID == ID) {
            console.log(index.ID)
            parameter = 1 // jika sudah ditambahakan parameter menjadi (1)
            return ''// hentikan proses
        }
    }) //jika item belum ditambahkan (param = 0), ambil data item dara variabel simpan data (buketData atau ritelData)
    if(parameter == 0) //jika item belum ditambahkan (param = 0), ambil data item dara variabel simpan data (buketData atau ritelData)
    {
        const i = data.findIndex( item => item.ID == ID)

        let  item = data[i] // variabel Objek untuk menampung data dari item yang ditambhakan
        item.jumlah = 1;
        orderArray.push(item)
    }
}

function hapusItem(element){
    const ID = element.parentElement.getAttribute('data-id')
    let i = orderArray.findIndex( item => item.ID == ID)
    orderArray.splice(i, 1)
}


function gantiNilai(element){
    console.log(element)
    const ID = element.parentElement.getAttribute('data-id')
    console.log(ID)
    let i = orderArray.findIndex(index => index.ID == ID)
    let value = parseFloat(element.value)
    if (value > 0) {
        orderArray[i].jumlah = value
    } else {
        element.value = ''
        orderArray[i].jumlah = 0
    }
    console.info(orderArray[i].jumlah)
    hitungTotal()
}

function jikaKosong(element) {
    if (element.value == '') {
        element.style.borderColor = 'red'
    } else {
        element.style.borderColor = ''
    }
}

function cekIsi() {
    let parameter = 0
    document.querySelectorAll('.order-input').forEach(function (item) {
        if (item.value == '') {
            parameter = 1
            item.style.borderColor = 'red'
        }
    })

    if (orderArray.length == 0) {
        parameter = 1
    } else if (condition) {
        
    }
    if(parameter == 0){
        let konfirmasi = confirm('Anda akan dialihkan ke WhatsApp. Segera kirim text pesan yang tertera untuk mengkonfirmasi orderan anda !')
        if (konfirmasi) {
            order()
        }
    }
}

function order(){
    const nama = document.querySelector('#order-nama').value
    const telp = document.querySelector('#order-telpon').value
    const deskripsi = document.querySelector('#order-deskripsi').value
    const alamat = document.querySelector('#alamat').value
    
    let orderan = ''
    orderArray.forEach(function(item){
        orderan += `${item.nama} (${item.jumlah} Porsi).\n`
    })
    let total = 0 // varibal menampung hasil hitung total bayar
    orderArray.map(item => { // perulangan untuk setiap item dalam daftar order
        total += parseFloat(item.harga) * parseFloat(item.jumlah) // mengalikan harga dari item 
    });
 
    let dataWA = `Order Baru !! - ${new Date()}\n\n${nama} - ${telp}\n\n${orderan} Total : Rp. ${total}\n\nDeskripsi : ${deskripsi}\n\nAlamat :\n${alamat}
    `
    const encode = encodeURI(dataWA)
    const linkWA = `https://wa.me/+6281354741823?text=${encode}`
    // window.open(linkWA)
    console.info(linkWA)
    console.info(dataWA)
}