const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index=0
  document.body.addEventListener('keydown',function(e){
        
      //console.log(parseInt(e.detail))
      const key= parseInt(e.detail||e.which)
    
      
      if(key===code[index]){
        index++
          if(index===code.length-1){
            alert("don't use cheat")
            index=0
          }
      }else{
        index=0
      }
  })
}
