import React from 'react'
import emailjs from 'emailjs-com';
import "../styles/index.css"



const sendEmail =()=>{
    function send(e){
        e.preventDefault();

        emailjs.sendForm("service_i6d2w9i", 'template_gdsnm1s', e.target, 'user_YRYV4RSFPDkPocqwO4y4e')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return(
        <div>
<div class="row contactForm ">

<div class="col-md-9 mb-md-0 mb-5">
<form onSubmit={send} class="sendForm" >

 <div class="row">

     <div class="col-md-6">
         <div class="md-form mb-0">
             <input class="textArea"class="textArea"  type="text" id="name" name="name" class="form-control" placeholder="Name"/>
             <label for="name" class="" ></label>
         </div>
     </div>

     <div class="col-md-6">
         <div class="md-form mb-0">
             <input class="textArea" type="text" id="email" name="email" class="form-control" placeholder="Email"/>
             <label for="email" class=""></label>
         </div>
     </div>

 </div>

 <div class="row">
     <div class="col-md-12">
         <div class="md-form mb-0">
             <input class="textArea" type="text" id="subject" name="subject" class="form-control" placeholder="Subject"/>
             <label for="subject" class=""></label>
         </div>
     </div>
 </div>

 <div class="row">

     <div class="col-md-12">

         <div class="md-form sendForm">
             <input class="textArea" type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message"></input>
             <label for="message"></label>
         </div>

     </div>
 </div>
 <div class="text-center text-md-left">
<button type="submit" class="btn btn-dark" value="Send">Send</button>
</div>
<div class="status"></div>
</form>


</div>



</div>        </div>
    )
}
export default sendEmail

