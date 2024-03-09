import * as express from 'express';
import cors from 'cors'
import db from './db';

const app = express.default();

const start = async () => {
  try {
    
    
    app.use(express.json())
    
    app.use(cors())

    app.listen(8080, () => {
      console.log('server is working on port', 8080);
    });

  } catch (e) {
    console.log(e)
  }

}

start()
