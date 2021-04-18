const street = '27';
const city = 'Gaya';
const zipcode = '823003';

const addressObject={
    street,
    city,
    zipcode,
};

function showAddress(){
    for(let key in addressObject)
    console.log(key,addressObject[key]);

}
showAddress();