import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// npm i @emailjs/browser
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    const form = useRef();
    const notify = () => {
      toast.success('تم الارسال', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    };
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6fag2i', 'template_uk0vhd8', form.current, '_qrK4HDVs9x7htWo4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
     
  };

  



 



  


  return (
    
    
    <div  className="container mt-5 text-right ">
      
      

      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          
          <label className="form-label" htmlFor="name">
            الاسم
          </label>

          <input className="form-control" type="text" name="user_name"/>

        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            الايميل
          </label>
          <input className="form-control" type="email" name="user_email" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            الرسالة
          </label>
          <textarea className="form-control" name="message"/>
        </div>
        {/* fff */}
                <div  className="d-flex justify-content-center  ">
           <button  className="btn btn-dark " type="submit" value="Send" onClick={notify}>ارسل 
           
        </button>
        <ToastContainer/>
        </div>
        

      </form>
          </div>
          

  )
}

export default ContactForm

