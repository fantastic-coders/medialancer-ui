import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {useLocation, Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Breadcrumb = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((x) => x);

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">>
                <Link
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    to={"/"}>
                    <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    خانه
                </Link>
                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathNames.length - 1;
                    return isLast ? (<span key={name}>  {name}</span>)
                        : (<span key={name}>{' '}/ <Link to={routeTo}>{name}</Link></span>
                        );
                })}
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;