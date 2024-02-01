class ArrayWrapper{
    constructor(num1,num2,num3){
        this.num1 = num1 ;
        this.num2 = num2 ;
        this.num3 = num3
    }
    add(){
        const finalSum = this.num1.reduce((sum,num)=>sum+num,0)+this.num2.reduce((sum,num)=>sum+num,0);
        console.log(finalSum)
    }
    string(){
        const str = this.num3.toString();
        console.log(str)
    }
}

const newArray = new ArrayWrapper([1,2,3],[5,6,7,8],[40,50,60,70])
newArray.add();
newArray.string();