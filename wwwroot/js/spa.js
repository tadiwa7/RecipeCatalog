$(document).ready(function () {
    $('#breakfast').click(function () {
        $('#page-content-wrapper').load('breakfast.html');
    })
})

$(document).ready(function () {
    $('#lunch').click(function () {
        $('#page-content-wrapper').load('lunch.html');
    })
})

$(document).ready(function () {
    $('#dinner').click(function () {
        $('#page-content-wrapper').load('dinner.html');
    })
})

$(document).ready(function () {
    $('#snacks').click(function () {
        $('#page-content-wrapper').load('snacks.html');
    })
})

function loadContent(page) {
    fetch(page)
        .then(function (response) {
            return response.text();
        })
        .then(function(html) {
            document.getElementById('page-content-wrapper').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}




$(document).ready(function () {

    $.getJSON("recipes.json", function (data) {
        console.log(data)

        $('.title').html(data.title);
        $('.ingredients').html(data.ingredients);
        $('.instructions').html(data.instructions);
        $('.title2').html(data.title2);
        $('.ingredients2').html(data.ingredients2);
        $('.instructions2').html(data.instructions2);
        $('.title3').html(data.title3);
        $('.ingredients3').html(data.ingredients3);
        $('.instructions3').html(data.instructions3);
        $('.title4').html(data.title4);
        $('.ingredients4').html(data.ingredients4);
        $('.instructions4').html(data.instructions4);
        $('.title5').html(data.title5);
        $('.ingredients5').html(data.ingredients5);
        $('.instructions5').html(data.instructions5);
        $('.title6').html(data.title6);
        $('.ingredients6').html(data.ingredients6);
        $('.instructions6').html(data.instructions6);
        $('.title7').html(data.title7);
        $('.ingredients7').html(data.ingredients7);
        $('.instructions7').html(data.instructions7);
        $('.title8').html(data.title8);
        $('.ingredients8').html(data.ingredients8);
        $('.instructions8').html(data.instructions8);
        $('.title9').html(data.title9);
        $('.ingredients9').html(data.ingredients9);
        $('.instructions9').html(data.instructions9);
        $('.title10').html(data.title10);
        $('.ingredients10').html(data.ingredients10);
        $('.instructions10').html(data.instructions10);
        $('.title11').html(data.title11);
        $('.ingredients11').html(data.ingredients11);
        $('.instructions11').html(data.instructions11);
        $('.title12').html(data.title12);
        $('.ingredients12').html(data.ingredients12);
        $('.instructions12').html(data.instructions12);
        $('.title13').html(data.title13);
        $('.ingredients13').html(data.ingredients13);
        $('.instructions13').html(data.instructions13);
        $('.title14').html(data.title14);
        $('.ingredients14').html(data.ingredients14);
        $('.instructions14').html(data.instructions14);
        $('.title15').html(data.title15);
        $('.ingredients15').html(data.ingredients15);
        $('.instructions15').html(data.instructions15);
        $('.ltitle').html(data.ltitle);
        $('.lingredients').html(data.lingredients);
        $('.linstructions').html(data.linstructions);
        $('.ltitle2').html(data.ltitle2);
        $('.lingredients2').html(data.lingredients2);
        $('.linstructions2').html(data.linstructions2);
        $('.ltitle3').html(data.ltitle3);
        $('.lingredients3').html(data.lingredients3);
        $('.linstructions3').html(data.linstructions3);
        $('.ltitle4').html(data.ltitle4);
        $('.lingredients4').html(data.lingredients4);
        $('.linstructions4').html(data.linstructions4);
        $('.ltitle5').html(data.ltitle5);
        $('.lingredients5').html(data.lingredients5);
        $('.linstructions5').html(data.linstructions5);
        $('.ltitle6').html(data.ltitle16);
        $('.lingredients6').html(data.lingredients6);
        $('.linstructions6').html(data.linstructions6);
        $('.ltitle7').html(data.ltitle7);
        $('.lingredients7').html(data.lingredients7);
        $('.linstructions7').html(data.linstructions7);
        $('.ltitle8').html(data.ltitle8);
        $('.lingredients8').html(data.lingredients8);
        $('.linstructions8').html(data.linstructions8);
        $('.ltitle9').html(data.ltitle9);
        $('.lingredients9').html(data.lingredients9);
        $('.linstructions9').html(data.linstructions9);
        $('.ltitle10').html(data.ltitle10);
        $('.lingredients10').html(data.lingredients10);
        $('.linstructions10').html(data.linstructions10);
        $('.ltitle11').html(data.ltitle11);
        $('.lingredients11').html(data.lingredients11);
        $('.linstructions11').html(data.linstructions11);
        $('.ltitle12').html(data.ltitle12);
        $('.lingredients12').html(data.lingredients12);
        $('.linstructions12').html(data.linstructions12);
        $('.ltitle13').html(data.ltitle13);
        $('.lingredients13').html(data.lingredients13);
        $('.linstructions13').html(data.linstructions13);
        $('.ltitle14').html(data.ltitle14);
        $('.lingredients14').html(data.lingredients14);
        $('.linstructions14').html(data.linstructions14);
        $('.title15').html(data.ltitle15);
        $('.lingredients15').html(data.lingredients15);
        $('.linstructions15').html(data.linstructions15);
        $('.dtitle').html(data.dtitle);
        $('.dingredients').html(data.dingredients);
        $('.dinstructions').html(data.dinstructions);
        $('.dtitle2').html(data.dtitle2);
        $('.dingredients2').html(data.dingredients2);
        $('.dinstructions2').html(data.dinstructions2);
        $('.dtitle3').html(data.dtitle3);
        $('.dingredients3').html(data.dingredients3);
        $('.dinstructions3').html(data.dinstructions3);
        $('.dtitle4').html(data.dtitle4);
        $('.dingredients4').html(data.dingredients4);
        $('.dinstructions4').html(data.dinstructions4);
        $('.dtitle5').html(data.dtitle5);
        $('.dingredients5').html(data.dingredients5);
        $('.dinstructions5').html(data.dinstructions5);
        $('.dtitle6').html(data.dtitle6);
        $('.dingredients6').html(data.dingredients6);
        $('.dinstructions6').html(data.dinstructions6);
        $('.dtitle7').html(data.dtitle7);
        $('.dingredients7').html(data.dingredients7);
        $('.dinstructions7').html(data.dinstructions7);
        $('.dtitle8').html(data.dtitle8);
        $('.dingredients8').html(data.dingredients8);
        $('.dinstructions8').html(data.dinstructions8);
        $('.dtitle9').html(data.dtitle9);
        $('.dingredients9').html(data.dingredients9);
        $('.dinstructions9').html(data.dinstructions9);
        $('.dtitle10').html(data.dtitle10);
        $('.dingredients10').html(data.dingredients10);
        $('.dinstructions10').html(data.dinstructions10);
        $('.dtitle11').html(data.dtitle11);
        $('.dingredients11').html(data.dingredients11);
        $('.dinstructions11').html(data.dinstructions11);
        $('.dtitle12').html(data.dtitle12);
        $('.dingredients12').html(data.dingredients12);
        $('.dinstructions12').html(data.dinstructions12);
        $('.dtitle13').html(data.dtitle13);
        $('.dingredients13').html(data.dingredients13);
        $('.dinstructions13').html(data.dinstructions13);
        $('.dtitle14').html(data.dtitle14);
        $('.dingredients14').html(data.dingredients14);
        $('.dinstructions14').html(data.dinstructions14);
        $('.dtitle15').html(data.dtitle15);
        $('.dingredients15').html(data.dingredients15);
        $('.dinstructions15').html(data.dinstructions15);
        $('.stitle').html(data.stitle);
        $('.singredients').html(data.singredients);
        $('.sinstructions').html(data.sinstructions);
        $('.stitle2').html(data.stitle2);
        $('.singredients2').html(data.singredients2);
        $('.sinstructions2').html(data.sinstructions2);
        $('.stitle3').html(data.stitle3);
        $('.singredients3').html(data.singredients3);
        $('.sinstructions3').html(data.sinstructions3);
        $('.stitle4').html(data.stitle4);
        $('.singredients4').html(data.singredients4);
        $('.sinstructions4').html(data.sinstructions4);
        $('.stitle5').html(data.stitle5);
        $('.singredients5').html(data.singredients5);
        $('.sinstructions5').html(data.sinstructions5);
        $('.stitle6').html(data.stitle6);
        $('.singredients6').html(data.singredients6);
        $('.sinstructions6').html(data.sinstructions6);
        $('.stitle7').html(data.stitle7);
        $('.singredients7').html(data.singredients7);
        $('.sinstructions7').html(data.sinstructions7);
        $('.stitle8').html(data.stitle8);
        $('.singredients8').html(data.singredients8);
        $('.sinstructions8').html(data.sinstructions8);
        $('.stitle9').html(data.stitle9);
        $('.singredients9').html(data.singredients9);
        $('.sinstructions9').html(data.sinstructions9);
        $('.stitle10').html(data.stitle10);
        $('.singredients10').html(data.singredients10);
        $('.sinstructions10').html(data.sinstructions10);


    }).fail(function () {
        console.log("Check your code")
    })
})

