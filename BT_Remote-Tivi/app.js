function Remote(pass) {
    this.pass = pass;
    this.checkPass = function (tivi) {
        if (this.pass === tivi.pass) {
            return true;
        }
    };
    this.getStatus = function (tivi) {
        tivi.status = false;
    };
    this.getOnOffRemote = function (tivi) {
        if (this.checkPass(tivi))
            // tivi.getOnOff();
            tivi.status = !tivi.status;
        console.log("Bật Tắt Bằng Remote " + tivi.getOnOff());
    };
    this.getTangKenhRemote = function (tivi) {
        if (this.checkPass(tivi) && tivi.status) {
            if (tivi.kenh<20){
                tivi.kenh++;
            }else {
                tivi.kenh=0;
            }
            console.log("Tăng Kênh Bằng Remote " + tivi.kenh);
        }
    };
    this.getGiamKenhRemote = function (tivi) {
        if (this.checkPass(tivi) && tivi.status) {
            if (tivi.kenh>0){
                tivi.kenh--;
            }else {
                tivi.kenh=20;
            }
            console.log("giảm Kênh Bằng Remote " + tivi.kenh);
        }
    };
    this.getGiamTangLuongRemote = function (tivi) {
        if (this.checkPass(tivi) && tivi.status) {
            tivi.amLuong++;
            console.log("Tăng Âm Bằng Remote " + tivi.amLuong);
        }
    };
    this.getGiamAmLuongRemote = function (tivi) {
        if (this.checkPass(tivi) && tivi.status) {
            tivi.amLuong--;
            console.log("giảm Âm Bằng Remote " + tivi.amLuong);
        }
    };
    this.getChuyenKenh = function (tivi, id_kenh) {
        if (this.checkPass(tivi) && tivi.status) {
            switch (parseInt(id_kenh)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    tivi.kenh = id_kenh;
                    break;
            }
        }
    }
}

function Tivi(pass, kenh, amLuong, status) {
    this.pass = pass;
    this.kenh = kenh;
    this.amLuong = amLuong;
    this.status = status;
    this.getOnOff = function () {
        if (this.status) {
            this.status = !this.status;
            return "rgba(0,0,0,0.7)";
        } else {
            this.status = !this.status;
            return "rgba(79,255,41,0.34)"
        }
    };
    this.getTangKenh = function () {
        if (this.status) {
            if (this.kenh < 20) {
                this.kenh++;
            } else {
                this.kenh = 0;
            }
            console.log("tăng kenh Tivi" + this.kenh);
        }
    };
    this.getGiamKenh = function () {
        if (this.status) {
            if (this.kenh > 0) {
                this.kenh--;
            } else {
                this.kenh = 20;
            }
            console.log("tăng kenh Tivi" + this.kenh);
        }
    };
    this.getTangAmLuong = function () {
        if (this.status)
            this.amLuong++;
        console.log("tăng Âm Tivi" + this.amLuong);
    };
    this.getGiamAmLuong = function () {
        if (this.status)
            this.amLuong--;
        console.log("Giảm Âm Tivi" + this.amLuong);
    };
    this.random = function () {
        return Math.floor(Math.random() * 255);
    };
    this.randomColor = function () {
        if (this.status) {
            let red = this.random();
            let blue = this.random();
            let green = this.random();
            return "rgb(" + red + "," + blue + "," + green + ")";
        }
    }
}

let tivi = new Tivi(1234, 5, 20, false);

function onOffTivi() {
    if (tivi.status) {
        document.getElementById("manTV").style.backgroundColor = tivi.getOnOff();
        document.getElementById("manTV").innerHTML = "Tivi Đang Tắt";
    } else {
        document.getElementById("manTV").style.backgroundColor = tivi.getOnOff();
        document.getElementById("manTV").innerHTML = "Tivi Đang Bật";
    }
}

function kenhTang() {
    tivi.getTangKenh();
    document.getElementById("kenh").innerHTML = "Kênh : " + tivi.kenh;
    document.getElementById("manTV").style.backgroundColor = tivi.randomColor();
}

function kenhGiam() {
    tivi.getGiamKenh();
    document.getElementById("kenh").innerHTML = "Kênh : " + tivi.kenh;
    document.getElementById("manTV").style.backgroundColor = tivi.randomColor();
}

function amTang() {
    tivi.getTangAmLuong();
    document.getElementById("amTV").innerHTML = "Vol : " + tivi.amLuong;
}

function amGiam() {
    tivi.getGiamAmLuong();
    document.getElementById("amTV").innerHTML = "Vol : " + tivi.amLuong;
}

let remote = new Remote(1234);

function onOffRemote() {
    remote.getOnOffRemote(tivi);
    // console.log(tivi.status);
    if (tivi.status) {
        document.getElementById("manTV").style.backgroundColor = tivi.getOnOff();
        document.getElementById("manTV").innerHTML = "Tivi Đang Tắt";
    } else {
        document.getElementById("manTV").style.backgroundColor = tivi.getOnOff();
        document.getElementById("manTV").innerHTML = "Tivi Đang Bật";
    }
}

function remoteKenhTang() {
    remote.getTangKenhRemote(tivi);
    document.getElementById("kenh").innerHTML = "Kênh : " + tivi.kenh;
    document.getElementById("manTV").style.backgroundColor = tivi.randomColor();
}

function remoteKenhGiam() {
    remote.getGiamKenhRemote(tivi);
    document.getElementById("kenh").innerHTML = "Kênh : " + tivi.kenh;
    document.getElementById("manTV").style.backgroundColor = tivi.randomColor();
}

function remoteAmTang() {
    remote.getGiamTangLuongRemote(tivi);
    document.getElementById("amTV").innerHTML = "Vol : " + tivi.amLuong;
}

function remoteAmGiam() {
    remote.getGiamAmLuongRemote(tivi);
    document.getElementById("amTV").innerHTML = "Vol : " + tivi.amLuong;
}

let main_div = document.querySelector(".remote");
console.log(main_div);
main_div.addEventListener('click', function (ev) {
    if (ev.target.matches("button")) {
        console.log(ev.target.value);
        //tivi.kenh=ev.target.value;
        remote.getChuyenKenh(tivi, ev.target.value);
        console.log("kenh cua tivi: " + tivi.kenh);
        document.getElementById("kenh").innerHTML = "Kênh : " + tivi.kenh;
        document.getElementById("manTV").style.backgroundColor = tivi.randomColor();
    }
});