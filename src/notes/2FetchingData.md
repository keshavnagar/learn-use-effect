# fetching data as a side effect
1. fetching data is called side effect in react, that's why we use the useEfffect

2. why we call fetching data is called side effect ? 

when we fetch data in react component, we're performing a side effect because: 

External Integration: 

so here we understand the meaning of external integration , its the external integration of some elements like these elements dont provide by react itself these are comes from another api or server and we handle these external things like we are not using the react's own thing we just use them from api and server and this is handled by useEffect, like when our function is changing any data that is comes from ouside that is not work by a funciton that is a pure funciton in react but it alsways done by use effect in which we provide the callback function that useEffect handled this component and than we use the external integraion 

means here we need to handle the external things , and for this handle we need to hook that's why we says here is the fetching data is not react thing its other things and when we deal with  that thing we use hooks

now we write the give definition in ppt: 

External Integration : we're interacting with an external data source, such as an api or a server.

State Updata: the fetched data will usually update the component's state, causing re render

like when we fetch the data from api and it causees the compoennt's state change or re render than it also handled by use effect

others exmaple 

 # subscribing to or unsubscribing from a service

 # upadateing the browser's dom

 # logging data to the console

 these all are exmpale of side effects that are handle by useEffect

 but its not mendatory every where in these conditions are use the useEffect but in some cases where react doesnt able to do the things than we use the useEffect

 we see the exmaple of increment function that is not do the react wnant like react want to be pure funciotn but that funciton is interfare in others variable that is not good in terms of react i know its not wrong but if we want to do like these thing than wee use the useEffect that's the desciplinery aproach 

i konw that exmple not use the use effect beaucse react done may be or not but yeah like that exmaple we use the use eeffcet we understood that becaseu we need to idea about use effect

now we move to the code screen and do the really preactical work about use  effect hook