let details = []

function NameOfCourses(desktopPublishing, eletronics, webDEvelopment, 
    computerHardware, kidsCode, graphicsDesign, digitalMarketing){

        this.desktopPublishing = desktopPublishing;
        this.eletronics = eletronics;
        this.webDEvelopment = webDEvelopment;
        this.computerHardware = computerHardware;
        this.kidsCode = kidsCode;
        this.graphicsDesign = graphicsDesign;
        this.digitalMarketing = digitalMarketing;

    this.myStudies = () =>{
         return `the course am studing is ${this.webDEvelopment}`
    }
}
// let inCourse = new nameOfCourses('Desktop Publishing', 'Electronics',
// 'Web Development', 'Computer Hadeware Repair and Maintainance', 
// 'Kids Code', 'Graphics Design', 'Digital Marketing')



function courseDetail(desktopPublishing, Electronics, webDEvelopment,
    computerHardware, kidsCode, graphicsDesign, digitalMarketing){

        this.desktopPublishing = desktopPublishing;
        this.eletronics = Electronics;
        this.webDEvelopment = webDEvelopment;
        this.computerHardware = computerHardware;
        this.kidsCode = kidsCode;
        this.graphicsDesign = graphicsDesign;
        this.digitalMarketing = digitalMarketing;

    this.course = ()=>{
        return `in Iospine we priotize ${this.desktopPublishing}`
    }
    this.how = () =>{
        return`we focus ${this.eletronics}`

    }
}
// let inDetail = new courseDetail(
//     'Teaching on how to make great Computer literates',
//     'in making and selling standard equipments'
//     )



console.log(inDetail)


details.push(inDetail.course())
details.push(inDetail.how())

for (let j = 0; j < details.length; j++){
    
    console.log(details[j])
    console.log((j))
}

function coursePrices(desktopPublishing, Electronics, webDEvelopment,
    computerHardware, kidsCode, graphicsDesign, digitalMarketing){

        this.desktopPublishing = desktopPublishing;
        this.eletronics = Electronics;
        this.webDEvelopment = webDEvelopment;
        this.computerHardware = computerHardware;
        this.kidsCode = kidsCode;
        this.graphicsDesign = graphicsDesign;
        this.digitalMarketing = digitalMarketing;


}