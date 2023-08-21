function getQuestionPart(phrases:string[]):string[] {
    var ans:string[] = []
    var check:string = ""
    var firstWord = phrases[0]
    var sameWord:string = ""
    for(let i = 0;i<firstWord.length;i++){
        check = firstWord[i]
        // console.log("word : " +check)
        if(phrases[1].includes(check) && phrases[2].includes(check)){
            for(let j = i+1;j<firstWord.length;j++){
                check = check + firstWord[j]
                // console.log("word : " +check)
                if(phrases[1].includes(check) && phrases[2].includes(check)){
                    if(check.length > sameWord.length){
                        sameWord = check
                    }
                    continue;
                }
                break;
            }
        }
    }
    // console.log(sameWord)
    for(var word of phrases) {
        ans.push(word.replace(sameWord,'').trim())
    }
    return ans
}


// var question:string[] = ["BEFRIEND","GIRLFRIEND","FRIENDSHIP"]
var question:string[] = ["BATHROOM","BATH SALTS","BLOODBATH"]
console.log(getQuestionPart(question))