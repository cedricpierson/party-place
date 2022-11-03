import React from "react";
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
  width: "65vw",
  bgcolor: "#D9C468",
  border: "2px solid #A08F35",
  boxShadow: 24,
  p: "0.5rem",
  borderRadius: "10px",
};

export default function MealCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const objet = props;
  return (
    <Card
      className="MealCard"
      sx={{
        width: "35vw",
        height: "60vh",
      }}
      style={{
        minWidth: "35vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#D9C468",
      }}
    >
      <CardMedia
        component="img"
        height="100"
        src={objet.strMealThumb}
        alt={objet.strMeal}
      />
      <CardContent>
        <Button onClick={handleOpen} style={{ color: "inherit" }}>
          {objet.strMeal}
        </Button>
        <Typography align="center" variant="subtitle1">
          {objet.strCategory}
        </Typography>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Card
              style={{ overflowY: "scroll" }}
              sx={{ width: "100%", height: "100%", bgcolor: "#FDF0CA" }}
            >
              <CardHeader align="center" title={objet.strMeal} />
              <CardMedia
                component="img"
                height="80"
                src={objet.strMealThumb}
                alt={objet.strMeal}
              />
              <CardContent style={{ padding: "1rem" }}>
                <IngredientTable objet={objet} />
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}
