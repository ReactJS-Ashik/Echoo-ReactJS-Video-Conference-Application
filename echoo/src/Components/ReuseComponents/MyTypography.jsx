import { styled } from '@mui/material';
import { Typography } from 'antd';
import React from 'react'
import { PropTypes } from 'prop-types';
// Constants
import { LightTheme, darkColour, lightColour } from "../../Utils/Constants"


const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === LightTheme ? darkColour : lightColour,
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
    mystyle: PropTypes.object,
    textVariant: PropTypes.string,
}

MyTypography.defaultProps= {
    text: "",
    mystyle: "{{display: 'block'}}",
    textVariant: "",
}