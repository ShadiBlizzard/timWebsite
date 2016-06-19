// manages click in pages + menu highlighting management
function clickPageLinks() {

    // this event is fired everytime you click a link or when pressing back/forward browser buttons
    window.onpopstate = function() {
        var url = window.location.href;

        // extract the string after #
        var args = url.split('#')[1];

        // get the page (0 in the array of args)
        var page = args.split('&')[0];

        if(page!='') {

            // the element in the header to highlight is a li element that contain as class the "pagename"_page
            var newElm = $('li[class*="'+page+'_page"]');

            // remove class from the previous active menu element
            var prevElm = $('li[class*="active"]');
            prevElm.removeClass('active');
			newElm.addClass('active');
			if(page=='tvent_cat' || page=='smartphoneTelefoni' || page=='supportoConf' || page=='tvSmartLiving' || page=='supportoConf'|| page=='promotions') {
				var preElm = $('li[class*="subm"]');
				preElm.removeClass('subm');
				newElm.addClass('subm');
			}
			else 
				restore();
			
            manager(args);
        }
		


    };
}

function subRestore() {
	$('li[class*="subm"]').removeClass("subm");
}
function restore(){
	$(".submenus").hide();
	$(".submenud").hide();
	$(".submenua").hide();
	$(".submenuw").hide();
	$('.smartlife_page').css('margin-top', '4px');
	$('.assistance_page').css('margin-top', '4px');
	$('.promotions_page').css('margin-top', '4px');
	$('.thegroup_page').css('margin-top', '4px');

	
}

function onKeyNumeric(e) {
	
	// Accetto solo numeri e backspace <-
	if (e.keyCode >= 0 && e.keyCode <= 1000000000) 
		return true;
	 else 
		return false;
	
}

function funzioneFiltroST(){
	var checkedElem='AND (';
	var i=0;
	var len=0;
						
						if (document.getElementById("ckST5").checked==true){
							checkedElem+='prz_scn_d < 100 OR ';
							i++;
						};
						if (document.getElementById("ckST6").checked==true){
							checkedElem+='prz_scn_d BETWEEN 100 AND 400 OR ';
							i++;
						};
						if (document.getElementById("ckST7").checked==true){
							checkedElem+='prz_scn_d > 400 OR ';
							i++;
						};
						
						if(i>0){
							len = checkedElem.length;
							checkedElem=checkedElem.substr(0,len-3);
							i=0;
							checkedElem+=') AND (';		
						};
						
						
						if (document.getElementById("ckST8").checked==true){
							checkedElem+='marca_d LIKE "Apple" OR ';
							i++;
						};
						if (document.getElementById("ckST9").checked==true){
							checkedElem+='marca_d LIKE "BlackBerry" OR ';
							i++;
						};
						if (document.getElementById("ckST10").checked==true){
							checkedElem+='marca_d LIKE "Huawei" OR ';
							i++;
						};
						if (document.getElementById("ckST11").checked==true){
							checkedElem+='marca_d LIKE "Nokia" OR ';
							i++;
						};
						
						if(i>0){
							len = checkedElem.length;
							checkedElem=checkedElem.substr(0,len-3);
							i=0;
							checkedElem+=') AND (';	
							
						};
						
						if (document.getElementById("ckST12").checked==true){
							checkedElem+='memoria1_d LIKE "8 Gb" OR memoria2_d LIKE "8 Gb" OR ';
							i++;
						};
						if (document.getElementById("ckST13").checked==true){
							checkedElem+='memoria1_d LIKE "16 Gb" OR memoria2_d LIKE "16 Gb" OR ';
							i++;
						};
						if (document.getElementById("ckST14").checked==true){
							checkedElem+='memoria1_d LIKE "32 Gb" OR memoria2_d LIKE "32 Gb" OR ';
							i++;
						};
						if (document.getElementById("ckST15").checked==true){
							checkedElem+='memoria1_d LIKE "64 Gb" OR memoria2_d LIKE "64 Gb" OR ';
							i++;
						};
						
						if(i>0){
							len = checkedElem.length;
							checkedElem=checkedElem.substr(0,len-3);
							i=0;
							checkedElem+=') AND (';	
							
						};
						
						if (document.getElementById("ckST16").checked==true){
							checkedElem+='display_d < 3 OR ';
							i++;
						};
						if (document.getElementById("ckST17").checked==true){
							checkedElem+='display_d BETWEEN 3 AND 5 OR ';
							i++;
						};
						if (document.getElementById("ckST18").checked==true){
							checkedElem+='display_d > 5 OR ';
							i++;
						};
						
						if(i>0){
							len = checkedElem.length;
							checkedElem=checkedElem.substr(0,len-3);
							checkedElem+=') AND (';							
						};
						len = checkedElem.length;
						checkedElem=checkedElem.substr(0,len-5);
						
						var id=localStorage.getItem("selection");
						getSmartETel(id, checkedElem);	
						
}

function funzioneFiltroTSL(){
	var checkedElem='AND (';
	var i=0;
	var len=0;
						
						if (document.getElementById("ckTSL5").checked==true){
							checkedElem+='prz_scn_d < 100 OR ';
							i++;
						};
						if (document.getElementById("ckTSL6").checked==true){
							checkedElem+='prz_scn_d BETWEEN 100 AND 300 OR ';
							i++;
						};
						if (document.getElementById("ckTSL7").checked==true){
							checkedElem+='prz_scn_d BETWEEN 300 AND 400 OR ';
							i++;
						};						
						if (document.getElementById("ckTSL8").checked==true){
							checkedElem+='prz_scn_d > 400 OR ';
							i++;
						};
						
						if(i>0){
							len = checkedElem.length;
							checkedElem=checkedElem.substr(0,len-3);
							i=0;
							checkedElem+=') AND (';		
						};
						
						
						if (document.getElementById("ckTSL9").checked==true){
							checkedElem+='marca_d LIKE "D-link" OR ';
							i++;
						};
						if (document.getElementById("ckTSL10").checked==true){
							checkedElem+='marca_d LIKE "Samsung" OR ';
							i++;
						};
						
						if(i>0){
							len = checkedElem.length;
							checkedElem=checkedElem.substr(0,len-3);
							i=0;
							checkedElem+=') AND (';	
							
						};
						len = checkedElem.length;
						checkedElem=checkedElem.substr(0,len-5);
						
						var id=localStorage.getItem("selection");
						getTVESL(id, checkedElem);	
						
}





				
function manager(args) {

    // get the page (0 in the array of args)
        var page = args.split('&')[0];
		  
    // special is an additional parameter to render the same page in different ways
    // for istance, single_class.html can contains different informations based on
    // different values of special


    // enable script for calls to external php
    $.getScript('script/ajaxCalls.js', function(){
        // load the page dinamycally inside the template

								
        $( ".page" ).load(page+'.html', function() {

            //************** SPECIFIC PAGE FUNCTIONS ****************//
            // after loading the whole page we should load the page manager for links inside the main div, this is because
            // the callback function
        			
			switch(page) {
				case "home": {
					subRestore();
					clickPageLinks();					
					$(".nav").html('<a href="index.html" id="navlast">HOME </a> ');
					break;
				}
				
				case "timvision": {
					getTimvision(function () { clickPageLinks(); });					
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat">Tv & Entertainment> </a> <a id="navlast" href="#timvision">Tim vision</a>');
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					$('.tvent_cat_page').addClass('subm');
					break;
				}
				case "actrules_timvision": {
					getActrules(function () {clickPageLinks();});
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat">Tv & Entertainment> </a> <a href="#timvision">Tim vision> </a> <a id="navlast" href="#actrules_timvision">Regolamento</a>');
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					$('.tvent_cat_page').addClass('subm');
					break;
				}
				
				case "formreg_timvision": {
					getCosti(function () {clickPageLinks();});
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat">Tv & Entertainment> </a> <a href="#timvision">Tim vision> </a> <a href="#actrules_timvision">Regolamento> </a> <a id="navlast" href="#formreg_timvision">Sottoscrivi</a>');
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					$('.tvent_cat_page').addClass('subm');
					break;
				}
								
				case "devices": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#devices" id="navlast">DISPOSITIVI</a>');
					$(".submenud").show();
					$('.smartlife_page').css('margin-top', '-4px');
					document.getElementById("li01").onclick=function(){
							localStorage.setItem("selection", 1);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("tuttiSmartphoneBot").onclick=function(){
							localStorage.setItem("selection", 1);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("smartphoneBot").onclick=function(){
						localStorage.setItem("selection", 2);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("iphoneBot").onclick=function(){
						localStorage.setItem("selection", 3);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("altroSmartphoneBot").onclick=function(){
						localStorage.setItem("selection", 4);
						localStorage.setItem("useSelection", true);
					};
					
					
					
					document.getElementById("li04").onclick=function(){
							localStorage.setItem("selection", 5);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("tuttiTVSLBot").onclick=function(){
							localStorage.setItem("selection", 5);
							localStorage.setItem("useSelection", true);
					};
					document.getElementById("tvBot").onclick=function(){
						localStorage.setItem("selection", 6);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("smartwatchBot").onclick=function(){
						localStorage.setItem("selection", 7);
						localStorage.setItem("useSelection", true);
					};
					document.getElementById("altroTVSLBot").onclick=function(){
						localStorage.setItem("selection", 8);
						localStorage.setItem("useSelection", true);
					};
					
					break;
				}
				case "smartlife": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife" id="navlast">SMART LIFE</a>');
					$(".submenus").show();
					$('.assistance_page').css('margin-top', '-4px');				
					break;
				}
				case "assistance": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#assistance" id="navlast">ASSISTENZA</a>');
					$(".submenua").show();
					$('.promotions_page').css('margin-top', '-4px');
					break;
				}
				case "whoweare": {
					subRestore();
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#whoweare" id="navlast">CHI SIAMO</a>');
					$(".submenuw").show();
					$('.thegroup_page').css('margin-top', '-4px');
					break;
				}
				case "tvent_cat": {
					getTvent('1');
					getTvent('2');
					getTvent('3');
					getTvent('4');
					getTvent('5');
					getTvent('6');
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#smartlife">SMART LIFE> </a> <a href="#tvent_cat" id="navlast">Tv & Entertainment</a>');
					clickPageLinks();
					$(".submenus").show();	
					$('.assistance_page').css('margin-top', '-4px');
					break;
				}
				
				case "smartphoneTelefoni": {
					clickPageLinks();
					$(".submenud").show();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#devices">DISPOSITIVI> </a><a id="navlast" href="#smartphoneTelefoni"> Smartphone e telefoni</a>');
					$('.smartlife_page').css('margin-top', '-4px');
					var checkedElem = '';
					
					if(localStorage.getItem("useSelection")=="true"){
						localStorage.setItem("useSelection", true);
						switch (localStorage.getItem("selection")){
							case "1":{
								document.getElementById("ckST1").checked="true";
								getSmartETel('1','');
								break;
							}
							case "2":{
								document.getElementById("ckST2").checked="true";
								getSmartETel('2','');
								break;
							}
							case "3":{
								document.getElementById("ckST3").checked="true";
								getSmartETel('3','');
								break;
							}
							case "4":{
								document.getElementById("ckST4").checked="true";
								getSmartETel('4','');
								break;
							}
							default: {								
							}
						}
						
						document.getElementById("ckST1").onclick=function(){
							localStorage.setItem("selection", 1);
							funzioneFiltroST();		
						};
						document.getElementById("ckST2").onclick=function(){
							localStorage.setItem("selection", 2);
							funzioneFiltroST();								
						};
						document.getElementById("ckST3").onclick=function(){
							localStorage.setItem("selection", 3);
							funzioneFiltroST();									
						};
						document.getElementById("ckST4").onclick=function(){
							localStorage.setItem("selection", 4);
							funzioneFiltroST();								
						};					
						
					}									
					break;					
				}
				
				case "tvSmartLiving": {
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#devices">DISPOSITIVI> </a><a id="navlast" href="#tvSmartLiving"> TV e Smart Living</a>');
					$(".submenud").show();
					$('.smartlife_page').css('margin-top', '-4px');		

					if(localStorage.getItem("useSelection")=="true"){
						localStorage.setItem("useSelection", true);
						switch (localStorage.getItem("selection")){
							case "5":{
								document.getElementById("ckTSL1").checked="true";
								getTVESL('5','');
								break;
							}
							case "6":{
								document.getElementById("ckTSL2").checked="true";
								getTVESL('6','');
								break;
							}
							case "7":{
								document.getElementById("ckTSL3").checked="true";
								getTVESL('7','');
								break;
							}
							case "8":{
								document.getElementById("ckTSL4").checked="true";
								getTVESL('8','');
								break;
							}
							default: {								
							}
						}
						
						document.getElementById("ckTSL1").onclick=function(){
							localStorage.setItem("selection", 5);
							funzioneFiltroTSL();							
						};
						document.getElementById("ckTSL2").onclick=function(){
							localStorage.setItem("selection", 6);
							funzioneFiltroTSL();								
						};
						document.getElementById("ckTSL3").onclick=function(){
							localStorage.setItem("selection", 7);
							funzioneFiltroTSL();							
						};
						document.getElementById("ckTSL4").onclick=function(){
							localStorage.setItem("selection", 8);
							funzioneFiltroTSL();							
						};	
													
			}								
			break;
		}
				
				
				
				case "device": {
					
					var flag=0;
					var flag2=0;
					clickPageLinks();
					getDevice('2',flag, flag2);	
					
					
					document.getElementById("frecciaDx").onclick=function(){
						if(flag==0){
							$("#frecciaDx").css("opacity","0.6");
							$("#frecciaSx").css("opacity","1");
							$("#carImgC1").css("background-color","rgba(255, 0, 0, 0.5)");
							$("#carImgC2").css("background-color","rgba(255, 0, 0, 0.9)");						
							flag=1;
							getDevice('2',flag, flag2);
						}
					}
					document.getElementById("frecciaSx").onclick=function(){
						if(flag==1){
							$("#frecciaSx").css("opacity","0.6");
							$("#frecciaDx").css("opacity","1");
							$("#carImgC2").css("background-color","rgba(255, 0, 0, 0.5)");
							$("#carImgC1").css("background-color","rgba(255, 0, 0, 0.9)"); 
							
							flag=0;
							getDevice('2',flag, flag2);
						}
					}
					
					
           			document.getElementById("carColC2").onclick=function(){
						if(flag2==0){
							$("#carColC2").css("border","3px solid #339999");	
							$("#carColC1").css("border","3px solid white");							
							flag2=1;
							getDevice('2',flag, flag2);
						}
					}
					
					document.getElementById("carColC1").onclick=function(){
						if(flag2==1){
							$("#carColC1").css("border","3px solid #339999");
							$("#carColC2").css("border","3px solid white");
							
							flag2=0;
							getDevice('2',flag, flag2);
						}
					}
				break;
				}
				
				
				case "promotions": {
					clickPageLinks();
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#promotions">PROMOZIONI> </a>');
					
					getPromotions();
												
				}
				
				
				case "supportoConf": {
					getSupporto(function () {clickPageLinks();});
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#assistance">ASSISTENZA> </a> <a id="navlast" href="#supportoConf">Supporto Tecnico e configurazione </a> ');
					$(".submenua").show();	
					$('.promotions_page').css('margin-top', '-4px');
					break;
				}
				
				case "asspage": {
					getConfiphone(function() {clickPageLings();});
					$(".nav").html('<a href="index.html">HOME> </a> <a href="#assistance">ASSISTENZA> </a> <a href="#supportoConf">Supporto Tecnico e configurazione> </a> <a id="navlast" href="#asspage">Configurazione mail i-Phone</a>');
					$(".submenua").show();	
					$('.promotions_page').css('margin-top', '-4px')
				}
				
				
				
				default: clickPageLinks(); break;
				
            }
            //************** END SPECIFIC PAGE FUNCTIONS ***********//

            // scroll to top when loading a new page
            window.scrollTo(0,200);
        });
   

 });
   
}




