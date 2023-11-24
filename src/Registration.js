import { useState } from 'react';
import axios from 'axios';

const Registration =()=> {
    const[firstName,setFirstName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[phonenumber,setPhonenumber]=useState('');
     

    
    const handleRegistration = async () => {
        // Validate the form
        const data={
            firstName,
            email,
            password,
            phonenumber,  
        }

            try {
                const response = await axios.post("http://localhost:9090/api/customer",data);

                setFirstName('');
                setEmail('');
                setPassword('');
                setPhonenumber('');
                alert("registration successful");

            } catch{
                console.log('Registration error:');
            }
    };

    return (
        <>
            <div className="container-fluid p-5">
                <div className="container bg-body-tertiary rounded p-3">
                    <div className="row">
                        <div className="col-6">
                            <span>First Name</span>
                            <input type="text" className="form-control"  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                            <br />
                           
                            <span>Email</span>
                            <input type="email" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                            
                            <br />
                                                        <span>Password</span>
                            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <br />
                        </div>
                        <div className="col-6">
                            <span>Phonenumber</span>
                            <input type="text" className="form-control" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} />
                            <br />
                                                    </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button onClick={handleRegistration} className="btn btn-primary">
                                    Register
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
