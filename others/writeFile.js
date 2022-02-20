const fs = require('fs');

const testObj = {
    name: 'Shahid',
    email: 'shahidul.cse46@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'BD',
    },
};

const data = JSON.stringify(testObj);

fs.writeFile('test.json', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File write successful');
    }
});
