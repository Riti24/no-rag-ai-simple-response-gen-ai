import {express} from 'express';
import {Configuration, OpenAIApi} from 'openai';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());