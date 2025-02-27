import React from 'react';
import { Card, CardContent, Avatar, Typography, Button, Container } from '@mui/material';

const Profile = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    {/* آواتار کاربر */}
                    <Avatar
                        alt="John Doe"
                        src="https://via.placeholder.com/150"
                        sx={{ width: 100, height: 100, margin: '0 auto 1rem' }}
                    />
                    {/* نام کاربر */}
                    <Typography variant="h5" component="div">
                        John Doe
                    </Typography>
                    {/* عنوان شغلی */}
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Frontend Developer
                    </Typography>
                    {/* توضیحات */}
                    <Typography variant="body1" style={{ margin: '1rem 0' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.
                    </Typography>
                    {/* دکمه‌ها */}
                    <Button variant="contained" color="primary" style={{ marginRight: '1rem' }}>
                        Edit Profile
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Logout
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Profile;