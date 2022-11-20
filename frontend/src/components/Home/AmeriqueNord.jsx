import React, { useState } from "react";
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

export default function AmeriqueNord() {
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const handleClickCountry = (e) => {
    e.preventDefault();
    setCountry(e.target.alt);
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details");
  };

  return (
    <Stack
      style={{
        overflowX: "auto",
      }}
      direction="row"
      spacing={1}
    >
      {Object.keys(continents["Amérique du Nord"]).map((coun) => (
        <Card sx={{ minWidth: "50vw", height: "50vw" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={continents["Amérique du Nord"][coun]}
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
