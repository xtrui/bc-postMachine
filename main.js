function printReceipt(barcodes) {
    items = loadItems();
    order = createOrder(barcodes);
    str = generateRecept(items, order);
    console.log(`
***<store earning no money>Receipt ***
`+
str)
}

function generateRecept(items, barcodes) {
    
    total = 0;
    str = "";
    items.forEach(element => {
        if (order[element.barcode]) {
            subtotal = element.price * order[element.barcode];
            total += subtotal;
            str += "Name: " + element.name + ", Quantity: " + order[element.barcode] + ", Unit price: " + element.price + " (yuan), Subtotal: " + subtotal + " (yuan)";
            str += "\n";
        }
    });
    str +=`----------------------
Total: `+total+` (yuan)
**********************`;
    return str;
}

function createOrder(barcodes) {
    return barcodes.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        }
        else {
            allNames[name] = 1;
        } return allNames;
    }, {});
}

function loadItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: 'Coca-Cola',
            price: 3
        },
        {
            barcode: 'ITEM000001',
            name: 'Sprite',
            price: 3
        },
        {
            barcode: 'ITEM000002',
            name: 'Apple',
            price: 5
        },
        {
            barcode: 'ITEM000003',
            name: 'Litchi',
            price: 15
        },
        {
            barcode: 'ITEM000004',
            name: 'Battery',
            price: 2
        },
        {
            barcode: 'ITEM000005',
            name: 'Instant Noodles',
            price: 4
        }
    ];
}
const barcodes = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];

printReceipt(barcodes);

module.exports = {
    printReceipt
};