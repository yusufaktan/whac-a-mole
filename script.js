            var puan = 0;
            var degisken = setInterval(calistir, 1500); //cocuklar icin 1.5 saniye

            //SESLER--------------------------------------------------------------------------------------------------
            let play = function () {
                document.getElementById("audio").play()
            }
            let play2 = function () {
                document.getElementById("audio2").play()
            }
            let play3 = function () {
                document.getElementById("audio3").play()
            }
            let play4 = function () {
                document.getElementById("audio4").play()
            }
            //--------------------------------------------------------------------------------------------------

            //FOTOGRAFIN YER DEGISTIRMESINI SAGLAYAN FONKSIYON--------------------------------------------------------------------------------------------------
            var degisken = setInterval(calistir, 1500);
            function calistir() {

                play4();
                for (i = 1; i <= 16; i++) {
                    document.getElementById("btn" + i).style.backgroundImage = "none";
                    document.getElementById("btn" + i).style.backgroundColor = "white";
                }
                alt = 1;
                ust = 16;
                aralik = ust - alt + 1;
                deger = Math.floor(Math.random() * (aralik)) + alt;
                document.getElementById("btn" + deger).style.backgroundImage = "url('img/picture.png')";

            }
            //--------------------------------------------------------------------------------------------------

            //TIKLANAN KUTUYU KONTROL EDEN FONKSIYON--------------------------------------------------------------------------------------------------
            function kontrol(tiklanan_id) {

                document.getElementById("bilgi").innerHTML = "";

                if (document.getElementById(tiklanan_id).style.backgroundImage == 'url("img/picture.png")') {
                    play();
                    puan += 10;
                    element = document.getElementById("bilgi");
                    element.classList.remove("yanlis");
                    element.classList.add("dogru");
                    document.getElementById("bilgi").innerHTML = "Tebrikler, puan:" + puan;
                    document.getElementById(tiklanan_id).style.backgroundImage = "url('img/picture2.png')";
                } else {
                    play3();
                    puan -= 5;
                    element = document.getElementById("bilgi");
                    element.classList.remove("dogru");
                    element.classList.add("yanlis");
                    document.getElementById("bilgi").innerHTML = "Üzgünüm, puan:" + puan;

                }

                if (puan == 100 || puan == 105) {
                    alert('Tebrikler 100 puana ulaştınız');
                    play2();
                }
            }
            //--------------------------------------------------------------------------------------------------