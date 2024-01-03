const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")


const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()+1
const day = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${day}일 `

let lottoNumbers = []

function paintNumber(number){
    const eachNumDiv = document.createElement('div')
    eachNumDiv.classList.add('eachnum')
    eachNumDiv.textContent=number
    numbersDiv.append(eachNumDiv)
}
//클릭하면 랜덤숫자 여섯개가 배열에 추가된다.
drawButton.addEventListener('click',function(){
    lottoNumbers=[] 
    numbersDiv.innerHTML=''
    while(lottoNumbers.length< 6) {         
        let rn = Math.floor(Math.random()*45 +1)       
        if(lottoNumbers.indexOf(rn) === -1){ // 같은 랜덤넘버가 배열에 없을때만 푸쉬
        lottoNumbers.push(rn)  
        paintNumber(rn)    
    }
       
    }}
)
resetButton.addEventListener('click', function(){
    lottoNumbers=[] //0번 인덱스부터 6개 지울거야.
    numbersDiv.innerHTML=''

})

