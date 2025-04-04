import React from 'react'
import Footer from '../Footer/Footer'
import './Contact.css'
function Contact() {
  const submitMessage = ()=>{
    alert("Feedback sent successfully!.....")
  }
  return (
    <div>
      <div className="contact">
        <div className="left">
          <h1>Contact us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aspernatur explicabo beatae 
            doloremque accusamus magnam neque maiores quam consectetur, autem dolorem tempora iure mollitia 
            molestias voluptatibus aut repellat expedita ut est accusantium ipsam nisi eaque.
          </p>
          <h2> <i className='bx bx-envelope'> disha.jobs@mydomain.com</i></h2>
          <h2> <i className='bx bx-phone'> 10-20-30-40-50</i></h2>
        </div>
        <div className="right">
          <form action="">
            <input type="text" placeholder='Your name'/><br />
            <input type="email" placeholder='Your mail id'/>
            <textarea placeholder='Your message here' rows={8} cols={30}/>
            <button className="btn" onClick={submitMessage}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

