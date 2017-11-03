//*****************************************************************************
//  (c) Copyright by Markus Mueller, Solution for All, www.s4.ch, Switzerland
//
//  All source codes, data, texts, pictures and graphs and their arrangements 
//  are subject to copyright and are the intellectual property of 
//  Solution for All Markus Müller. They may neither be copied for forwarding 
//  nor used in an amended form or non other websites nor servers nor any kind 
//  of electronic device.
//
//  (c) This Source-Code might NOT be used without any permission from M. Mueller
//
//*****************************************************************************
//
//  Custom Shop Definitions & Black List
//  activate URL CHECK!!
//
//
//  Revisions:
//  22.04.14        Aero-Model
//  29.01.14  6.06  Vorbereitung auf Subscription: Custom Components, 
//                  Generate Link & full list of components nun steurbar
//  19.02.13  6.00  Erstellt
//*****************************************************************************

// Illegale Nutzung: verhindert externe Nutzung in einem Frame
if (top!=self) location.replace("./illegalcopy.htm");

//Sprachwahl
var theLanguage ="";
if (getParameterByName("lang") == "de" || isSysLanguage("de")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_de.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "cn" || isSysLanguage("zh")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_cn.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "cz" || isSysLanguage("cs")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_cz.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "es" || isSysLanguage("es")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_es.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "fr" || isSysLanguage("fr")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_fr.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "it" || isSysLanguage("it")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_it.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "jp" || isSysLanguage("ja")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_jp.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "kr" || isSysLanguage("ko")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_kr.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "nl" || isSysLanguage("nl")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_nl.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "pl" || isSysLanguage("pl")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_pl.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "pt" || isSysLanguage("pt")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_pt.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "ps" || isSysLanguage("ar")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_ps.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "ru" || isSysLanguage("ru")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_ru.js"+cVersion +"'><\/script>";
} else if (getParameterByName("lang") == "se" || isSysLanguage("se")){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_se.js"+cVersion +"'><\/script>";
} else {
   theLanguage ="<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_en.js"+cVersion +"'><\/script>"; //Default sprache Enlish
}


var theCSS		= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc.css"+cVersion +"' />";

var theCells	= "<script language='javascript' type='text/javascript' src='./calcinclude/data/cell.js"+cVersion +"'><\/script>";

var theESC	 	= "<script language='javascript' type='text/javascript' src='./calcinclude/data/esc.js"+cVersion +"'><\/script>";

// value muss ein eindeutiger schlüssel sein, sonst funzt search mit dictionary nicht
var theMotors   = "<OPTION value=39>actro <OPTION value=52>Aeolian <OPTION value=119>airtek <OPTION value=122>ALZRC <OPTION value=41>ARC <OPTION value=114>Astro Flight <OPTION value=80>Aveox <OPTION value=73>Avroto <OPTION value=106>Avionic <OPTION value=1>AXI <OPTION value=71>BlackMagic <OPTION value=104>Black Widow (ZTW) <OPTION value=12>Castle <OPTION value=74>Cheetah <OPTION value=23>Cobra <OPTION value=25>Cyclon <OPTION value=93>Detrum <OPTION value=110>DinoPower <OPTION value=22>DJI <OPTION value=65>D-Power <OPTION value=38>Dualsky <OPTION value=27>Dymond <OPTION value=78>DYS <OPTION value=30>E-flite <OPTION value=47>ElectriFly <OPTION value=31>EMAX <OPTION value=79>EMP <OPTION value=62>Engel MT <OPTION value=10>ePower X <OPTION value=50>EP Product <OPTION value=69>Exceed RC <OPTION value=118>Extreme Flight <OPTION value=32>Faigao <OPTION value=113>FHEM <OPTION value=84>Flyduino <OPTION value=33>Flyware <OPTION value=85>FMS <OPTION value=117>Foxy <OPTION value=90>FSD-Motor <OPTION value=123>Futaba <OPTION value=87>Gartt <OPTION value=100>Gaui <OPTION value=19>Gens ace <OPTION value=18>Graupner <OPTION value=89>GS Models <OPTION value=2>Hacker <OPTION value=26>HengLi (HLY) <OPTION value=21>HET (Typhoon) <OPTION value=36>Himax <OPTION value=107>HiTec <OPTION value=125>HobbyStar <OPTION value=124>HobbyWing <OPTION value=3>Hyperion <OPTION value=28>Infinite <OPTION value=66>iPower <OPTION value=115>Jamara <OPTION value=64>Jeti <OPTION value=77>Joby Motors <OPTION value=61>KDEDirect <OPTION value=37>KEDA <OPTION value=6>Kontronik <OPTION value=111>LDPower <OPTION value=20>Lehner <OPTION value=11>Leomotion <OPTION value=59>Leopard <OPTION value=98>Liomax <OPTION value=56>LiPolice <OPTION value=101>Lumenier <OPTION value=121>MAD Components<OPTION value=102>Maytech <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=86>mfly <OPTION value=76>MicroDAN <OPTION value=94>Mikrokopter <OPTION value=96>MotrolFly <OPTION value=105>MP Jet <OPTION value=126>MultiStar  <OPTION value=99>MVVS <OPTION value=5>NeuMotors <OPTION value=57>O.S.Motor <OPTION value=17>Peggy Pepper <OPTION value=29>Pichler <OPTION value=60>Planet-Hobby <OPTION value=40>Plettenberg <OPTION value=109>Poly-Tec <OPTION value=53>PowerHD <OPTION value=48>ProTronik <OPTION value=51>Pulso <OPTION value=72>Quantum <OPTION value=97>Quanum <OPTION value=112>RCinPower <OPTION value=54>RCTimer <OPTION value=103>RCX <OPTION value=43>RedRock <OPTION value=44>ROXXY <OPTION value=42>Roton <OPTION value=81>Savox <OPTION value=8>Scorpion <OPTION value=116>SMC Power <OPTION value=55>Simprop <OPTION value=120>SkyRC <OPTION value=108>Storm <OPTION value=63>SunnySky <OPTION value=88>Suppo <OPTION value=46>T-Motor <OPTION value=68>Tacon <OPTION value=70>Tarot <OPTION value=82>Team Hunter RC <OPTION value=58>Tenshock <OPTION value=45>Thunder Tiger <OPTION value=92>Tomcat <OPTION value=16>Torcman <OPTION value=34>Torcster <OPTION value=83>Tp Power<OPTION value=35>Turnigy <OPTION value=95>Warhead <OPTION value=7>Waypoint <OPTION value=49>Xera <OPTION value=91>Xnova <OPTION value=75>XPower <OPTION value=67>X-Team"; // <OPTION value=0>Alle </OPTION>";

var thePropeller= "<script language='javascript' type='text/javascript' src='./calcinclude/data/propeller.js"+cVersion +"'><\/script>";

// Counter and Link-Ranking
var theCounter	= "<img src='https://www.easycounter.com/counter.php?s4a,eCalc' border='0' alt='Website Hit Counter'>"  //esayCounter wird nur noch als Totalizer genutzt
                  + "<br><a href='https://www.rcflug.ch/topsites/liste.php?list=12' target='_blank' ><img src='https://www.rcflug.ch/topsites/image.php?pass=nwnnKpmn&list=1' border=0 width='42' height='30' alt='#1 RC-Topsites'></a>";
                  //+ "&nbsp;<a href='http://www.modellflugtipps.de/toplinks/toplinks.php?id=2016' target='_blank'>"
                  //+ "<img src='http://www.modellflugtipps.de/toplinks/image.php?id=2016' border=0 vspace=0 hspace=0 height='30' width='50'></a>"
                  //+ "<br><a href='http://www.rcflug.ch/topsites/liste.php?list=12' target='_blank'><img src='http://www.rcflug.ch/topsites/image.php?pass=nwnnKpmn&list=12' border=0 width='42' height='30' alt='RC-Topsites'></a>";

var theShopLogo = "<a href='http://www.s4a.ch' target='_blank'><img border='0' src='./calcinclude/logo/p_s4alogo.gif' width='81' height='45'></a>"; 

var theDonationForm =""; //wird erst im lang_xx.js gesetzt

var theEDriveLink= "";


//Bei Distributoren (e.g. Castle, eflight & co) werden kein SearchButton und exportForm angezeigt --> ="";
var searchButton = "<input class='input' type='button' id='BtnSearch' name='BtnSearch' value='   search...   ' disabled onClick='javascript:openSearch();'/>";
var wizardButton = "<input class='input' type='button' id='BtnPropKvWizard' name='BtnWizard' value=' Prop-KV-Wizard... ' disabled onClick='javascript:openWizard();'/>";


var exportForm =	"<tr><td colspan='6' align='left'>"
					+"<input type='button' value='share' id='shareCalc' onClick='javascript:location.replace(createLink());'/></td>"
					//+"<input type='button' value='share' id='shareCalc' onClick='javascript:location.replace(createLink());'/>&nbsp;<input class='shareLink' name='shareLink' id='shareLink' size='60' onFocus='javascript:this.select();' value='https://' />"
					//+"&nbsp <a href='' id='shareLinkHref' onClick='javascript:createLink();'>https://www.eCalc.ch...</a></td>"
					+"<td colspan='5' align='right'><form id='csvForm' method='post' action='./calcinclude/export.php'><textarea cols='1' name='exportData' rows='1' id='exportData' hidden/></textarea>"
					+"<input type='button' value='Add to &gt;&gt;' id='AddCSV' onClick='javascript:addDataForExport();' disabled/>&nbsp;"
					+"<input type='button' id='DownloadCSV' value='Download .csv (0)' onClick='javascript:exportDataCSV();' disabled/>&nbsp;"
					+"<input type='button' id='ClearCSV' value='&lt;&lt; Clear' onClick='javascript:clearExport()' disabled/></form></td></tr>";



userStatementAccepted = false;


function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isSysLanguage(aLang){
  var name = "lang";
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null){ // kein property &lang=
    // System Sprache ermitteln und prüfen, b identisch mit aLang
    var sysLang = navigator.language || navigator.userLanguage || navigator.browserLanguage;
    //alert(sysLang);
    if (sysLang.indexOf(aLang) == 0){
       return true;
    }else{
       return false;
    }
  } else return false; 
}


// Links von fremden Seiten werden nicht akzeptiert!!
function isCallAllowed(theShopName, theShopURL){  
   var tmpStr = top.location.search.split("&");       // 1. Parameter in URL = "?Shopname"
   if(theShopName=="castle")return true;
   // this.opener prüft, ob es wirklich ein bookmark/tipping ist, oder das fenster mit "window.open(this.href);return false;" erzeugt wurde
   if ((tmpStr[0] == "?"+theShopName) && ((top.document.referrer.search(theShopURL) >= 0) || (top.document.referrer.search("s4a.ch") >=0) || (top.document.referrer.search("ecalc.ch") >=0) || ((top.document.referrer == "") && !(this.opener)))){  
      return true;
   }else {
      return false;
   }
}

//Meldungen beim Eintreten und Verlassen

function acceptUserStatement() {
   var msg = "";

   
   if (!isServicePayed) msg = msgUserStatement1;
   msg = msg + msgUserStatement2;
   if (confirm(msg)){
      userStatementAccepted = true;
   } else {
     alert(msgUserStatementNotAccepted);
     location.replace("./index.htm?statementnotaccepted");
   }
}

function showLeaveMsg(){
  var msg="";

  if(!isServicePayed){

     msg= msgLeave;
        
     //alert(history.next.search("s4a.ch"));
     //if (history.next.search("s4a.ch") == -1){
     alert(msg);
     //document.paypal.submit();   
     //}
  }
}


// Black List: hier könnten fremde Nutzer geblockt werden --> auch bei edrive.htm einfügen!

if (top.document.referrer.indexOf("modellbau-ramseyer.ch") >= 0) location.replace("./accessdenied.htm?modellbau-ramseyer.ch");
if (top.document.referrer.indexOf("flightcorner.ch") >= 0) location.replace("./accessdenied.htm?flightcorner.ch");
if (top.document.referrer.indexOf("injetdesigns.com") >= 0) location.replace("./accessdenied.htm?injetdesigns.com");
if (top.document.referrer.indexOf("rcshop.kz") >= 0) location.replace("./accessdenied.htm?rcshop.kz");
if (top.document.referrer.indexOf("zenn.hu") >= 0) location.replace("./accessdenied.htm&zenn.hu");
if (top.document.referrer.indexOf("2dogrc.com") >= 0) location.replace("./accessdenied.htm?2dogrc.com");
if (top.document.referrer.indexOf("thommys.com") >= 0) location.replace("./accessdenied.htm?thommys.com");
if (top.document.referrer.indexOf("rc-terminal.de") >= 0) location.replace("./accessdenied.htm?rc-terminal.de");





// Kunden Whitelabeling Default Settings
var isServicePayed = true;        //true: payed customized eCalc version
var withCustom = false;           //true: eCalc does allow Custom Components
var isFullVersion = true;         //true: eCalc does display search & Download button
var isFullList = true;            //true: eCalc does display the full set of components
var withRpmTable = true;          //true: eCalc does write the RPM Table
var withPreselect = true;         //true: eCalc does preselect the components from the query string
var allPreselectable=false;       //true: eCalc does select a component even not on the list or custom component
var withMobileNavBar = true;       //true: eCalc Mobile zeigt header menue an, false: anzeige ohne menue (e.g. Dualsky App)

var rangeEstimator  = "<div id='placeholderRange' style='width:100%;height:350px'></div>"; //Range Esimator wird angezeigt bei White Labeling (auch ohne Login / Login zeigt immer grapfik)

if (isCallAllowed("s4a","s4a.ch") || isCallAllowed("s4a","ecalc.ch") ) {
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = false;
   rangeEstimator  =	 "<img class='img-responsive' id='pictureRangeEstimator' alt='Range Estimator Specimen' src='calcinclude/logo/p_range_estimator.jpg' />";  // nur Bsp. Bild anzeigen

}

else if (isCallAllowed("ecalc","ecalc.ch") || isCallAllowed("ecalc","s4a.ch") ) {
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = false;
   rangeEstimator  =	 "<img class='img-responsive' id='pictureRangeEstimator' alt='Range Estimator Specimen' src='calcinclude/logo/p_range_estimator.jpg' />";   // nur Bsp. Bild anzeigen 
 
}

//else if (isCallAllowed("ecalc","rcgroups.com")) {
//   isServicePayed = false;
//   withCustom = false;
//   isFullVersion = false;
//}


else if (isCallAllowed("castle","castlecreations.com")){ //Customer since 17.6.2010, Hersteller
   //theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_castle.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.eiwon.com' target='_top'><img border='0' width='250px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAEsCAYAAAAfPc2WAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d17fF11lffxz9rnpPcC5SoVEOUqRQRCcwHaRihtUyg6vCbOM88jIkoTLsNtcBBGR+PMqCAoNwdpCsrFeWY0jzNipWlLgdDS5kYUKpWCooIMoEgLFGib5Oz1/JGApSRn73Nybkm+79fL10uatfdeTZpz1vld1g9ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERAQAK3YCIrkyv6rqk+a+OF3M9okT/6q1tfWNQuUkIiJjU7LYCYjkTBgejNncdCF7vPqq/s2LiEjeBcVOQERERGS0UYElIiIikmMqsERERERyTAWWiIiISI6pwBIRERHJMRVYIiIiIjmmAktEREQkx1RgiYiIiOSYCiwRERGRHFOBJSIiIpJjKrBEREREckznssmoYfA40JQuJpVI9BQoHREREREREREREREREREREREREREREREREREREREREREREREREREREZGCsmInIP3mzi3fvaxn3IcwPwB8f3ffH2x/YH+cSRhTgHHAHoa9hfmOt691pwfnTYwec/5IwO8J+ZUn7NEVre2/L9bfSURE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IpIRr+cTwFFM5ga7gW3FzkdEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZOz4/9+N9BIjnQbKAAAAAElFTkSuQmCC'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   //theMotors   = "<OPTION value=1>AXI <OPTION value=12 selected>Castle <OPTION value=30>E-flite <OPTION value=2>Hacker <OPTION value=36>Himax <OPTION value=61>KDEDirect <OPTION value=6>Kontronik <OPTION value=11>Leomotion <OPTION value=5>NeuMotors <OPTION value=57>O.S.Motor <OPTION value=40>Plettenberg <OPTION value=47>RimFire <OPTION value=8>Scorpion";
   //theESC="<script language='JavaScript' src='./calcinclude/data/esc_castle.js"+cVersion +"'> </script>";
   //searchButton = "";
   //wizardButton = "";
   //exportForm = "";
}

else if (isCallAllowed("dualsky","dualsky.com") || isCallAllowed("dualsky","horejsi.cz")) { //Customer since 15.7.10, Hersteller, inkl. Horejsi.cz email vom 29.10.14
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_dualsky.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.dualsky.com/' target='_top'><img border='0' src='./calcinclude/logo/dualsky.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=38 selected>Dualsky </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_dualsky.js"+cVersion +"'> </script>";
}

else if (isCallAllowed("dualsky-app","")) { //Customer since 15.7.10, für mobile App
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_dualsky.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.dualsky.com/' target='_top'><img border='0' src='./calcinclude/logo/dualsky.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=38 selected>Dualsky </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_dualsky.js"+cVersion +"'> </script>";
   withMobileNavBar = false;
}

else if (isCallAllowed("eflight","eflight.ch") || isCallAllowed("eflight","epower.ch") || isCallAllowed("eflight","")){  //since 2006, , Distributor / "" wegen HTTPS liefert kein referer an HTTP-Site!!
      theShopLogo = "<a href='http://www.eflight.ch' target='_top'><img border='0' src='./calcinclude/logo/eflight.gif'></a>";
      theDonationForm = theShopLogo; // Keine spende anzeigen
      theMotors = "<OPTION value=1>AXI <OPTION value=10>ePower <OPTION value=2>Hacker <OPTION value=3>Hyperion <OPTION value=64>Jeti <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=5>NeuMotors <OPTION value=6>Kontronik <OPTION value=8>Scorpion </OPTION>";
      theESC="<script language='JavaScript' src='./calcinclude/data/esc_eflight.js"+cVersion +"'> </script>";
      searchButton = "";
      wizardButton = "";
      exportForm = "";
      //alert(top.document.referrer);


/*
   //alert(top.document.referrer);
   if ((top.document.referrer.search("epower.ch/login") >= 0)|| (top.document.referrer.search("ecalc.ch") >=0)) {
      theShopLogo = "<a href='http://www.eflight.ch' target='_top'><img border='0' src='./calcinclude/logo/eflight.gif'></a>";
      theDonationForm = theShopLogo; // Keine spende anzeigen
      theMotors = "<OPTION value=1>AXI <OPTION value=10>ePower <OPTION value=2>Hacker <OPTION value=3>Hyperion <OPTION value=64>Jeti <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=5>NeuMotors <OPTION value=6>Kontronik <OPTION value=8>Scorpion </OPTION>";
      theESC="<script language='JavaScript' src='./calcinclude/data/esc_eflight.js"+cVersion +"'> </script>";
      searchButton = "";
      wizardButton = "";
      exportForm = "";
   }else{  //alle anderen Aufrufe müssen über Login!
       sec="motorcalc";
       //alert(window.location.pathname);
       if (top.location.pathname=="/motorcalc.php" || top.location.pathname=="/motorcalc.htm"){
         sec="motorcalc";
       }
       else if (top.location.pathname=="/fancalc.php" || top.location.pathname=="/fancalc.htm"){
          sec="fancalc";
       }
       else if (top.location.pathname=="/helicalc.php" || top.location.pathname=="/helicalc.htm"){
          sec="helicalc";
       }
       else if (top.location.pathname=="/xcoptercalc.php" || top.location.pathname=="/xcoptercalc.htm"){
          sec="xcoptercalc";
       };

       top.location.replace("http://epower.ch/login/in.php?sec="+sec);
   } 
*/

}


else if (isCallAllowed("grischa","grischamodellbau.ch") || isCallAllowed("grischa","")) { //Commercial since 1.1.12, Distributor / "" wegen HTTPS liefert kein referer an HTTP-Site!!
   theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa.jpg'></a>";
   if (window.location.pathname.indexOf("fancalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_fan.jpg'></a>";
   } else if (window.location.pathname.indexOf("helicalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_heli.jpg'></a>";
   } else if (window.location.pathname.indexOf("xcoptercalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_xcopter.jpg'></a>";
   } else {
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_prop.jpg'></a>";
   };

   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors    = "<OPTION value=71>BlackMagic <OPTION value=30>E-flite <OPTION value=50>EP Product<OPTION value=36>Himax <OPTION value=57>O.S.Motor <OPTION value=48>ProTronik <OPTION value=44>robbe ROXXY <OPTION value=45>Thunder Tiger </OPTION>";
   searchButton = "";
   wizardButton = "";
   exportForm = "";
}

else if (isCallAllowed("hacker","hacker-motor.com") || isCallAllowed("hacker","hacker-motor-shop.com") || isCallAllowed("hacker","para-rc.de")){ //since 2.2014, Hersteller
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_hacker.css"+cVersion +"' />";
   theShopLogo = "<a href='http://hacker-motor.com' target='_top'><img border='0' src='./calcinclude/logo/hacker.png'></a>";
   theDonationForm = "<a href='http://hacker-motor.com' target='_top'><img border='0' src='./calcinclude/logo/hacker.png'></a>";   
   theMotors = "<OPTION value=2 selected>Hacker </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_hacker.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_hacker.js"+cVersion +"'> </script>";
}

else if (isCallAllowed("usahacker","hackermotorusa.com")){ //since 4.2015, Distributor / HTTPS-Call von HTTPS
   theCSS	= "<link rel=stylesheet type='text/css' href='./calcinclude/css/ecalc_hacker.css"+cVersion +"' />";
   theShopLogo = "<a href='http://hackermotorusa.com' target='_top'><img border='0' src='./calcinclude/logo/hackerusa.png'></a>";
   theDonationForm = theShopLogo;  
   theMotors = "<OPTION value=2 selected>Hacker </OPTION>";
   theCells = theCells;
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_hacker.js"+cVersion +"'> </script>";
   //alert(top.document.referrer);
}


else if (isCallAllowed("hk","hobbyking.com")) { // Testing 12. Sept 15
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_hk.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.hobbyking.com/' target='_top'><img border='0' src='./calcinclude/logo/hobbyking.png'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=104>Black Widow <OPTION value=126>MultiStar  <OPTION value=97>Quanum <OPTION value=35 selected>Turnigy </OPTION>";
   //theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   //theESC="<script language='JavaScript' src='./calcinclude/data/esc_dualsky.js"+cVersion +"'> </script>";
}


else if (isCallAllowed("hobbystar","hobbystarlabs.com") || isCallAllowed("hobbystar","rcjuice.com")) { // HobbyStar Sept. 17 / HTTPS-Call von HTTPS
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_hobbystar.css"+cVersion +"' />";
   theShopLogo = "<a href='https://www.hobbystarlabs.com/' target='_top'><img border='0' src='./calcinclude/logo/hobbystar.png' height=130></a>";
   theDonationForm = "<a href='https://www.hobbystarlabs.com/' target='_top'><img border='0' src='./calcinclude/logo/hobbystar.png' height=130></a>"; // Keine spende anzeigen
   theMotors = "<OPTION value=125 selected>HobbyStar</OPTION>";
   //theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_generic.js"+cVersion +"'> </script>";
   //alert(top.document.referrer);
   searchButton = "";
   wizardButton = "";
   exportForm = "";
}


else if (isCallAllowed("leomotion","leomotion.com") || isCallAllowed("leomotion","leomotion.ch")) { //10.11, Gratis
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_leomotion.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.leomotion.com' target='_top'><img border='0' src='./calcinclude/logo/leomotion.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_leo.js"+cVersion +"'> </script>";
   theMotors = "<OPTION value=38>Dualsky <OPTION value=11 selected>Leomotion <OPTION value=5>NeuMotors </OPTION>";
   theEDriveLink= "&nbsp;<span onClick=javascript:addDrive('http://www.s4a.ch/admin_leomotion/add.asp')> > </span>";
}



else if (isCallAllowed("neumotors","neumotors.com")){ //Hersteller since 15.5.2010
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_neumotors.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.neumotors.com' target='_top'><img border='0' src='./calcinclude/logo/neumotors.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=5 selected>NeuMotors </OPTION>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_castle.js"+cVersion +"'> </script>";

}

else if (isCallAllowed("polytec","poly-tec.org")) { // Poly-Tec Test 1.6. bis 31.8.16 / HTTPS-Call von HTTPS
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_polytec.css"+cVersion +"' />";
   theShopLogo = "<a href='http://www.poly-tec.org/' target='_top'><img border='0' src='./calcinclude/logo/polytec.jpg' height=130></a>";
   theDonationForm = "<a href='http://www.poly-tec.org/' target='_top'><img border='0' src='./calcinclude/logo/polytec2.jpg' height=130></a>"; // Keine spende anzeigen
   theMotors = "<OPTION value=109 selected>Poly-Tec</OPTION>";
   //theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js"+cVersion +"'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_generic.js"+cVersion +"'> </script>";
   //alert(top.document.referrer);
   searchButton = "";
   wizardButton = "";
   exportForm = "";
}

/*  --- no trafic
else if (isCallAllowed("rcpr","rcpartratings.com")){ //Partner since 15.5.2015 sam.thompson@gmail.com
   theShopLogo = "<a href='http://www.rcpartratings.com' target='_top'><img border='0' src='./calcinclude/logo/rcpartrating.png'></a>";
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = true;
   allPreselectable=true;

}

else if (isCallAllowed("rotorbuilds","rotorbuilds.com")){ //Partner since Sept. 15 scott@hawkee.com
   theShopLogo = "<a href='http://www.rotorbuilds.com' target='_top'><img border='0' src='./calcinclude/logo/rotorbuilds.png' width=230px></a>";
   isServicePayed = false;
   withCustom = false;
   isFullVersion = false;
   isFullList = false;
   withRpmTable = false;
   withPreselect = true;
   allPreselectable=true;
}
*/



//---- TESTING -------------

else if (isCallAllowed("generic","ecalc.ch")) { //Testing 20.3
   theShopLogo = "<a href='http://www.s4a.ch/' target='_top'><img border='0' src='./calcinclude/logo/generic.gif'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theShopForm = "";
   isFullVersion = false;
   isFullList = false;      
}



//end Testing-----


else{
    isServicePayed = false;
    isCommercialUser = false;
    isFullVersion = false;
    isFullList = false;
    withRpmTable = false;
    withPreselect = false;
    rangeEstimator  =	 "<img class='img-responsive' id='pictureRangeEstimator' alt='Range Estimator Specimen' src='calcinclude/logo/p_range_estimator.jpg' />";    // nur Bsp. Bild anzeigen
}


// Werbung Anzeigen, wenn der Service nicht für einen Kunden ist
var displayAds=!isServicePayed;


//*** Bei Systemstörungen die full version Variablen hierher kopieren *****


