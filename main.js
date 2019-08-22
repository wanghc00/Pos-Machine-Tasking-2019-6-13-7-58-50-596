const database = [
    {id: "0001", name : "Coca Cola", price: 3},
    {id: "0002", name : "Diet Coke", price: 4},
    {id: "0003", name : "Pepsi-Cola", price: 5},
    {id: "0004", name : "Mountain Dew", price: 6},
    {id: "0005", name : "Dr Pepper", price: 7},
    {id: "0006", name : "Sprite", price: 8},
    {id: "0007", name : "Diet Pepsi", price: 9},
    {id: "0008", name : "Diet Mountain Dew", price: 10},
    {id: "0009", name : "Diet Dr Pepper", price: 11},
    {id: "0010", name : "Fanta", price: 12}
];

function countItems(barcodes){
    //barcodes=['0001', '0003', '0005', '0003'];
    const result = [];
    for(let i=0;i<barcodes.length;i++){
        var index=result.findIndex((item)=>item.id==barcodes[i]);
        if(index>-1){
            result[index].count++;
        }else{
            result.push({
                id:barcodes[i],
                count:1
            });
        }
    }
    //console.log(result);
    return result;
}

function getItems(countArray){
    countArry=[{id:"0001",count:2},{id:"0002",count:3}];
    console.log(countArray);
    var result=[];
    for(let j=0;j<database.length;j++){
        console.log(database[j].id);
    }
    for(let i=0;i<countArray.length;i++){
        for(let j=0;j<database.length;j++){
            if(countArray[i].id==database[j].id){
                result.push({
                    id:countArray[i].id,
                    name:database[j].name,
                    count:countArray[i].count,
                    price:database[j].price,
                    subTotal:countArray[i].count*database[j].price
                });
            }
        }
    }
    console.log(result);
    return result;
}

function calculateTotal(total){
    const result="";
    for(let i=0;i<total.length;i++){
        result+=total[i].subTotal;
    }
    return result;
}

function getLine(itemsArray){
    const result="";
    for(let i=0;i<itemsArray.length;i++){
        result=result+itemsArray[i].name+"\t"+itemsArray[i].price+"\t"+itemsArray[i].count+"\n";
    }
    return result;
}

function printReceipt(itemsArray){
    const result="Receipts\n";
    const seprator="------------------------------------------------------------";
    result+=seprator;
    for(let i=0;i<itemsArray;i++){
        result=result+getLine(itemsArray[i])+"\n";
    }
    result+=seprator;
    var totalMoney=0;
    for(let i=0;i<itemsArray.length;i++){
        totalMoney=itemsArray[i].subTotal;
    }
    result=result+`Price: ${totalMoney}`;
    return result;
}


module.exports = countItems;

