//var displayKeys = document.getElementById("keytext");
document.addEventListener('keydown', (event) =>{
var name = event.key;
var code = event.code;
//displayKeys.innerHTML += `${name} `;

const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
console.log(name)
if(name="z"){
audio.play();
}
}, false);

