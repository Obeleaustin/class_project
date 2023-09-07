import {courseData} from './new-module.js';
import{courses, display, form, option1, option2, option3,
     option4, option5, option6, option7} from './module.js'
import{para, yes, inputYes, breakLine, no, inputNo, par2, Yes, InputOffline, BreakLine, Online, InputOnline, 
    par3, react, inputReact, breakLine1, angular, inputAngular, para1, para2, para3, para4} from './module.js';

    let course;
    
    courses.appendChild(option1)
    courses.appendChild(option2)
    courses.appendChild(option3)
    courses.appendChild(option4)
    courses.appendChild(option5)
    courses.appendChild(option6)
    courses.appendChild(option7)

    
    
    myFunction();
    courses.addEventListener('change', myFunction)
    function myFunction(){
        form.innerHTML= "";

    form.appendChild(para)
    form.appendChild(inputYes)
    form.appendChild(yes)
    form.appendChild(breakLine)
    form.appendChild(inputNo)
    form.appendChild(no)
    form.appendChild(par2)
    form.appendChild(InputOnline)
    form.appendChild(Online)
    form.appendChild(BreakLine)
    form.appendChild(InputOffline)
    form.appendChild(Yes)
    
    let courseSelected = courses.value;
    let opt1 = option1.value;
    let opt2 = option2.value;
    let opt3 = option3.value;
    let opt4 = option4.value;
    let opt5 = option5.value;
    let opt6 = option6.value;
    let opt7 = option7.value;    
            
    if(courseSelected === opt3){
                // display.innerHTML = "";
        
        form.appendChild(par3);
        form.appendChild(inputReact);
        form.appendChild(react);
        form.appendChild(breakLine1);
        form.appendChild(inputAngular);
        form.appendChild(angular);
    };
    
    for(let i = 0; i <courseData.length; i++){
        if(courseData[i].courseTitle === courseSelected) course = courseData[i];
    }
    
        para1.innerText = 'Course: ' + course.courseTitle;
        para2.innerText = 'Price: ' + course.price;
        para3.innerText = 'Description: ' + course.courseDescription;
        para4.innerText = 'Location: ' + course.location;
        let actualPrice = course.price
        let increasePrice = Number(actualPrice) + 5000;
        let IncreasePrice = Number(actualPrice) + 10000;
        let addPrice =  15000;
        let AddPrice =  20000;


console.log(course.courseTitle)

let checkInputs = [inputYes,inputNo,InputOnline,InputOffline];
let checkInput = [inputReact, inputAngular];
let allInputs = [];

checkInputs.forEach((item)=>{
    allInputs.push(item);
    checkInput.forEach((item)=>{
        allInputs.push(item);
    });
});
    allInputs.forEach((input) => {
        
        input.addEventListener('click',() => {
            
            if(inputYes.checked && InputOnline.checked){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + actualPrice;
                display.append(para1,para2,para3,para4);
            }else if(inputYes.checked && InputOffline.checked) {
                display.innerHTML = "";
                para2.innerText = 'Price: ' + increasePrice;
                display.append(para1,para2,para3,para4);
            }else if(inputNo.checked && InputOnline.checked){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + actualPrice;
                display.append(para1,para2,para3,para4);
            }else if(inputNo.checked && InputOffline.checked){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + IncreasePrice;
                display.append(para1,para2,para3,para4);
            }
            if(inputYes.checked && InputOnline.checked && inputReact.checked){
                display.innerHTML= "";
                para2.innerText = 'Price: ' + (actualPrice + addPrice);
                display.append(para1,para2,para3,para4);
            }else if(inputYes.checked && InputOnline.checked && inputAngular.checked){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + (actualPrice + AddPrice);
                display.append(para1,para2,para3,para4);
            }else if(inputYes.checked && InputOffline.checked && inputReact.checked){
                display.innerHTML =  "";
                para2.innerText = 'Price: ' + (increasePrice + addPrice);
                display.append(para1,para2,para3,para4);
            }else if(inputYes.checked && InputOffline.checked && inputAngular.checked){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + (increasePrice + AddPrice);
                display.append(para1,para2,para3,para4);
            }else if(inputNo.checked && InputOnline.checked && inputReact.checked){
                display.innerHTML = "";
                para2.innerHTML = 'Price: ' + (actualPrice + addPrice);
                display.append(para1,para2,para3,para4);
            }else if(inputNo.checked && InputOnline.checked && inputAngular.checked){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + (actualPrice + AddPrice);
                display.append(para1,para2,para3,para4);
            }else if(inputNo.checked && InputOffline.checked && inputReact.checked){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + (IncreasePrice + addPrice);
                display.append(para1,para2,para3,para4);
            }else if(inputNo.checked && InputOffline.checked && inputAngular){
                display.innerHTML = "";
                para2.innerText = 'Price: ' + (IncreasePrice + AddPrice);
                display.append(para1,para2,para3,para4);
            };
        });
    });
};