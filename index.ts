import Server from "./clases/server";
import router from './routes/router';
import bodyParser from "body-parser";
import cors from 'cors';

import { SERVER_PORT } from "./global/enviroment";

const server = new Server();

//BodyParser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//COORS
server.app.use(cors({origin:true, credentials:true}));

//rutas de servicios
server.app.use('/', router);

server.start(()=>{
    console.log(`Servidor corriendo puerto ${SERVER_PORT}`);
});