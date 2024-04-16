function solution(bandage, health, attacks) {
    let answer = 0;
    const max = health;
    let successCount = 0;
    const attackTime = attacks.map((attack) => attack[0]);
    const attackDamage = attacks.map((attack) => attack[1]);
    for(let i = 1; i <= attackTime[attackTime.length - 1]; i++){
        if(health <= 0) return -1;
        if(attackTime.includes(i)){
            health = health - attackDamage[attackTime.indexOf(i)];
            successCount = 0;
        } else {
            if(health < max) {
                if(max - health < bandage[1]) health += max - health;
                else health += bandage[1];
                successCount++;
                if(successCount === bandage[0]){
                    if(max - health < bandage[2]) health += max - health;
                    else health += bandage[2];
                    successCount = 0;
                }
            }
        } 

    }
    return health > 0 ? health : -1;
}