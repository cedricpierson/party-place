import React from "react";
import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IngredientTable from "./ReceipeTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80vh",
  width: "95vw",
  bgcolor: "#D9C468",
  border: "2px solid #A08F35",
  boxShadow: 24,
  p: "0.5rem",
  borderRadius: "10px",
};

export default function MealCard({ recette }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const styleMd = {
    width: "20vw",
    minWidth: "20vw",
    height: "30vw",
    display: "flex",
    bgcolor: "primary.main",
    borderRadius: "20px",
  };
  const styleSm = {
    width: "40vw",
    minWidth: "40vw",
    height: "50vw",
    display: "flex",
    bgcolor: "primary.main",
    borderRadius: "15px",
  };
  const fontMd = {
    color: "primary.lighter",
    fontSize: "1.8rem",
    paddingTop: "0.5rem",
  };
  const fontSm = { color: "primary.lighter", fontSize: "1rem" };

  return (
    <Card
      className="MealCard"
      sx={matches ? styleSm : styleMd}
      style={{
        maxWidth: "50vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "5px 7px 7px 0px rgba(116,103,12,0.7)",
      }}
    >
      <CardMedia
        component="img"
        height="50%"
        src={recette.strMealThumb}
        alt={recette.strMeal}
      />
      <CardContent
        style={{ display: "flex", flexDirection: "column", padding: 0 }}
      >
        <Button
          onClick={handleOpen}
          style={{
            color: "inherit",
          }}
        >
          <Typography
            align="center"
            variant="body2"
            sx={matches ? fontSm : fontMd}
          >
            {recette.strMeal}
          </Typography>
        </Button>
        <Typography
          align="center"
          variant="body2"
          sx={matches ? fontSm : fontMd}
        >
          {recette.strCategory}
        </Typography>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Card
              style={{ overflowY: "scroll" }}
              sx={{ width: "100%", height: "100%", bgcolor: "primary.lighter" }}
            >
              <CardHeader align="center" title={recette.strMeal} />
              <CardMedia
                component="img"
                height="50%"
                src={recette.strMealThumb}
                alt={recette.strMeal}
              />
              <CardContent style={{ padding: "1rem" }}>
                <IngredientTable objet={recette} />
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}
MealCard.propTypes = {
  recette: PropTypes.isRequired,
};
