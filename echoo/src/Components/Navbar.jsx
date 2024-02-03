import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { PropTypes } from 'prop-types';

// importing Icons
import ListItemIcon from '@mui/material/ListItemIcon';
import AppIcon from '@mui/icons-material/GraphicEq';
import {MenuUnfoldOutlined } from '@ant-design/icons';

// My React Components
import ResponsiveAppBar from './MyAppBar';
import getIcon from "../Utils/IconProvider";
import getSideNavMenu from "../Utils/SideNavMenuProvider"
import CollapsedBreadcrumbs from '../Components/ReuseComponents/MyBreadCrumbs';

// Constants
import { LightTheme, whiteColour, darkColour, lightColour_Shade1, darkColour_Shade1,
        hoverTabDark, activeTabDark, grayColor, transparent,
        sideTabTextColor, drawerWidth, lightColour, HomePageTitle, SocialPageTitle } from "../Utils/Constants"

// Redux Imports
import { useSelector } from 'react-redux';

// Routing imports
import { Outlet, useNavigate } from 'react-router-dom'

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(11)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerContainer = styled(Box)(({ theme}) => ({
  backgroundColor: theme.palette.mode ===  LightTheme ? lightColour_Shade1: darkColour,
  flexGrow: 1,
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  borderLeft: theme.palette.mode === LightTheme ? `3px solid ${grayColor}` : '3px solid red',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerListItem = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, active }) => ({
      display: 'block',
      width: '93%',
      margin: 'auto',
      color: sideTabTextColor,
      background: 'inherit',
      borderRadius: '10px 10px 10px 10px',
      border: `3px solid ${transparent}`,

      ...(active && {
        color: whiteColour,
        background: activeTabDark,
        transition: '0.3s',
      }),
      ...(open && {
        marginBottom: '14%',
        transition: '0.3s',
      }),
      ...(!open && {
        width: '70%',
        marginBottom: '14%',
        transition: '0.3s',
      }),

      '&:hover': {
        color: whiteColour,
        background: active ? activeTabDark : hoverTabDark,
        transition: '0.3s',
        border: `3px solid ${activeTabDark}`,
        fontWeight: 'bolder',
      },
    }),
);

const DrawerContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
      textAlign: 'left',
      flexGrow: 1,
      margin: '1% 2% 2% 2%',
      padding: '2% 2% 0% 2%',
      borderRadius: '14px 14px 14px 14px',
      background: theme.palette.mode ===  LightTheme ? lightColour: darkColour_Shade1,
      color: theme.palette.mode ===  LightTheme ? darkColour: lightColour,
      overflow: 'auto',
      // overflowX: 'hidden',
  })
);


export default function MyNavBar(props) {
  // Sate Variables
  const [open, setOpen] = React.useState(true);
  const [MainSideNavItemList, setMainSideNavItemList]= React.useState(null)
  // const [SideSocialNavItemList, setSideSocialNavItemList]= React.useState(null)

  // Routing Operations
  const navigate= useNavigate();

  // Redux Operations
  const breadcrumbData= useSelector((state) => state.system.breadcrumb)
  const activePage= useSelector((state) => state.activeNav.activePage)
  const activeBtn= useSelector((state) => state.activeNav.activeSideNav)
  // const activeSocialBtn= useSelector((state) => state.activeNav.activeSocialSideNav)

  // Use-Effect
  React.useEffect(() => {
    if(activePage && activePage.length > 1)
      setMainSideNavItemList(getSideNavMenu(activePage));
      // setSideSocialNavItemList(activePage === HomePageTitle ? getSideNavMenu(SocialPageTitle) : null);
  },[activePage])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const setActiveSocialBtn= (data, index) => {
  //   navigate(`/home/s/${index}/${data.title}`)
  // }

  const setActiveSideBtn= (data, index) => {
    if (activePage === HomePageTitle)
      navigate(`/home/c/${index}/${data.link}`)
    else if (activePage === SocialPageTitle)
      navigate(`/social/s/${index}/${data.link}`)
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <ResponsiveAppBar  {...props} openDrawer={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} ></ResponsiveAppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: darkColour}}>
          <div onClick={e=>{setOpen(!open)}} style={{ ':hover': { background: transparent}, cursor: 'pointer', display: 'flex'}} >
            <IconButton sx={{ color: whiteColour, display: { xs: open ? 'none':'flex', md: 'none' }, mr: open ? 1 : 0 }}>
              <MenuUnfoldOutlined />
            </IconButton>
            <AppIcon fontSize={open ? 'medium' : 'large'} sx={{ color: whiteColour, display: { xs: open ? 'flex':'none', md: 'flex' }, mr: open ? 1 : 0 }} />
            { open ?
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: whiteColour,
                        textDecoration: 'none',
                    }}
                >
                    {props.appName}
                </Typography>
                :
                null
            }
          </div>
        </DrawerHeader>
        {/* <Divider /> */}
        <List sx={{ backgroundColor: darkColour, height: '100%'}} >
          <List sx={{ marginTop: '5%', backgroundColor: darkColour}}>
            {MainSideNavItemList && MainSideNavItemList.map((data, index) => (
              <DrawerListItem
                key={index}
                disablePadding
                open={open}
                active={activeBtn && activeBtn.title === data.title}
                onClick={e => setActiveSideBtn(data, index)}
              >
                <ListItemButton
                    sx={{
                      padding: '3% 0% 3% 0%',
                      minHeight: open ? 48 : 20,
                      justifyContent: open ? 'initial' : 'center',
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'inherit',
                      }}
                    >
                      {getIcon(data.title)}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{fontWeight: 'bold' }} >
                          {data.title}
                        </Typography>
                      }
                      secondary={data.secondary &&
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color= {activeBtn && activeBtn.title === data.title ? whiteColour : sideTabTextColor}
                          >
                            {data.secondary}
                          </Typography>
                        </React.Fragment>
                      }
                      sx={{
                        padding: '0%',
                        margin: '0%',
                        opacity: open ? 1 : 0
                      }}
                    />
                </ListItemButton>
              </DrawerListItem>
            ))}
          </List>

          {/* <Divider color={hoverTabDark} sx={{paddingTop: '0.3%'}} /> */}

          {/* <List sx={{ backgroundColor: darkColour, marginTop: '7%'}}>
            {SideSocialNavItemList && SideSocialNavItemList.map((data, index) => (
              <DrawerListItem
                key={index}
                disablePadding
                open={open}
                active={activeSocialBtn &&activeSocialBtn.title === data.title}
                onClick={e => setActiveSocialBtn(data, index)}
              >
                <ListItemButton
                  sx={{
                    padding: '2% 0% 2% 0%',
                    minHeight: open ? 48 : 20,
                    justifyContent: open ? 'initial' : 'center',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'inherit',
                    }}
                  >
                    {getIcon(data.title)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{fontWeight: 'bold' }} >
                        {data.title}
                      </Typography>
                    }
                    secondary={data.secondary &&
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color= {activeSocialBtn && activeSocialBtn.title === data.title ? whiteColour : sideTabTextColor}
                        >
                          {data.secondary}
                        </Typography>
                      </React.Fragment>
                    }
                    sx={{
                      padding: '0%',
                      margin: '0%',
                      opacity: open ? 1 : 0
                    }}
                  />
                </ListItemButton>
              </DrawerListItem>
            ))}
          </List> */}
        </List>
      </Drawer>

      <DrawerContainer component="main" >
        <div>
            <DrawerHeader />
            <CollapsedBreadcrumbs data={breadcrumbData} />
            <DrawerContent>
              <Outlet />
            </DrawerContent>
        </div>
      </DrawerContainer>
    </Box>
  );
}


MyNavBar.propTypes = {
  appName: PropTypes.string.isRequired
}

MyNavBar.defaultProps = {
  appName: "My App Name"
}
