var scroll = 1,
button_2 = 1,
es = 1,
texta = `Ля дурачок`,
arr = ["C:\\Users", "D:\\Users", "E:\\Users", "F:\\Users"],
arr_C = ["9cdc1af84ee14fa40d334c5beb", "9d5e6a70bd0b878d1e99da6f6bea", "Games", "Program Files","Windows Defender","Windows Mail","Windows Media Player","Windows NT","Windows Photo Viewer","Windows Portable Devices","Windows Sidebar","Windows","Program Files (x86)"],
arr = ["C:\\Users", "D:\\", "E:\\", "F:\\"];
function randomString(len, an){
    an = an&&an.toLowerCase();
    var str="", i=0, min=an=="a"?10:0, max=an=="n"?10:62;
    for(;i++<len;){
      var r = Math.random()*(max-min)+min <<0;
      str += String.fromCharCode(r+=r>9?r<36?55:61:48);
    }
    return str;
}
function error_1() {
    var div = document.createElement('div'),
    rand = Math.floor(Math.random() * arr.length);
    div.className = "csssasd";
    div.innerHTML = `<div>` + scroll++ + ". " + arr[rand] + `\\` + arr_C[rand] + `\\` + randomString(50) +`</div>`;
    document.body.insertBefore(div, document.body.firstChild);
}