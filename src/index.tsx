import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website Freelance",
          type: "deposit",
          category: "Development",
          amount: 6000,
          createdAt: new Date("2022-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Rent",
          type: "withdraw",
          category: "Home expenses",
          amount: 1100,
          createdAt: new Date("2022-02-14 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody); //converter para formato JSON

      return schema.create("transaction", data); // (qual o model, quais dados serão inseridos no model)
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
