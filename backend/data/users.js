import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('helloworld', 10),
        isAdmin: true,
    },
    {
        name: 'Ethan Hunt',
        email: 'ethan@gmail.com',
        password: bcrypt.hashSync('helloworld', 10),
    },
    {
        name: 'Logan Paul',
        email: 'logan@gmail.com',
        password: bcrypt.hashSync('helloworld', 10),
    },
];

export default users;