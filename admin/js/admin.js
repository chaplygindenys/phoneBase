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
            '<td class="pn" id ="' + data[key].number  + '"  >' + data[key].number + '</td>\n' +
            '<td class="name">' + data[key].name + '</td>\n' +
            '<td class="fn">' + data[key].femaleName + '</td>\n ' +
            '<td class="st">' + data[key].street + '</td>\n ' +
            '<td class="hn">' + data[key].houseNumber + '</td>\n' +
            ' <td class="fl">' + data[key].flat + '</td>\n' +
            '</tr>';

    }
    $('.out').html(out);

    let eventTd = document.querySelector('table');
    eventTd.onclick = function(event){
        let targetelem = event.target;
           let id = targetelem.id;
            if(id!== undefined ){
                console.log(id);
                selectEvent(id);
            }else {
             console.log(":)");}
    }
  /*  $('#pn').on('click', sortByNumber);
    $('#name').on('click', sortByName);
    $('#fn').on('click', sortByFemaleName);
    $('#st').on('click', sortByStreet);
    $('#hn').on('click', sortHouseNumber);
    $('#fl').on('click', sortByFlat);*/
}


function selectEvent(id){



}
function selectPhone(id){

   console.log(id);

}
function sortByNumber() {

    console.log("1");
}

function sortByName() {
    console.log("data");
}

function sortByFemaleName(data) {
    console.log(2);
}

function sortByStreet(data) {
    console.log(12);
}

function sortHouseNumber(data) {
    console.log(12);
}

function sortByFlat() {
    console.log("dog")
}



$(document).ready(function () {
    init();
});