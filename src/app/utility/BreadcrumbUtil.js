import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbUtil() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    to={"/"}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    خانه
                </Link>
            </Breadcrumbs>
        </div>
    );
}
