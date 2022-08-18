function ola()
{
    return `Olá ${texto}`;
}

// export default ola; // ESM + atual
module.exports = ola; // CommonJS