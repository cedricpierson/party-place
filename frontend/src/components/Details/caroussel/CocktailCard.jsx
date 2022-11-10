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
  width: "95vw",
  bgcolor: "#D9C468",
  border: "2px solid #A08F35",
  boxShadow: 24,
  p: "0.5rem",
  borderRadius: "10px",
};

export default function CocktailCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const objet = props;
  return (
    <Card
      className="CocktailCard"
      sx={{
        width: "50vw",
        height: "50vw",
        display: "flex",
        bgcolor: "primary.main",
      }}
      style={{
        minWidth: "40vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="100"
        src={objet.strDrinkThumb}
        alt={objet.strDrink}
      />
      <CardContent>
        <Button
          onClick={handleOpen}
          style={{
            color: "inherit",
            padding: "2rem 2rem 0rem 2rem",
          }}
          sx={{ fontSize: "1.3rem" }}
        >
          <Typography
            align="center"
            variant="h5"
            sx={{ color: "primary.lighter" }}
          >
            {objet.strDrink}
          </Typography>
        </Button>
        <Typography
          align="center"
          variant="h5"
          sx={{ color: "primary.lighter" }}
        >
          {objet.strCategory}
        </Typography>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Card
              sx={{ width: "100%", height: "100%", bgcolor: "#FDF0CA" }}
              style={{ overflowY: "scroll" }}
            >
              <CardHeader
                title={objet.strDrink}
                align="center"
                sx={{ typography: "h2" }}
              />
              <CardMedia
                component="img"
                height="50%"
                src={objet.strDrinkThumb}
                alt={objet.strDrink}
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
