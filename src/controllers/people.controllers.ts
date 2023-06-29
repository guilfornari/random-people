import httpStatus from "http-status";
import peopleService from "../services/people.services";
import { Response } from "express";

async function getPeople(req, res: Response) {

    const randomPerson = await peopleService.getPeople();

    res.status(httpStatus.OK).send(randomPerson);
}

const peopleController = {
    getPeople
}

export default peopleController;