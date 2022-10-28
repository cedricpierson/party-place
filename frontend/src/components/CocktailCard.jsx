import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ListItemText } from "@mui/material";

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

export default function CocktailCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const objet = props;
  return (
    <Card
      className="CocktailCard"
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
        src={objet.strDrinkThumb}
        alt={objet.strDrink}
      />
      <CardContent>
        <Button onClick={handleOpen} style={{ color: "inherit" }}>
          {objet.strDrink}
        </Button>
        <Typography align="center" variant="subtitle1">
          {objet.strCategory}
        </Typography>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Card
              sx={{ width: "100%", height: "100%", bgcolor: "#FDF0CA" }}
              style={{ overflowY: "scroll" }}
            >
              <CardHeader title={objet.strDrink} align="center" />
              <CardMedia
                component="img"
                height="80"
                src={objet.strDrinkThumb}
                alt={objet.strDrink}
              />
              <CardContent>
                <Accordion sx={{ bgcolor: "#FDF0CA" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="subtitle1">Ingredients</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={objet.strIngredient1}
                          secondary={objet.strMeasure1}
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Typography variant="body2" color="text.secondary">
                  {objet.strInstructions}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}
