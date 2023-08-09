import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from "react-router-dom";

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  bottom: 0,
});

function Main() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    // Add any necessary useEffect logic
  }, []);

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Trending"
        icon={<WhatshotIcon />}
        onClick={() => navigate("/trending")}
      />
      <BottomNavigationAction
        label="Movies"
        icon={<MovieIcon />}
        onClick={() => navigate("/movies")}
      />
      <BottomNavigationAction
        label="TV Series"
        icon={<TvIcon />}
        onClick={() => navigate("/tv")}
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        onClick={() => navigate("/search")}
      />
    </StyledBottomNavigation>
  );
}

export default Main;
