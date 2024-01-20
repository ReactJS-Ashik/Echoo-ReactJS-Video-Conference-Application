import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

// importing Icons
import MenuItem from '@mui/material/MenuItem';
import { MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import AppIcon from '@mui/icons-material/GraphicEq';
import MenuIcon from '@mui/icons-material/Menu';
import MySwitch from './ReuseComponents/MySwitch';
import { CloseRounded, DarkModeRounded, LightModeRounded } from '@mui/icons-material';

// My React Components
import MyIcon from './ReuseComponents/MyIcon';
import MyTypography from './ReuseComponents/MyTypography';
import MySnackBar from './ReuseComponents/MySnackBar';

// Constants
import { DarkTheme, darkColour, lightColour,
        blackColour, transparent, whiteColour,
        grayColor, yellowColor, LightTheme } from '../Utils/Constants'

// Redux imports
import { useSelector } from 'react-redux';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    background: theme.palette.mode === DarkTheme ? darkColour : lightColour,
    color: blackColour,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${theme.spacing(11)})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth-1}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const AppItemBtn = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme }) => ({
        background: transparent,
        color: theme.palette.mode === DarkTheme ? whiteColour : darkColour,
        boxShadow: 'none',
        margin: 2,
        '&:hover': {
            fontWeight: 'bold',
            transition: '0.3s'
        },
}));



function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [SnackOpen, setSnackOpen] = React.useState(false);

    const AppTheme= useSelector((state) => state.themeStyle);

    const handleTheme = () => {
        setSnackOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackOpen(false);
      };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="fixed" open={props.openDrawer} >
            <Container maxWidth="xl" sx={{ minWidth: '100%'}}>
                <Toolbar disableGutters >
                    <IconButton
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            borderRadius: '0%',
                            borderRight: `3px solid ${grayColor}`,
                            display: { xs: 'none', md: props.openDrawer ? 'none' : 'flex' }
                            // ...(props.openDrawer && { display: 'none' }),
                        }}
                    >
                        <MenuUnfoldOutlined style={{ fontSize: '21px'}}/>
                    </IconButton>
                    <IconButton
                        aria-label="close drawer"
                        onClick={props.handleDrawerClose}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            display: { xs: 'none', md: props.openDrawer ? 'flex' : 'none' },
                            borderRadius: '0%',
                            borderRight: `3px solid ${grayColor}`
                            // ...(!props.openDrawer && { display: 'none' }),
                        }}
                    >
                        <MenuFoldOutlined style={{ fontSize: '21px'}}/>
                    </IconButton>

                    {/* This code sections is for the small screen Menu */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <MyIcon
                            themeIcon={true}
                            icon={
                                <AppIcon
                                    sx={{
                                        display: { xs: props.openDrawer ? 'none':'flex', md: props.openDrawer ? 'none' : 'flex' },
                                    }}
                                />
                            }
                            mystyle={{
                                display: { xs: props.openDrawer ? 'none':'flex', md: props.openDrawer ? 'none' : 'flex' },
                            }}
                        />
                        <MyTypography
                            variant="h5"
                            noWrap
                            mystyle={{
                                mr: 2,
                                display: { xs: 'flex', md: props.openDrawer ? 'none' : 'flex'  },
                                opacity: { xs: props.openDrawer ? '0': 1},
                                flexGrow: { xs: 1, md: 0},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '150%',
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                            text= {props.appName}
                        />

                    <Box sx={{ flexGrow: 1, mr: 25, display: { xs: 'none', md: 'flex' }, justifyItems: 'flex-end' }}>
                        {pages.map((page) => (
                            <AppItemBtn
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, display: 'block' }}
                            >
                            {page}
                            </AppItemBtn>
                        ))}
                    </Box>

                    <MySwitch
                        checkIcon={<LightModeRounded sx={{color: yellowColor}} fontSize='small'/>}
                        unCheckIcon={<DarkModeRounded sx={{paddingBottom: '15%'}} fontSize='small'/>}
                        callback={handleTheme}
                        checked={AppTheme === LightTheme ? true : false}
                    />
                    <MySnackBar
                        open={SnackOpen}
                        vertical={"bottom"}
                        horizontal={"left"}
                        message={AppTheme === LightTheme ? "Light Mode On" : "Dark Mode On"}
                        actionIcon={<CloseRounded />}
                        handleClose={handleClose}
                    />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Kihsa Iar" src="imagePath" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;