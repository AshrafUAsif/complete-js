// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log(j"5 is best number");
    } 
    //console.log(element);
}

// loop inside loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and outer loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
    
}

