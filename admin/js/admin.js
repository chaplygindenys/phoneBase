function init() {
    $.post(
        "core.php",
        {
            "action": "init"
        },
        phoneOut
    );
}

function phoneOut(indata) {
    // выводим на страницу
    let data = JSON.parse(indata);
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
            ' <td class="fl" >' + data[key].flat + '</td>\n' +
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
                selectEvent(id + "down")
            } else {
                selectEvent(id + "up")
            }
        } else {
            console.log(":)");
        }
    }

    function selectEvent(id) {
        switch (id) {
            case "pnup" :
                sortByNumberUp(id, data);
                break;
            case "pndown" :
                sortByNumberDown(id, data);
                break;
            case "nameup" :
                sortByNameUp(id, data);
                break;
            case "namedown" :
                sortByNameDown(id, data);
                break;
            case "fnup" :
                sortByFemaleNameUp(id, data);
                break;
            case "fndown" :
                sortByFemaleNameDown(id, data);
                break;
            case "stup" :
                sortByStreetUp(id, data);
                break;
            case "stdown" :
                sortByStreetDown(id, data);
                break;
            case "hnup":
                sortHouseNumberUp(id, data);
                break;
            case "hndown":
                sortHouseNumberDown(id, data);
                break;
            case "flup":
                sortByFlatUp(id, data);
                break;
            case "fldown":
                sortByFlatDown(id, data);
                break;
            default:
                goToform(id, data);
                break;

        }
    }
}

function goToform(id, data) {
    console.log(data)
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
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
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
            if ((a.localeCompare(b)) < 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
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
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
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
            if ((a.localeCompare(b)) < 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
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
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
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
            if ((a.localeCompare(b)) < 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
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
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "up"
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
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#hn').setAttribute('class', 'up')
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
    init();
});