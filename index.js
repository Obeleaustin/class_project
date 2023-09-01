import {courseData} from './new-module.js';
import{courses, display, form, option1, option2, option3,
     option4, option5, option6, option7} from './module.js'
import{para, para1, para2, para3, para4, yes, inputYes, breakLine,
     no, inputNo, par2, Yes, InputOffline, BreakLine, Online,
      InputOnline} from './module.js';

    let course;
    
courses.appendChild(option1)
courses.appendChild(option2)
courses.appendChild(option3)
courses.appendChild(option4)
courses.appendChild(option5)
courses.appendChild(option6)
courses.appendChild(option7)

// function thisFunction(){
    
    
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
            
myFunction();
courses.addEventListener('change', myFunction)
function myFunction(){
            
    let courseSelected = courses.value;
    let opt3 = option3.value;    
            
    if(courseSelected === opt3){
                
        let para3 = document.createElement('p')
        para3.innerText = 'Framework to learn'
        let react = document.createElement('label')
        react.innerText = 'React'
        let inputReact = document.createElement('input')
        inputReact.type = 'radio'
        inputReact.name = 'option3'
        
        let breakLine1 = document.createElement('br')
        
        let angular = document.createElement('label')
        angular.innerText = 'Angular'
        let inputAngular = document.createElement('input')
        inputAngular.type = 'radio'
        inputAngular.name = 'option3'
        
        form.appendChild(para3)
        form.appendChild(inputReact)
        form.appendChild(react)
        form.appendChild(breakLine1)
        form.appendChild(inputAngular)
        form.appendChild(angular)
    }
    // let allInput1 = allInput.value;
    // console.log(allInput1)
    for(let i = 0; i <courseData.length; i++){
        if(courseData[i].courseTitle === courseSelected){
            course = courseData[i];
            // co.push(course.courseTitle, course.price, course.courseDescription, course.location)
            console.log(course)
        }  
    }
}
    console.log(course)

    let actualPrice = course.price
    para1.innerText = 'Course: ' + course.courseTitle;
    para2.innerText = 'Price: ' + course.price;
    para3.innerText = 'Description: ' + course.courseDescription;
    para4.innerText = 'Location: ' + course.location
    
    // let thisFunction = () =>{
        
        inputYes.onclick, InputOnline.onclick =(event)=>{
            // if(event.target.checked){
                display.innerHTML = ""
                course.price = actualPrice
                para2.innerText = 'Price: ' + course.price;
                display.append(para1,para2,para3,para4);
            // }
        }
        inputYes.onclick, InputOffline.onclick = (event) => {
            
            display.innerHTML = ""
            let increasedPrice = Number(actualPrice) + 100000       
            course.price = increasedPrice
            para2.innerText = 'Price: ' + course.price;
            display.append(para1,para2,para3,para4);
            
        }
let myFunction1 =()=>{
    InputOnline.onclick, inputNo.onclick =()=>{

        display.innerHTML = "";
        let increasedPrice = Number(actualPrice) + 200000       
        course.price = increasedPrice;
        para2.innerText = 'Price: ' + course.price;
        display.append(para1,para2,para3,para4);
        console.log("na me")
        
    }

}
