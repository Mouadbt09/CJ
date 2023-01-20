// -------dark/light mode-----
    b=false
    document.getElementById('td').onclick=function(){
        if(b==false){
            b=true
            
            $(".d").css("background","white")
            var inp = document.getElementsByClassName("inputt")
            for (elm of inp){
                elm.style=`background: rgb(32, 32, 32);color: #ccccd8;`
            }
            document.getElementById('Cl').style=`background: rgb(32, 32, 32);color: #ed3916;`
            document.getElementById('res').style=`background: #2b3cf3;color:white;`
            var inop = document.getElementsByClassName("op")
            for (elm of inop){
                elm.style=`background: rgb(32, 32, 32);color: #2b3cf3;`
                document.getElementById('tab').style='background-color: rgb(12, 12, 12);box-shadow:none;'
                document.getElementById('i').style="text-align: center;padding-top: 5px;color:white"
                document.getElementById('bo').style='background-color:rgb(32, 32, 32);'
            }
            document.getElementById('result').style="color:white;"
            document.getElementsByClassName('screen')[0].style="color:white;"
            document.getElementById('dark').style="background-color: white;border-radius: 100%;width: 30px;height: 30px;display: inline-block;"
            $(".extra").toggle()
        }
        else{
            b=false
            $(".d").css("background","black")
            var inp = document.getElementsByClassName("inputt")
            for (elm of inp){
                elm.style=`text-align: center;line-height: 71px;background: rgb(239, 240, 246);border: none;width: 70px;height: 70px;border-radius: 100%;transition: background-color 1s ease-in-out;transition: transform 100ms ease-in-out;`
            }
            document.getElementById('Cl').style=`background-color: #ed3916;color: white;`
            document.getElementById('res').style=`background-color: #3b49f0;color: white;`
            var inop = document.getElementsByClassName("op")
            for (elm of inop){
                elm.style=`color: #3b49f0;`
                document.getElementById('tab').style='background-color: white;border-radius: 5px;box-shadow: rgb(80, 80, 80) 1px 1px 10px;padding: 10px;'
                document.getElementById('i').style="text-align: center;padding-top: 5px;color:black"
                document.getElementById('bo').style='background-color: darkgray;'
            }
            document.getElementsByClassName('screen')[0].style="color:black;"
            document.getElementById('result').style="color:black;"
            document.getElementById('dark').style="background-color: black;border-radius: 100%;width: 30px;height: 30px;display: inline-block;"
            $(".extra").toggle()
        }
    }
   
    $("#tddiv").click(function(){
      $(".extra").toggle("")
    })
    // --------calcul------
    function f1(x){
        
        if(x=='r'){
            document.getElementById("result").innerHTML=eval(document.getElementsByClassName('screen')[0].innerHTML)
        }
        else if(x=='C'){
            document.getElementsByClassName('screen')[0].innerHTML=" "
            document.getElementById("result").innerHTML=" "
        }
        else if(x=='DEL'){
            document.getElementsByClassName('screen')[0].innerHTML=document.getElementsByClassName('screen')[0].innerHTML.slice(0,-1)
        }
        else{
          if(x=="cos"){
            $("#result").html(eval(Math.cos(eval(document.getElementsByClassName('screen')[0].innerHTML))))
          }
          else if(x=="sin"){
            $("#result").html(eval(Math.sin(eval(document.getElementsByClassName('screen')[0].innerHTML))))
          }
          else if(x=="tan"){
              $("#result").html(eval(Math.tan(eval(document.getElementsByClassName('screen')[0].innerHTML))))
          }
          else if(x=="√"){
            $("#result").html(eval(Math.sqrt(eval(document.getElementsByClassName('screen')[0].innerHTML))))
          }
          else{
            document.getElementsByClassName('screen')[0].innerHTML+=x
          }
        }
        if(document.getElementsByClassName('screen')[0].innerHTML==" "){
            document.getElementById("result").innerHTML=" "
        }
    }
