function printReceipt(barcodes) {
    items = loadItems();
    order = createOrder(barcodes);
    receiptDetail = generateReceipt(items, order);
    console.log(`
***<store earning no money>Receipt ***
`+
receiptDetail)
}

function generateReceipt(items,order) {
    
    total = 0;
    receiptDetail= "";
    items.forEach(element => {
        if (order[element.barcode]) {
            subtotal = element.price * order[element.barcode];
            total += subtotal;
            receiptDetail += "Name: " + element.name + ", Quantity: " + order[element.barcode] + ", Unit price: " + element.price + " (yuan), Subtotal: " + subtotal + " (yuan)";
            receiptDetail += "\n";
        }
    });
    receiptDetail +=`----------------------
Total: `+total+` (yuan)
**********************`;
    return receiptDetail;
}

function createOrder(barcodes) {
    return barcodes.reduce(function (order, barCode) {
        if (barCode in order) {
            order[barCode]++;
        }
        else {
            order[barCode] = 1;
        } return order;
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
