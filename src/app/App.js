import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Card, CardActionArea, CardContent, Container} from "@mui/material";
import {Link} from "react-router-dom";
import {HowToRegTwoTone, PostAddTwoTone} from "@mui/icons-material";

const roleRegister = [
    {
        id: 1,
        title: 'شروع کار به عنوان فریلنسر',
        description: 'از اینجا می توانید جهت اعلام توانمندی های خود ثبت نام کنید.',
        icon: <HowToRegTwoTone/>,
        path: '',
    },
    {
        id: 2,
        title: 'ثبت سریع پروژه',
        description: 'از اینجا می توانید پروژه مورد نیاز خود را ثبت کنید. ',
        icon: <PostAddTwoTone/>,
        path: '',
    },
];
export default function App() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    return (
        <Container maxWidth="sm" style={{marginTop: '50px', direction: "rtl"}}>
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                    gap: 2,
                }}
            >
                {roleRegister.map((card, index) => (
                    <Card>
                        <CardActionArea
                            component={Link}
                            to={card.path}
                            onClick={() => setSelectedCard(index)}
                            data-active={selectedCard === index ? '' : undefined}
                            sx={{
                                height: '100%',
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                    '&:hover': {
                                        backgroundColor: 'action.selectedHover',
                                    },
                                },
                            }}
                        >
                            <CardContent sx={{height: '100%'}}>
                                <Typography align={"right"}>
                                    {card.icon}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align={"center"}>
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Container>


    );
}

