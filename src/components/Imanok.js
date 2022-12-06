import { React } from "react";

function Imanok(e) {
     //alert("start");
     const kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
     kkeys.push(e.keyCode);
     if (kkeys.toString().indexOf(konami) >= 0) {
          window.document.unbind('keydown');
          //alert('Konami!');          
     }
     return (
          <div><Imanok /></div>
     )
};

export default Imanok;