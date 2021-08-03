window.onload = function() {
    $('#reset-button').click(function() {
        window.localStorage.clear();
        location.reload();
    });

    newCountTable = JSON.parse(window.localStorage.getItem('countTable'));
    if(newCountTable != null) {
        countTable = newCountTable;
    }

    let totalSales = document.getElementById('salesValue');
    let tipsEarned = document.getElementById('tipsValue');

    var categoryCount = 0;
    for(let category of values) {
        for(let [itemKey, itemValue] of Object.entries(category)) {
            if(countTable[categoryCount][itemKey] > 0){
                totalSalesVal+= itemValue;
            }
        }
        categoryCount++;
    }

    let totalSalesText = document.createTextNode(totalSalesVal);
    let tipsEarnedText = document.createTextNode(tipsEarnedVal);

    totalSales.appendChild(totalSalesText);
    tipsEarned.appendChild(tipsEarnedText);

    //Get the menu headers from the html page
    //TO-DO Dynamically generate these headers
    let header1 =  document.getElementById('header1');
    let header2 =  document.getElementById('header2');
    let header3 =  document.getElementById('header3');
    let header4 =  document.getElementById('header4');
    let header5 =  document.getElementById('header5');
    let header6 =  document.getElementById('header6');

    //Save the header elements positions
    let headers = [header1, header2, header3, header4, header5, header6, header6];

    //Next header counter
    let nextHeader = 0;
   
    //Get all the header categories for the menu
    for (let category of menu) {
        //Get each dish for each category
        for(let dish of category) {
            //Create a column for each item and append the appropriate value
            let column =  document.createElement('div');
            column.classList.add('columns', 'mt-2');
            let div1 = document.createElement('div');
            div1.classList.add('column', 'subtitle', 'is-6', 'food-item'); 
            let div2 = document.createElement('div');
            div2.classList.add('column', 'food-value', 'subtitle', 'is-6');
            let item = document.createTextNode(dish);
            let colon = document.createTextNode(':');

            for(let valCategory of countTable) {
                for(const [key, value] of Object.entries(valCategory)) {
                    if(key == dish) {
                        var newValue = document.createTextNode(value);
                    }
                }
            }

            div1.appendChild(item);
            div1.appendChild(colon);
            div2.appendChild(newValue);
            column.appendChild(div1);
            column.appendChild(div2);
            headers[nextHeader].appendChild(column);
        }
        //Get the next header
        nextHeader++;
    }

    var supportedFlag = $.keyframe.isSupported();

    let progress = totalSalesVal/1000*100;
    
    $.keyframe.define([{
        name: 'animateProgress',
        '0%': {
            'width' : '0%'
        },
        '100%': {
            'width' : `${progress}%`
        }
        }
    ]);

    $('.progress-bar').playKeyframe({
        name: 'animateProgress',
        duration: '1s',
    })
}