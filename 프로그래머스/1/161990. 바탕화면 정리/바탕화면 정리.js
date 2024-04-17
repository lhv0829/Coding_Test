function solution(wallpaper) {
    var answer = [];
    let luy = 0;
    let lux = 0;
    let rdy = 0;
    let rdx = 0;
    const temp = wallpaper.map((line, lineIndex) => {
        return line.split("").map((str, strIndex) => {
            if(str === "#") return [lineIndex, strIndex];
        })
    })
    const array = temp.flat().filter((item) => item);
    const xArray = array.map((item) => item[0]);
    const yArray = array.map((item) => item[1]);
    
    if(xArray.length === 1) return [xArray[0], yArray[0], xArray[0] + 1, yArray[0] + 1];
    const minX = Math.min(...xArray);
    const minY = Math.min(...yArray);
    const maxX = Math.max(...xArray) + 1;
    const maxY = Math.max(...yArray) + 1;
    
    return [minX, minY, maxX, maxY];
}