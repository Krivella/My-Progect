"use strict"
let people_1 = document.getElementById("1")
people_1.addEventListener('click', function(){
	let span = this.nextElementSibling;
	span.innerHTML = 
	`<p>Петр - автор проекта HouseKeeper. Именно он сподвиг создать Александра данный ресурс и развивать компанию в IT части</p>
	 <button class = "delete">X</button>`;
	 let button = span.getElementsByClassName('delete')[0];
     button.addEventListener("click", function(){
     span.innerHTML ="";
    })
	})

let people_2 = document.getElementById("2")
people_2.addEventListener('click', function(){
	let span = this.nextElementSibling;
	span.innerHTML = 
	`<p>Александр - the creator of this resource. Начинающий Web_Dev. Пока что работает инженером на заводе. Но скоро он всем покажет, надеемся!</p>
	 <button class = "delete">X</button>`;
	 let button = span.getElementsByClassName('delete')[0];
     button.addEventListener("click", function(){
     span.innerHTML ="";
    })
	})
	
let people_3 = document.getElementById("3")
people_3.addEventListener('click', function(){
	let span = this.nextElementSibling;
	span.innerHTML = 
	`<p>Егор - очень большой бизнесмен! Может, когда хочет. Когда не хочет тоже может. Любой вопрос по строительству решит в кратчайший срок!!</p>
	 <button class = "delete">X</button>`;
	 let button = span.getElementsByClassName('delete')[0];
     button.addEventListener("click", function(){
     span.innerHTML ="";
    })
	})

let people_4 = document.getElementById("4")
people_4.addEventListener('click', function(){
	let span = this.nextElementSibling;
	span.innerHTML = 
	`<p>Дмитрий - отличный парень, работяга. Красивый, умный и просто хороший человек. Решение ваших проблем - его рук дело!</p>
	 <button class = "delete">X</button>`;
	 let button = span.getElementsByClassName('delete')[0];
     button.addEventListener("click", function(){
     span.innerHTML ="";
    })
	})
	

let application=Vue.createApp({
    data(){
        return{
 services: [
         {
             title: "Базовый пакет",
             price: 7000
         },
         {
             title: "Расширенный пакет",
             price: 13000
         },
         {
             title: "Пакет 'Всё включено'",
             price: 19000
         },
         {
             title: "Покос газона",
             price: 2000
         },
         {
             title: "Обслуживание/чистка канализации",
             price: 1500
         },
         {
             title: "Чистка септика",
             price: 1500
         },
         {
             title: "Провести/настроить интернет",
             price: 5000
         },  
     ],
     checkedServices: []
        }
        },
    computed:{
       cost(){ 
            return this.services.sort((a, b) => a.price - b.price);
        },
        getSumm()
        {
            let res= 0;
            for (let service of this.checkedServices) 
            {
                res += this.services[service].price
            }
            return res;
        }
    }
    })
application.mount("#application");	


let form = document.forms.registration;
registration.elements.password.addEventListener('input', function(){

 if (password.validity.tooShort){
 	this.nextElementSibling.innerText = 'Количество символов от 6 до 15'
 }else if(password.validity.tooLong){
 	this.nextElementSibling.innerText='Количество символов от 6 до 15'
 }else this.nextElementSibling.innerText= ' '
});


function ValidMail() {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('Email').value;
    let valid = re.test(myMail);
    let output = document.getElementsByClassName('message')[0]
    if (valid) output.innerText = 'Адрес эл. почты введен правильно!';
    else output.innerText = 'Адрес электронной почты введен некорректно';
    return valid;
}


function ValidPhone() {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    let myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone);
    let output = document.getElementsByClassName('message')[4]
    if (valid) output.innerText = 'Номер телефона введен правильно!';
    else output.innerText = 'Номер телефона введен неправильно!';
    return valid;
}  

let button = document.getElementById("5")
button.addEventListener('click', function(){
	let state = button.style.display;
	if (state =='') button.style.display='none';
	let div = this.nextElementSibling;
	div.innerHTML = 
	`<div>
	        <h3>Учетная запись</h3>
 			<label for="Email">Email</label>
 			<input class="input-email" id="Email" type="Email" name="Email" placeholder="Введите email" required>
 			<span class="message"></span>
 			
 			<label for="password">Пароль</label>
 			<input class="inSitePas" id="password" type="password" name="password" placeholder="Введите пароль"  required>
 			<span class="message"></span>
 		    <button class = "delete_1">X</button>
 		    <button class = "button_1">Войти</button>
 	</div>`	;
	let buttonClose = div.getElementsByClassName('delete_1')[0];
    buttonClose.addEventListener("click", function(){
		 div.innerHTML ="";
		 button.style.display='';
    })
	
	let login = div.getElementsByClassName("button_1")[0];
	login.addEventListener('click', function(){
		let data = {
		  login: div.getElementsByClassName('input-email')[0].value,
		  pass: div.getElementsByClassName('inSitePas')[0].value
		};
	  
		axios.post('/api/auth/login', data)
		  .then((res)=>{
			if(res.status == 200){
			  location.href = "/adminka.html";
			}
		  })
		  .catch((err)=>{
			console.log(err);
		  });
	})
})

let quest = document.getElementsByClassName('pulse')[0];
quest.addEventListener('click', function(){
    let div = this.nextElementSibling;
    div.innerHTML = 
    `<div class='firstmodal'>
    <h3>Задайте свой вопрос</h3>
    <div class='secmodal'>
    <label for="quest">Что вас интересует?</label>
    <input class="someQuest" id="quest" type="text" name="quest" placeholder="Ваш вопрос" required>
    <span class="message"></span>
            
    <label for="number">Номер телефона</label>
    <input class="someNumb" id="number" type="text" name="number" placeholder="Ваш номер"  required>
    <span class="message"></span>
    </div>
    <button class = "delete_1">X</button>
    <button class = "button_1">Отправить</button>`
    let buttonClose = div.getElementsByClassName('delete_1')[0];
    buttonClose.addEventListener("click", function(){
         div.innerHTML ="";
})
})