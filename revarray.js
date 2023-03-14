let arr=[10,20,30,40,50];

let revarr=[];
for(let i=0;i<arr.length;i++)
{
    // revarr[arr.length-1-i]=arr[i];
    revarr.splice(0,0,arr[i]);
}
console.log(revarr);