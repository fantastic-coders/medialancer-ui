import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";
import Routers from "./app/utility/Routers";

const theme = createTheme({
    typography: {
        fontFamily: 'Dana VF, Arial, sans-serif',
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Routers/>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
