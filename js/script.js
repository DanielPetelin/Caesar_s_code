//Функция, которая шифрует.
document.getElementById('in').oninput = function() {
    const offset = 3;
    var help = document.getElementById('help');
    //из кода в символы.
    var str = this.value;
    //из символов в код.
    console.log(str.charCodeAt(0));
    var out = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
}

//Расшифровка.
document.getElementById('out2').oninput = function() {
    const offset = 3;
    var str = this.value;
    var out = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        code = code - offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out3').innerHTML = out;
}