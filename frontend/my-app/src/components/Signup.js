import React, { useState } from 'react'
import axios from "axios"
import './signup.css'

function Signup() {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        gender: "",
        pricing: "",
        address: {
            city: '',
            state: '',
            zipcode: ''
        }

    })


    



    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData(prevData => ({...prevData,[name]: value
        }));
    };
  


    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setformData(prevData => ({...prevData, address: {...prevData.address,[name]: value
            }
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.firstName.length ===0){
            alert("Invalid Form, firstname can not be empty")
        }
        else if(formData.lastName.length === 0){
            alert("Invalid Form, lastname can not be empty")
        }

        else if(formData.phone.length === 0){
            alert("Invalid Form, phone number can not be empty")
        }
        else if(formData.email.length === 0){
            alert("Invalid Form, email can not be empty")
        }

        else if(formData.gender.length === 0){
            alert("Invalid Form, gender can not be empty")
        }
        else if(formData.pricing.length === 0){
            alert("Invalid Form, pricing can not be empty")
        }
       






        axios.post('http://localhost:3001/users', formData)
            .then((res) => {
                console.log('Data saved successfully:', res.data);
                alert('User Register Successful :', res.data);
                window.location.reload('/')
            })



    }

    return (
        <>
            <div className='main-container'>
                <div className="container">
                    <h3>Get Started</h3>
                    <p>Create Your BillTrim account and ensure that the information mtaches the details on your utility bills
                    
                    </p>
                    <div className='form-data'>
                        <form onSubmit={handleSubmit}>
                            <input name='firstName' type='text' placeholder='First Name' value={formData.firstName} onChange={handleChange} />
                            <input name='lastName' type='text' placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
                            <input name="phone" type='text' placeholder='Phone Number' value={formData.phone} onChange={handleChange} />
                            <input name='email' type='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                            <div style={{ display: "flex" }}>



                                <div>
                                    <label style={{ marginRight: "20px",fontWeight:"550"}}>Gender:</label>

                                    <select name='gender' value={formData.gender} onChange={handleChange}  >
                                        <option unselectable='on'>----select----</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>


                                    <label style={{marginLeft: "10px",fontWeight:"550"  }}>pricing:</label>

                                    <select style={{marginLeft: "10px"  }} name='pricing' value={formData.pricing} onChange={handleChange}  >
                                        <option unselectable='-select-'>----select----</option>
                                        <option>$99</option>
                                        <option>$77</option>
                                        <option>$55</option>
                                        <option>$35</option>
                                        <option>$22</option>
                                    </select>

                                </div>

                            </div>
                            <input name='city' type="text" placeholder='City' value={formData.address.city} onChange={handleAddressChange} />
                            <input name='state' type="text" placeholder='State' value={formData.address.state} onChange={handleAddressChange} />
                            <input name='zipcode' type="text" placeholder='ZipCode' value={formData.address.zipcode} onChange={handleAddressChange} />
                            <div > <button>Signup</button></div>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Signup

