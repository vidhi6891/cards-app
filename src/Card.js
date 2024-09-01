import React, { useState } from 'react';

const Card = ({ cardDetails, onEditDetails }) => {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(cardDetails.name || "");
    const [phone, setPhone] = useState(cardDetails.phone || "");
    const [company, setCompany] = useState(cardDetails.company || "");
    const [city, setCity] = useState(cardDetails.city || "");
    const [dob, setDOB] = useState(cardDetails.dob || "");
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

    const handleSave = () => {
        if(name && phone && city) {
            const newObject = {
                "id": cardDetails.id,
                "name": name,
                "phone": phone,
                "company": company,
                "city": city,
                "dob": dob
            }
            setEditMode(false);
            onEditDetails(newObject);
        } else {
            setError(true);
        }
    }

    const onCancel = () => {
        setName(cardDetails?.name);
        setPhone(cardDetails?.phone);
        setCompany(cardDetails?.company);
        setCity(cardDetails?.city);
        setDOB(cardDetails?.dob);
        setError(false);
        setEditMode(false);
    }

    return (
        <>
            <div className="card">
                {!editMode && <button onClick={() => setEditMode(true)}>edit</button>}
                {editMode ? 
                    <><label>Name: </label><input name="name" value={name} onChange={handleChange}/></>
                    : <div className="item">{cardDetails?.name}</div>}
                {editMode ? 
                    <><label>Phone: </label><input name="phone" value={phone} onChange={handleChange}/></>
                    : <div className="item">{cardDetails?.phone}</div>}
                {editMode ? 
                    <><label>Company: </label><input name="company" value={company} onChange={handleChange}/></>
                    : <div className="item">{cardDetails?.company}</div>}
                {editMode ? 
                    <><label>City: </label><input name="city" value={city} onChange={handleChange}/></>
                    : <div className="item">{cardDetails?.city}</div>}
                {editMode ? 
                    <><label>DOB: </label><input name="dob" value={dob} onChange={handleChange} /></>
                    : <div className="item">{cardDetails?.dob}</div>}
                {editMode && <button onClick={onCancel}>Cancel</button>}
                {editMode && <button onClick={handleSave}>Save</button>}
                <br />
                <br />
                {error && <div>Name or Phone or City missing</div>}
            </div>
           
        </>
    )
};

export default Card;