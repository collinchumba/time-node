import * as http from 'http'

export const handler = async (event) => {
    let dataString = '';
    
    const response = await new Promise((resolve, reject) => {
        const req = http.get("http://worldtimeapi.org/api/timezone/Africa/Nairobi", function(res) {
          res.on('data', chunk => {
            dataString += chunk;
          });
          res.on('end', () => {
            resolve({
                statusCode: 200,
                body: JSON.stringify(JSON.parse(dataString), null, 4)
            });
          });
        });
        
        req.on('error', (e) => {
          reject({
              statusCode: 500,
              body: 'Something went wrong!'
          });
        });
    });
    
    //return JSON.parse(response.body).datetime;
     return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              date: JSON.parse(response.body).datetime.split('T')[0],
              time: JSON.parse(response.body).datetime.split('T')[1].split('.')[0],
            }),
          }
};