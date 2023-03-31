import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

type User = {
  studentId: string,
  fullname: string,
  username: string,
  gender: string,
  email: string,
  whatsappNumber: string,
  phoneNumber: string,
}

type UserPayload = {
  payload: {
    users: User[]
  }
}

const userData: UserPayload = JSON.parse(fs.readFileSync('prisma/seed-data/users.json').toString())

prisma.user.deleteMany({
  where: {
    email: {
      not: "auphali@gmail.com"
    }
  }
}).then(function() {
  
  userData.payload.users
  .filter(function({ email }) {
    return email
  })
  .map(function(user) {
    return {
      name: user.fullname,
      username: user.username,
      gender: user.gender,
      email: user.email,
      wa_number: user.whatsappNumber,
      phone_number: user.phoneNumber,
    }
  })
  .reduce(function(acc: Promise<any>, curr, idx) {
    return acc
    .then(function() {
      return prisma.user.create({ data: curr })
    })
    .catch(function(err) {
      console.log(`Error processing row ${idx}: ${err.message}`)
      return prisma.user.create({ data: curr })
    })
  }, Promise.resolve())
})