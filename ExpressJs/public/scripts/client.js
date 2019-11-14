function subscribeUser()
{
    var user =
    {
        name: document.getElementById("username").value,
        email: document.getElementById("useremail").value
    };
    var xhr = new XMLHttpRequest();

    xhr.open(
        "POST",
        "/subscribe"
    )

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function ()
    {
        alert(xhr.responseText);
    }


    xhr.onerror = function (err)
    {
        console.log(err);
    }


    xhr.send(JSON.stringify(user));
}