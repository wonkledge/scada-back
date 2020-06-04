import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes'
import poolDb from './poolDb';

dotenv.config();

const resourcePath = process.env.RESOURCE_PATH
const port = process.env.APPLICATION_PORT

const app = express();

app.use(express.json());
app.use(cors());

app.use(resourcePath, router);

app.listen(port, () => {
    console.log('Server running on port:' + port);
});