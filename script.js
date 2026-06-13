const databaseBatuan = {

    granit:{
        kategori:"beku",
        nama:"Granit",
        warna:"Putih keabu-abuan hingga merah muda",
        tekstur:"Faneritik",
        struktur:"Masif",
        pembentukan:"Terbentuk dari pendinginan magma secara lambat di bawah permukaan bumi.",
        gambar:"granit.jpg"
    },

    basalt:{
        kategori:"beku",
        nama:"Basalt",
        warna:"Hitam hingga abu gelap",
        tekstur:"Afanitik",
        struktur:"Masif atau vesikular",
        pembentukan:"Terbentuk dari pendinginan lava yang cepat di permukaan bumi.",
        gambar:"basalt.jpg"
    },

    marmer:{
        kategori:"metamorf",
        nama:"Marmer",
        warna:"Putih, abu-abu, hijau, atau merah muda",
        tekstur:"Kristalin",
        derajat_metamorfisme:"Menengah hingga Tinggi",
        protolit:"batugamping",
        struktur:"Masif",
        pembentukan:"Hasil metamorfisme batu gamping akibat suhu dan tekanan tinggi.",
        gambar:"marmer.jpg"
    },

    obsidian:{
        kategori:"beku",
        nama:"Obsidian",
        warna:"Hitam",
        tekstur:"Amorf",
        struktur:"Masif",
        pembentukan:"Pendinginan magma yang sangat cepat dipermukaan",
        gambar:"obsidian.jpg"
    },

    andesit:{
    kategori:"beku",    
    nama:"Andesit",
    warna:"Abu-abu muda hingga abu-abu tua",
    tekstur:"Afanitik hingga porfiritik",
    struktur:"Masif",
    pembentukan:"Terbentuk dari pendinginan magma intermediet di permukaan atau dekat permukaan bumi.",
    gambar:"andesit.jpg"
    },

    diorit:{
        kategori:"beku",
        nama:"Diorit",
        warna:"Abu-abu berbintik hitam putih",
        tekstur:"Faneritik",
        struktur:"Masif",
        pembentukan:"Terbentuk dari pendinginan lambat magma intermediet di bawah permukaan bumi.",
        gambar:"diorit.jpg"
    },

    gabro:{
        kategori:"beku",
       nama:"Gabro",
    warna:"Hijau tua hingga hitam",
     tekstur:"Faneritik",
    struktur:"Masif",
    pembentukan:"Terbentuk dari pendinginan lambat magma mafik di bawah permukaan bumi.",
    gambar:"gabro.jpg" 
    },

    riolit:{
    kategori:"beku",    
    nama:"Riolit",
    warna:"Putih, abu-abu muda hingga merah muda",
    tekstur:"Afanitik",
    struktur:"Masif",
    pembentukan:"Terbentuk dari pendinginan cepat lava felsik di permukaan bumi.",
    gambar:"riolit.jpg"
},

peridotit:{
    kategori:"beku",
    nama:"Peridotit",
    warna:"Hijau gelap hingga hitam",
    tekstur:"Faneritik",
    struktur:"Masif",
    pembentukan:"Terbentuk dari kristalisasi magma ultramafik jauh di bawah permukaan bumi.",
    gambar:"peridotit.jpg"
},

pegmatit:{
    kategori:"beku",
    nama:"Pegmatit",
    warna:"Putih hingga merah muda",
    tekstur:"Pegmatitik (kristal sangat besar)",
    struktur:"Masif",
    pembentukan:"Terbentuk pada tahap akhir kristalisasi magma yang kaya air dan unsur volatil.",
    gambar:"pegmatit.jpg"
},

konglomerat:{
    kategori:"sedimen",
    nama:"Konglomerat",
    jenis:"Sedimen Klastik",
    struktur:"Masif",
    ukuran_butir:"Kerikil hingga bongkah (>2 mm)",
    bentuk_butir:"Membundar hingga membulat baik",
    kemas:"Terbuka hingga tertutup",
    pemilahan:"Buruk",
    gambar:"konglomerat.jpg"
},

breksi:{
    kategori:"sedimen",
    nama:"Breksi",
    jenis:"Sedimen Klastik",
    struktur:"Masif",
    ukuran_butir:"Kerikil hingga bongkah (>2 mm)",
    bentuk_butir:"Menyudut hingga menyudut tanggung",
    kemas:"Terbuka hingga tertutup",
    pemilahan:"Buruk",
    gambar:"breksi.jpg"
},

batupasir:{
    kategori:"sedimen",
    nama:"Batupasir",
    jenis:"Sedimen Klastik",
    struktur:"Perlapisan sejajar",
    ukuran_butir:"Pasir (0,0625 - 2 mm)",
    bentuk_butir:"Menyudut tanggung hingga membundar",
    kemas:"Tertutup",
    pemilahan:"Sedang hingga baik",
    gambar:"batupasir.jpg"
},

batulanau:{
    kategori:"sedimen",
    nama:"Batulanau",
    jenis:"Sedimen Klastik",
    struktur:"Perlapisan sejajar",
    ukuran_butir:"Lanau (0,0039 - 0,0625 mm)",
    bentuk_butir:"Sulit diamati dengan mata telanjang",
    kemas:"Tertutup",
    pemilahan:"Baik",
    gambar:"batulanau.jpg"
},

serpih:{
    kategori:"sedimen",
    nama:"Serpih",
    jenis:"Sedimen Klastik",
    struktur:"Fisil (mudah terbelah)",
    ukuran_butir:"Lempung (<0,0039 mm)",
    bentuk_butir:"Sangat halus",
    kemas:"Tertutup",
    pemilahan:"Baik",
    gambar:"serpih.jpg"
},

batugamping:{
    kategori:"sedimen",
    nama:"Batugamping",
    jenis:"Sedimen Non-Klastik",
    struktur:"Masif",
    ukuran_butir:"Mikrit hingga bioklas",
    bentuk_butir:"Bervariasi tergantung penyusun",
    kemas:"Tertutup",
    pemilahan:"Baik hingga buruk",
    gambar:"batugamping.jpg"
},

batubara:{
    kategori:"sedimen",
    nama:"Batubara",
    jenis:"Sedimen Organik",
    struktur:"Perlapisan",
    ukuran_butir:"Tidak tampak",
    bentuk_butir:"Tidak teramati",
    kemas:"Masif",
    pemilahan:"Tidak berlaku",
    gambar:"batubara.jpg"
},

rijang:{
    kategori:"sedimen",
    nama:"Rijang",
    jenis:"Sedimen Kimia",
    struktur:"Masif",
    ukuran_butir:"Mikrokristalin",
    bentuk_butir:"Tidak tampak",
    kemas:"Masif",
    pemilahan:"Baik",
    gambar:"rijang.jpg"
},

dolomit:{
    kategori:"sedimen",
    nama:"Dolomit",
    jenis:"Sedimen Kimia",
    struktur:"Masif",
    ukuran_butir:"Halus hingga sedang",
    bentuk_butir:"Kristalin",
    kemas:"Tertutup",
    pemilahan:"Baik",
    gambar:"dolomit.jpg"
},

evaporit:{
    kategori:"sedimen",
    nama:"Evaporit",
    jenis:"Sedimen Kimia",
    struktur:"Masif",
    ukuran_butir:"Kristalin",
    bentuk_butir:"Kristalin",
    kemas:"Tertutup",
    pemilahan:"Baik",
    gambar:"evaporit.jpg"
},

filit:{
    kategori:"metamorf",
    nama:"Filit",
    struktur:"Foliasi",
    protolit:"serpih, batulanau, slate",
    derajat_metamorfisme:"Rendah hingga Menengah",
    tekstur:"Halus dengan kilap sutra",
    warna:"Abu-abu, hijau, keperakan",
    pembentukan:"Terbentuk dari metamorfisme lanjutan batu sabak akibat peningkatan suhu dan tekanan.",
    gambar:"filit.jpg"
},

sekis:{
    kategori:"metamorf",
    nama:"Sekis",
    struktur:"Foliasi (schistosity)",
    protolit:"serpih/shale",
    tekstur:"Berbutir sedang hingga kasar",
    derajat_metamorfisme:"Menengah",
    warna:"Abu-abu, coklat, kehitaman",
    pembentukan:"Terbentuk dari metamorfisme batuan lempung atau filit pada kondisi suhu dan tekanan lebih tinggi.",
    gambar:"sekis.jpg"
},

gneiss:{
    kategori:"metamorf",
    nama:"Gneiss",
    struktur:"Foliasi berpita (gneissic banding)",
    protolit:"batupasir,shale,gabro,granitoid",
    tekstur:"Berbutir kasar",
    derajat_metamorfisme:"Tinggi",
    warna:"Hitam-putih berpita",
    pembentukan:"Terbentuk dari metamorfisme tingkat tinggi batuan beku atau sedimen.",
    gambar:"gneiss.jpg"
},

kuarsit:{
    kategori:"metamorf",
    nama:"Kuarsit",
    struktur:"Masif",
    protolit:"batupasir kaya kuarsa",
    tekstur:"Granoblastik",
    derajat_metamorfisme:"Menengah hingga Tinggi",
    warna:"Putih, abu-abu, kemerahan",
    pembentukan:"Terbentuk dari metamorfisme batu pasir kuarsa akibat suhu dan tekanan tinggi.",
    gambar:"kuarsit.jpg"
},

amfibolit:{
    kategori:"metamorf",
    nama:"Amfibolit",
    struktur:"Foliasi lemah hingga masif",
    protolit:"batuan beku mafik, batuan karbonat",
    tekstur:"Granoblastik",
     derajat_metamorfisme:"Menengah hingga Tinggi",
    warna:"Hijau tua hingga hitam",
    pembentukan:"Terbentuk dari metamorfisme batuan mafik seperti basalt dan gabro.",
    gambar:"amfibolit.jpg"
},

hornfels:{
    kategori:"metamorf",
    nama:"Hornfels",
    struktur:"Masif",
    protolit:"batuan sedimen, beku, atau piroklastik",
    tekstur:"Non-foliasi",
     derajat_metamorfisme:"Bervariasi (umumnya Menengah)",
    warna:"Hitam, abu-abu, coklat",
    pembentukan:"Terbentuk akibat metamorfisme kontak di sekitar intrusi magma.",
    gambar:"hornfels.jpg"
}

};

function cariBatuan(){

    let nama = document.getElementById("namaBatuan")
                 .value
                 .toLowerCase();

    let hasil = document.getElementById("hasil");


    if(databaseBatuan[nama]){

        let batuan = databaseBatuan[nama];
       
        //BATUAN BEKU
        if(batuan.kategori === "beku"){

            hasil.innerHTML = `
            <div class="card">

                <h2>${batuan.nama}</h2>

                <img src="${batuan.gambar}" alt="${batuan.nama}">

                <p><b>Kategori:</b> Batuan Beku</p>
                <p><b>Warna:</b> ${batuan.warna}</p>
                <p><b>Tekstur:</b> ${batuan.tekstur}</p>
                <p><b>Struktur:</b> ${batuan.struktur}</p>
                <p><b>Pembentukan:</b> ${batuan.pembentukan}</p>

            </div>
            `;
        } 
        

        //BATUAN SEDIMEN
        else if(batuan.kategori === "sedimen"){

            hasil.innerHTML = `
            <div class="card">

                <h2>${batuan.nama}</h2>

                <img src="${batuan.gambar}" alt="${batuan.nama}">

                <p><b>Kategori:</b> Batuan Sedimen</p>
                <p><b>Jenis:</b> ${batuan.jenis}</p>
                <p><b>Struktur:</b> ${batuan.struktur}</p>
                <p><b>Ukuran Butir:</b> ${batuan.ukuran_butir}</p>
                <p><b>Bentuk Butir:</b> ${batuan.bentuk_butir}</p>
                <p><b>Kemas:</b> ${batuan.kemas}</p>
                <p><b>Pemilahan:</b> ${batuan.pemilahan}</p>

            </div>
            `;
        }

        //BATUAN METAMORF
         else if(batuan.kategori === "metamorf"){

            hasil.innerHTML = `
            <div class="card">

                <h2>${batuan.nama}</h2>

                <img src="${batuan.gambar}" alt="${batuan.nama}">

                <p><b>Kategori:</b> Batuan Metamorf</p>
                <p><b>Warna:</b> ${batuan.warna}</p>
                <p><b>Tekstur:</b> ${batuan.tekstur}</p>
                <p><b>Struktur:</b> ${batuan.struktur}</p>
                <p><b>Protolit:</b> ${batuan.protolit}</p>
                <p><b>Derajat Metamorfisme:</b> ${batuan.derajat_metamorfisme}</p>

            </div>
            `;
        }

    


}else{

        hasil.innerHTML = `
        <div class="card">
            <h2>Batuan Tidak Ditemukan</h2>
        </div>
        `;
    }

}

document.getElementById("namaBatuan")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        cariBatuan();
    
    }

});

