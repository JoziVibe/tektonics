import * as dotenv from 'dotenv';
dotenv.config();

import { chatWithThemba } from './src/ai/flows/chatbot';

chatWithThemba({ message: 'hello' }).then(console.log).catch(console.error);