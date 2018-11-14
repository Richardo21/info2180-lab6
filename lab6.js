
function definition(search)
{
    var word = document.getElementById("search").value.toLowerCase();
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function()
    {
        if (http.readyState == 4 && http.readyState == 200)
        {
            parseData(this,search,word);
        }
    };
    
    http.open("GET","request.php", true);
    http.send();
}

function parseData(xml,search, word)
{
    var doc = xml.responseXML;
    var notfound = true
    var x = doc.getElementsByTagName("definition");
    
}