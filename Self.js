let num=11;
for(i=1;i<=4;i++){
    let row=" ";
    for(j=1;j<=i;j++){
        row+=num+" ";
        num--
    }
    console.log(row);
    
}