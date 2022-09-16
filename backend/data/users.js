import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin Rajesh',
    email: 'rajesh@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'User upreti',
    email: 'upreti@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
