function soma (n1,n2)
{
    return n1+n2
}

function subtracao (n1,n2)
{
    return n1-n2
}

function multiplica (n1,n2)
{
    return n1*n2
}

function divide (n1,n2)
{
    if (n2!=0)
    {
    return n1/n2
    }
    else
    {
        return "Não é possivel dividir por 0"
    }
}

module.exports = {soma,subtracao,multiplica,divide}