function Count(){
    let count = 0;

    this.incrementCounter = function (){
        count++;
       console.log(count)
    }

    this.decrementCounter = function(){
        count--;
       console.log(count)
    }
}

let counter = new Count();

counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();

counter.decrementCounter();