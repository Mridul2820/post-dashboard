import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase/firebase'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const FeedbackFrom = ({ setFormActive }) => {
    const [countrySL, setCountrySL] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    // Input test states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const changeHandler = value => {
        setCountrySL(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        db.collection("feedback")
            .add({
                firstName: firstName,
                lastName: lastName,
                address: address,
                countrySL: countrySL,
                email: email,
                phone: phone,
            })
            .then(() => {
                alert("Your feedback has been submitted");
            })
            .catch((error) => {
                alert(error.message);
            });

        setFirstName("");
        setLastName("");
        setAddress("");
        setEmail("");
        setPhone("");
    };

    const fromClose = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setFormActive(false)
        }
    }

    return (
        <Container className="backdrop" onClick={fromClose} >
            <FormWrap>
                <h1>Thank you so much for taking the time!</h1>
                <p>Please provide the below details</p>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label>First Name : </Label>
                        <input 
                            type="text" 
                            placeholder="John" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required 
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Last Name : </Label>
                        <input 
                            type="text" 
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} 
                            required 
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Address: </Label>
                        <textarea 
                            type="text" 
                            placeholder="Enter your full address : " 
                            className="address" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Country : </Label>
                        <Country>
                            <Select 
                                options={options} 
                                countrySL={countrySL} 
                                onChange={changeHandler} 
                                value={countrySL}
                            />
                        </Country>
                    </InputGroup>
                    <InputGroup>
                        <Label>Email Id : </Label>
                        <input 
                            type="email" 
                            placeholder="example@sample.com"  
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>Phone Number</Label>
                        <PhoneNo>
                            <input 
                                type="text" 
                                placeholder="+91" 
                                className="code" 
                                pattern="[0-9]{2}"
                            />
                            <input 
                                type="text" 
                                placeholder="1234567890" 
                                className="number"
                                pattern="[7-9]{1}[0-9]{9}"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} 
                                required
                            />
                        </PhoneNo>
                        
                    </InputGroup>
                    <Button type="submit">Submit Feedback</Button>
                </Form>
            </FormWrap>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 280px;
    background: rgba(0,0,0, .5);
    width: calc(100vw - 280px);
    height: 100vh;
`

const FormWrap = styled.div`
    background-color: #EBF2F7;
    max-width: 900px;
    padding: 40px 18px 18px 60px;
    height: 100vh;

    h1 {
        font-size: 21px;
    }

    p {
        font-size: 15px;
    }
`
const Form = styled.form`
    margin-top: 20px;
`
const InputGroup = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;

    input {
        box-shadow: 3px 3px 20px rgba(0, 0, 0, .1);
        border: none;
        outline: none;
        padding: 10px;
        border-radius: 5px;
        width: 300px;

        &:focus {
            box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
        }
    }

    .address {
        box-shadow: 3px 3px 20px rgba(0, 0, 0, .1);
        border: none;
        outline: none;
        padding: 10px;
        border-radius: 5px;
        resize: none;
        width: 500px;
        height: 100px;

        &:focus {
            box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
        }
    }
`
const Label = styled.label`
    margin-bottom: 8px;
    font-size: 15px;
`

const Country = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .1);
    width: 300px !important ;

    &:focus {
        box-shadow: 3px 3px 20px rgba(0, 0, 0, .3);
    }

    input {
        width: 300px !important ;
        box-shadow: none;

        &:focus {
            box-shadow: none;
        }
    }

    svg {
        margin-left: -30px;
    }
`

const PhoneNo = styled.div`
    display: flex;

    .code {
        width: 50px;
    }

    .number {
        width: 240px;
        margin-left: 10px;
    }
`

const Button = styled.button`
    padding: 10px;
    background-color: #96EBC7;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
`

export default FeedbackFrom
