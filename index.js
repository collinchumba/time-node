const axios = require('axios');
const http = require('http')




const getTime = async (continent, city) => {
    const response = await axios.get('http://worldtimeapi.org/api/timezone/'+continent+'/'+city)
    const time =response.data.datetime.split('T')[1].split('.')[0]
    const date = response.data.datetime.split('T')[0]
    console.log(time, date)

}


getTime('Africa', 'Nairobi')

const options = {
  hostname: 'worldtimeapi.org',
  path: '/api/timezone/Africa/Nairobi',
  method: 'GET'
};
  
// Sending the request
const req = http.request(options, (res) => {
  let data = ''
   
  res.on('data', (chunk) => {
      data += chunk;
      data = JSON.parse(data)
      console.log(data.datetime)
  });
  
  // Ending the response 
  res.on('end', () => {
      //console.log('Body:', JSON.parse(data))
  });
     
}).on("error", (err) => {
  console.log("Error: ", err)
}).end()