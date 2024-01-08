import { styled } from '@mui/material';
import { Typography } from 'antd';
import React from 'react'
import { PropTypes } from 'prop-types';

const darkColour= '#00152a';
const lightColour= 'white'

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'light'? darkColour : lightColour,
    margin: '0%',
    padding: '0%'
  }));

export default function MyTypography(props) {
    return (
        <StyledTypography sx={{...props.mystyle}}>
            {props.text}
        </StyledTypography>
    )
}


MyTypography.propTypes= {
    text: PropTypes.string.isRequired,
    mystyle: PropTypes.string,
    textVariant: PropTypes.string,
}

MyTypography.defaultProps= {
    text: "",
    mystyle: "{{display: 'block'}}",
    textVariant: "",
}