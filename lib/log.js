const fs = require('fs');

exports.printLog = (logType, sessionID, content) => {
  const stream = fs.createWriteStream('./logs/app.log', { flags: 'a' });
  const timestamp = new Date(Date.now()).toISOString();
  console.log(`${timestamp} "${logType}" "${sessionID}" ${content} \n`)
  stream.write(`${timestamp} "${logType}" "${sessionID}" ${content} \n`)
  stream.end();
  fs.readFile('./logs/app.log',"utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
  });
}

// abc = fs.readFileSync('../logs/app.log', 'utf8')
// console.log(abc)

