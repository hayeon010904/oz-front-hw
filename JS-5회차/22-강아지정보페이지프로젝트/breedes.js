// 요청할 서버 주소
 //1. 강아지를 여러마리 달라는 요청.(처음에 여러마리 펼처놓을 것) https://dog.ceo/api/breeds/image/random/3
// 2. 어떤 견종들이 있는지에 대한 정보 https://dog.ceo/api/breeds/list/all

const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest
const request2 =new XMLHttpRequest

const header = document.getElementById('header')
const main = document.getElementById('main')
const input = document.getElementById('filter-text')
const button = document.getElementById('filter-button')
const select = document.getElementById('filter-select')
const reset = document.getElementById('reset')

const more = document.getElementById('more')
const tothetop = document.getElementById('tothetop')

//현재 페이지에 표시되고 있는 강아지 목록을 배열 형태로 관리
const curentDogs = [] 

function displayDogs(item){
    const dogImgDiv = document.createElement('div') // div로 만들어서 화면에 띄우기
    dogImgDiv.classList.add('flex-item') //css 생각해서 클래스 추가
    dogImgDiv.innerHTML = ` 
    <img src=${item}>` //img 태그 만들어서 소스에 대입
    main.appendChild(dogImgDiv) //만든 div를 main에 append
}

//웹페이지가 처음 실행되었을때 할 일.
window.addEventListener('load',function(){
    //강아지 사진 뿌리기
    request1.open('get',apiRandomDogs)
    request1.addEventListener('load',function(){
    const response = JSON.parse(request1.response) //응답을 객체로 변환해서 저장
    response.message.forEach(function(item){ //객체는 배열. 배열의 멤버 하나가 img src하나.
        // forEach: 모든 요소에다가 한번씩 어떤 기능을 수행한다. 기능은 함수!. 함수는 요소를 한번씩 받아서 처리할 수 있어.
        curentDogs.push(item) //currenDogs 배열에 아이템들 추가
        displayDogs(item)
    })
    })
    request1.send()

//셀렉트에 견종 정보 뿌리기
request2.open('get',apiAllBreeds)
request2.addEventListener('load',function(){
    const response = JSON.parse(request2.response)
    console.log(response)
    //response에서 key 값만 얻고 싶어. Object: 데이터 타입을 대표하는 객체.
    //.keys 메소드 => 객체의 key 값만 모아서 배열로 만들어줌
    // console.log(Object.keys(response.message))
    Object.keys(response.message).forEach(function(item){
        const option = document.createElement('option')
        option.textContent = item
        option.value = item
        select.appendChild(option)      
        
    })
    })
    request2.send()
})

// Input 필터링
button.addEventListener('click',function(){
    main.innerHTML='' //필터링 누르면 사진 다 없어지도록
    // 필터링할때 인풋 쓰여있는 내용 기반으로.
    // 개별 아이템에 'indexOf:문자열 메소드: 문자열 안에 주어진 문자열이 포함하면 인덱스 번호 반환// 아니면 -1반환'
    let filteredDogs = curentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1 
        //item(견종정보)안에 인풋에 쓰여진 내용이 포함되어있으면 필터링. // -1은 포함되지않은건데 !니까 포함되어있으면
        // 견종정보안에 인풋에 스여진 내용이 포함되어있으면 필터링!!
        // 필터링 결과는 새로운 filterdDongs로 새롭게 저장. currentdog는 유지되어야하니깐!!       
    })
    input.value=''

    filteredDogs.forEach(function(item){
        // const dogImgDiv = document.createElement('div')
        // dogImgDiv.classList.add('flex-item')
        // dogImgDiv.innerHTML=`
        // <img src = ${item}>
        // `
        // main.appendChild(dogImgDiv)
        displayDogs(item)
    })
})
//select 필터링 // 이벤트 리스너 클릭아니고 체인지!
select.addEventListener('change',function(){
    main.innerHTML='' //필터링 누르면 사진 다 없어지도록
    // 필터링할때 인풋 쓰여있는 내용 기반으로.
    // 개별 아이템에 'indexOf:문자열 메소드: 문자열 안에 주어진 문자열이 포함하면 인덱스 번호 반환// 아니면 -1반환'
    let filteredDogs = curentDogs.filter(function(item){
        return item.indexOf(select.value) !== - 1 //'' 빈 벨류로 indox of 하면 0 반환
        //item(견종정보)안에 인풋에 쓰여진 내용이 포함되어있으면 필터링. // -1은 포함되지않은건데 !니까 포함되어있으면
        // 견종정보안에 인풋에 스여진 내용이 포함되어있으면 필터링!!
        // 필터링 결과는 새로운 filterdDongs로 새롭게 저장. currentdog는 유지되어야하니깐!!       
    })
       filteredDogs.forEach(function(item){
        // const dogImgDiv = document.createElement('div')
        // dogImgDiv.classList.add('flex-item')
        // dogImgDiv.innerHTML=`
        // <img src = ${item}>
        // `
        // main.appendChild(dogImgDiv)
        displayDogs(item)
    })
})

more.addEventListener('click',function(){
    request1.open('get',apiRandomDogs)
    request1.addEventListener('laod',function(){
       const response = JSON.parse(request1.response)
       response.message.forEach(function(item){
        curentDogs.push(item)
        displayDogs(item)
       })
    })
    request1.send()
})

top.addEventListener('click',function(){
    //scrollTo: 주어진 위치로 스크롤을 이동한다. 
    // y축의 값을 주는데, css 속성 중에 top 활용/ 객체 리터럴 형식으로 전달. 
    window.scrollTo({top:0})
})

//6화치 과제
// -견종 고르는 섹렉트 없에다가 버튼 추가
// 버튼에는 리셋
// 해당 버튼을 누르면 강아지 소스를 새롭게 요청해서 받아온다
// 기존에 뿌려져 있던 강아지는 사라지고 새로운 강아지 42마리로 채워진다.

reset.addEventListener('click',function(){
    main.innerHTML='' 
    request1.open('get',apiRandomDogs)
    request1.addEventListener('laod',function(){
       const response = JSON.parse(request1.response)
       response.message.forEach(function(item){
        curentDogs.push(item)
        displayDogs(item)
       })
    })
    request1.send()
})

    
    