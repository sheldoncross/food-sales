var appetizers = ['Leek & Spinach Soup:', 'Caesar Salad:', 'Garden Salad:', 
                'Chicken Wings(1lb):', 'Chicken Wings (2lb):', 'Nachos:'];

var entrees = ['Jerk Chicken:', 'Kyoto Salmon:', 'Striploin Steak:', 'Sauteed Veg/Rice:',
                'Rasta Pasta:', 'Linguine Pomodoro:'];

var flatbreads = ['Cheese FB:', 'Pepperoni FB:', 'Vege FB:', 'HGI Meaty FB:'];

var sandwiches = ['Grille Bruger:', 'Grilled Chicken:', 'Vege Burger:'];

var desserts = ['Chocolate Mousse:', 'NY Cheesecake:'];

var kids = ['Chicken Fingers:', 'Kids Pasta:', 'Kids Pizza:', 'Ice Cream:'];

var additions = ['Add Side Ceasar:', 'Add Side Garden:', 'Add Side Fries:', 
                'Add Side Gravy:', 'Add Bacon:', 'Add Chese:', 'Add Variable:',
                'Add Grilled Chicken:', 'Add Salmon:', 'Add Steak:'];

var menu = [appetizers, entrees, flatbreads, sandwiches, desserts, kids, additions];


window.onload = function() {
    let header1 =  document.getElementById('header1');
    let header2 =  document.getElementById('header2');
    let header3 =  document.getElementById('header3');
    let header4 =  document.getElementById('header4');
    let header5 =  document.getElementById('header5');
    let header6 =  document.getElementById('header6');

    let headers = [header1, header2, header3, header4, header5, header6, header6];

    let nextHeader = 0;
    for (let category of menu) {
        for(let dish of category) {
            let column =  document.createElement('div');
            column.classList.add('columns', 'mt-2');
            let div1 = document.createElement('div');
            div1.classList.add('column', 'subtitle', 'is-6', 'food-item'); 
            let div2 = document.createElement('div');
            div2.classList.add('column', 'food-value', 'subtitle', 'is-6');
            let item = document.createTextNode(dish);
            let value = document.createTextNode('0');
            div1.appendChild(item);
            div2.appendChild(value);
            column.appendChild(div1);
            column.appendChild(div2);
            headers[nextHeader].appendChild(column);
        }
        nextHeader++;
    }
}