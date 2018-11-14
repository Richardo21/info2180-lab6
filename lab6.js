
function definition()
{
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function()
    {
        if (http.readyState == 4 && http.readyState == 200)
        {
            alert(http.responseText);
        }
    };
    
    http.open("GET","request.php", true);
    http.send();
    
}