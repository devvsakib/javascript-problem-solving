function stringCheck(arr){
   let string1=arr[0].toLowerCase()
  let string2=arr[1].toLowerCase()
  let flag=0
  for (let i=0 ; i<string2.length;i++){
    if(!string1.includes(string2[i])){
    
flag+=1
    }
  }
 
  if(flag>0){
    return false
  }else{
    return true
  }
}
