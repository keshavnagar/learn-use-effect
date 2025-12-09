# use effect hook
1. with the help of use effect hook we handle the side effects in react
# syntax of use effect hook
useEffect(()=>{
    // side effect code
    return ()=>{
    // cleanup function
    }
}, [dependencies]
)

1. in syntax first is callback funciton inside it there is code of side effect than a clean up call back funciton that is return in the main callback funciton and than dependencies

2. initial render: when the component mounts, useEffect can run its effect function to perform operations like data fetching

here initial render means when component is first time render and the first time of rendering the component is called the mount, and it is also the lifecycle of useEffect when the component is rendering first time than the mounts is happening like exmaple we created the api project with the help of useEffect so in there we use the use effect and when we click the button the component is rendering and the use effect calls the api its called the api fetching like there api fetching when we press the button or at the first time when the component is rendered

3. Dependencies: The second argument, an array of dependencies, which determine when the effect should re-run. if any value in this array changes, the effect will re run.

in previous time, i understand this thing like when there is nothing in dependencies array than it run only once or we say its just mount or first time rendering like in next time render the component than it doesn't run like when the state is changed it doesnt run when there is no dependenceis

and the meaning of the line that we write is like when we run or re run the use effects hook 

one more thing in that line number thing  i mentino there when the value in array will changes than the effect will run again like the ocmponent is agian render on state value because state value is change if we right inside the dependency than it will also run 

4. cleanup: useEffect can return a cleanup function to clean up after the effect, such as unsubscribing from an event or clearing a timer.

like jo apan ne abhhi abhi ek project banaya tha jisme apan ne timer ko clean up kiya tha use effect hook ki help se usme isee ka use kiiya tha 

so i understood the example of the function: 

in react, functions are pure, meaning they return the same output for the same input without causing side effects.

like we have one funcitno and we pass the argument with this function means we give one input to this function and than this funciton return should be the output based on this same input that we give not by other.

but the theory of side effects said if the funciton manipulate other value that we dont even pass to that funciton and the fucntion is manipultate that input and give the output based on external input than it is side effect

for example of one funtion that is example of side effect that manipulate other variable event that is not same that we pass even we are not pass the input to this funciton or even if we pass any other input to this funciton and it is manipulate other variable even we do not give to it that is called side effect 

let count = 0;

functoin increment() {
    count+1;//modifies or manipulate extenal variable 
}

increment();
console.log(count); //1

this funciton update the value that is not in their scope 
side effect means you must focus on your own work why interfare in other work

but in react that we discuss earlier the pure function has not capability to do the side effect they only work on the varibale that we give to as input like they only work on that same value so in react if we want to do this thing that is not in react funciotn than the useEffect comes into the picture and solve this problem

A side effect is any operation that affects something outside the scope of a funciton (Pure Funciton ) 

above definition is def of side effect

In react, side effects are managed usding hooks like useEffect to ensure they are handled in a control and predicatable manner.

so above def is explain that we understand the side effect is handled by useEffect 

why the control and manageable manner 

like in useState we use the value = {stateValue} and onchange funciton like if we use these things than our component is called controle component same as when we use the use effect to handle side effect than it is also called controlled compeont 




