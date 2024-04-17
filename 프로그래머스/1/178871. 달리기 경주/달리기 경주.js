function solution(players, callings) {
    let answer = [];
    const rank = new Map();
    for(let i = 0; i < players.length; i++){
        rank.set(players[i], i);
    }
    const changeRank = (calledRank, calledName, players, rank) => {
        let front = players[calledRank - 1];
        players[calledRank - 1] = calledName;
        players[calledRank] = front;
        rank.set(calledName, calledRank - 1);
        rank.set(front, calledRank)
    }
    for (let calledName of callings){
        let calledRank = rank.get(calledName);
        changeRank(calledRank, calledName, players, rank);
    }
    for(let key of rank.keys()){
        answer[rank.get(key)] = key;
    }
    return answer;
}