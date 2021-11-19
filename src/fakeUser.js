const faker = require('faker');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phone = faker.phone.phoneNumber();
const jobTitle = faker.name.jobTitle();


console.log(`Employee : ${firstName}, ${lastName} `)
console.log(`Job Title: ${jobTitle}`)
console.log(`phone number: ${phone}`)