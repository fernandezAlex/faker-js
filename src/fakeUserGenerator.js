const faker = require('faker');
const fs = require('fs');


function generateUsers(){
    let data = []
    for (let id = 1;id <= 100; id++ ){
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const phone = faker.phone.phoneNumber();

        data.push({
            id,
            firstName,
            lastName,
            email,
            phone
        })

    }
    return {data}
}

const data = generateUsers()
fs.writeFileSync('data.json', JSON.stringify(data, null, "\t" ))
