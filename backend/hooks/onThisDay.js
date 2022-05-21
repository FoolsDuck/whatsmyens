const axios = require('axios');

const onThisDay = async(num) => {
    const str = num.toString().padEnd(, "0");
}
const config = {
  method: 'get',
  url: 'https://byabbe.se/on-this-day/4/20/births.json',
  headers: { 
    'accept': 'application/json'
  }
};

return await axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
