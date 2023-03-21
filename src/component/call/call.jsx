import React, { useState } from 'react';

const Call = () => {
    const [formData, setFormData] = useState({
        number: '',
        password: '',
        otp_via: 'call'
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.password === 'LauDu'){

        fetch('https://dogesh.onrender.com/bomb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                console.log('Response:', response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            window.alert("Gend phaad di tune toh");

        } else{
            window.alert("Wrong password");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <>
        <h1>CALL BOMB</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Number: 
                <input type="text" name="number" value={formData.number} onChange={handleInputChange} />
            </label>
            <label>
                Password: 
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </label>
            <label>
                Select: 
                <select id='dropdownInput' name='otp_via' value={formData.otp_via} onChange={handleInputChange}>
                    <option value="call">Call</option>
                    <option value="whatsapp">Whatsapp</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Call;
