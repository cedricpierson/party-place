import React from "react";
import { PropTypes } from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
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

export default function CocktailCard({ cocktail }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const styleMd = {
    width: "20vw",
    height: "30vw",
    display: "flex",
    bgcolor: "primary.main",
    borderRadius: "20px",
  };
  const styleSm = {
    width: "50vw",
    height: "50vw",
    display: "flex",
    bgcolor: "primary.main",
    borderRadius: "15px",
  };
  const fontMd = {
    color: "primary.lighter",
    fontSize: "2rem",
    paddingTop: "0.5rem",
  };
  const fontSm = { color: "primary.lighter", fontSize: "1rem" };
  return (
    <Card
      className="CocktailCard"
      sx={matches ? styleSm : styleMd}
      style={{
        minWidth: "20vw",
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
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
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
            {cocktail.strDrink}
          </Typography>
        </Button>
        <Typography
          align="center"
          variant="body2"
          sx={matches ? fontSm : fontMd}
        >
          {cocktail.strCategory}
        </Typography>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Card
              sx={{ width: "100%", height: "100%", bgcolor: "primary.lighter" }}
              style={{ overflowY: "scroll" }}
            >
              <CardHeader
                title={cocktail.strDrink}
                align="center"
                sx={{ typography: "h2" }}
              />
              <CardMedia
                component="img"
                height="50%"
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
              />
              <CardContent style={{ padding: "1rem" }}>
                <IngredientTable objet={cocktail} />
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}
CocktailCard.propTypes = {
  cocktail: PropTypes.isRequired,
};
