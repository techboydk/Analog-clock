function timeshow(a, b, c) {
    var Ampm;
    var time;
    if (a < 12) {
        Ampm = "AM";
    } else {
        Ampm = "PM";
    }

    if (b < 10) {
        b = "0" + b;
    }
    if (c < 10) {
        c = "0" + c;
    }
    if (a == 12) {
        time = a + " : " + b + " : " + c;
    } else {
        a = a % 12;
        if (a < 10) {
            a = "0" + a;
        }
        time = a + " : " + b + " : " + c;
    }
    time = time.bold();
    Ampm = Ampm.bold();
    document.getElementById('time').innerHTML = time;
    document.getElementById('ampm').innerHTML = Ampm;
}

setInterval(() => {
    d = new Date();
    hr = d.getHours();
    mn = d.getMinutes();
    sc = d.getSeconds();
    h = hr * 30 + (mn / 2);
    m = mn * 6;
    s = sc * 6;
    hour.style.transform = "rotate(" + h + "deg)";
    minute.style.transform = "rotate(" + m + "deg)";
    second.style.transform = "rotate(" + s + "deg)";
    timeshow(hr, mn, sc);
}, 1000);
