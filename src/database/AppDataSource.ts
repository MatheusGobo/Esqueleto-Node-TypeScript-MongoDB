import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
   type: 'mongodb',
   database: 'apresentacao',
   synchronize: true,
   entities: ['./src/entities/*.ts'],
   useUnifiedTopology: true,
   host: 'localhost',
   port: 27017
})

export { AppDataSource }

