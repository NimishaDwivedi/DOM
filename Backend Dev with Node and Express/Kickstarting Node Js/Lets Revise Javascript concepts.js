// Write an arrow function which returns the product of two numbers

((a,b)=>{
    console.log(a*b)
})

(2,3)

// create a student object

let student = {
    name : "Nimisha Pandey",
    RollNo : "325",

    // printDetails : function(){

    // }
    printDetails(){
        console.log("Name of student is " + this.name)
        console.log("Roll no. of student is " + this.RollNo)

    }
}

student.printDetails()