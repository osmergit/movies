import * as React from 'react';
import  { useEffect } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//import FolderIcon from '@mui/icons-material/Folder';
//import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import { useNavigate } from "react-router-dom";

export const LabelBottomNavigation = () => {
  //const [value, setValue] = React.useState('recents');
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <BottomNavigation sx={{   display: "flex", width: 1850, justifyContent: 'space-between', position: "fixed", bottom: 0, backgroundColor:"#2d313a", zIndex: 100, padding: 3}} value={value} onChange={handleChange}>
      <BottomNavigationAction
      style ={{ color:"white" }}
        label="Peliculas Nuevas"
       
        icon={<VideoLibraryIcon  />}
      />
      <BottomNavigationAction
      style ={{ color:"white" }}
        label="Favoritas"
        
        icon={<FavoriteIcon />}
      />
         <BottomNavigationAction
         style ={{ color:"white" }}
        label="Series"
      
        icon={<LiveTvTwoToneIcon  />}
      />
      <BottomNavigationAction
      style ={{ color:"white" }}
        label="Cerca"
        
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction style ={{ color:"white" }} label="busqueda" icon={<ScreenSearchDesktopTwoToneIcon />} />
    </BottomNavigation>
    
  );
}
export default LabelBottomNavigation;