import httpStatus from "http-status";
import peopleService from "../services/people.services";

async function getPeople(req, res) {

    const randomPerson = await peopleService.getPeople();

    console.log("What?");
    console.log(randomPerson);

    res.status(200).send(randomPerson);
}

const peopleController = {
    getPeople
}

export default peopleController;