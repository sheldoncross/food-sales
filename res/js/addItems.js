var addedItems = [];

window.onload = function() {
    newCountTable = JSON.parse(window.localStorage.getItem('countTable'));
    if(newCountTable != null) {
        countTable = newCountTable;
    }    
    //Get the position to insert the menu items to add
    let menuItemRows = document.getElementById('menu-item-drops');

    //Counter for the menu headers
    let nextHeader = 0;

    //Todo - Could we find something faster
    for(let category of menu) {
        //Create a row for each item
        let row = document.createElement('div');
        row.classList.add('row', 'm-4');

        //Build the initial dropdown
        let dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');

        let dropdownTrigger = document.createElement('div');
        dropdownTrigger.classList.add('dropdown-trigger');

        dropdown.appendChild(dropdownTrigger);

        let dropButton1 = document.createElement('button');
        dropButton1.classList.add('button');
        dropButton1.classList.add('is-large')

        dropdownTrigger.appendChild(dropButton1);

        //Get the text of each menu header
        let dropSpan1 = document.createElement('span');
        let dropSpanText = document.createTextNode(menuHeaders[nextHeader]);

        //Create the text and dropdown menu button with the menu header
        dropSpan1.appendChild(dropSpanText);

        let dropSpan2 = document.createElement('span');
        dropSpan2.classList.add('icon', 'is-large');

        dropButton1.appendChild(dropSpan1);
        dropButton1.appendChild(dropSpan2);

        let dropIcon1 = document.createElement('i');
        dropIcon1.classList.add('fa', 'fa-angle-down');
        dropSpan2.appendChild(dropIcon1);

        //Build the remaining menu options for the current menu header
        let dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');
        dropdownMenu.role = 'menu'; //Not working
        dropdownMenu.id = "dropdown-menu";

        //Add Content to the drop down options
        let dropContent = document.createElement('div');
        dropContent.classList.add('dropdown-content');
        dropdownMenu.appendChild(dropContent);

        dropdownMenu.appendChild(dropContent);
        dropdown.appendChild(dropdownMenu);

        //Get all the remaining menu items for the current header 
        for(let item of category) {
            let contentLink1 = document.createElement('a');
            contentLink1.href = '#';
            contentLink1.classList.add('dropdown-item');
            contentLink1.textContent = item;
            contentLink1.style = "font-size:150%";
            dropContent.appendChild(contentLink1);
        }
         
        //Get the next menu header and append the retrieved content for the current header
        nextHeader++;
        row.appendChild(dropdown);
        menuItemRows.appendChild(row)
    }

    //Open the menu option when the dropdown is clicked
    //TO-DO Make the dropdown exit properly whenever anything other than dropdown options are clicked
    $('.dropdown').click(function(){
        this.classList.toggle('is-active');
    })

    $('.dropdown-item').click(function(){
        //Find the clicked dropdown item
        for(let category of values){
            for(const [key, value] of Object.entries(category)) {
                if(key == this.textContent){
                    //Add the item with its price value to an array
                    let newKey = key;
                    let newValue = value;
                    let currentEntry = {};
                    currentEntry[newKey] = newValue;
                    addedItems.push(currentEntry);

                    for(let countCategory of countTable) {
                        for(let [countKey, countValue] of Object.entries(countCategory)) {
                            if(countKey == this.textContent){
                                let currentCount = countValue;
                                countCategory[countKey] = currentCount += 1;
                                window.localStorage.setItem('countTable', JSON.stringify(countTable));
                            }
                        }
                    }
                }
            }
        }

        //Print the item and its value to the item added section
        let itemsAdded = document.getElementById('items-added-title-col');
        
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('rows');
        itemsAdded.appendChild(rowDiv);
        
        let itemRow = document.createElement('div');
        itemRow.classList.add('row');
        rowDiv.appendChild(itemRow);

        let itemCol = document.createElement('div');
        itemCol.classList.add('columns');
        rowDiv.appendChild(itemCol);

        let itemNameCol = document.createElement('div');
        itemNameCol.classList.add('column', 'subtitle', 'is-7' ,'mb-0', 'added-item-value');
        itemNameCol.style = "font-size:150%";
        itemCol.appendChild(itemNameCol);

        itemValueCol = document.createElement('div');
        itemValueCol.classList.add('column', 'subtitle', 'is-7', 'mb-0', 'added-item-cost');
        itemValueCol.style = "font-size:150%";
        itemCol.appendChild(itemValueCol);

        let itemName = Object.keys(addedItems[addedItems.length-1])[0];
        let itemNameText = document.createTextNode(itemName);
        itemNameCol.appendChild(itemNameText);

        let dollarSign = document.createTextNode('$');
        let itemValue = Object.values(addedItems[addedItems.length-1])[0];
        let itemValueText = document.createTextNode(itemValue);
        itemValueCol.appendChild(dollarSign);
        itemValueCol.appendChild(itemValueText);
    })
}
