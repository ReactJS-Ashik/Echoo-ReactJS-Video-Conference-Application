import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';


const darkColour= '#00152a';
const darkColour_Shade1= '#173757';
const lightColour= 'white';
const lightColour_Shade1= '#f6f6f6';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === 'light' ? lightColour : darkColour_Shade1,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.mode === 'light' ? lightColour_Shade1 : darkColour_Shade1, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.mode === 'light' ? lightColour_Shade1 : darkColour_Shade1, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs(props) {
  return (
    <div role="presentation" style={{margin: '1.5% 0% 0.3% 2%'}}>
      <Breadcrumbs maxItems={props.MaxItems} aria-label="breadcrumb">
        <StyledBreadcrumb
            component="a"
            href="/"
            label="Home"
            icon={<HomeIcon fontSize="small" />}
        />
        {props.data.map((item, index) => (
            <>
                {index === props.data.length - 1 ?
                        <Typography key={item} color="text.primary" onClick={handleClick}>
                            <StyledBreadcrumb
                                sx={{fontWeight: 'bolder'}}
                                key={index}
                                component="a"
                                href="/"
                                label={item}
                                onClick={handleClick}
                            />
                        </Typography>
                    :
                        <StyledBreadcrumb
                            key={item}
                            component="a"
                            href="/"
                            label={item}
                            onClick={handleClick}
                        />
                }
            </>
        ))}
      </Breadcrumbs>
    </div>
  );
}



CollapsedBreadcrumbs.propTypes = {
    data: PropTypes.array.isRequired,
    MaxItems: PropTypes.number.isRequired,
}

CollapsedBreadcrumbs.defaultProps = {
    data: ["asdfasdf","asfds","asfsadf","asdfasd","asdfasf","asdfasd"],
    MaxItems: 4,
}