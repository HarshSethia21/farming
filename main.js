
function calculate(){
    var number1=document.getElementById("length").value
    area=number1*number1
    perimeter=4*number1
    document.getElementById("area").innerHTML=area
    document.getElementById("perimeter").innerHTML=perimeter
}