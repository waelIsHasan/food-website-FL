import './Contact.css'
import contactImg from "./contact.jpg"
import Button from '../../components/Button';
import { useState } from 'react';
export default function Contact(){
    const initState = {
        firstName : "",
        lastName : "",
        email : "",
        subject :"",
        message : ""
    }
    const [contactForm , setContactForm] = useState(initState);
    function firstNameChangeHandle(event){
        setContactForm({...contactForm , firstName : event.target.value});   
    }

    function lastNamechangeHandle(event){
        setContactForm({...contactForm , lastName : event.target.value});   
    }
    function emailChangeHandle(event){
        setContactForm({...contactForm , email : event.target.value});   
    }
    function subjectChangeHandle(event){
        setContactForm({...contactForm ,  subject: event.target.value});   
    }
    function messageChangeHandle(event){
        setContactForm({...contactForm , message : event.target.value})
    }


    return (
        <div className="contact-us">
                <h1>Contact us</h1>
                <h5>We love hearing from our customers , feel free to share your expierence or ask any questions you may have.</h5>
                <div className='img-form'>
                    <img className="img-contact" src={contactImg} alt="" />
                    <form action="" onSubmit={(e)=>{
                            e.preventDefault()
                            
                    }}>
                            <input type="text" placeholder='First Name' onChange={firstNameChangeHandle}/>
                            <input type="text" placeholder='Last Name' onChange={lastNamechangeHandle}/>
                            <input type="email" placeholder='Email' onChange={emailChangeHandle}/>
                            <input type="text" placeholder='Subject' onChange={subjectChangeHandle}/>
                            <textarea name="" id="" placeholder='Message...' onChange={messageChangeHandle}></textarea>
                           
                           <div><Button width={"large"} name="Submit"></Button></div> 
                    </form>
                </div>
        </div>
    );
}