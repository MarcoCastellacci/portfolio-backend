import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import '../Styles/tecnologies.css';
import Swal from 'sweetalert2'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({ tecno }) {

    // console.log(tecno)
    return (
        <>
            {tecno.map((tecno) => (
                <div className="tecno-card" key={tecno._id}>
                    <Card sx={{ borderRadius: '10%', width: '100%', height: '50%', margin: '1rem' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={tecno.image}
                            alt={tecno.name}
                        />
                            <Typography variant="body1" sx={{ color: "text.secondary",background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.40) 120%) #989898', display: 'flex', flex: 1, justifyContent: 'space-between', paddingLeft: '.5rem'  }}>
                                {tecno.name}
                            <ExpandMore
                                onClick={() => {
                                    Swal.fire({
                                        icon: 'info',
                                        title: `${tecno.name}`,
                                        text: `${tecno.info}`,
                                    })
                                }}

                                aria-label="show more"
                            >
                                <InfoIcon />
                            </ExpandMore>
                            </Typography>
                    </Card>
                </div>
            ))
            }
        </>
    );
}
