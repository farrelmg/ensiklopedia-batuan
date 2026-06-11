const databaseBatuan = {

    granit:{
        nama:"Granit",
        warna:"Putih keabu-abuan hingga merah muda",
        tekstur:"Faneritik",
        struktur:"Masif",
        pembentukan:"Terbentuk dari pendinginan magma secara lambat di bawah permukaan bumi.",
        gambar:"image/granit.jpg"
    },

    basalt:{
        nama:"Basalt",
        warna:"Hitam hingga abu gelap",
        tekstur:"Afanitik",
        struktur:"Masif atau vesikular",
        pembentukan:"Terbentuk dari pendinginan lava yang cepat di permukaan bumi.",
        gambar:"images/basalt.jpg"
    },

    marmer:{
        nama:"Marmer",
        warna:"Putih, abu-abu, hijau, atau merah muda",
        tekstur:"Kristalin",
        struktur:"Masif",
        pembentukan:"Hasil metamorfisme batu gamping akibat suhu dan tekanan tinggi.",
        gambar:"images/marmer.jpg"
    },

    obsidian:{
        nama:"Obsidian",
        warna:"Hitam",
        tekstur:"Amorf",
        struktur:"Masif",
        pembentukan:"Pendinginan magma yang sangat cepat dipermukaan",
        gambar:"image/obsidian.jpg"
    }
};

function cariBatuan(){

    let input = document.getElementById("namaBatuan")
                 .value
                 .toLowerCase();

    let hasil = document.getElementById("hasil");

    if(databaseBatuan[input]){

        let batuan = databaseBatuan[input];

        hasil.innerHTML = `
        <div class="card">

            <h2>${batuan.nama}</h2>

            <img src="${batuan.gambar}" alt="${batuan.nama}">

            <p><b>Warna:</b> ${batuan.warna}</p>

            <p><b>Tekstur:</b> ${batuan.tekstur}</p>

            <p><b>Struktur:</b> ${batuan.struktur}</p>

            <p><b>Pembentukan:</b> ${batuan.pembentukan}</p>

        </div>
        `;

    }else{

        hasil.innerHTML = `
        <div class="card">
            <h2>Batuan Tidak Ditemukan</h2>
        </div>
        `;
    }
}