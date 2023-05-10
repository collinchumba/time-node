const http = require ('http')

const options = {
    hostname: 'worldtimeapi.org',
    path: '/api/timezone/Africa/Nairobi',
    method: 'GET'
  };

const req = http.request(options, (res) => {
              
    let data = '' 
    res.on('data', (chunk) => {
        data += chunk;
        data = JSON.parse(data)
        //console.log(data.datetime)
    });
    
    // Ending the response 
    res.on('end', () => {
        
        //console.log('Body:', data)
        
    });
    return {
      statusCode: 200,
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          date: data,
          time: data, }),
              }     
  }).on("error", (err) => {
    console.log("Error: ", err)
  }).end()
   
console.log(req)
    