 let doingarr=localStorage.doingarr?localStorage.doingarr.split(","):[];
 let donearr=localStorage.donearr?localStorage.donearr.split(","):[];
 let num=document.getElementsByClassName("number");
 let theinput=document.getElementById("title");
 let doingBox=document.querySelector(".doingBox");
 let doneBox=document.querySelector(".doneBox");
 num[0].innerText=doingarr.length;
 num[1].innerText=donearr.length;
 update();
 theinput.onkeydown=function (e) {
     if(e.keyCode==13&&theinput.value!=""){
         let inputValue = theinput.value;
         doingarr.unshift(inputValue);
         update();
         theinput.value="";
     }
 }
 function update() {
     localStorage.doingarr=doingarr.join(",");
     localStorage.donearr=donearr.join(",");
     num[0].innerText=doingarr.length;
     num[1].innerText=donearr.length;
     doingBox.innerText="";
     doneBox.innerText="";
     doingarr.forEach(function(value,index){
         let li=document.createElement("li");
         doingBox.appendChild(li);
         let input=document.createElement("input");
         input.classList.add("change");
         input.type="checkbox";
         li.appendChild(input);
         input.onclick=function(){
             donearr.unshift(value);
             doingarr.splice(index,1);
             update();
         }
         let p=document.createElement("p");
         p.innerText=value;
         li.appendChild(p);
         p.ondblclick=function(){
             let thisinput=document.createElement("input");
             thisinput.setAttribute("autofocus","autofocus");
             thisinput.classList.add("revise");
             p.innerText="";
             p.appendChild(thisinput);
             thisinput.value=value;
             thisinput.onkeydown=function (e) {
                 if(e.keyCode==13&&thisinput.value!=""){
                     doingarr[index]=thisinput.value;
                     update();
                 }
                 else if(e.keyCode==13&&thisinput.value==""){
                     doingarr.splice(index,1);
                     update();
                 }
             }
             thisinput.onblur=function () {
                 if(thisinput.value!=""){
                     doingarr[index]=thisinput.value;
                     update();
                 }
                 // else if(thisinput.value==""){
                 //     doingarr.splice(index,1);
                 //     update();
                 // }
             }
         }
         let a=document.createElement("a");
         li.appendChild(a);
         a.innerText="-";
         a.onclick=function(){
             doingarr.splice(index,1);
             update();
         }
     });
     donearr.forEach(function(value,index){
         let li=document.createElement("li");
         doneBox.appendChild(li);
         let input=document.createElement("input");
         input.classList.add("change");
         input.type="checkbox";
         input.checked="check";
         li.appendChild(input);
         input.onclick=function(){
             doingarr.unshift(value);
             donearr.splice(index,1);
             update();
         }
         let p=document.createElement("p");
         p.innerText=value;
         li.appendChild(p);
         p.ondblclick=function(){
             let thisinput=document.createElement("input");
             thisinput.setAttribute("autofocus","autofocus");
             thisinput.classList.add("revise");
             p.innerText="";
             p.appendChild(thisinput);
             thisinput.value=value;
             thisinput.onkeydown=function (e) {
                 if(e.keyCode==13&&thisinput.value!=""){
                     donearr[index]=thisinput.value;
                     update();
                 }
                 else if(e.keyCode==13&&thisinput.value==""){
                     donearr.splice(index,1);
                     update();
                 }
             }
             thisinput.onblur=function(){
                 if(thisinput.value!=""){
                     donearr[index]=thisinput.value;
                     update();
                 }
                 // else if(thisinput.value==""){
                 //     donearr.splice(index,1);
                 //     update();
                 // }
             }
         }
         let a=document.createElement("a");
         li.appendChild(a);
         a.innerText="-";
         a.onclick=function(){
             donearr.splice(index,1);
             update();
         }
     });
 }

