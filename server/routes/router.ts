import express from "express";
import vaultRouter from "./vault.router";

const router = express.Router();

router.use("/vault", vaultRouter);

export { router };
