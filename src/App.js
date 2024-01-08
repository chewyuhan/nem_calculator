import React, { useState } from 'react';
import Navbar from "./component/Navbar";
import SliderSelect from "./component/Slider";
import Result from "./component/Result";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RegistrationForm from './component/Register';


function App() {
  const [data, setData] = useState({})
  const [user, setUser] = useState(null); // Use user state to track whether the user is registered


  const handleRegister = async (userData) => {
    console.log('User Data:', userData);
    setUser(userData);
    setData({ billValue: parseInt(userData.billValue) });

    const formData = new FormData();

    for (const key in userData) {
      formData.append(key, userData[key]);
    }


    fetch('https://script.google.com/macros/s/AKfycbyQAmWDhSbKUFd_a3ItMp-22Bp_JzbeSgTA48mWshTdfjTtSoqR3XL20oTpN336cImN/exec', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
        }
      })
      .catch((error) => console.log(error));
  }

  const handleLogout = () => {
    // Handle logout logic, e.g., reset user state
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          {!user ? ( // Render registration form if user is not registered
            <Grid item xs={12} md={12}>
              <RegistrationForm onRegister={handleRegister} />
            </Grid>
          ) : (
            <>
              <Grid item xs={12} md={12}>
                <SliderSelect data={data} setData={setData} />
              </Grid>
              <Grid item xs={12} md={12}>
                <Result billValue={data.billValue} />
              </Grid>
              <Grid item xs={12} md={12}>
                <button onClick={handleLogout}>Back</button>
              </Grid>
            </>)}
        </Grid>
      </Container>
    </div>
  )
}

export default App;