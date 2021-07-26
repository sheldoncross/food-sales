/*
 * A set of items to use within food item tracker system
 */

var totalSalesVal = 0;
var tipsEarnedVal = 0;

//Menu item names
var menuHeaders = ['Appetizers', 'Entrees', 'Flatbreads', 'Sandwiches', 'Desserts', 
                    'Kids', 'Additions' ];

var appetizers = ['Leek & Spinach Soup', 'Caesar Salad', 'Garden Salad', 
                'Chicken Wings(1lb)', 'Chicken Wings (2lb)', 'Nachos'];

var entrees = ['Jerk Chicken', 'Kyoto Salmon', 'Striploin Steak', 'Sauteed Veg/Rice',
                'Rasta Pasta', 'Linguine Pomodoro'];

var flatbreads = ['Cheese FB', 'Pepperoni FB', 'Vege FB', 'HGI Meaty FB'];

var sandwiches = ['Grille Bruger', 'Grilled Chicken', 'Vege Burger'];

var desserts = ['Chocolate Mousse', 'NY Cheesecake'];

var kids = ['Chicken Fingers', 'Kids Pasta', 'Kids Pizza', 'Ice Cream'];

var additions = ['Add Side Caesar', 'Add Side Garden', 'Add Side Fries', 
                'Add Side Gravy', 'Add Bacon', 'Add Cheese', 'Add Variable',
                'Add Grilled Chicken', 'Add Salmon', 'Add Steak'];

var menu = [appetizers, entrees, flatbreads, sandwiches, desserts, kids, additions];


//Todo - Generate the menu from the dictionary rather than the array

//Menu dictionaries for counts
var appetizersCount = {'Leek & Spinach Soup': 0, 'Caesar Salad': 0, 'Garden Salad': 0, 
                        'Chicken Wings(1lb)': 0, 'Chicken Wings (2lb)': 0, 'Nachos': 0};

var entreesCount = {'Jerk Chicken': 0, 'Kyoto Salmon': 0, 'Striploin Steak': 0, 'Sauteed Veg/Rice': 0,
                    'Rasta Pasta': 0, 'Linguine Pomodoro': 0};

var flatbreadsCount = {'Cheese FB': 0, 'Pepperoni FB': 0, 'Vege FB': 0, 'HGI Meaty FB': 0};

var sandwichesCount = {'Grille Bruger': 0, 'Grilled Chicken': 0, 'Vege Burger': 0};

var dessertsCount = {'Chocolate Mousse': 0, 'NY Cheesecake': 0};

var kidsCount = {'Chicken Fingers': 0, 'Kids Pasta': 0, 'Kids Pizza': 0, 'Ice Cream': 0};

var addCount = {'Add Side Caesar': 0, 'Add Side Garden': 0, 'Add Side Fries': 0, 'Add Side Gravy': 0, 
                'Add Bacon': 0, 'Add Cheese': 0, 'Add Variable': 0, 'Add Grilled Chicken': 0, 'Add Salmon': 0,
                'Add Steak': 0};

var countTable = [appetizersCount,  entreesCount, flatbreadsCount, sandwichesCount, dessertsCount, kidsCount, addCount];


//Menu dictionaries for price values
var appetizersVals = {'Leek & Spinach Soup': 10, 'Caesar Salad': 10, 'Garden Salad': 9, 
                        'Chicken Wings(1lb)': 15, 'Chicken Wings (2lb)': 20, 'Nachos': 15};

var entreesVals = {'Jerk Chicken': 19, 'Kyoto Salmon': 30, 'Striploin Steak': 31, 'Sauteed Veg/Rice': 14,
                    'Rasta Pasta': 21, 'Linguine Pomodoro': 14};

var flatbreadsVals = {'Cheese FB': 13, 'Pepperoni FB': 14, 'Vege FB': 14, 'HGI Meaty FB': 15};

var sandwichesVals = {'Grille Bruger': 16, 'Grilled Chicken': 15, 'Vege Burger': 14};

var dessertsVals = {'Chocolate Mousse': 8, 'NY Cheesecake': 9};

var kidsVals = {'Chicken Fingers': 10, 'Kids Pasta': 9, 'Kids Pizza': 8, 'Ice Cream': 5};

var addVals = {'Add Side Caesar': 0, 'Add Side Garden': 0, 'Add Side Fries': 0, 'Add Side Gravy': 0, 
                'Add Bacon': 0, 'Add Cheese': 0, 'Add Variable': 0, 'Add Grilled Chicken': 9, 'Add Salmon': 12,
                'Add Steak': 12};

var values = [appetizersVals, entreesVals, flatbreadsVals, sandwichesVals, dessertsVals, kidsVals, addVals]; 