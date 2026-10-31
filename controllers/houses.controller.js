import * as houseRepository from '../repositories/houses.repository.js';


// Hent alle huse
export async function getHouses(req, res) {
    try {
        const houses = await houseRepository.getAllHouses();
        res.status(200).json(houses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente houses fra databasen' });
    }
}

// Hent et specifikt hus via id
export async function getHouseByIdHandler(req, res) {
    try {
        const house = await getHouseById(req.params.id);
        if (!house) {
            return res.status(404).json({ error: 'Hus ikke fundet' });
        }
        res.status(200).json(house);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Kunne ikke hente hus' });
    }
}
