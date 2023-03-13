// break = breks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i+=1){
    if (i == 13){
        break;
    }
    if (i == 5) {
        continue;
    }
    console.log(i)
}