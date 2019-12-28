document.getElementById('in').oninput = function() {
    const offset = 3;
    var help = document.getElementById('help');
    var str = this.value;
    console.log(str.charCodeAt(0));
    var out = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
}