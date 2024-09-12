// Code your solutions in this file

function writeCards(names) {
    let res = []
    for (let i = 0; i< names.length; i++) {
        res.push("Thank you, " + names[i] + ", for the wonderful surprise gift!")
    }
    return res
}

function countDown(cnt) {
    let i = cnt
    while (i-- >= 0) {
        console.log(i + 1)
    }
}



