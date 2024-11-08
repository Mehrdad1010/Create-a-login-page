
document.getElementById('buttom').onclick = recive_data

function recive_data(){
    let UserName = document.getElementById('user_name').value
    let PassWord = document.getElementById('password').value
    let PassWordChek = document.getElementById('password_chek').value

    if (UserName === ''){
        document.getElementById('border').className = 'red_border';
        document.getElementById('user_name').style.color = 'red';
        document.getElementsByClassName('user')[0].style.display = 'block'; 
    } 
    if (PassWord === '') {
      document.getElementById('border2').className = 'red_border';
      document.getElementById('password').style.color = 'red';
      document.getElementsByClassName('pass')[0].style.display = 'block'; 
      document.getElementById('legend1').style.color = 'red';
        
    }
    if (PassWordChek==="") {
      document.getElementById('border3').className = 'red_border';
      document.getElementById('password_chek').style.color = 'red';
      document.getElementsByClassName('pass2')[0].style.display = 'block'; 
      document.getElementById('legend2').style.color = 'red';
    }
    if (PassWord !== PassWordChek) {
      document.getElementById('border2').className = 'red_border';
      document.getElementById('password').style.color = 'red';
      document.getElementsByClassName('passworld')[0].style.display = 'block'; 
      document.getElementById('legend1').style.color = 'red';

      document.getElementById('border3').className = 'red_border';
      document.getElementById('password_chek').style.color = 'red';
      document.getElementsByClassName('passworld')[1].style.display = 'block'; 
      document.getElementById('legend2').style.color = 'red';

    }
    if (PassWord.length<8) {
      document.getElementById('border2').className = 'red_border';
      document.getElementById('password').style.color = 'red';
      document.getElementsByClassName('karecter')[0].style.display = 'block'; 
      document.getElementById('legend1').style.color = 'red';

      document.getElementById('border3').className = 'red_border';
      document.getElementById('password_chek').style.color = 'red';
      document.getElementsByClassName('karecter')[1].style.display = 'block'; 
      document.getElementById('legend2').style.color = 'red';
    }
    let spl = PassWord.split('')
    a=0
    b=0
    for (let index = 0; index < spl.length; index++) {
      spl[index] = parseFloat(spl[index])
      if (!isNaN(spl[index])) {
        a=1;
      }
      if (typeof spl[index] === 'string') {
        b=1
      }
    }
    console.log(a, b);
    if (a===0 || b===0) {
      document.getElementById('border2').className = 'red_border';
      document.getElementById('password').style.color = 'red';
      document.getElementsByClassName('karecter')[0].style.display = 'block'; 
      document.getElementById('legend1').style.color = 'red';

      document.getElementById('border3').className = 'red_border';
      document.getElementById('password_chek').style.color = 'red';
      document.getElementsByClassName('karecter')[1].style.display = 'block'; 
      document.getElementById('legend2').style.color = 'red';
      
    }
}




const form = document.getElementById('myForm');
const input = document.getElementById('user_name');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  if (input.value.trim() === '') {
    console.log('Input value is empty');
  } else {
    console.log('Input value is not empty');
    // Proceed with form submission or further processing
  }
});