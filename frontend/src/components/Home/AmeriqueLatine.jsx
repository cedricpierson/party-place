import * as React from "react";
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
            image="src/assets/Pays/AmeriqueLatine/Jamaique.jpg"
            alt="Jamaique"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jamaique
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
            image="src/assets/Pays/AmeriqueLatine/Mexique.png"
            alt="Mexique"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mexique
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
