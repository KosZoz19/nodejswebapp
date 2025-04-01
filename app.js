process.env.PATH += ';C:\\WINDOWS\\SysWOW64';
console.log('Updated PATH:', process.env.PATH);

const express = require('express');
const path = require('path');
const ADODB = require('node-adodb');

const app = express();

const { exec } = require('child_process');
exec('C:\\WINDOWS\\SysWOW64\\cscript.exe //Nologo "C:\\Users\\Erazer\\Desktop\\test1.vbs"', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing cscript: ${error}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});

// Cambia la ruta a la ubicación de tu archivo de base de datos Access
const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=public\\Cars.accdb;', process.arch.includes('64'));
// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to query all autos from the database

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});