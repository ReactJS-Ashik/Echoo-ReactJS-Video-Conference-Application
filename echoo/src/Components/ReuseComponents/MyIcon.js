import { ClosedCaption } from '@mui/icons-material';
import { IconButton, styled } from '@mui/material';
import { PropTypes } from 'prop-types';

const darkColour= '#00152a';
const lightColour= 'white';

const StyledThemeIcon = styled(IconButton)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? lightColour
        : darkColour;
});

export default function MyIcon(props) {
    if (props.themeIcon)
        return (
            <IconButton sx={{...props.mystyle}}>
                {props.icon}
            </IconButton>
        );
    else
        return (
            <StyledThemeIcon sx={{...props.mystyle}}>
                {props.icon}
            </StyledThemeIcon>
        )
}

MyIcon.propTypes={
    themeIcon: PropTypes.bool,
    icon: PropTypes.element.isRequired,
    mystyle: PropTypes.string,
}

MyIcon.defaultProps= {
    themeIcon: true,
    icon: <ClosedCaption />
}
