import express from 'express'
import {createVault, getWallet} from '../controllers/vault.controller';

// creating vault route
const vaultRouter = express.Router();

//making bill payments
vaultRouter.get('/', createVault);

vaultRouter.get('/:vault', getWallet);


export default vaultRouter;

