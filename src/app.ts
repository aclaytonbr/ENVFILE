import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

//carrega as variáveis de ambiente
const envPath = path.join(__dirname, '../', '.env');
dotenv.config();
const PORT = process.env.PORT || 3000;
const objEnv = dotenv.parse(fs.readFileSync(envPath));

console.log(process.env.PORT);
console.log(process.env.DATABASE_NAME);
console.log(process.env.USER_NAME);
console.log(process.env.USER_PASSWORD);
console.log(objEnv);
