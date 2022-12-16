import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const GoodsItem = (props) => {
  const { name, price, setOrder, poster } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          height: "100%",
        }}
      >
        <CardMedia
          image={poster}
          component="img"
          sx={{ height: 140 }}
          alt={name}
          title={name}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
