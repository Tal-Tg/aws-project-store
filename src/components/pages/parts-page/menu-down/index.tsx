import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
import { BsFillPersonFill } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi';
import {RiHistoryFill} from 'react-icons/ri';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {CartContainerDiv ,CartFirstSection,CartSecondSection,DivForTextSecondSection,DivForDisplayNone} from './MenuDownelements'
import { useNavigate } from "react-router";


const AccountMenu  = (Icon:any) =>{  
    const [strTest, setStrTest ] = useState("BsFillPersonFill");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event :any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



    const CheckWithIcon = (Icon:any) =>{
        // setStrTest(Icon)
        if(Icon.icon === 'BsFillPersonFill'){
            setStrTest("BsFillPersonFill");
            console.log("BsFillPersonFill");
        }
        else if(Icon.icon === "AiOutlineHeart"){
            setStrTest("AiOutlineHeart");
            console.log("AiOutlineHeart");
        }
        else if(Icon.icon === "BiShoppingBag"){
            setStrTest("BiShoppingBag");
            console.log("BiShoppingBag");
        }
        console.log(Icon.icon);
  }
    const [index,setIndex]= useState(0);
    if (index==0){
        CheckWithIcon(Icon)
        setIndex(1)
    }



  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',position:"relative", top:"12px" }}>
        <Tooltip title={strTest === "BsFillPersonFill" ? "אזור אישי" : 
                        strTest === "AiOutlineHeart" ? "אהבתי" : 
                        strTest === "BiShoppingBag" ? "סל קניות" : ""}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Avatar >M</Avatar> */}
            {/* <Icon style={{ width: 32, height: 32 }} /> */}
            {strTest === "BsFillPersonFill" ? <span> <BsFillPersonFill style={{ width: 32, height: 32 ,position:"relative"}}/></span>:""}
            {strTest === "AiOutlineHeart" ? <span><AiOutlineHeart style={{ width: 32, height: 32 ,position:"relative"}}/><span style={{ "position":"relative","top":"2px"}}>0</span></span> :""}
            {strTest === "BiShoppingBag" ? <span><BiShoppingBag style={{ width: 32, height: 32 ,position:"relative"}}/><span style={{ "position":"relative","top":"2px"}}>0</span></span> :""}
          </IconButton>
        </Tooltip>
      </Box>
      {strTest === "BsFillPersonFill"? 
      <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem style={{"fontSize":"14px"}} >
        <Avatar /> <a href="/login" style={{"color":"black","textDecoration":"none"}}>הכנס למערכת / הירשם</a>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <BsFillCartCheckFill fontSize="large" />
        </ListItemIcon>
        ההזמנות שלי
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <RiHistoryFill fontSize="large" />
        </ListItemIcon>
          נראו לאחרונה
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <FiLogOut fontSize="large" />
        </ListItemIcon>
        <a href="/Logout" style={{"color":"black","textDecoration":"none"}}>Logout</a>
      </MenuItem>
    </Menu>
    
    :
    strTest === "BiShoppingBag"? 
    <DivForDisplayNone>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
            
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {/* <MenuItem style={{"fontSize":"14px"}}>
        <Avatar /> הכנס למערכת / הירשם
      </MenuItem>
      <Divider /> */}
      {/* <MenuItem>
        <ListItemIcon>
          <BsFillCartCheckFill fontSize="large" />
        </ListItemIcon>
        ההזמנות שלי
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <RiHistoryFill fontSize="large" />
        </ListItemIcon>
          נראו לאחרונה
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <FiLogOut fontSize="large" />
        </ListItemIcon>
        Logout
      </MenuItem> */}
        <MenuItem sx={{width:500}}>
        {/* <ListItemIcon>
            <FiLogOut fontSize="large" />
        </ListItemIcon> */}
        <CartContainerDiv>
            <CartFirstSection>
                <div><img src="https://sheinsz.ltwebstatic.com/she_dist/images/shoppingcart-empty-50eb82fb72.png" width="80px" /></div>
                <div style={{"fontSize":"15px"}} >סל הקניות ריק</div>
            </CartFirstSection>
            <CartSecondSection>
                <DivForTextSecondSection>טוב שחזרת! אם היו לך פריטים בסל הקניות שלך, שמרנו אותם עבורך. אתה יכול התחבר לראות אותם כעת, או מתי שתהיה מוכן לכך.</DivForTextSecondSection>
            </CartSecondSection>
        </CartContainerDiv>
      </MenuItem> 
    </Menu>
    </DivForDisplayNone>
    
    :""}
    </React.Fragment>
  );
}

export default AccountMenu