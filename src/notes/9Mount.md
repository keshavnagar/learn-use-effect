# jab component only mount ho means first time and we put console.log ("mount") in them
1. so initially ek prakar se apan ne usey mount kar diya haina 
2. suppose we put the cleanup function here 
3. but cleanup funciton only runs when there are two conditions
3.1 when we really unmount the component , jaise ki hamne conditional rendering se kiya
3.2 when we change the state value and also that state value in dependency so effect will re run means our clean up functoin again run in that case
# so clean up function in my language 
1. when we understood the cleanup function with the help of removing the existing component by conditional rendering than we understood easily cleanup funciotn on one time mounting that is without dependency
2. we again understood the cleanup function when our dependency has some value
3. value changed, componetn re run again and the old component has cleanup funciton runs for cleaning them 
4. why the cleanup funciton not run with their own use effect or componetn 
5. because cleaup function only runs when the componetne really un mount 
6. its like when we sit on pangat for food the cleanupp function run for old person who before sitting to us
7. and the cleanfuntion of us is only runs when we stand and absence from their so that clean up function is us 
8. and immediately after the cleanup since we change the state means new component is also comming in wait so they comes and sit their 
# compare lifecycle to the use effects features:
1. when the dependency is empty than our component is only runs once or mounted 
2. when our dependecy has some value than the lifecycle is called updation
3. when the component is unmount than our cleanup function run before the company unmounted
# example of use effect of online offline status
1. when someone is online than we track them with the help of use effect like the mounted
2. and if someone is offline than we track them with the help of unmounted or cleanup function