document.getElementById('in').oninput = function() {
    var help = document.getElementById('help');
    help.innerHTML = String.fromCharCode(97);
    var str = this.value;
    console.log(str.charCodeAt(0));
}