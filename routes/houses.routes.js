import express from 'express';
import { getHouses, getHouseByIdHandler } from '../controllers/houses.controller.js';

const router = express.Router();

// GET /houses - Hent alle huse
router.get('/', getHouses);
// GET /houses/:id – Hent et specifikt hus
router.get('/:id', getHouseByIdHandler);

export default router;
