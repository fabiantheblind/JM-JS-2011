﻿/* * written for JustMusic 2011 * * @author fabiantheblind *  *  */#include "./meta/glue code.jsx";function processXML(myDoc){}function countItems(myRoot){		var myElement = myRoot.xmlElements.item(0).xmlElements.everyItem();		return myElement.xmlElements.length -2;}function placeData(myDoc, myPage, count, placeAllBool, focusBool, normalBool, smallBool,myErrorLog,myLogFile){	var itemCounter = 0;	var myRuleSet = new Array(new getGroupData(myDoc,myPage,count,itemCounter, placeAllBool, focusBool, normalBool, smallBool,myErrorLog,myLogFile));	with(myDoc){	var elements = xmlElements;	__processRuleSet(elements.everyItem(), myRuleSet);	}}/* * this is the RuleSet for makeAttributesFromInfo *  * @returns nothing */function getGroupData(myDoc,myPage,count,itemCounter, placeAllBool, focusBool, normalBool, smallBool,myErrorLog,myLogFile){	var myLine = 0;	var myItemImgHeight = new Array;	myItemImgHeight[0] = 40;	myItemImgHeight[1] = 30;//	myItemImgHeight[2] = 25;//	myItemImgHeight[3] = 15;		var myItemTxtHeight = new Array;	myItemTxtHeight[0] = myItemImgHeight[0] + 20;	myItemTxtHeight[1] = myItemImgHeight[1] + 20;//	myItemTxtHeight[2] = myItemImgHeight[2] = + 20;//	myItemTxtHeight[3] = myItemImgHeight[3] = + 20;		var myLineHeight = new Array;	myLineHeight[0] = myItemImgHeight[0] + myItemTxtHeight[0];		var myLineController;	var errorLog = myErrorLog;		this.name = "getGroupData";		if(placeAllBool == true){			this.xpath = "//artikel";			errorLog = errorLog+ "selected the following elements(xPath) " + this.xpath.toString() + "\n";		}				if((focusBool == true)){				this.xpath = "//group[@id ='"+count+"']/focus/artikel[@iPrioritaet='fokus']";				errorLog = errorLog+ "selected the following elements(xPath) " + this.xpath.toString() + "\n";			} else{				//				this.xpath = "//artikel";			}		if((normalBool ==true)){				this.xpath = "//group[@id ='"+count+"']/normal/artikel[@iPrioritaet='normal']";				errorLog = errorLog+ "selected the following elements(xPath) " + this.xpath.toString() + "\n";			} else{				//				this.xpath = "//artikel";			}		if((smallBool == true)){				this.xpath = "//group[@id ='"+count+"']/small/artikel[@iPrioritaet='klein']";				errorLog = errorLog+ "selected the following elements(xPath) " + this.xpath.toString() + "\n";			} else{				//				this.xpath = "//artikel";			}		this.apply = function(myElement, myRuleProcessor){			errorLog = errorLog+ "processing Element " + myElement.xmlAttributes.item("iArtikelNr").value.toString() + "\n";			var id;			var myParentGroup;			if (placeAllBool == true){								myParentGroup = myElement.parent.parent;//				count = myElement.parent.parent.xmlAttributes.item("id").value;				id = myElement.parent.parent.xmlAttributes.item("id").value;							}else{				myParentGroup = myElement.parent.parent;				id = count;							}			var myItemsNum = myParentGroup.xmlElements.length;			if(myItemsNum < 10){								myLineController = 0;							}else if((myItemsNum >10) &&( myItemsNum < 17)){							myLineController = 1;			}else{			}			var myColumnNum = myPage.marginPreferences.columnCount;			var myLeftMargin = myPage.marginPreferences.columnCount;			var myRightMargin= myPage.marginPreferences.columnCount;			var myCGutterWidth = myPage.marginPreferences.columnGutter;			var myPageWidth = myDoc.documentPreferences.pageWidth;						var myOffset = myPageWidth - myLeftMargin*2 - myRightMargin*2 - myCGutterWidth*2  ;// - myCGutterWidth;			var myGroup = new Array;			var mySubGroup  =new Array;			try{			var myTestFrame = myPage.rectangles.add();			var myTestBounds = new Array;			myTestBounds = myGetColumns(myDoc,myPage,itemCounter);			var testTempY1 = (myTestBounds[0])+(myLine*myLineHeight[myLineController]);			var testTempX1 = myTestBounds[1]-( myOffset*myLine);			var testTempY2 = testTempY1 + myItemImgHeight[myLineController];			var testTempX2 = myTestBounds[3]-( myOffset*myLine);						myTestFrame.geometricBounds = [testTempY1,testTempX1,testTempY2,testTempX2];//			alert(myTestFrame.geometricBounds[0]);			if(myTestFrame.geometricBounds[0] >= 300){				myPage = myDoc.pages.add();				itemCounter = 0;				myLine = 0;				alert("made a new Page");			}			myTestFrame.remove();			}catch(e){				errorLog = errorLog + e.toString() + "\n";			}								var myImgFrame = myPage.rectangles.add();//			try{			var myImages = myElement.xmlElements.item("images");			for(var i = 0;i< myImages.xmlElements.length; i++){								myImgFrame.appliedObjectStyle = myDoc.objectStyles.item(0);				var myImgCount = myImages.xmlElements.length;			//				alert(myImgCount);				var myIMGBounds = new Array;				myIMGBounds = myGetColumns(myDoc,myPage,itemCounter);												var tempY1 = (myIMGBounds[0] +(i*10))+(myLine*myLineHeight[myLineController]);				var tempX1 = myIMGBounds[1]-( myOffset*myLine);				var tempY2 = tempY1 + myItemImgHeight[myLineController] -(i*(10));				var tempX2 = myIMGBounds[3]-( myOffset*myLine);								try{					myImgFrame.geometricBounds = [tempY1,tempX1,tempY2,tempX2];// = myGetColumns(myDoc,myPage,itemCounter);				}catch(e){										myImgFrame.geometricBounds = [tempY1,tempY1,10,10];// = myGetColumns(myDoc,myPage,itemCounter);					errorLog = errorLog + e.toString() + "\n";				}												try{						var myString =  myImages.xmlElements.item(i).xmlAttributes.item(1).value;						myImgFrame.place(File(checkOS(myString)));						myImgFrame.fit(FitOptions.CENTER_CONTENT);						myImgFrame.fit(FitOptions.PROPORTIONALLY);						myGroup.push(myImgFrame);				}catch(e){//						alert("WARNING! \r THERE IS  AN IMAGE MISSING! " +e );																	myImgFrame.fillColor = myDoc.swatches.item(2);						myImgFrame.fillTint = 42;						errorLog = errorLog + e.toString() + "\n";						myGroup.push(myImgFrame);					}			}		//			}catch(e){//				errorLog = errorLog + e.toString() + "\n";//				var myIMGB = new Array;//				myIMGB = myGetColumns(myDoc,myPage,itemCounter);//				var tY1 = (myIMGB[0] +(i*10))+(myLine*myLineHeight[myLineController]);//				var tX1 = myIMGB[1]-( myOffset*myLine);//				var tY2 = tempY1 + myItemImgHeight[myLineController] -(i*(10));//				var tX2 = myIMGB[3]-( myOffset*myLine);//				myImgFrame.geometricBounds = [tY1,tX1,tY2,tX2];//				myGroup.push(myImgFrame) ; ////			}//			try{			var myTextBounds = new Array;			myTextBounds = myGetColumns(myDoc,myPage,itemCounter);			var Y1 = myTextBounds[0] + myItemImgHeight[myLineController] +(myLine*myLineHeight[myLineController]);			var X1 = myTextBounds[1]-( myOffset*myLine);			var Y2 = Y1 + myItemTxtHeight[myLineController];			var X2 = myTextBounds[3]-( myOffset*myLine);			var myFrame = myPage.textFrames.add();			myFrame.geometricBounds = [Y1,X1,Y2,X2];//  myGetColumns(myDoc,myPage,itemCounter);			var myTextContent = myElement.xmlElements.item("textPlatzieren").duplicate();						myTextContent.placeXML(myFrame);			myTextContent.untag();			myGroup.push(myFrame);//			}catch (e){//				//				errorLog = errorLog + e.toString() + "\n";//////			}//			var mySubGroup = new Array;			var myGrColRect = myPage.rectangles.add();			myGrColRect.geometricBounds = [Y1-20,X1,Y1-10,X1+10];			myGrColRect.appliedObjectStyle = myDoc.objectStyles.item(0);//			alert("WARNING! \r THERE IS  AN IMAGE MISSING! " +e );			myGrColRect.fillColor = myDoc.swatches.item("Gr_0" + id);//			alert(myDoc.swatches.item("Gr_0"+id).name);//			myGrColRect.sendToBack();//			mySubGroup.push(myGrColRect);			mySubGroup.push(myGrColRect);			var myGrText = myPage.textFrames.add();			myGrText.geometricBounds =[Y1-20,X1,Y1-10,X1+10];							myGrText.contents = id+". Gruppe";			myGrText.fillColor = myDoc.swatches.item(1);//			myGrText.sendToBack();//			mySubGroup.push(myGrText);			mySubGroup.push(myGrText);						var myFocusText = myPage.textFrames.add();			myFocusText.geometricBounds =  [Y1-10,X1,Y1,X1+20];							myFocusText.contents ="\n"+  myElement.xmlAttributes.item("iPrioritaet").value.toString();			myFocusText.fillColor = myDoc.swatches.item(1);			myFocusText.fillTint = 42;//			myFocusText.sendToBack();//			mySubGroup.push(myFocusText);			mySubGroup.push(myFocusText);			var subMetaGroup = myPage.groups.add(mySubGroup);			try{			var objGroup = myPage.groups.add(myGroup);			objGroup.sendToBack();			}catch(e){				errorLog = errorLog + e.toString() + "\n";			}			var finalGroup = new Array;			finalGroup.push(subMetaGroup);			finalGroup.push(objGroup);			myPage.groups.add(finalGroup);						//			alert(myLine);			itemCounter++;			if(itemCounter%myColumnNum==0){				myLine++;			}//			write ErrorLog			var myFile = myLogFile;   			var myData = errorLog;			writeData (myFile, myData );	};		}// end GroupData/* * basic get columns needs an iterator */function myGetColumns(myDoc, myPage,itemCounter){	var myPageWidth = myDoc.documentPreferences.pageWidth;	var myPageHeight = myDoc.documentPreferences.pageHeight;	var myPageColumnCount= myPage.marginPreferences.columnCount;	var myPageColumnGutterWidth= myPage.marginPreferences.columnGutter;	var myTopMargin = myPage.marginPreferences.top;	var myBottomMargin = myPage.marginPreferences.bottom;	var myLeftMargin =  myPage.marginPreferences.left;	var myRightMargin = myPage.marginPreferences.right;	var myColumnsWidth = myPageWidth - myLeftMargin - myRightMargin - (myPageColumnGutterWidth *(myPageColumnCount-1));	var myColumnWidth = myColumnsWidth / myPageColumnCount;	//	alert(" a column has :"+myColumnWidth + "mm");		var myFocusHeight = (myPageHeight - myTopMargin - myBottomMargin)/2;	var myNormalHeight = (myPageHeight - myTopMargin - myBottomMargin)/4;	var mySmallHeight;	if(myPageColumnCount == 3){		//		alert("there are 3 colums");			}else if(myPageColumnCount==4){					}			if(itemCounter==0){		var myX1 = myPage.marginPreferences.left;	}else{		var myX1 = myPage.marginPreferences.left + ((myColumnWidth*itemCounter)+(myPageColumnGutterWidth*(itemCounter)));	}		var myY1 = myPage.marginPreferences.top;	var myX2 = myX1		+((myPageWidth - myPage.marginPreferences.left		-myPage.marginPreferences.right		-(myPageColumnGutterWidth * (myPageColumnCount-1))) / myPageColumnCount);	var myY2 = myPageHeight - myPage.marginPreferences.bottom;	//	alert("top "+myTopMargin+" Left "+myLeftMargin+" bottom "+myBottomMargin+" right "+myRightMargin);//	return[myTopMargin,myLeftMargin,myBottomMargin,myRightMargin];	return [myY1, myX1, myY2, myX2];}/* * Set the xml import preferences */function xmlImportPref(myDoc){		myXMLImportPreferences = myDoc.xmlImportPreferences;	myXMLImportPreferences.allowTransform = false;	myXMLImportPreferences.createLinkToXML = false;	myXMLImportPreferences.ignoreUnmatchedIncoming = false;	myXMLImportPreferences.ignoreWhitespace = false;	myXMLImportPreferences.importCALSTables = false;	myXMLImportPreferences.importStyle = XMLImportStyles.mergeImport;	myXMLImportPreferences.importTextIntoTables = false;	myXMLImportPreferences.importToSelected = false;	myXMLImportPreferences.removeUnmatchedExisting = false;	myXMLImportPreferences.repeatTextElements = false;}/* * this makes attributes from the element artikelInformation *  * @param myDoc * @returns nothing */function makeAttributesFromInfo(myDoc){	var myRuleSet = new Array(new findInfoElement,new makeGroups);	with(myDoc){	var elements = xmlElements;	__processRuleSet(elements.everyItem(), myRuleSet);	}}	/* * this is the RuleSet for makeAttributesFromInfo *  * @returns nothing */function findInfoElement(){	this.name = "findInfoElement";	this.xpath = "/Root/seite/artikel/artikelInformation";	this.apply = function(myElement, myRuleProcessor){		var myItem;			for(var i = 0; i < myElement.xmlElements.length; i++){							myItem= myElement.xmlElements.item(i);						myElement.parent.xmlAttributes.add(myItem.markupTag.name, myItem.texts.item(0).contents);				}		};}/* * this is the function for makeGroupElements *  * @returns */function makeGroups(){	this.name = "makeGroups";	this.xpath = "/Root/seite";	this.apply = function(myElement, myRuleProcessor){					for(var i = 10; i >= 0; i--){			var myNewGroupElement = myElement.xmlElements.add("group");			myNewGroupElement.xmlAttributes.add("id",i.toString());			myNewGroupElement.xmlElements.add("small");			myNewGroupElement.xmlElements.add("normal");			myNewGroupElement.xmlElements.add("focus");			myNewGroupElement.move(LocationOptions.AT_BEGINNING,myElement);			}		};}/* *  * @param myDoc * @returns nothing */function sortInGroupByPriority(myDoc){	var myRuleSet = new Array(new sortSmall);	with(myDoc){	var elements = xmlElements;	__processRuleSet(elements.everyItem(), myRuleSet);	}		var myRuleSet = new Array(new sortNormal);	with(myDoc){	var elements = xmlElements;	__processRuleSet(elements.everyItem(), myRuleSet);	}		var myRuleSet = new Array(new sortFocus);	with(myDoc){	var elements = xmlElements;	__processRuleSet(elements.everyItem(), myRuleSet);	}}/* *  * @returns nothing */function sortFocus(){	this.name = "sortFocus";	this.xpath = "/Root/seite/group/artikel[@iPrioritaet ='fokus']";	this.apply = function(myElement, myRuleProcessor){		__skipChildren(myRuleProcessor);		var myContainer = myElement.parent.xmlElements.item("focus");		myElement.move(LocationOptions.AT_BEGINNING,myContainer);			};}function sortNormal(){	this.name = "sortNormal";	this.xpath = "/Root/seite/group/artikel[@iPrioritaet ='normal']";	this.apply = function(myElement, myRuleProcessor){		__skipChildren(myRuleProcessor);		var myContainer = myElement.parent.xmlElements.item("normal");		myElement.move(LocationOptions.AT_BEGINNING,myContainer);		};}function sortSmall(){	this.name = "sortSmall";	this.xpath = "/Root/seite/group/artikel[@iPrioritaet ='klein']";	this.apply = function(myElement, myRuleProcessor){		__skipChildren(myRuleProcessor);		var myContainer = myElement.parent.xmlElements.item("small");		myElement.move(LocationOptions.AT_BEGINNING,myContainer);		};}function sortGroups(myDoc){	for (var i = 0 ; i < 11 ;i++ ){	sortToGroupsByAttributes(myDoc,i);	}}/* * reorganizes the xmlStructure in element <seite> to groups *  * @param myDoc * @param count * @returns */function sortToGroupsByAttributes(myDoc,count){		var myRuleSet = new Array(new findGroupAttribute(count));		with(myDoc){		var elements = xmlElements;		__processRuleSet(elements.everyItem(), myRuleSet);			}}/* * moves the grouped items into a new xmlElement needed for * sortToGroupsByAttributes(myDoc,count) needs the for loop to process *  * @param count * @returns */function findGroupAttribute(count){	this.name = "findGroupAttribute";	this.xpath = "/Root/seite/artikel[@iGruppenFarbe ='"+count+". Gruppenfarbe']";	this.apply = function(myElement, myRuleProcessor){		__skipChildren(myRuleProcessor);		myElement.move(LocationOptions.UNKNOWN,myElement.parent.xmlElements.item(count));		};	}function findGroupAttributeNone(){	this.name = "findGroupAttribute";	this.xpath = "/Root/seite/artikel[@iGruppenFarbe ='']";	this.apply = function(myElement, myRuleProcessor){		__skipChildren(myRuleProcessor);		myElement.move(LocationOptions.UNKNOWN,myElement.parent.xmlElements.item(0));		};	}/* * this makes new elements for grouping all the <artikel> elements *  * @param myDoc * @returns */function makeImgElement(myDoc){	var myRuleSet = new Array(new makeImgContainer,new findMoveImages);	with(myDoc){	var elements = xmlElements;	__processRuleSet(elements.everyItem(), myRuleSet);	}		}/* * this is the function for makeGroupElements *  * @returns */function makeImgContainer(){	this.name = "makeImgElement";	this.xpath = "//artikel";	this.apply = function(myElement, myRuleProcessor){		var imgElement = myElement.parent.xmlElements.add("images");		imgElement.move(LocationOptions.AT_BEGINNING,myElement);					};}/* * this is the function for makeGroupElements *  * @returns */function findMoveImages(){	this.name = "findMoveImages";	this.xpath = "//artikel/bild";	this.apply = function(myElement, myRuleProcessor){		__skipChildren(myRuleProcessor);		var imgElement = myElement.parent.xmlElements.item("images");		myElement.move(LocationOptions.AT_BEGINNING,imgElement);		};}/* * a function to check the operating system *  * @returns true if the OS is windows */function checkOS(myString){	var myOS = $.os;	var myOSSubString = myOS.charAt(0);	var myOSBoolean;	if (myOSSubString == "w" || myOSSubString == "W") {		myOSBoolean = true;	}	else {		myOSBoolean = false;	}	if (myOSBoolean == true) {		//this is for windows		var myHREFString = myString;		var myHREFSubString = myHREFString.substring(8);		return myHREFSubString;		} else {		// this is for macintosh		return myString;	}}//---------- functions taken from RecordFindChange_CS3-CS5.jsxfunction writeData (myFile , aData )  {  	var myResult;   if( myFile!='' )     {         //Open the file for writing.         myResult = myFile.open( 'e', undefined, undefined );      }     if( myResult != false )     {     	   myFile.seek(0);      myFile.writeln( aData );               myFile.close();   //      myFile.execute();     }}//function myGetFileName()  //{   ////   if ( _param.file_2desk == true )  ////   {  //      var myFile =  new File( './log.txt' );////   }  ////   else  ////   {  ////      if( File.fs != 'Macintosh' )  ////      {   ////         //Filter files by extension.   ////         var myFile = File.saveDialog( 'Save Text File As:', 'Text Files:*.txt;All Files:*' )   ////      }   ////      else  ////      {   ////         var myFile = File.saveDialog( 'Save Text File As:' )   ////      }   //      if ( myFile == null ){exit()};  ////   }  //   return myFile;   //}