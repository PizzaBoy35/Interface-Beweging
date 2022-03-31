/*eslint-env browser*/

var buttonLaugh = document.getElementById('button_laugh');
var buttonScroll = document.getElementById('button_scroll');
var buttonError = document.getElementById('button_error');
var soundLaugh = document.getElementById('laugh');
var soundScroll = document.getElementById('scroll');
var soundError = document.getElementById('error');
var video = document.getElementById('video');

const canvas = document.getElementById('tekst');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;
const fontSize = 16;const columns = canvas.width/fontSize;
const rainDrops = [];


buttonLaugh.addEventListener('click', speelLaugh);
buttonScroll.addEventListener('click', speelScroll);
buttonError.addEventListener('click', speelError);

function speelLaugh() {
    video.src = "images/videos/Def_Laughing_Skull.mp4";
    soundLaugh.play();
    console.log('run laugh');
}

function speelScroll() {
    //video.src = "img/videos/matig.mp4";

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

    soundScroll.play();
    console.log('run scroll');
}

function speelError() {
    video.src = "images/videos/Skull_Color.mp4";
    soundError.play();
    console.log('run error');
}
