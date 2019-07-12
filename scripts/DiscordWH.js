var VisitorData = new Object();
        
function handleResponse(json) {
    VisitorData = "Visitande de... Pais: " + json.country_name + " Ciudad: "+ json.city + " Region: "+ json.region;
    //set a cookie of the visitor 
    Cookies.set('testVisitor', 'not someone new');
    //var cVisiter = $.cookie("testVisitor", 'not someone new' );
    console.log("Visitande de... Country: " + json.country_name + "City: "+ json.city + "Region: "+ json.region);

    var base = 'https://discordapp.com/api/webhooks/';
    var channel = '/';
    var bot = '';
    var discordUrl = base+channel+bot;

    var payload = JSON.stringify({content: VisitorData});
    
    $.ajax({
        url: discordUrl,
        type: "POST",
        data: payload,
        contentType: 'application/json',
        success: function(){
            console.log("Success")},
        error: function(err){
            console.log("Request failed, error= " + err);
        }
    });
}

//get localization of the visitor
var requestUrl = "https://api.ipdata.co?api-key=test";
$.ajax({
    url: requestUrl,
    type: 'GET',
    success: handleResponse
});