window.onload = function() {
    let menuItemRows = document.getElementById('menu-item-drops');

    let i = 0;
    for(let category of menu) {
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

        dropdownTrigger.appendChild(dropButton1);

        let dropSpan1 = document.createElement('span');
        let dropSpanText = document.createTextNode(menuHeaders[i]);

        dropSpan1.appendChild(dropSpanText);

        let dropSpan2 = document.createElement('span');
        dropSpan2.classList.add('icon', 'is-small');

        dropButton1.appendChild(dropSpan1);
        dropButton1.appendChild(dropSpan2);

        let dropIcon1 = document.createElement('i');
        dropIcon1.classList.add('fa', 'fa-angle-down');
        dropSpan2.appendChild(dropIcon1);

        //Build the remaining dropdown options
        let dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');
        dropdownMenu.role = 'menu'; //Not working
        dropdownMenu.id = "dropdown-menu";

        let dropContent = document.createElement('div');
        dropContent.classList.add('dropdown-content');
        dropdownMenu.appendChild(dropContent);

        dropdownMenu.appendChild(dropContent);
        dropdown.appendChild(dropdownMenu);


        for(let item of category) {
            let contentLink1 = document.createElement('a');
            contentLink1.href = '#';
            contentLink1.classList.add('dropdown-item');
            contentLink1.textContent = item;

            dropContent.appendChild(contentLink1);
        }

        i++;
        row.appendChild(dropdown);
        menuItemRows.appendChild(row)
    }

    $('.dropdown').click(function(){
        this.classList.toggle('is-active');
    })
}