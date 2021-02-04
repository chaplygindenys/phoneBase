function init() {
    $.post(
        "core.php",
        {
            "action": "init"
        },
        phoneOut
    );
}
function searchForm(ask, column ){
    $.post(
        "core.php",{

            "action" : "selectSearch",
            "ask"    : ask,
            "column" : column
        },

        phoneOut
    )
}

function phoneOut(indata) {
    console.log(indata)
    // выводим на страницу
    let data = JSON.parse(indata);
    console.log(data)
    let out = ""
    out += '<tr class="phone1">' +
        '            <td id="pn">Phone </td>\n' +
        '            <td id="fn">Female Name</td>\n' +
        '            <td id="st">Streets</td>\n' +
        '            <td id="hn">Houses </td>\n' +
        '            <td id="fl">Flats</td>\n' +
        '      </tr>';
    for (let key in data) {
        out += ' <tr class="phone1" >' +
            '<td class="pn" id ="' + data[key].number + '"  >' + data[key].number + '</td>\n' +
            '<td class="fn">' + data[key].famely + '</td>\n ' +
            '<td class="st">' + data[key].streets + '</td>\n ' +
            '<td class="hn">' + data[key].houses + '</td>\n' +
            ' <td class="fl" >' + data[key].flats + '</td>\n' +
            '</tr>';

    }
    $('.out').html(out);

    let eventTd = document.querySelector('table');
    eventTd.onclick = function (event) {
        let targetelem = event.target;
        let upDown = targetelem.className;
        let id = targetelem.id;

        if (id !== null && id !== "") {
            if (upDown !== "down") {
                selectEvent(id + "down",id)
            } else {
                selectEvent(id + "up",id)
            }
        } else {
            console.log(":)");
        }
    }


    function selectEvent(idUpDown,id) {
        switch (idUpDown) {
            case "pnup" :
                sortByNumberUp(id);
                break;
            case "pndown" :
                sortByNumberDown(id);
                break;
            case "nameup" :
                sortByNameUp(id);
                break;
            case "namedown" :
                sortByNameDown(id);
                break;
            case "fnup" :
                sortByFemaleNameUp(id);
                break;
            case "fndown" :
                sortByFemaleNameDown(id);
                break;
            case "snup" :
                sortBySurNameUp(id);
                break;
            case "sndown" :
                sortBySurNameDown(id);
                break;
            case "stup" :
                sortByStreetUp(id);
                break;
            case "stdown" :
                sortByStreetDown(id);
                break;
            case "hnup":
                sortHouseNumberUp(id);
                break;
            case "hndown":
                sortHouseNumberDown(id);
                break;
            case "flup":
                sortByFlatUp(id);
                break;
            case "fldown":
                sortByFlatDown(id);
                break;
            default:
                goToform(id, data);
                break;

        }
    }
}

function goToform(id, data) {
    console.log(id)
}

function sortByNumberUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.pn').innerHTML)
    console.log(nav.children[2].querySelector('.pn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.pn').innerHTML;
            let b = nav.children[j].querySelector('.pn').innerHTML;
            if ((a.localeCompare(b)) < 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#pn').setAttribute('class', 'up')
}
function sortByNumberDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.pn').innerHTML)
    console.log(nav.children[2].querySelector('.pn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.pn').innerHTML;
            let b = nav.children[j].querySelector('.pn').innerHTML;
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#pn').setAttribute('class', 'down')
}
function sortByNameUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.name').innerHTML)
    console.log(nav.children[2].querySelector('.name').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.name').innerHTML;
            let b = nav.children[j].querySelector('.name').innerHTML;
            if ((a.localeCompare(b)) < 0) { //if a < b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#name').setAttribute('class', 'up')
}
function sortByNameDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.name').innerHTML)
    console.log(nav.children[2].querySelector('.name').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.name').innerHTML;
            let b = nav.children[j].querySelector('.name').innerHTML;
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "down"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#name').setAttribute('class', 'down')
}
function sortByFemaleNameUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.fn').innerHTML)
    console.log(nav.children[2].querySelector('.fn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.fn').innerHTML;
            let b = nav.children[j].querySelector('.fn').innerHTML;
            if ((a.localeCompare(b)) < 0) { //if a < b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#fn').setAttribute('class', 'up')
}
function sortByFemaleNameDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.fn').innerHTML)
    console.log(nav.children[2].querySelector('.fn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.fn').innerHTML;
            let b = nav.children[j].querySelector('.fn').innerHTML;
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "down"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#fn').setAttribute('class', 'down')
}
function sortBySurNameUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.sn').innerHTML)
    console.log(nav.children[2].querySelector('.sn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.sn').innerHTML;
            let b = nav.children[j].querySelector('.sn').innerHTML;
            if ((a.localeCompare(b)) < 0) { //if a < b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#sn').setAttribute('class', 'up')
}
function sortBySurNameDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.sn').innerHTML)
    console.log(nav.children[2].querySelector('.sn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.sn').innerHTML;
            let b = nav.children[j].querySelector('.sn').innerHTML;
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "down"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#sn').setAttribute('class', 'down')
}
function sortByStreetUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.st').innerHTML)
    console.log(nav.children[2].querySelector('.st').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.st').innerHTML;
            let b = nav.children[j].querySelector('.st').innerHTML;
            if ((a.localeCompare(b)) < 0) { //if a< b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#st').setAttribute('class', 'up')
}
function sortByStreetDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.st').innerHTML)
    console.log(nav.children[2].querySelector('.st').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.st').innerHTML;
            let b = nav.children[j].querySelector('.st').innerHTML;
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "down"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#st').setAttribute('class', 'down')
}
function sortHouseNumberUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.hn').innerHTML)
    console.log(nav.children[2].querySelector('.hn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.hn').innerHTML;
            let b = nav.children[j].querySelector('.hn').innerHTML;
            if (a < b) { //if a < b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
}
function sortHouseNumberDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.hn').innerHTML)
    console.log(nav.children[2].querySelector('.hn').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.hn').innerHTML;
            let b = nav.children[j].querySelector('.hn').innerHTML;
            if (a > b) { //if a > b == 1 sort "down"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'down')
}
function sortByFlatUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.fl').innerHTML)
    console.log(nav.children[2].querySelector('.fl').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.fl').innerHTML;
            let b = nav.children[j].querySelector('.fl').innerHTML;
            if (a < b) { //if a < b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#fl').setAttribute('class', 'up')
}
function sortByFlatDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.fl').innerHTML)
    console.log(nav.children[2].querySelector('.fl').innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.fl').innerHTML;
            let b = nav.children[j].querySelector('.fl').innerHTML;

            if (a > b ) { //if a > b  sort "down"
                  // replacedNode=parentNode.replaceChild(childrenNew,.childrenOld)
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }else{console.log("ok")}
        }
    }
    document.querySelector('#fl').setAttribute('class', 'down')
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

$(document).ready(function () {
    searchForm( "ТАЕЖНАЯ","streets");
});