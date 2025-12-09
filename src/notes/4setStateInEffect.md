1. jab ham set state (updateDate.toLocaleTimeString) likh rahe hai to vo hame static mil rahi hai 
2. jab ham every time refresh karenge tab hee hame har bar new time dekhne ko milega like har second hame new time nahi dekhne ko milega 
3. iske liye hame setInterval lagana padega ki har new second me ye state update ho 
4. so apan iski jagah ye jo code apan ne khule me likha hai isey apan set interval ke callback funciton ke andar likhte hai jo uske delay ke har bar chalega 