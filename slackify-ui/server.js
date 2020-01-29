'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Routes

app.get('/', (req, res) => {
    res.send(`
    <html>
      <h1>Slackify a message</h1>
      <form method="get" action="http://localhost:8080/slackify">
        <input type="text" name="string" />
        <input type="submit" value="Slackify"/>
      </form>
    </html>
    `)
});

app.get('/slackify', (req, res) => {

    let result = "";
    if (req.query.string && req.query.string !== undefined) {
        result = require('child_process').execSync(
            'sh ../slackify-core/slackify.sh "' + req.query.string + '"'
        ).toString();
    } else {
        result = "String parameter not given";
    }

    // Send back
    console.log("Result: '" + result + "'");
    res.send(result);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
