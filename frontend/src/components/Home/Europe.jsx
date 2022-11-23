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

export default function Europe() {
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
      {Object.keys(continents.Europe).map((coun) => (
        <Card
          sx={{
            minWidth: "200px",
            width: "200px",
            height: "200px",
            backgroundColor: "primary.main",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={continents.Europe[coun]}
              alt={coun}
              onClick={handleClickCountry}
            />
            <CardContent>
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
