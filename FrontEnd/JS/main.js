/////////////////////////////////////////////////////////////signin Page 
// fetch("").then((result)=>{
// console.log(result);
// });
// const SigninForm = document.getElementById('Signin-form');

// SigninForm.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const userName = document.getElementById('userName').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   console.log('userName:', userName);
//   console.log('Email:', email);
//   console.log('Password:', password);
// });

/////////////////////////////////////////////////////////////signUP Page 
 

const signupForm = document.getElementById('Signin-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;


//confirmPasswordبتاكد ان الباسور = ال 
  if  (password !== confirmPassword) {
    console.error('Passwords do not match.');
    return; 
  }

  //هيطبعلى البايانات فى console
  console.log('Signup data:', {
    firstName,
    lastName,
    age,
    password, 
  });
});




// // ============Signin functionality================
// ///================ Validation===============
// ////=====name===============
// let name = document.getElementById('name');
// let pass =document.getElementById('password');
// let nameAlart = document.getElementById('nameAlart');
// let passAlart = document.getElementById('passAlart');
// let Signinbtn = document.getElementById('Signinbtn');
// let Signin = document.getElementById('Signin');


// let objForm={
//   name:name.value,
//   pass:pass.value
// }
// let nameRegx =/^[A-Za-z]{3,}$/;
// function checkName()
// {
//   if(nameRegx.test(name.value))
//   {
//     return true;
//   }else{
//     return false;
//   }
// }
// //======password==========
// let passRegx =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/;
// function checkPass()
// {
//   if(passRegx.test(pass.value))
//   {
//     return true;
//   }else{
//     return false;
//   }
// }

// ///=========== Booking Card===========
// let card = document.querySelector('.card');
// let openCard =document.querySelector('.booking-nav');
// let closeCard = document.getElementById('close');

// openCard.addEventListener('click',()=>{
//   card.classList.add('active')
// });
// closeCard.addEventListener('click',()=>{
//   card.classList.remove('active')
// })
// const product =[
//   {
//       id:0,
//       image:'images/hotels1.jpg',
//       title:'Rixos Premium',
//       price:420,
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus.",
//   },
//   {
//       id:1,
//       image:'images/hotels2.jpg',
//       title:'La Masion Blue',
//       price:220,
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus.",
//   },
//   {
//       id:2,
//       image:'images/hotels4.jpg',
//       title:'Paron Place',
//       price:450,
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus.",
//   },
//   {
//       id:3,
//       image:'images/hotels3.jpg',
//       title:'pickalbatros Citdal',
//       price:620,
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus.",
//   },
//   {
//     id:4,
//     image:'images/hotels5.jpg',
//     title:'Pochnki',
//     price:620,
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus.",
// },
// {
//   id:5,
//   image:'images/hotels7.jpg',
//   title:'Gostafo',
//   price:620,
//   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatibus.",
// },
// ]
// const categories = [...new Set(product.map((item)=>
// {return item}))];
// let i = 0;
// document.getElementById('root').innerHTML=categories.map((item)=>{
//   let {image , title , price, description} = item;
//   // distruct
//   return(
//       `<div class=' col-lg-4 mt-2  col-md-6  '>
//       <div class="card">
//       <img class='card-img-top w-100 ' src=${image}></img>
//       <div class='card-body'>
//       <p class="fs-2 one-color">${title}</p>
//       <p class="lead">${description}</p>
//       <h2 style='font-size:25px;' >$ ${price}.00</h2>`+
//       "<button class='main-btn' onclick='addtocart("+(i++)+")'>Book Now</button>"+`
//       </div>
//       </div>
      
//       </div>`
//   )
// }).join('');

// var cart =[];
// function addtocart(a){
//   cart.push({...categories[a]});
//   displaycart();
// } 
// function delElement(a){
//   cart.splice(a, 1);
//   displaycart();
// }
// function displaycart(a){
//   let j = 0 , total =0;
//   document.getElementById('quantity').innerHTML=cart.length;
//   if(cart.length==0){
//     document.getElementById('cartItem').innerHTML= "Your booking list is empty";
//     document.getElementById('total').innerHTML="$ "+0+".00";
//   }
//   else{
//     document.getElementById('cartItem').innerHTML = cart.map((items)=>{
//       var {image,title,price} = items;
//       total=total+price;
//       document.getElementById('total').innerHTML="$ "+total+".00";
//       return(
//         `<div class='cart-item'> 
//         <div class='row-img'>
//         <img class='rowimg' src=${image} >
//         </div>
//         <p class='one-color' style='font-size:18px;'>${title}</p>
//         <h2 class='one-color' style='font-size:20px;'>$ ${price}.00</h2>`+
//         "<i style='color:red;' class='fa-solid fa-trash' onclick=delElement("+(j++)+")></i></div>"
//       )
//     }).join('');
//   }
// }
// // booking///////////
// (function ($) {
//   "use strict";

  
//   /*==================================================================
//   [ Validate ]*/
//   var input = $('.validate-input .input100');

//   $('.validate-form').on('submit',function(){
//       var check = true;

//       for(var i=0; i<input.length; i++) {
//           if(validate(input[i]) == false){
//               showValidate(input[i]);
//               check=false;
//           }
//       }

//       return check;
//   });


//   $('.validate-form .input100').each(function(){
//       $(this).focus(function(){
//          hideValidate(this);
//       });
//   });

//   function validate (input) {
//       if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//           if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//               return false;
//           }
//       }
//       else {
//           if($(input).val().trim() == ''){
//               return false;
//           }
//       }
//   }

//   function showValidate(input) {
//       var thisAlert = $(input).parent();

//       $(thisAlert).addClass('alert-validate');
//   }

//   function hideValidate(input) {
//       var thisAlert = $(input).parent();

//       $(thisAlert).removeClass('alert-validate');
//   }
  
  

// })(jQuery);


