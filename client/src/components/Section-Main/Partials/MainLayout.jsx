import React, { Fragment, useContext, useEffect } from 'react';
import auth from '../../../utilities/auth';
import UserContext from '../../../utilities/userContext';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import HelpSharpIcon from '@material-ui/icons/HelpSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import KitchenSharpIcon from '@material-ui/icons/KitchenSharp';
import { Box } from '@material-ui/core';
import TollSharpIcon from '@material-ui/icons/TollSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Axios from 'axios';
import './css/main-layout.css';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bottomNav: {
    display: 'block',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: '100%'
  }
}));

const MainLayout = props => {
    const {user, setUser} = useContext(UserContext);
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const logout = () => {
        auth.logout(() => {
            props.history.push("/");
        }) 
    }

    useEffect(() => {
        Axios
            .get('/api/user', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(results => {
                setUser(results.data.user);
            })
            .catch(error => {
                //log out
            })
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Box 
                height={64}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                pr={2}>
                {/* <TollSharpIcon color="primary" fontSize="large"/> */}
                <img src="./photos/logo.svg" height="45" width="45"/>
            </Box>
            <Divider />
            <List>
                <Link to='/kalendarz' className='links'>
                    <ListItem button key={'kalendarz'}>
                        <ListItemIcon><EventIcon /></ListItemIcon>
                        <ListItemText primary='Kalendarz' />
                    </ListItem>
                </Link>

                <Link to='/sledz-ciaze' className='links'>
                    <ListItem button key={'sledz-ciaze'}>
                        <ListItemIcon><VisibilitySharpIcon /></ListItemIcon>
                        <ListItemText primary='Śledź ciążę' />
                    </ListItem>
                </Link>

                <Link to='/pytania-i-odpowiedzi' className='links'>
                    <ListItem button key={'q&a'}>
                        <ListItemIcon><HelpSharpIcon /></ListItemIcon>
                        <ListItemText primary='Q&A' />
                    </ListItem>
                </Link>

                <Link to='/dieta' className='links'>
                    <ListItem button key={'dieta'}>
                        <ListItemIcon><KitchenSharpIcon /></ListItemIcon>
                        <ListItemText primary='Dieta' />
                    </ListItem>
                </Link>
            </List>

            <List className={classes.bottomNav}>
                <ListItem button onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText>Wyloguj</ListItemText>
                </ListItem>

                <Link to='/preferencje' className='links'>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText>Preferencje</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Fragment>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Będę mamą
                </Typography>
                <Box className='avatar'>
                    { user && user.photo ? 
                        <img src={`/img/${user.photo}`} alt="avatar" className='avatar-img'/> : 
                        <AccountCircleSharpIcon className='avatar-img' fontSize='large'/> }
                
                    
                    <Typography variant="h6" noWrap>
                        { user && user.firstName }
                    </Typography>
                </Box>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                { props.children }
            </main>
            </div>            
        </Fragment>
    )
}

export default MainLayout;