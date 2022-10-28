/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function MobileButtonNav() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        {matches && (
          <BottomNavigation showLabels value="" onChange="">
            <BottomNavigationAction
              label="Recettes"
              icon={<LocalDiningIcon />}
            />
            <BottomNavigationAction label="Cocktails" icon={<LocalBarIcon />} />
            <BottomNavigationAction
              label="Playlist"
              icon={<LibraryMusicIcon />}
            />
          </BottomNavigation>
        )}
      </Paper>
    </Box>
  );
}

export default MobileButtonNav;
