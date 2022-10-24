function testtj(_fan,_totalQuestions) {
    var numberQ = 1
    var result = 0
    container = document.querySelector(".container")
    buttons = document.querySelectorAll("button")
    topQuesions = document.querySelector(".top p")
    resultWin = document.querySelector(".result")
    topQuesions.innerHTML = ques[_fan][numberQ].questions;
    buttons[arrRandom[0]].innerHTML = ques[_fan][numberQ].correctAnswer
    buttons[arrRandom[1]].innerHTML = ques[_fan][numberQ].answersOne
    buttons[arrRandom[2]].innerHTML = ques[_fan][numberQ].answersTwo
    buttons[arrRandom[3]].innerHTML = ques[_fan][numberQ].answersThree
    resultWin.innerHTML = `Result ${result} (${numberQ} / ${_totalQuestions})`

    testWin.addEventListener("click",Proverka)

    function Proverka(event){
        arrRandom = randomArray()
        resultWin.innerHTML = `Result ${result} (${numberQ + 1} / ${_totalQuestions})`
    
        if(event.target.innerText === ques[_fan][numberQ].correctAnswer){
           resultWin.innerText = `Result ${result += 10} (${numberQ + 1} / ${_totalQuestions})`}
        else console.log("Error")
    
        if(numberQ !== _totalQuestions) {numberQ++}
        else {
            container.innerHTML = `
                <h3> ${ques[_fan].info} </h3>
                <h2> Ваш результат ${result} </h2>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minima non nemo placeat veritatis, 
    illo reprehenderit vitae quis inventore, neque rerum tempore amet magni architecto voluptates? Magnam non corporis recusandae.</p>
                `
        }
    
    
        topQuesions.innerText = ques[_fan][numberQ].questions
        buttons[arrRandom[0]].innerText = ques[_fan][numberQ].correctAnswer
        buttons[arrRandom[1]].innerHTML = ques[_fan][numberQ].answersOne
        buttons[arrRandom[2]].innerText = ques[_fan][numberQ].answersTwo
        buttons[arrRandom[3]].innerText = ques[_fan][numberQ].answersThree
    }
}


