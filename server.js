const express = require("express");
const knex = require("./db");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/emails", (req, res) => {
  knex("emails")
    .orderBy("sent", "desc")
    .then(emails => {
      res.json(emails);
    });
});

app.delete("/api/emails/:id", (req, res) => {
  knex("emails")
    .where({ id: req.params.id })
    .first()
    .del()
    .then(() => res.json("Email deleted"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
