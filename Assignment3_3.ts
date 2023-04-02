class CircleXX
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

class CircleX extends CircleXX
{
    constructor(A : number)
    {
        super(A)
    }

    Circumference():number{

        let Ans : number=0

        Ans=this.Pi*this.Radius*this.Radius

        return Ans
    }
}

var Ret : number =0

var Obj3=new CircleX(10.5)

Ret=Obj3.Area()
console.log("Area of circle is "+Ret)

Ret=Obj3.Circumference()
console.log("Circumference of circle is "+Ret)