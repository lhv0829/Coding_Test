function solution(names, yearning, photo) {
    const answer = [];
    const score = {};
    names.map((name, index) => score[name] = yearning[index]);
    for(let i = 0; i < photo.length; i++){
        let photoScore = 0;
        for(let name of photo[i]){
            if(score[name] === undefined) photoScore += 0;
            else photoScore += score[name];
        }
        answer.push(photoScore)
    }
    return answer;
}