function encrypt()
{
    let ptext = document.getElementById("ptext").value;
    document.getElementById("publickey").innerHTML = "Public Key: " + ptext;
    console.log(ptext);
}
