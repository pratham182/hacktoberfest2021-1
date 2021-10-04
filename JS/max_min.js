//Find max and min no in array
const max_and_min=((arr)=>{
    let max=arr[0];
    let min=arr[0];
    
    for(let x=0;x<arr.length;x++){
        if(max<arr[x]){
            max=arr[x]
        }
        else if(min>arr[x]){
            min=arr[x];
        }
    }
    console.log(max,min);                   
                       
                       
    });
    
    max_and_min([1,2,3,13,13,1,31,134,1232]);
