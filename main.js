function init() {
    // читаем файл
    $.getJSON("phone.json", phoneOut);
}

function phoneOut(data) {
    // выводим на страницу
    console.log(data);
    let out = ""
    out += '<tr class="phone1">' +
        '            <td id="pn">Phone Number</td>\n' +
        '            <td id="name">Name</td>\n' +
        '            <td id="fn">Female Name</td>\n' +
        '            <td id="st">Street</td>\n' +
        '            <td id="hn">House Number</td>\n' +
        '            <td id="fl">Flat</td>\n' +
        '      </tr>';
    for (let key in data) {
        out += ' <tr class="phone1" >' +
            '<td class="pn" id ="' + data[key].number + '"  >' + data[key].number + '</td>\n' +
            '<td class="name">' + data[key].name + '</td>\n' +
            '<td class="fn">' + data[key].femaleName + '</td>\n ' +
            '<td class="st">' + data[key].street + '</td>\n ' +
            '<td class="hn">' + data[key].houseNumber + '</td>\n' +
            ' <td class="fl">' + data[key].flat + '</td>\n' +
            '</tr>';

    }
    $('.out').html(out);

    let eventTd = document.querySelector('table');
    eventTd.onclick = function (event) {
        let targetelem = event.target;
        let id = targetelem.id;
        if (id !== null && id !== "") {
            selectEvent(id);
        } else {
            console.log(":)");
        }
    }

    function selectEvent(id) {
        switch (id) {
            case "pn" :
                sortByNumber(id,data);
                break;
            case "name" :
                sortByName(id,data);
                break;
            case "fn" :
                sortByFemaleName(id,data);
                break;
            case "st" :
                sortByStreet(id,data);
                break;
            case "hn":
                sortHouseNumber(id,data);
                break;
            case "fl":
                sortByFlat(id,data);
                break;
            default:
                goToform(id,data);
                break;

        }
    }
}
function goToform(id,data){
    console.log(data)
    }

function sortByNumber(id){

    console.log(id)
}
function sortByName(id){
    console.log(id)
}

function sortByFemaleName(id){
    console.log(id)
}

function sortByStreet(id){
    console.log(id)
}

function sortHouseNumber(id,data) {
    data.sort(byField("houseNumber"));
    console.log(data);

    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;

    }console.log(id)
}

function sortByFlat(id,data) {
    data.sort(byField("flat"));
    console.log(data);

    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
}





$(document).ready(function () {
    init();
});
