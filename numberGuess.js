let userInput = document.getElementById('userno');
let result = document.getElementById('result');
let comp = Math.ceil(Math.random() * 5);
//document.getElementById('comp').innerHTML = comp;
let count = 5;
document.getElementById('submit').onclick = function(){
    if(comp == userInput.value){
        result.innerHTML = `Correct Answer. YOU WIN - Score: ${count} <br><button onclick="location.reload();">Restart</button>`;
        document.getElementById('submit').setAttribute('disabled', 'disabled');

    }
    else{
        if(count != 0){
            result.innerHTML = 'Wrong Answer';
            userInput.value = '';
        }
        count = count - 1;
        if(count == 0){
            document.getElementById('submit').setAttribute('disabled', 'disabled');
            result.innerHTML = 'YOU LOSE <br><button onclick="location.reload();">Restart</button>';
        }
        document.getElementById('chance').innerHTML = `You have ${count} chances`;
    }
}