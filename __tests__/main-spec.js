const printReceipt = require('../main');

let barcodeArray = ['0001', '0003', '0005', '0003'];
it ('should return receipt from database when call printReceipt by given the barcodeArray', () => {
    expect(printReceipt()).toBe(
        "Receipts\n"+
    "------------------------------------------------------------\n"+
    "Coca Cola                   3         1\n"+
    "Pepsi-Cola                   5         2\n"+
    "Dr Pepper                   7         1\n"+
    "------------------------------------------------------------\n"+
    "Price:20"
);
});
