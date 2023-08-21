function getHandScore(input:string):number {
    var keepScore: {[key : string] : number} = {"H" : 0,"C" : 0, "D" : 0, "S" : 0}
    var splitted = input.split(" ",3)
    var checkThreeCard:string[] = []
    for(let item of splitted) {
        let suit = item.charAt(0)
        let rank = item.slice(1)
        if(parseInt(rank)){
            keepScore[suit] += parseInt(rank)
            checkThreeCard.push(rank)
        } else {
            if(rank == "A"){
                keepScore[suit] += 11
                checkThreeCard.push(rank)
            } else {
                keepScore[suit] += 10
                checkThreeCard.push(rank)
            }
        }
    }
    if(checkThreeCard[0] == checkThreeCard[1] && checkThreeCard[0] == checkThreeCard[2]){
        if(checkThreeCard[0] == "A"){
            return 35
        } else {
            return 32.5
        }
    }
    return keepScore[Object.keys(keepScore).reduce((a,b) => keepScore[a] > keepScore[b] ? a:b)]
}
var input:string = "S10 C2 C9"
console.log(getHandScore(input))