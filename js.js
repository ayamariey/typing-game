const words = ["inception", "events", "team", "video", "anas", "edit", "talent", "egypt", "king", "charity"];
const value = document.getElementById('levels');
const lable = document.getElementById('w');
const indxvalue = document.getElementById('word');
const score = document.getElementById('s');
const time0 = document.getElementById('t');
const button = document.getElementById('but');
let start = async () => {
    t = 30;
    if (value.value == 2) {
        t = 20;
    }
    if (value.value == 3) {
        t = 10;
    }
    s = 0;
    lable.innerHTML = words[index()];
    var time = setInterval(timer, 1000);
    async function timer() {
        t--;
        if (t <= 0) {
            clearInterval(time);
            alert("Game Over!" + "   " + "score =" + s);
            s = "";
            t = "";
            indxvalue.value = "";
            lable.innerHTML = "";
        }
        time0.innerHTML = t;
        score.innerHTML = s;
    }
};
async function com() {
    if (indxvalue.value == lable.innerHTML) {
        s++;
        lable.innerHTML = words[index()];
        score.innerHTML = s;
        indxvalue.value = "";
    }
}
function index() {
    return Math.floor(Math.random() * 10);
}

button.addEventListener('click', start);
indxvalue.addEventListener('keyup', com);

