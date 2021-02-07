function init() {
    $.post(
        "core.php",
        {
            "action": "init"
        }
    );
    $.getJSON("phone.json", streetOut);
}

function streetOut(data){
    console.log(data)
    /*  let data = JSON.parse(indata);*/
    let out = ""
    out += '<tr class="phone1">' +
        '            <td id="st">Streets</td>\n' +
        '      </tr>';
    for(let i = 1; i < data.length-1; i=i+3){

        out += ' <tr class="phone2" >' +
            '<td class="st tdhover" id ="' + data[i-1].streets + '"  >' + data[i-1].streets + '"</td>\n' +
            '<td class="st tdhover" id ="' + data[i].streets + '"  >' + data[i].streets + '</td>\n ' +
            '<td class="st tdhover" id ="' + data[i+1].streets + '"  >' + data[i+1].streets + '</td>\n ' +
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
                selectEventOnStreets(id + "down",id,data )
            } else {
                selectEventOnStreets(id + "up",id,data)
            }
        } else {
            console.log(":)");
        }
    }
}
function selectEventOnStreets(idUpDown,id,data){
    switch (idUpDown) {
        case "stup" :
            sortByStringUp(id);
            break;
        case "stdown" :
            sortByStringDown(id);
            break;
        default:
            streetsSearch(0,0,id,0,0);
            break;

    }
}
function streetsSearch(pn,fn,st,hn,fl){  // связь с PHP function
    $.post(
        "core.php",{

            "action" :'selectSearch' ,
            "pn" : pn,
            "fn" : fn,
            "st" : st,
            "hn" : hn,
            "fl" : fl,
        },

        phoneOut
    )
}
function phoneOut(indata) { //выводит содержимое на страницу
    // выводим на страницу
    let data = JSON.parse(indata);
    let out = ""
    out += '<tr class="phone1">' +
        '            <td id="pn">Phone </td>\n' +
        '            <td id="fn">Female Name</td>\n' +
        '            <td id="st">Streets</td>\n' +
        '            <td id="hn">Houses </td>\n' +
        '            <td id="fl">Flats</td>\n' +
        '      </tr>';
    for (let key in data) {
        out += ' <tr class="phone2" >' +
            '<td class="pn tdhover" id ="' + data[key].number + '"  >' + data[key].number + '</td>\n' +
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
                selectEvent(id + "down",id,data)
            } else {
                selectEvent(id + "up",id,data)
            }
        } else {
            console.log(":)");
        }
    }
}
function selectEvent(idUpDown,id,data) {  //проверяет и  распределяет по функциям в зависимости от иветта в таблице
    switch (idUpDown) {
        case "pnup" :
            sortByStringUp(id);
            break;
        case "pndown" :
            sortByStringDown(id);
            break;
        case "fnup" :
            sortByStringUp(id);
            break;
        case "fndown" :
            sortByStringDown(id);
            break;
        case "stup" :
            sortByStringUp(id);
            break;
        case "stdown" :
            sortByStringDown(id);
            break;
        case "hnup":
            sortByNumberUp(id);
            break;
        case "hndown":
            sortByNumberDown(id);
            break;
        case "flup":
            sortByNumberUp(id);
            break;
        case "fldown":
            sortByNumberDown(id);
            break;
        default:
            goToForm(id, data);
            break;

    }
}
function goToForm(phone, dataArray) { // автозаполнение формы по номеру телефона
    let data = objectFindByKey(dataArray, "number", phone);
    $('.phoneNumber').val(data.number);
    $('.femaleName').val(data.famely );
    $('.street').val(data.streets);
    $('.houseNumber').val(data.houses);
    $('.flat').val(data.flats  );
}
function sortByStringUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.'+id).innerHTML)
    console.log(nav.children[2].querySelector('.'+id).innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.'+id).innerHTML;
            let b = nav.children[j].querySelector('.'+id).innerHTML;
            if ((a.localeCompare(b)) < 0) { //if a< b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#'+id).setAttribute('class', 'up')
}
function sortByStringDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.'+id).innerHTML)
    console.log(nav.children[2].querySelector('.'+id).innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.'+id).innerHTML;
            let b = nav.children[j].querySelector('.'+id).innerHTML;
            if ((a.localeCompare(b)) > 0) { //if a > b == 1  sort "down"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#'+id).setAttribute('class', 'down')
}
function sortByNumberUp(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.'+id).innerHTML)
    console.log(nav.children[2].querySelector('.'+id).innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.'+id).innerHTML;
            let b = nav.children[j].querySelector('.'+id).innerHTML;
            if (+a < +b) { //if a < b == 1  sort "up"
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#'+id).setAttribute('class', 'up')
}
function sortByNumberDown(id, data) {

    let nav = document.querySelector(".out");
    console.log(nav)
    console.log(nav.children[1].querySelector('.'+id).innerHTML)
    console.log(nav.children[2].querySelector('.'+id).innerHTML)
    for (let i = 1; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            let a = nav.children[i].querySelector('.'+id).innerHTML;
            let b = nav.children[j].querySelector('.'+id).innerHTML;
            if (+a > +b) { //if a > b == 1 sort "down" "+"--(it is number)
                let replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i])

            }
        }
    }
    document.querySelector('#'+id).setAttribute('class', 'down')
}
function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
function objectFindByKey(data, key, value) {
    for (var i = 0; i < data.length; i++) {
        if (data[i][key] === value) {
            return data[i];
        }
    }
    return null;
}

function addSearchForm(ask){  // связь с PHP function
    let pn = $('.phoneNumber').val();
    let fn = $('.femaleName').val();
    let st = $('.street').val();
    let hn = $('.houseNumber').val();
    let fl = $('.flat').val();
    if(((pn && fn && st && hn && fl) !== null) && ((pn && fn && st && hn && fl) !== "0")){
        $.post(
            "core.php",{

                "action" : ask,
                "pn" : pn,
                "fn" : fn,
                "st" : st,
                "hn" : hn,
                "fl" : fl,
            },

            function (data){
                if(data !== null) {
                    console.log(data)
                    alert("The row is it.(Страка готова)");
                    phoneOut(data)
                }
            }
        )
    } else{ alert("Add ask to forms.(добавте запрос в форму)")}
}
$(document).ready(function () {
    init();
    let eventSearch = document.querySelector('.searchPhone');
    eventSearch.onclick = function (event) {addSearchForm("selectSearch")}

});