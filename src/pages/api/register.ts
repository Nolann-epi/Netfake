import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }
    try {
        const { email, name, password } = req.body;

        const existingUser = await prismadb.user.findFirst({
            where: {
                email: email,
            },
        });
        if (existingUser) {
            res.status(401).json({ message: 'User already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prismadb.user.create({
            data: {
                email: email,
                name: name,
                hashedPassword: hashedPassword,
                image: '',
                emailVerified: new Date(),
            },
        });
        res.status(201).json({ message: 'User created', user: user });

    } catch (error) {
        console.log(error)
        res.status(400).end();
        return;
    }
}