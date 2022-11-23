import React from "react";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  Stack,
} from "@mui/material";
import continents from "../../data/continents.json";

export default function Afrique() {
  const navigate = useNavigate();

  const handleClickCountry = (e) => {
    e.preventDefault();
    const country = e.target.alt;
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details#to-top");
  };

  return (
    <Stack
      style={{
        overflowX: "auto",
        margin: "1rem",
      }}
      direction="row"
      spacing={1}
    >
      {Object.keys(continents.Afrique).map((coun) => (
        <Card
          sx={{
            minWidth: { xs: "200px", sm: "200px" },
            width: { xs: "200px", sm: "20vw" },
            minHeight: { xs: "200px", sm: "200px" },
            height: { xs: "200px", sm: "20vw" },
            backgroundColor: "primary.main",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              sx={{ minHeight: { sm: "14vw" } }}
              image={continents.Afrique[coun]}
              alt={coun}
              onClick={handleClickCountry}
            />
            <CardContent style={{ padding: "1vw" }}>
              <Typography gutterBottom variant="h5" component="div">
                {coun}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              C'est Party
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
}
