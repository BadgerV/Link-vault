import express from 'express'
import {createVault, getWallet} from '../controllers/vault.controller';

// creating vault route
const vaultRouter = express.Router();

//create linkvault
vaultRouter.get('/', createVault);

//get wallet from vault
vaultRouter.get('/:vault', getWallet);

export default vaultRouter;

