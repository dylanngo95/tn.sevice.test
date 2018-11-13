import "./controllers/index";

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as methodOverride from 'method-override';
import { RegisterRoutes } from './routes';

const app = express();

app.use('/docs', express.static(__dirname + '/swagger-ui'));
app.use('/swagger.json', (req, res) => {
    res.sendFile(__dirname + '/swagger.json');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

RegisterRoutes(app);

const port: Number = parseInt(<string>process.env.PORT, 10) || 3000

const server = app.listen(port, () => {
    console.log("api start with url: http://localhost:" + (server.address() as any).port);
});

export {
    server,
    app,
}

