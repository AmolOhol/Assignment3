class Circle
{
    public Radius: number
    public Pi: number

    constructor(A : number)
    {
        this.Radius = A
        this.Pi = 3.14

    }

    Area() : number{
        return this.Pi*this.Radius*this.Radius
    }
}

var Obj1 = new Circle(12)
var Ret : number=0

Ret=Obj1.Area()
console.log("Area of circle is "+Ret)

var Obj2 = new Circle(15)

Ret=Obj2.Area()
console.log("Area of Circle is "+Ret)