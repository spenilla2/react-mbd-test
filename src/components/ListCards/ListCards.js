import React from "react";
import { Grid } from "@material-ui/core";
import Cards from "../Cards";

import "./ListCards.scss";

export default function ListCards(props) {
  const { allCards } = props;

  if (!allCards || allCards.length === 0) {
    return (
      <div className="list-cards-empty">
        <h2>No Avaible Cards...</h2>
      </div>
    );
  }
  console.log(allCards);
  return (
    <Grid container spacing={3} className="list-cards">
      {allCards.map((observation,_id, index) => (
        <Grid key={index} item xs={4}>
          <Cards cards={observation} id={_id} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
