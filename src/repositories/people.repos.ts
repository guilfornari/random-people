import connection from "../database/database";

function getPeople() {
    let query = "SELECT * FROM people ORDER BY RANDOM() LIMIT 1";
    return connection.query(query);
}

const peopleRepos = {
    getPeople
}

export default peopleRepos;
