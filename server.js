const http = require('http')

// use hosting values if available
const hostname = process.env.hostname || '0.0.0.0'
const port = process.env.PORT || 3002

// define server
const server = http.createServer((request, response) => {
    // OK status code
    response.statusCode = 200
    // Set response headers
    response.setHeader('Content-Type', 'text/plain')
    response.write('Welcome to the web page')
    response.end('\nI hope you enjoy your stay!')
})

// Start listening for requests
server.listen(port, hostname, ()=> {
    console.log(`The server is running at ${hostname}:${port}`)
})