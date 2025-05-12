import bcrypt from 'bcrypt'
const GenerateRandomCharacters = async () => {
    const char = "sd;lofhsdfwsrfsd6+f+6sd5f68sdfsdafoi jas;dfasd6f98s7d4fsa4d3f2+987+9846763asdasd";
    const salt = await bcrypt.genSalt(10);
    const string = await bcrypt.hash(char, salt);
    return string;
}

export default GenerateRandomCharacters;