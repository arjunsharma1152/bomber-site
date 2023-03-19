
import React, { useState } from 'react';
import './number.css'

const Number = () => {
    const [formData, setFormData] = useState({
        number: '',
        count: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.password === 'LauDu'){

            if(formData.count > 5){
                formData.count = 5;
            }

        fetch('https://dogesh.onrender.com/', {
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
        <form onSubmit={handleSubmit}>
            <label>
                Number: 
                <input type="text" name="number" value={formData.number} onChange={handleInputChange} />
            </label>
            <label>
                Password: 
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Number;
