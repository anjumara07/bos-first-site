import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import { useNavigate } from 'react-router-dom'; 
import {useSelector ,useDispatch} from 'react-redux';
import {logoutRequest } from '../Redux/Login/action'

export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profile,setProfile] = React.useState(false);
  const isLoggedIn = useSelector((store) => store.reducer.isLoggedIn)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (data) => {
    if(data==='admin'){
        setProfile(true)
       navigate('/admin')
    }else{
        setProfile(false)
       navigate('/')
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
      dispatch(logoutRequest())
      navigate('/login')
      setAnchorElUser(null);
  };

  return (
    <AppBar style={{ backgroundColor:'black'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            PETBOARDINGSITE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Admin</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">User</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            PETBOARDINGSITE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                onClick={()=>handleCloseNavMenu('admin')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Admin
            </Button>
            <Button
                onClick={()=>handleCloseNavMenu('user')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                User
            </Button>
          </Box>

          {
              profile?<Box sx={{ flexGrow: 0 }}>
            {isLoggedIn?<Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/96018330?s=48&v=4" />
              </IconButton>
            </Tooltip>:"Login"}
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
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>:""
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};