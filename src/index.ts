import express, { Response } from "express";
import httpStatus from "http-status";
import peopleRouter from "./routers/people.routes";

const app = express();
const port = process.env.PORT || 5000;

app.get("/health", (req, res: Response) => res.sendStatus(httpStatus.OK));
app.use(peopleRouter);

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
})