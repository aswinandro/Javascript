let turn ='red'
let stopEvent = false
document.querySelector('#red').style.marginLeft = '0vmin'
document.querySelector('#red').style.marginTop = '0vmin'
document.querySelector('#blue').style.marginLeft = '0vmin'
document.querySelector('#blue').style.marginTop = '0vmin'

boxNumbers()

document.addEventListener('keydown', async (e) => {
    if(e.keyCode=='83' && !stopEvent){
        stopEvent = true
        let diceNum = await roll()
        await new Promise(resolve => setTimeout(resolve, 400)) //before run
        await run(diceNum)
        await new Promise(resolve => setTimeout(resolve, 400)) //after run
        stopEvent = false
    }
})

function run(diceNum){
    return new Promise(async(resolve, reject) => {
        for(i=1; i<=diceNum; i++){
            let direction = getDirection()
            await move(direction)
        }
        checkLadderAndSnakes()
        resolve()
    })
}

function checkLadderAndSnakes(){
    return new Promise(async (resolve,reject)=> {
        let froms = [ [9.8,0],[49,-9.8],[0,-49],[58.8,-58.8],[39.2,19.6],[78.4,-29.4],[88.2,-49],[29.4,-68.6],[19.6,-49],[88.2,-9.8], [68.5,78.5]]
        let tos = [[19.6,-19.6],[58.8,-29.4],[9.8,-68.6],[68.6,-78.4],[29.4,-39.2],[68.6,-49],[78.4,-68.6],[19.6,-88.2],[39.2,-58.8],[67.3,65.7]]
        for(let i=0; i<tos.length; i++){
            if(marginLeft()==froms[i][0] && marginTop()==froms[i][1]){
                new Audio('../assets/move.mp3').play()
                document.querySelector(`#${turn}`).style.marginLeft = `${tos[i][0]}vmin`
                document.querySelector(`#${turn}`).style.marginTop = `${tos[i][1]}vmin`
                await new Promise(resolve => setTimeout(resolve,400))
                break
            }
        }
        resolve()
    })
   
}

function changeTurn(){
    if(turn=='blue'){
        document.querySelector('#p_turn').innerHTML = "Red Player's Turn"
        turn = 'red'
    }
    else if(turn=='red'){
        document.querySelector('#p_turn').innerHTML = "Blue  Player's Turn"
        turn = 'blue'
    }
}
function move(direction){
    return new Promise(async (resolve,reject)=>{
        new Audio("../assets/move.mp3").play()
        if(direction=='up'){
            document.querySelector(`#${turn}`).style.marginTop = String(marginTop() - 9.8) + 'vmin'
        }
        else if(direction=='right'){
            document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft() + 9.8) + 'vmin'
        }
        else if(direction=='left'){
            document.querySelector(`#${turn}`).style.marginLeft = String(marginLeft() - 9.8) + 'vmin'
        }
        await new Promise(resolve => setTimeout(resolve, 400))
        resolve()
    })
}

function getDirection(){
    let direction
    if ((marginLeft(0==88.2 && ((((marginTop()*10%(-19.6*10))/10)==0)) || (marginLeft()==0 && ((((marginTop()*10)%(-19.6*10))/10)!=0))))){
        direction ='up'
    }
    else if((((marginTop()*10)%(-19.6*10))/10)==0){
        direction ='right'
    }
    else{
        direction = 'left'
    }
    return direction
}

function marginLeft(){
    return Number(document.querySelector(`#${turn}`).style.marginLeft.split('v')[0])
}

function marginTop(){
    return Number(document.querySelector(`#${turn}`).style.marginTop.split('v')[0])
}

function roll(){
    return new Promise(async (resolve, reject)=>{
        let diceNum = Math.floor(Math.random()*6) +1
        let values = [[0,-360], [-180,-360], [-180,270], [0, -90], [270,180], [90,90]]
        new Audio("../assets/diceRoll.mp3").play()
        document.querySelector('#cube_inner').style.transform = 'rotateX(360deg) rotateY(360deg)'
        await new Promise(resolve => setTimeout(resolve, 750))
        document.querySelector('#cube_inner').style.transform = `rotateX(${values[diceNum-1][0]}deg) rotateY(${values[diceNum-1][1]}deg)` && console.log("Called")
        await new Promise(resolve => setTimeout(resolve, 750))
        resolve(diceNum)
    })
}
function boxNumbers(){
    let boxes = document.querySelectorAll('.box')
    boxes.forEach((box,i) => {
        if(String(i).length ==1 || (String(i).length==2 && Number(String(i)[0]))%2==0){  // if Condition true then write 100-i on the box i.e 100-27 = 73 | 100 - 52 =48
            box.innerHTML = 100-i
        }
        else{
            // box.innerHTML = String (Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1) + `i=${i}`
            box.innerHTML = Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1
            // Else block if fails 1st digit = 9-1st digit of i and 2nd digit of number - 2nd digit of , then finaly add 1 to the number ie. i= 32 then number will 83

        }
    })
}