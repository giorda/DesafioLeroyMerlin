export { generatedEmail, generatedPassword, generatedRandom, generatedUsername };
// program to generate random strings

// declare all characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    

    return result;
}
var generatedUsername = generateString(7);
var generatedPassword = generateString(15);
var generatedEmail = generateString(5) + '@test.com';
var generatedRandom = generateString(10);