import Form from '../components/Form';
import '../App.css';
import './Contact.css'

export default function Contact() {
    return (
    <div className="container text-center">
      <h1 className="pageHeader">Contact Me</h1>
      <div className="row">
        <div className="col-7">
          <Form />
        </div>
        <div  className="col-1"></div>
        <div id="tipContainer" className="col-4">
          <div id="tip">
            <h3>If you would like to contact me, please, fill in this form.</h3>
            <h3>I will contact you as soon as possible!</h3>
          </div>
          <div>
            <p id="note">
              NOTE: <spin>Please, note that it's just a front end App. This submit Form is not functional! It is an example!</spin>
            </p>
          </div>
        </div>
      </div>
    </div> 
  );
}