/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Box, BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function MobileButtonNav() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        {matches && (
          <BottomNavigation
            showLabels
            value=""
            onChange=""
            sx={{
              bgcolor: "primary.main",
              border: 2,
              borderColor: "primary.darker",
            }}
          >
            <BottomNavigationAction
              label="Recettes"
              icon={<LocalDiningIcon />}
              sx={{ color: "primary.lighter" }}
              href="#mealList"
            />
            <BottomNavigationAction
              label="Cocktails"
              icon={<LocalBarIcon sx={{ color: "primary.lighter" }} />}
              sx={{ color: "primary.lighter" }}
              href="#cocktail"
            />
            <BottomNavigationAction
              label="Playlist"
              icon={<LibraryMusicIcon sx={{ color: "primary.lighter" }} />}
              sx={{ color: "primary.lighter" }}
              href="#playlist"
            />
          </BottomNavigation>
        )}
      </Paper>
    </Box>
  );
}

export default MobileButtonNav;
