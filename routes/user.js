const express = require("express");
const router = express.Router();

const db = require("../data/db");

const data = {
    title: "populer kuruslar",
    categories: ["Web Gelistirme", "Mobil Uygulamalar", "Veri Analiz","Programlama" ,"Ofis Uygulamalari"],
    blogs: [
        {
            blogid: 1,
            baslik: "Komple Uygulamalı Web Geliştirme Eğitimi",
            aciklama: "Sıfırdan ileri seviyeye Web Geliştirme Html, Css, Sass, Flexbox,Javascript, Angular, JQuery",
            resim: "1.jpeg",
            anasayfa:true,
            onay: true,
                         
        },
        {
            blogid: 2,
            baslik: "Python ile Sıfırdan İleri Seviye Python Programlama",
            aciklama: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
            resim: "2.jpg",
            anasayfa:true,
            onay: false,
                         
        },
        {
            blogid: 3,
            baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
            aciklama: "Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için  temel oluşturun.",
            resim: "3.jpg",
            anasayfa:false,
            onay: true,
                         
        },
        {
            blogid: 4,
            baslik: "Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
            aciklama: "Node.js ile sıfırdan ileri seviye dinamik web uygulaması geliştirmeyi öğren.",
            resim: "4.jpg",
            anasayfa:true,
            onay: true,
                         
        },
        {
            blogid: 5,
            baslik: "Nokia ve ile Sıfırdan İleri Seviye Web Geliştirme",
            aciklama: "Nokia.js ile sıfırdan ileri seviye dinamik  geliştirmeyi öğren.",
            resim: "5.jpeg",
            anasayfa:true,
            onay: true,
                         
        },
    ]
}

router.use("/blogs/:blogid", function (req, res) {
    res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
    db.execute("select * from blog")
        .then(result => {
            res.render("users/blogs",{
                title: "Tum kuruslar",
                blogs:result[0],
                categories: data.categories
            });
        })
        .catch(err => console.log(err));

    
});


router.use("/", function (req, res) {
    db.execute("select * from blog")
        .then(result => {
            res.render("users/index",{
                title: "populer kuruslar",
                blogs:result[0],
                categories: data.categories
            });
        })
        .catch(err => console.log(err));

    
});

module.exports = router;