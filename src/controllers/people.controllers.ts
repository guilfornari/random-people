import httpStatus from "http-status";
import peopleService from "../services/people.services";
import connection from "../database/database";

async function getPeople(req, res) {

    const randomPerson = await peopleService.getPeople();

    console.log("What?");
    console.log(randomPerson);

    res.status(httpStatus.OK).send(randomPerson);
}

const peopleController = {
    getPeople
}

export default peopleController;