const fs=require("fs"),total=100,addl=30,today=new Date,file="dataset.json";let dates=[];
for(let e=0;e<130;e++){let t=new Date(today);t.setDate(today.getDate()+e),dates.push(formatDate(t))}
for(let e=0;e<5;e++){let e=Math.floor(99*Math.random()+1);dates.splice(e,3)}
let removals=dates.length-100;for(;removals>0;){let e=Math.floor(99*Math.random()+1);dates.splice(e,1),removals--}
function formatDate(e){var t=new Date(e),a=""+(t.getMonth()+1),l=""+t.getDate(),o=t.getFullYear();return a.length<2&&(a="0"+a),l.length<2&&(l="0"+l),o+a+l}
fs.writeFile(file,JSON.stringify(dates),function(e){if(e)throw e;console.log("Number of created dates: ",dates.length),console.log("Succesfully outputed to file: ",file)});