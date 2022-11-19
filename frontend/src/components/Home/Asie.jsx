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

export default function Asie() {
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
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Chine.jpg"
            alt="Chine"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chine
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Inde.jpg"
            alt="Inde"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Inde
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Japon.jpeg"
            alt="Japon"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Japon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Malaisie.jpg"
            alt="Malaisie"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Malaisie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        {" "}
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Russie.jpg"
            alt="Russie"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Russie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Thailande.jpg"
            alt="Thailande"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Thaîlande
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Turquie.jpg"
            alt="Turquie"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Turquie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: "50vw", height: "50vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="src/assets/Pays/Asie/Vietnam.jpg"
            alt="Vietnam"
            onClick={handleClickCountry}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Vietnam
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            C'est Party
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
