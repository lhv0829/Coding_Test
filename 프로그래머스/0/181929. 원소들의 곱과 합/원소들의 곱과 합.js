function solution(num_list) {
    return num_list.reduce((acc, num) => acc * num, 1) < num_list.reduce((acc, num) => acc + num, 0) ** 2 ? 1 : 0; 
}