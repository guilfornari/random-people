import connection from "../database/database";

function getPeople() {
    let query = "SELECT * FROM people";
    return connection.query(query);
}

const peopleRepos = {
    getPeople,
}

export default peopleRepos;
