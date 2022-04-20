var symbol = '';

for (var i = 0; i < 7; i++){
    if (i == 0) {
        symbol = symbol + '*';
        console.log(symbol)
    } else {
        symbol = symbol + '*';
        console.log(symbol)
    }
}

//===============================

var pic = '';

for (a = 0; a <= 11; a++) {
    if (a == 0) {
        for (b = 0; b <= 29; b++) {
            if (b == 0 || b == 29) {
                pic = pic + `"`;
            } else {
                pic = pic + `#`;
            }
        } pic = pic + '\n';
    } 
    if (a == 1) {
        for (c = 0; c <= 29; c++) {
            if (c == 0 || c == 29) {
                pic = pic + `"`;
            } else if (c <= 5 || c>= 23) {
                pic = pic + `#`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    } 
    if (a == 2) {
        for (d = 0; d <= 29; d++) {
            if (d == 0 || d == 29) {
               pic = pic + `"`; 
            } else if (d <= 2 || d >= 27) {
                pic = pic + `#`; 
            } else if ((d >= 6 && d <= 8) || d>=25) {
                pic = pic + `*`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    } 
    if (a == 3) {
        for (e = 0; e <= 29; e++) {
            if (e == 0 || e == 29) {
                pic = pic + `"`;
            } else if (e == 1 || e==6 || e==7 || e==27 || e==28) {
                pic = pic + `#`;
            } else if (e >= 5 && e <= 9 || e == 19 || e == 20||e==26) {
                pic = pic + `*`;
            } else if (e == 23) {
                pic = pic + `O`;
            } else {
               pic = pic + ` `; 
            }
        } pic = pic + '\n';
    } 
    if (a == 4) {
        for (f = 0; f <= 29; f++){
            if (f == 0 || f == 29) {
                pic = pic + `"`;
            } else if (f == 1 || f == 19 || f == 20 || f == 28) {
                pic = pic + `#`;
            } else if ((f >= 6 && f <= 8) || (f >= 21 && f <= 22) || f==27) {
                pic = pic + `*`;
            } else if (f==14) {
                pic = pic + `O`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    } 
    if (a == 5) {
        for (g = 0; g <= 29; g++){
            if (g == 0 || g == 29) {
                pic = pic + `"`;
            } else if (g == 1 || g == 19 || g == 20 || g == 28) {
                pic = pic + `#`;
            } else if (g >= 21 && g <= 23) {
                pic = pic + `*`;
            } else if (g == 9) {
                pic = pic + `O`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    }
    if (a == 6) {
       for (h = 0; h <= 29; h++){
            if (h == 0 || h == 29) {
                pic = pic + `"`;
            } else if (h == 1 || h == 19 || h == 20 || h == 28) {
                pic = pic + `#`;
            } else if (h >= 21 && h <= 22) {
                pic = pic + `*`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n'; 
    }
    if (a == 7) {
        for (j = 0; j <= 29; j++){
            if (j == 0 || j == 29) {
                pic = pic + `"`;
            } else if (j == 1 || j == 13 || j == 28) {
                pic = pic + `#`;
            } else if (j ==14) {
                pic = pic + `*`;
            } else if (j == 5) {
                pic = pic + `O`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    }
    if (a == 8) {
        for (k = 0; k <= 29; k++){
            if (k == 0 || k == 29) {
                pic = pic + `"`;
            } else if (k == 1 || k == 13 || k == 28) {
                pic = pic + `#`;
            } else if (k==2||k ==14 || k==15) {
                pic = pic + `*`;
            } else if (k == 23) {
                pic = pic + `O`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    }
    if (a == 9) {
        for (l = 0; l <= 29; l++){
            if (l == 0 || l == 29) {
                pic = pic + `"`;
            } else if (l == 1 || l == 13|| l==14 || l == 28) {
                pic = pic + `#`;
            } else if ((l>=2&&l<=4)||l ==15 || l==16|| l==26||l==27) {
                pic = pic + `*`;
            } else if (l == 21) {
                pic = pic + `O`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    }
    if (a == 10) {
        for (m = 0; m <= 29; m++){
            if (m == 0 || m == 29) {
                pic = pic + `"`;
            } else if (m == 1 || m == 2|| (m>=12&&m<=14) || (m>=26&&m<=28)) {
                pic = pic + `#`;
            } else if ((m>=3&&m<=6)||(m>=15&&m<=17)||m==25) {
                pic = pic + `*`;
            } else {
                pic = pic + ` `;
            }
        } pic = pic + '\n';
    }
    if (a == 11) {
        for (n = 0; n <= 29; n++) {
            if (n == 0 || n == 29) {
                pic = pic + `"`;
            } else {
                pic = pic + `#`;
            }
        } pic = pic + '\n';
    }
}

console.log(pic)