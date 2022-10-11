import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
