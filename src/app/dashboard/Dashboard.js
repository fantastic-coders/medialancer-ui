import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {createTheme} from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import {AppProvider} from '@toolpad/core/AppProvider';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {useDemoRouter} from '@toolpad/core/internal';
import {AccountCircleTwoTone, ReceiptLongTwoTone} from "@mui/icons-material";

const NAVIGATION = [
    {
        kind: 'header',
        title: 'آیتم های اصلی',
    },
    {
        segment: 'dashboard',
        title: 'داشبورد',
        icon: <DashboardIcon/>,
    },
    {
        segment: 'profile',
        title: 'پروفایل',
        icon: <AccountCircleTwoTone/>,
        pathname:'/Profile'
    },
    {
        segment: 'project',
        title: 'پروژه ها',
        icon: <ReceiptLongTwoTone/>,
    },
    {
        segment: 'integrations',
        title: 'تخصیص پروژه',
        icon: <LayersIcon/>,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'تحلیل',
    },
    {
        segment: 'reports',
        title: 'گزارشات',
        icon: <BarChartIcon/>,
        children: [
            {
                segment: 'endProject',
                title: 'پروژه های انجام شده',
                icon: <DescriptionIcon/>,
            },
            {
                segment: 'processProject',
                title: 'پروژه های در حال اجرا',
                icon: <DescriptionIcon/>,
            },
        ],
    }
];

const dashboardTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {light: true, dark: true},
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: 'Dana VF, Arial, sans-serif',
    },
    direction: 'rtl',
});

function PageContent({pathname}) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}>
            <Typography>داشبورد{pathname}</Typography>
        </Box>
    );
}

PageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
    const {window} = props;

    const router = useDemoRouter('/dashboard');

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo"/>,
                title: 'Media Lancer',
                homeUrl: '/toolpad/core/introduction'
            }}
            router={router}
            theme={dashboardTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <PageContent pathname={router.pathname}/>
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardLayoutBasic.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default DashboardLayoutBasic;
