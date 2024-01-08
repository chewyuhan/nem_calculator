import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [billValue, setBillValue] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        // Simple form validation
        if (!name || !phoneNumber || !billValue) {
            toast.error('Please fill in all the fields.');
            return;
        }

        onRegister({ name, phoneNumber, billValue });
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '70vh', margin: 'auto', marginTop: '10vh' }}>
            <Typography variant="h5" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleRegister}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
                <TextField
                    label="TNB Bill: "
                    fullWidth
                    margin="normal"
                    value={billValue}
                    onChange={(e) => setBillValue(e.target.value)}
                />
                <br />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Next
                </Button>
            </form>
            <ToastContainer />
        </Paper>
    );
};

export default RegistrationForm;
