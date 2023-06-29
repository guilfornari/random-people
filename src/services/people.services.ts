import { query } from "express";
import peopleRepos from "../repositories/people.repos";

async function getPeople() {
    const result = await peopleRepos.getPeople();
    return result.rows;
}

const peopleService = {
    getPeople
}

export default peopleService;