let a=[]
for(let i=0;i <= 100000;i++){

	a.push(Math.floor(Math.random()*100))

}


var sa=sort(a)
console.log(sa)

function sort(array){
    for(var i=1;i<array.length;i++){
        var temp=array[i];
        var j= i-1;
        while(j>=0 && array[j]>temp ){

            array[j+1]= array[j]
            j--;

        }

        array[j+1]=temp
    }

    return array
}
