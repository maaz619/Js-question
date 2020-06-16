const fs= require('fs');
const someFunction=function(str){

    var b=[],p=[],arr=[];
    var myObj= new Object()

    for(var a=0;str.length>a;a++){

        if(['a','b','x','y','z'].includes(str[a])){
            console.log('ERRRRRRRR')
            break
        }

        for(c=-2,d=-1;3>c;c++,d++){
            var code=str.charCodeAt(a) + c
            var code_e=str.charCodeAt(a)+d

            b.push(String.fromCharCode(code))
            p.push(String.fromCharCode(code_e))
        }

        var TS=b.toString(),PS=p.toString()
        
        TS=TS.replace(/,/g,'')
        PS=PS.replace(/,/g,'')

        arr.push(PS,TS)

        myObj[str[a]]=arr;
        arr=[],p=[],b=[]
    }

    const json=JSON.stringify(myObj)
    fs.writeFileSync('file.json',json)
}

someFunction('in')
