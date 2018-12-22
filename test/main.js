//  
function getUrl(method,params) {
    if(!method) throw new Error("Вы не указали метод")
    params = params || {};
    params["access_token"] = "";
    return "https://api.vk.com/method/" + method + "?" + $.param(params);
}

function sendRequest(method, params, func) {
    $.ajax({
        url: getUrl(method, params),
        method: "GET",
        dataType: "JSONP",
        success: func
    });
}

setInterval(function () {
    sendRequest("friends.search", {
        count: 1000,
        fields: "photo_200_orig, online",
        version: "5.92"
    }, function (data) {
        console.log(data)
        drawFriends(data.response);
    });
}, 500)
var i = 1;
function drawFriends(friends) {
    let online = {
        "1": "<div class=\"online_on\">онлайн</div>",
        "0": "<div class=\"online_off\">не онлайн</div>"
        },
        id = friends[i].uid;
        var newLi = document.createElement('div');
        newLi.innerHTML = `<div class="first_last_name"><a target="_blank" href="https://vk.com/id${friends[i].uid}">${friends[i].first_name} ${friends[i].last_name}</a></div>
        ${online[friends[i].online]}
        <img style="width: 25%" src="${friends[i].photo_200_orig}"><br>
        `;
        list.appendChild(newLi);
        i++
}
