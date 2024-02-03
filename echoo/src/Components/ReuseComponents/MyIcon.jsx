import { ClosedCaption } from '@mui/icons-material';
import { IconButton, styled } from '@mui/material';
import { PropTypes } from 'prop-types';
// Constants
import { LightTheme, lightColour, darkColour } from '../../Utils/Constants'

const StyledThemeIcon = styled(IconButton)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === LightTheme
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
    mystyle: PropTypes.object,
}

MyIcon.defaultProps= {
    themeIcon: true,
    icon: <ClosedCaption />,
    mystyle: {}
}
