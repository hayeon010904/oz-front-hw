/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 */

/*  문제 출제
 *
 *   ☘️당신의 운을 시험해 보세요☘️
 * - n은 내가 정하는 수 1~9까지의 숫자만 넣어주세요.
 * - 1~9번 중 랜덤으로 행운의 숫자를 출력합니다.
 * - 콘솔에 1~10회차의 각 행운의 숫자를 비교해 당첨 여부를 표시합니다. ex) 1회차 행운의 숫자 : 2 당첨!
 * - 총 당첨 횟수와 배팅금액을 곱해주세요.
 * - 최종 금액을 콘솔에 표시해주세요. ex) 당첨금은 30000원 입니다.
 *  *❗️ 제한 조건 ❗️
 * - 랜덤 숫자는 정수 입니다.
 *
 *
 */

let luckynumber = []

function question(n, m) {     
    for(let i = 1; i<=10; i++){
        if(Math.floor(Math.random()*10 +1) === n)
        {
            console.log(`${i}회차 🍀행운의 숫자🍀: ${Math.floor(Math.random()*10 +1)} 당첨~!!!!  낙첨`) 
            luckynumber.push(Math.floor(Math.random()*10 +1))
        } 
        else {
            console.log(`${i}회차 🍀행운의 숫자🍀: ${Math.floor(Math.random()*10 +1)} 낙첨`) 
        }
    }
    

    // 여기에서 코드 작성해주세요!
    let result = console.log(`당첨금은 ${luckynumber.length * m} 원 입니다.`)

}


question(4, 10000);