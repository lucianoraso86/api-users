import { Router } from "express";

const router = Router();

export default () => {
  router.get("/", (req, res) => {
    res.send("Hello World!");
  });

  router.get("/helth", (req, res) => {
    res.send("App is Healthy!");
  });

  return router;

};