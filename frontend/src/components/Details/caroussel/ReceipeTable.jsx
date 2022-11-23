import * as React from "react";
import { PropTypes } from "prop-types";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function createData(ingredient, mesure) {
  return { ingredient, mesure };
}

export default function IngredientTable({ objet }) {
  const recette = objet;
  const ingredients = [
    recette.strIngredient1,
    recette.strIngredient2,
    recette.strIngredient3,
    recette.strIngredient4,
    recette.strIngredient5,
    recette.strIngredient6,
    recette.strIngredient7,
    recette.strIngredient8,
    recette.strIngredient9,
    recette.strIngredient10,
    recette.strIngredient11,
    recette.strIngredient12,
    recette.strIngredient13,
    recette.strIngredient14,
    recette.strIngredient15,
    recette.strIngredient16,
    recette.strIngredient17,
    recette.strIngredient18,
    recette.strIngredient19,
    recette.strIngredient20,
  ];
  const measures = [
    recette.strMeasure1,
    recette.strMeasure2,
    recette.strMeasure3,
    recette.strMeasure4,
    recette.strMeasure5,
    recette.strMeasure6,
    recette.strMeasure7,
    recette.strMeasure8,
    recette.strMeasure9,
    recette.strMeasure10,
    recette.strMeasure11,
    recette.strMeasure12,
    recette.strMeasure13,
    recette.strMeasure14,
    recette.strMeasure15,
    recette.strMeasure16,
    recette.strMeasure17,
    recette.strMeasure18,
    recette.strMeasure19,
    recette.strMeasure20,
  ];
  const rows = [
    createData(ingredients[0], measures[0]),
    createData(ingredients[1], measures[1]),
    createData(ingredients[2], measures[2]),
    createData(ingredients[3], measures[3]),
    createData(ingredients[4], measures[4]),
    createData(ingredients[5], measures[5]),
    createData(ingredients[6], measures[6]),
    createData(ingredients[7], measures[7]),
    createData(ingredients[8], measures[8]),
    createData(ingredients[9], measures[9]),
    createData(ingredients[10], measures[10]),
    createData(ingredients[11], measures[11]),
    createData(ingredients[12], measures[12]),
    createData(ingredients[13], measures[13]),
    createData(ingredients[14], measures[14]),
    createData(ingredients[15], measures[15]),
    createData(ingredients[16], measures[16]),
    createData(ingredients[17], measures[17]),
    createData(ingredients[18], measures[18]),
    createData(ingredients[19], measures[19]),
  ];
  return (
    <div>
      <Accordion sx={{ bgcolor: "inherit" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Ingredients</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: 0 }}>
          <TableContainer>
            <Table size="small">
              <TableBody sx={{ border: 0 }}>
                {rows.map((row) => (
                  <TableRow key={row.ingredient}>
                    <TableCell
                      style={{ borderBottom: "0" }}
                      component="th"
                      scope="row"
                    >
                      {row.ingredient}
                    </TableCell>
                    <TableCell style={{ borderBottom: "0" }} align="right">
                      {row.mesure}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Typography variant="body2" color="primary.darker">
        {recette.strInstructions}
      </Typography>
    </div>
  );
}
IngredientTable.propTypes = {
  objet: PropTypes.isRequired,
};
