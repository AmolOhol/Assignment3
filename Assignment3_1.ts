class ArithmaticX
{
    public No1:number;
    public No2: number

    constructor(x: number, y: number)
    {
        this.No1=x;
        this.No2=y;
    }

    public Addition():number{
        return this.No1+ this.No2
    }

    
    public Substraction():number{
        return this.No1 - this.No2
    }

    
    public Multiplication():number{
        return this.No1*this.No2
    }
    
    public Division():number{
        return this.No1/ this.No2
    }

}

var object1 = new ArithmaticX(20,10)
var object2 = new ArithmaticX(50,10)

var Ret : number=0

Ret=object1.Addition()
console.log("Addition is "+Ret)

Ret=object1.Substraction()
console.log("Substraction is "+Ret)

Ret = object1.Multiplication()
console.log("Multiplication is "+Ret)

Ret = object1.Division()
console.log("Division is "+Ret)

Ret=object2.Addition()
console.log("Addition is "+Ret)

Ret=object2.Substraction()
console.log("Substraction is "+Ret)

Ret = object2.Multiplication()
console.log("Multiplication is "+Ret)

Ret = object2.Division()
console.log("Division is "+Ret)
