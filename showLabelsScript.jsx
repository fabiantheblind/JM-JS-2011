var myDoc = app.activeDocument;var myPage = myDoc.pages.item(0);var myRect = myPage.rectangles.everyItem();for(var i = 0; i< myDoc.pages.item("1").rectangles.length;i++){	alert(myPage.rectangles.item(i).label);		}