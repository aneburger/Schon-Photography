/*****************************************
 * Created On: 2025 / 11 / 28
 * Last Modified: 2025 / 11 / 28
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("frontend/public"));


app.get('/{*any}', (req, res) => res.sendFile(path.resolve('frontend', 'public', 'index.html')));	

app.listen(port, () => {
   	console.log(`Listening on http://localhost:${port}`);
});
