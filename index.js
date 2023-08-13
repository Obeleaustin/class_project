let courses = document.getElementById('courses')

let option1 = document.createElement('option')
let option2 = document.createElement('option')
let option3 = document.createElement('option')
let option4 = document.createElement('option')
let option5 = document.createElement('option')
let option6 = document.createElement('option')
let option7 = document.createElement('option')
let display = document.getElementById('display')
let form = document.getElementById('form')

courses.appendChild(option1)
courses.appendChild(option2)
courses.appendChild(option3)
courses.appendChild(option4)
courses.appendChild(option5)
courses.appendChild(option6)
courses.appendChild(option7)

option1.innerText = 'Desktop Publishing'
option2.innerHTML = 'Electronics'
option3.innerHTML = 'Web Development'
option4.innerHTML = 'Computer Hardware Repairs and Maintenance'
option5.innerHTML = 'kids Code'
option6.innerHTML = 'Graphics Design'
option7.innerHTML = 'Digital Marketing'



function myFunction(){
   
    // let form1 = form.value
    let courseSelected = courses.value;
    let opt1 = option1.value;
    let opt2 = option2.value;
    let opt3 = option3.value;
    let opt4 = option4.value;

    if(courseSelected === opt1){
        form.innerHTML = ''

        let para = document.createElement('p')
        para.innerText = 'Do you have a computer'

        let yes = document.createElement('label')
        yes.innerText = 'Yes'
        let inputYes = document.createElement('input')
        inputYes.type = 'radio'
        inputYes.name = 'option'

        let breakLine = document.createElement('br')

        let no = document.createElement('label')
        no.innerText = 'No'
        let inputNo = document.createElement('input')
        inputNo.type = 'radio'
        inputNo.name = 'option'

        
        let para2 = document.createElement('p')
        para2.innerText = 'Mode of learning'
        let Yes = document.createElement('label')
        Yes.innerText = 'Yes'
        let InputYes = document.createElement('input')
        InputYes.type = 'radio'
        InputYes.name = 'option2'
        
        let BreakLine = document.createElement('br')
        
        let No = document.createElement('label')
        No.innerText = 'No'
        let InputNo = document.createElement('input')
        InputNo.type = 'radio'
        InputNo.name = 'option2'
        
        form.appendChild(para)
        form.appendChild(inputYes)
        form.appendChild(yes)
        form.appendChild(breakLine)
        form.appendChild(inputNo)
        form.appendChild(no)
        form.appendChild(para2)
        form.appendChild(InputYes)
        form.appendChild(Yes)
        form.appendChild(BreakLine)
        form.appendChild(InputNo)
        form.appendChild(No)

    }else if (courseSelected === opt2){
        form.innerHTML = ''
        let you  = document.createElement('label')
        you.innerText = 'o girl a'
        form.appendChild(you)
    }
    // data.form1 = form1
    
    // body.innerHTML =""
}   


// if(courseSelected === opt1){
    
// }else if(courseSelected === opt2){
//     form.style.visibility = 'visible'
    
// }else if(courseSelected === opt3){
//     form.innerHTML = ''
//     form.style.visibility = 'visible'

//     let para = document.body.appendChild(document.createElement('p'))
//     para.innerText = 'Framework to Learn'
// }
// // body.innerHTML =""
    // // display.innerHTML = ""
    // display.innerText = 'Do you have a computer';

    // document.body.appendChild(document.createElement('br'));

    
    // let Yes1 = document.body.appendChild(document.createElement('label'))
    // Yes1.innerHTML = 'Yes';
    // let inputYes1 = document.body.appendChild(document.createElement('input'))
    // inputYes1.type = 'radio';
    // inputYes1.name = 'fav_language';

    // document.body.appendChild(document.createElement('br'));
    
    // let No1 = document.body.appendChild(document.createElement('label'))
    // No1.innerHTML = 'No';
    // let inputNO1 =document.body.appendChild(document.createElement('input'))
    // inputNO1.type = 'radio';
    // inputNO1.name = 'fav_language';

    // para1 = document.body.appendChild(document.createElement('p'))
    // para1.innerText = 'Mode of learning'

    // let offline1 = document.body.appendChild(document.createElement('label'))
    // offline1.innerHTML = 'Offline';
    // let inputOffline1 = document.body.appendChild(document.createElement('input'))
    // inputOffline1.type = 'radio';
    // inputOffline1.name = 'fav_languag';

    // document.body.appendChild(document.createElement('br'));
    
    // let online1 = document.body.appendChild(document.createElement('label'))
    // online1.innerHTML = 'Online';
    // let inputOnline1 =document.body.appendChild(document.createElement('input'))
    // inputOnline1.type = 'radio';
    // inputOnline1.name = 'fav_languag';

    // body.innerHTML =""
