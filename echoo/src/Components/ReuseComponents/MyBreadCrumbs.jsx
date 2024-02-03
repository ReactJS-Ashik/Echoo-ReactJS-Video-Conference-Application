import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { PropTypes } from 'prop-types';
// Constants
import { LightTheme, lightColour, lightColour_Shade1, darkColour_Shade1, grayColor } from '../../Utils/Constants'
import getIcon from '../../Utils/IconProvider';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === LightTheme ? lightColour : darkColour_Shade1,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.mode === LightTheme ? lightColour_Shade1 : darkColour_Shade1, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.mode === LightTheme ? lightColour_Shade1 : darkColour_Shade1, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs(props) {
  return (
    <div role="presentation" style={{margin: '3% 0% 0.3% 2%'}}>
      <Breadcrumbs maxItems={props.MaxItems} aria-label="breadcrumb">
        {/* <StyledBreadcrumb
            // component="a"
            // href="#"
            label="Home"
            icon={<HomeIcon fontSize="small" />}
        /> */}
        {props.data.map((item, index) => {
          if (index === props.data.length - 1 )
            return (
                <Typography key={item} color="text.primary" onClick={handleClick}>
                  <StyledBreadcrumb
                    sx={{fontWeight: 'bolder'}}
                    key={index}
                    component="a"
                    href="/"
                    label={item}
                    onClick={handleClick}
                    icon={getIcon(item, grayColor)}
                  />
                </Typography>
              )
            return(
              <StyledBreadcrumb
                key={index}
                component="a"
                href="/"
                label={item}
                icon={getIcon(item)}
                onClick={handleClick}
              />
            )
        })}
      </Breadcrumbs>
    </div>
  );
}



CollapsedBreadcrumbs.propTypes = {
    data: PropTypes.array.isRequired,
    MaxItems: PropTypes.number.isRequired,
}

CollapsedBreadcrumbs.defaultProps = {
    data: ["home","step","step1","step2","step3","step4"],
    MaxItems: 4,
}