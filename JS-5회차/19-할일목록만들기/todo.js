const year = new Date().getFullYear()
const month = new Date().getMonth()
const date = new Date().getDate()
const headDate = document.getElementById('date')
headDate.textContent = `${year}년 ${month+1}월 ${date}일`
// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = [];

// 로컬 저장소에 저장하기
function saveTodos(){ // 로컬 스토리지에 배열은 추가가 되는데, 배열 안에 객채가 들어가니까 JSON
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem('myTodos', todoString)
}
//로컬 저장소에서 가져오기
function loadTodos(){
    const myTodos = localStorage.getItem('myTodos')
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos)
        displayTodos()
    }
  
}
loadTodos()
// 할일 추가하기, 할일 보여주기, 할일 수정하기, 할일 삭제하기

//할일 삭제하기
//클릭된 아이디를 받아서 그 아이디에 해당하는 할일만 삭제
function handleTodoDelBtnClick(clickedId){ 
    todoArr = todoArr.filter(function(aTodo){ //클릭된 애만 제외하고 나머지만 남긴다.
        return aTodo.todoId !== clickedId //todoId가 클릭된것만 다른 애만 남긴다.
    })
}
    displayTodos() //class 바꿔주기 함수 재사용
    saveTodos()


//할일 수정하기
// 할일을 클릭->아이디 받아서 그 아이디에 해당하는 할일만 수정.
function handleTodoItemClick(clickedId){ 
    todoArr = todoArr.map(function(aTodo){ //여러개의 할일 중 클릭한거에 해당하는 친구만 todoDone의 상태 바꾸기.
        if(aTodo.todoId === clickedId){
            return {
                ...aTodo,todoDone: !aTodo.todoDone // ! : true는 false로, false는 true 로 바꾼다.
                //todoDone여부를 뒤집어서 todoDone에 덮어쓰는거
            }
        }else{
            return aTodo
        }
    })
    displayTodos() //class 바꿔주기 함수 재사용
    saveTodos()
}

//할일 보여주기 : 추가하기 위에 기능 만들어서 함수 호출할거야.
function displayTodos(){
    todoList.innerHTML='' //원래 써져 있던 내용을 지우고 추가한다.
    // 배열의 요소 수가 내가 보여줘야 할 할일    
    todoArr.forEach(function(aTodo){ 
    const todoItem = document.createElement('li') 
    const todoDelBtn = document.createElement('span')
    todoDelBtn.textContent='x'   //span태그를 todoItem에 추가.
    todoItem.textContent = aTodo.todoText
    todoItem.title='클릭하면 완료됨'
//css 염두: 클래스 추가 todoDone이 ture 면 !!
    if(aTodo.todoDone){ 
        todoItem.classList.add('done')
    }else{todoItem.classList.add('yet')} //모든 할일은 처음에 생겼을때 yet

    todoDelBtn.title='클릭하면 삭제됨'
    //수정하기 함수 호출
    todoItem.addEventListener('click',function(){
        handleTodoItemClick(aTodo.todoId) //itenm의 id 인수로 전달
    })
    //삭제하기 함수 호출
    todoDelBtn.addEventListener('click',function(){
        handleTodoDelBtnClick(aTodo.todoId)
    })
    todoItem.append(todoDelBtn)
    todoList.append(todoItem)
    })
}

//할일 추가하기 : 추가 버튼을 눌렀을 떄 !
todoForm.addEventListener('submit',function(e){
    e.preventDefault() //기존기능 차단
     //할일 데이터 만들기: 기본적으로 자바에서 제공하는 타입 아니니까 객체로 생성하는것: 객체리터럴
    const toBeAdded = { 
        todoText: todoForm.todo.value, //할일 내용 :todoForm에 있는 name:todo 
        todoId: new Date().getTime(), //할일이 추가될때마다 고유한 식별값
        todoDone:false //할일 종료 여부 
    }
    //만들었으니까 배열에 추가
    todoArr.push(toBeAdded)
    //문제점: 공부하기를 추가 했는데도 아직 입력창에 남아있어 !
    todoForm.todo.value=""  //todoform에 있는 name이 todo 인 요소의 이름을 비우겠다
   
    displayTodos()
    saveTodos()
})
