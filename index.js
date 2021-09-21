
function isWin(element, index, array) {
    return (element.result === 'W');
}

function superbowlWin(record) {
    let winningYear = record.find(isWin);
    if(winningYear != undefined){
        let year = winningYear.year;
        console.log(year);
        return year;
    }
    else {
        console.log(winningYear);
        return undefined;
    }
}