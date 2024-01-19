/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/*  문제 출제
 * 주어진 양의 정수 n에 대해 n! (n 팩토리얼)을 계산하는 함수를 작성하세요.
 * 팩토리얼은 n부터 1까지의 모든 양의 정수를 곱한 값을 의미합니다.
 *
 *
 * ❗️ 제한 조건 ❗️
 * 입력으로 주어지는 값은 양의 정수이며, 0부터 1000까지의 범위로 가정합니다.
 * 팩토리얼은 재귀적으로 계산할 수 있습니다.
 * 팩토리얼은 수학적으로 n!으로 표기하며, 0!은 1로 정의됩니다.
 *
 *  👉 예시
 *  5! = 5 * 4 * 3 * 2 * 1 이므로 답은 120
 *
 */

function question(n) {
    // 여기에서 코드 작성해주세요!

    
    // 1. 배열을 만든다.
    // 2. 배열에 있는 요소들을 모두 곱한다. => n 이면 n! 2 => 1,2 => foreach

    let result=1;

    // 배열 생성한 후 숫자 추가하기 ex) n=3 arr=[1,2,3]
    let arr = []
    for(let i = 1; i<=n; i++){
        arr.push(i)        
    }

    //배열 안에 있는 수 곱하기
      arr.forEach(function(n){
       result *= n
        
    })


    // let lastindex = arr[arr.length-1] 
    // for(let j = 0; j<=lastindex; j++ ){//1부터 배열의 마지막숫자까지 반복, 곱하면서.ㅓ
    //     result *= arr[j]       }
        
        //5 => [] 1 2 3 4 5]

        //배열에 있는 요소 모두 곱하기
//     for(let j = 0; j<=lastindex; j++ ){//1부터 배열의 마지막숫자까지 반복, 곱하면서.ㅓ
//       
//         }
    return result;



}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(question, [[5], [0], [1], [2], [3], [4], [6]], [120, 1, 1, 2, 6, 24, 720]);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = question(...conditions[index]) === results[index];
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}
