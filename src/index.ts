import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import weatherRouter from "./routers/weather.router";
import pageRouter from "./routers/page.router";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectoryPath = path.join(__dirname, '../public');

// hbs configuration
// customized path for hbs files
const templatesPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', templatesPath);
// register hbs partials path
hbs.registerPartials(partialsPath);

// static path configuration
app.use(express.static(publicDirectoryPath));

app.use('/api/v1', weatherRouter);

app.use(pageRouter);

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})