import React, {useState} from 'react';
import {Button, Container, Paper, TextField, Typography} from '@mui/material';
import {Link} from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };


    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{padding: 20, marginTop: 50}}>
                <Typography variant="h5" align="center" gutterBottom>
                    ورود
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="آدرس ایمیل"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="رمز عبور"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop: 20}}
                    >
                        ورود
                    </Button>
                    <Link to={"/ForgotPassword"} underline="always">
                        {'کلمه عبور را فراموش کرده اید؟'}
                    </Link>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;