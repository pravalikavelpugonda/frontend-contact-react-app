import React from "react";
import'./Contactspage.css';
//import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios'; 

  const Contactspage =()=> {
    const[FullName,setFullName]=useState('');
    const[Email,setEmail]=useState('');
    const[Password,setPassword]=useState('');
    const[MobileNo, setMobileNo]=useState('');
     

    
    const handleContactspage = async () => {
        // Validate the form
        const data={
            FullName,
            Email,
            Password,
            MobileNo,  
        }

            try {
                const response = await axios.post("http://localhost:9090/api/customer",data);

                setFullName('');
                setEmail('');
                setPassword('');
                setMobileNo('');
                alert("registration successful");

            } catch{
                console.log('Registration error:');
            }
    };



  
    return(
        <>
        <div className="text-black">
        <img style={{width:"100%" , height:"400px"}} src="data:image/jpeg;base64,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" />
        <br/><br/>
        

         <h2  id="header">We are here to Help You</h2><br/>
          <p id="paragraph1">Please feel free to get in touch using the form below.<p> We'd love to hear your thoughts & answer any questions you may have!</p>
           </p>
        <br/>
        <br/>
        <div className="container-flud p-4">
            <div className="row">
                <div className="col-6">
          <h3 class="text-center" >Address</h3>
          
          <p>10-3-316/3,<p> TEK Towers, Masab Tank,<p> Near NMDC Building,<p> Above Union Bank , </p>Hyderabad, Telangana 500028
          </p></p></p>
           
           <br/>
          <h3 class="text-center">Call Us</h3>
          
          <p>+91 4029303134</p>
          <p>+91 4029303135</p>
          <p>+91 4029303136</p>
           
          <br/>
          <h3 class="text-center">Mail Id</h3>
          <p>hr.t4@tech.in</p>
          <p>employee@tech.in</p>
      </div>
   <div className="col-6">
     <form>
      <div class="mb-3">
     <label for="exampleInputName" class="form-label">Full Name</label>
     <input type="Full Name" class="form-control" value={FullName} onChange={(e)=>setFullName(e.target.value)}id="exampleInputName" aria-describedby="NameHelp"/>
    </div>
     <div class="mb-3">
      <label for="exampleInputPhoneNumber" class="form-label">Phone Number</label>
      <input type="Phone Number" class="form-control" value={MobileNo} onChange={(e)=>setMobileNo(e.target.value)} id="exampleInputPhoneNumber" aria-describedby="PhoneNumberHelp"/>
     </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" value={Email} onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp " class="form-text text-black">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" value={Password} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1"text="20px"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={handleContactspage} class="btn btn-primary">Submit</button>
</form>
</div>
<hr/>

</div>
</div>
</div>



        
        </>
    )
}
export default Contactspage;