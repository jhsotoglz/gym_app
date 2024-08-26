import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position={"relative"} p={'20px'}>
        <Typography color={"#3F704D"} fontWeight={"600"} fontSize={"26px"}>
            Fitness Tracker
        </Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb={"23px"} mt={"30px"}>
            Keep track of <br /> each workout
        </Typography>
        <Typography fontSize={'22px'} lineHeight={'35px'} mb={4}>
            Build your own weekly split
        </Typography>
        <Button variant="contained" color='success' href="#exercises" sx={{backgroundColor: '#3F704D', padding: '10px'}}>
            Explore Exercises
        </Button>
        <Typography
        fontWeight={600}
        color={"#3F704D"}
        sx={{
            opacity: 0.1, 
            display: {sm: 'block', xs: 'none'}
        }}
        fontSize="200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>


  )
}

export default HeroBanner