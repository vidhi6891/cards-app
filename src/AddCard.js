import React, { useState } from 'react';

const AddCard = ({ addCard, data }) =>  {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [dob, setDOB] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setError(false);
        switch(e.target.name) {
            case 'name': 
                setName(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'company':
                setCompany(e.target.value);
                break;
            case 'city': 
                setCity(e.target.value);
                break;
            case 'dob':
                setDOB(e.target.value);
        }
    }

    const clearData = () => {
        setName("");
        setPhone("");
        setCompany("");
        setCity("");
        setDOB("");
    }
    
    const handleClick = () => {
        if(name && phone && city) {
            const newId = Math.max(...data.map(item => item.id)) + 1;
            const newCard = {
                "id": newId,
                "name": name,
                "phone": phone,
                "city": city,
                "company": company,
                "dob": dob
            }
            clearData();
            addCard(newCard);
        } else {
            setError(true);
        }
    }
    
    return (
        <>
            <div>
                <div>Name*:</div>
                <input name="name" value={name} placeholder="enter name" onChange={handleChange}/>
                <div>Phone*:</div>
                <input name="phone" value={phone} placeholder="enter phone" onChange={handleChange}></input>
                <div>Company:</div>
                <input name="company" value={company} placeholder="enter company" onChange={handleChange}></input>
                <div>City*:</div>
                <input name="city" value={city} placeholder="enter city" onChange={handleChange}></input>
                <div>DOB:</div>
                <input name="dob" value={dob} placeholder="enter dob" onChange={handleChange}></input>
                <div><button onClick={handleClick}>Add Details</button></div>
            </div>
            {error && "Name or Phone or City missing"}
        </>
    )
}

export default AddCard;