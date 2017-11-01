// ** Battery Cell DD Laden
function loadCell(formObj){
   var typ = formObj.inBCell;
   var i,a;

   typ.options.length=0; // bestehende Inhalte der DD löschen
   
   if (withCustom) {
      typ.add(new Option(lblCustom,0,true,true));
   } else {
      typ.add(new Option(lblChoose,-1,true,true));
   }
   a = startPoint();
   for (i=0; i < cellArray.length; i++){
      //a = cellArray[i];
      //typ.options[i+1] = new Option(a[0]+" - "+a[4]+"/"+a[5]+"C",i+1,false,false);
      //typ.options[i] = new Option(cellArray[i],i+1,false,false);
      typ.add(new Option(cellArray[i],cellArray[i],false,false));
      if (i < a) {
	      //typ.options[typ.length-1].value = "na"; //not available
	      //typ.options[typ.length-1].disabled = true;       
      } else {
        a = a + incBy(); 
      }
   }
      
   configBattery();
}

function loadEsc(formObj){

   var a;

   typ = formObj.inEType;
   
   typ.options.length=0; // bestehende Inhalte der DD löschen
   
   if (withCustom) {
      typ.add(new Option(lblCustom,0,true,true));
   } else {
      typ.add(new Option(lblChoose,-1,true,true));
   }

   a=14+startPoint(); // damit alle generischen ESC angezeigt werden
   for (i=0; i < controlerArray.length; i++){  // i=i+incBy()
      //a = controlerArray[i];
      //typ.options[i+1] = new Option(a[0],i+1,false,false);
      //typ.options[i] = new Option(controlerArray[i],i+1,false,false);
      typ.add(new Option(controlerArray[i],i+1,false,false));
      
      if (i>14){ // damit alle generischen ESC angezeigt werden
	      if (i < a ) {
		      //typ.options[typ.length-1].value = "na"; //not available
		      //typ.options[typ.length-1].disabled = true;       
	      } else {
	        a = a + incBy(); 
	      }
	  }
   }

   configEsc();

}

// *** Motor Typen DD Laden
function loadMotorTyps(formObj){
   var herst = formObj.inMManufacturer[formObj.inMManufacturer.selectedIndex].value;
   var typ = formObj.inMType;
   var i,j,a;
   var len = typ.options.length;
   var m;

   //Clear old List
   typ.options.length=0;
   //for (i=len-1; i>=1; i--){
   //   typ.options[i]=null;   // (Position 0 (Anderer/Custom) nicht löschen)
   //}

   //Fill up Motortyps
   //typ.options[0] = new Option("Anderer",0,true,true);

   //bei torqueCalc zusätzlich noch ANY anzeigen
   
   if (withCustom) {
      typ.add(new Option(lblCustom,0,true,true)); // custom
   } else {
      typ.add(new Option(lblChoose,-1,true,true)); // bitte wählen
   }

   if (typeof addAnySelect == 'function') { 
	  addAnySelect(document.getElementById("inMType")); 
   }
   
   
   
   a=startPoint();
   for (i=0; i < motorArray.length; i++){
      m = motorArray[i];                    // if Calc does not Work with error on this line 
                                            // check in the Motor DB the data format specialy 
                                            // there are all commas, also after ],
      if (a < i) a = i + incBy()-1;
      if ((m[0] == herst) || (herst == 0)) {
         typ.add(new Option(m[1]+" ("+m[2]+")",m[0]+"|"+m[1],false,false));
	      if (i < a) {
	         //typ.options[typ.length-1].value = "na"; //not available
	         //typ.options[typ.length-1].disabled = true;       
	      } else {
	         a = a + incBy(); 
	      }
      }
      // if ((m[0]>herst) && !(herst == 0)) break;
   }
   
     
   configMotor();
}

