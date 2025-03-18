import Button from '../../components/Button';
import img from './thankyou.png'
export default function ContactSubmission({onClick}){
    return(
    <div className="overlay">
        <div className="contact-submission">
        <img src={img} alt="" />
        <h3>For Contacting us We will be in touch Soon</h3>
        <Button width={"meduim"} name="Ok" onClick={onClick}></Button>
    </div>
    </div>
);
}