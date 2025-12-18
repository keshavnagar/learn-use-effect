# lifecycle of components: 
1. Initialization: when our component is first time initialize, means prepared 
2. mounting: when it showing on the screen
3. update: when the state is changed than re render
4. unmounting: when our component is removed 

so yadi hame koi bhi task perform karni hoti hai to vo task in lifecycle ke during hee hoti hai

suppose we have a table compoent that show some information when the table is mount on the screen than  we want  to fetch some data means our task is dependent on component lifecycle

when i edit the data in table so the updation is also perform in database

and if i want to move from the screen to another screen so again the data is unmount or clear means if the componet is unmount so the data is also erease from there

so yaha par lifecycle ke teeno fase se hamari things related hai means ab jab hame ye sari task jo karni to lifecycle se hee  hai but fir bhi hame inse hokar karni hoti hai to usey ham use effect hook se karte hia 

jaise yadi use effect me koi bhi dependecny nahi hai to vo sirf mounting pe hee chalega jo ki pahla step tha jisme tune bataya tha ki koi si table hogi jo data fetch karegi when component is mounted 

and second thing ye thi ki jab bhi ham use effect ke dependency me kuch state jo update hoti hai vo rakh dete hai to ye ek prakar se updation fase ko show karta hai ki har update par apna use effect run karta hai aur same thing jo batayi thi ki jo apna table ka data jab bhi apan kuch likhe tab tab vo update ho data base me vo apan is use effect ke dwara kar sakte hai 

means apne ko koi aisa project banana hai jisme do use effect rakhe apan ek vo jo bas mounting ke time chale aur dusra vo jo har update par chale to usme ye dono work aa skate hia 

to unmount ko yadi hame track karna hai to hamare pas ek cleanup fucntion hota hai jo ham cll back funciton ke andar hee likhte hai return () => {}
to iske andar jab ham likhenge console.log() to vo isey track kar lega and first time jaise hee compoent mount hoga fir vo unmount bhi ho jayega

first wala ek bar chalega and second wala every update par chalega

