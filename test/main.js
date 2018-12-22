// 5155123886a16516b322284c06edc47289b3b8695c42fb1ada3b2de9f651a00e7514312fa5e1b127d99ed 
function getUrl(method,params) {
    if(!method) throw new Error("Вы не указали метод")
    params = params || {};
    params["access_token"] = "7f9ba6f388998fd76e13de5da7d7cc43f837c0968f70ecd6cad09f6b638d34765125b397fface790377cb";
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
