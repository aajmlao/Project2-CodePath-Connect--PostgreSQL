import express from 'express'
import path from 'path'
// import NBATeams from '../data/teams.js'
import { fileURLToPath } from 'url'
import teamsController from '../controllers/teams.js'



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
// router.get('/', (req, res) => {
//     res.status(200).json(NBATeams)
// })
router.get('/', teamsController.getTeams);

router.get("/:teamID", (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname, '../public/team.html'))
})

export default router;
