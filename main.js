function init(){
    // читаем файл
    $.getJSON("phone.json",phoneOut);
}
function phoneOut(data){
    // выводим на страницу
    console.log(data);
    let out ="";
    for (let key in data){
        out+=' <tr class="phone' +
             key+'"><td class="pn">'+
            555-555-55</td>\n' +
            '                <td class="name">Andrey</td>\n' +
            '                <td class="fn">Yshako</td>\n' +
            '                <td class="st">summer</td>\n' +
            '                <td class="hn">5</td>\n' +
            '                <td class="fl">2</td>\n' +
            '            </tr>'

    }
}
$(document).ready(function (){
    init();
});
