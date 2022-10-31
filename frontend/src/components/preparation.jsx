import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";

export default function Preparation({ objet }) {
  const recette = objet;
  return (
    <div>
      <Accordion sx={{ bgcolor: "#FDF0CA" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle1">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: 0 }}>
          <List>
            <Stack direction="row" spacing={1}>
              <ListItem
                alignItems="flex-start"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.4rem",
                  padding: 0,
                }}
              >
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient1}
                  secondary={recette.strMeasure1}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient2}
                  secondary={recette.strMeasure2}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient3}
                  secondary={recette.strMeasure3}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient4}
                  secondary={recette.strMeasure4}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient5}
                  secondary={recette.strMeasure5}
                />
              </ListItem>
              <ListItem
                alignItems="flex-start"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.4rem",
                  padding: 0,
                }}
              >
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient6}
                  secondary={recette.strMeasure6}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient7}
                  secondary={recette.strMeasure7}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient8}
                  secondary={recette.strMeasure8}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient9}
                  secondary={recette.strMeasure9}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient10}
                  secondary={recette.strMeasure10}
                />
              </ListItem>
              <ListItem
                alignItems="flex-start"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.4rem",
                  padding: 0,
                }}
              >
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient11}
                  secondary={recette.strMeasure11}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient12}
                  secondary={recette.strMeasure12}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient13}
                  secondary={recette.strMeasure13}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient14}
                  secondary={recette.strMeasure14}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient15}
                  secondary={recette.strMeasure15}
                />
              </ListItem>
              <ListItem
                alignItems="flex-start"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.4rem",
                  padding: 0,
                }}
              >
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient16}
                  secondary={recette.strMeasure16}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient17}
                  secondary={recette.strMeasure17}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient18}
                  secondary={recette.strMeasure18}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient19}
                  secondary={recette.strMeasure19}
                />
                <ListItemText
                  style={{ padding: 0 }}
                  primary={recette.strIngredient20}
                  secondary={recette.strMeasure20}
                />
              </ListItem>
            </Stack>
          </List>
        </AccordionDetails>
      </Accordion>
      <Typography variant="body2" color="text.secondary">
        {recette.strInstructions}
      </Typography>
    </div>
  );
}
Preparation.propTypes = {
  objet: PropTypes.isRequired,
};
