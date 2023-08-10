let courses = document.getElementById('courses')

let option1 = document.createElement('option')
let option2 = document.createElement('option')
let option3 = document.createElement('option')
let option4 = document.createElement('option')
let option5 = document.createElement('option')
let option6 = document.createElement('option')
let option7 = document.createElement('option')
let display = document.getElementById('display')
let form = document.createElement('for')

courses.appendChild(option1)
courses.appendChild(option2)
courses.appendChild(option3)
courses.appendChild(option4)
// courses.appendChild(option5)
// courses.appendChild(option6)
// courses.appendChild(option7)

option1.innerText = 'Desktop Publishing'
option2.innerHTML = 'Electronics'
option3.innerHTML = 'Web Development'
option4.innerHTML = 'Computer Hardware Repairs and Maintenance'
option5.innerHTML = 'kids Code'
option6.innerHTML = 'Graphics Design'
option7.innerHTML = 'Digital Marketing'

function myFunction(){
    let courseSelected = courses.value;
    let opt1 = option1.value;
    let opt2 = option2.value;
    let opt3 = option3.value;
    let opt4 = option4.value;
    
    if(courseSelected === opt1){

        // display.innerHTML = ""
        display.innerText = 'Do you have a computer';

        document.body.appendChild(document.createElement('br'));

        
        let Yes = document.body.appendChild(document.createElement('label'))
        Yes.innerHTML = 'Yes';
        let inputYes = document.body.appendChild(document.createElement('input'))
        inputYes.type = 'radio';
        inputYes.name = 'fav_language';

        document.body.appendChild(document.createElement('br'));
        
        let No = document.body.appendChild(document.createElement('label'))
        No.innerHTML = 'No';
        let inputNO =document.body.appendChild(document.createElement('input'))
        inputNO.type = 'radio';
        inputNO.name = 'fav_language';

        para = document.body.appendChild(document.createElement('p'))
        para.innerText = 'Mode of learning'

        let offline = document.body.appendChild(document.createElement('label'))
        offline.innerHTML = 'Offline';
        let inputOffline = document.body.appendChild(document.createElement('input'))
        inputOffline.type = 'radio';
        inputOffline.name = 'fav_languag';

        document.body.appendChild(document.createElement('br'));
        
        let online = document.body.appendChild(document.createElement('label'))
        online.innerHTML = 'Online';
        let inputOnline =document.body.appendChild(document.createElement('input'))
        inputOnline.type = 'radio';
        inputOnline.name = 'fav_languag';
        
    }else if(courseSelected === opt2){
        // body.innerHTML =""
        // display.innerHTML = ""
        display.innerText = 'Do you have a computer';

        document.body.appendChild(document.createElement('br'));

        
        let Yes1 = document.body.appendChild(document.createElement('label'))
        Yes1.innerHTML = 'Yes';
        let inputYes1 = document.body.appendChild(document.createElement('input'))
        inputYes1.type = 'radio';
        inputYes1.name = 'fav_language';

        document.body.appendChild(document.createElement('br'));
        
        let No1 = document.body.appendChild(document.createElement('label'))
        No1.innerHTML = 'No';
        let inputNO1 =document.body.appendChild(document.createElement('input'))
        inputNO1.type = 'radio';
        inputNO1.name = 'fav_language';

        para1 = document.body.appendChild(document.createElement('p'))
        para1.innerText = 'Mode of learning'

        let offline1 = document.body.appendChild(document.createElement('label'))
        offline1.innerHTML = 'Offline';
        let inputOffline1 = document.body.appendChild(document.createElement('input'))
        inputOffline1.type = 'radio';
        inputOffline1.name = 'fav_languag';

        document.body.appendChild(document.createElement('br'));
        
        let online1 = document.body.appendChild(document.createElement('label'))
        online1.innerHTML = 'Online';
        let inputOnline1 =document.body.appendChild(document.createElement('input'))
        inputOnline1.type = 'radio';
        inputOnline1.name = 'fav_languag';

        // body.innerHTML =""

    }

    // body.innerHTML =""
    

}