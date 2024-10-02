import { pool } from "./database.js"
import './dotenv.js'
import NBATeams from "../data/teams.js"

const createTeamsTable = async () => {
    const createTableQuery= `
    DROP TABLE IF EXISTS teams;

    CREATE TABLE IF NOT EXISTS teams (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        championship INT,
        image VARCHAR(255) NOT NULL
    )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 teams table created successfully')
    } catch (err) {
        console.error('⚠️ error creating teams table', err)
    }
}

const seedTeamsTable = async () => {
    await createTeamsTable() 

    NBATeams.forEach((team) => {
        const insertQuery = {
            text:'INSERT INTO teams (name, description, championship, image) VALUES ($1, $2, $3, $4)'
        }
        const values = [
            team.name,
            team.description,
            team.championship,
            team.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting teams', err)
                return
            }

            console.log(`✅ ${team.name} added successfully`)
        })
    })
}

seedTeamsTable()