import bcrypt from 'bcrypt';

async function hashPass(password) {
    const saltRounds = 2;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

async function comparePass(password, receivedPass) {
    return await bcrypt.compare(password, receivedPass);
}

export { hashPass, comparePass };