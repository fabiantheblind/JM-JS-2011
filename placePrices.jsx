var myDoc = app.activeDocument;var myPage = myDoc.pages.item(0);app.findGrepPreferences = NothingEnum.nothing;app.changeGrepPreferences = NothingEnum.nothing;//Set the find options.app.findTextPreferences = NothingEnum.nothing;app.changeTextPreferences = NothingEnum.nothing;//Search the document for the string "Text".app.findTextPreferences.findWhat = "123456";//Set the find options.app.findChangeTextOptions.caseSensitive = false;app.findChangeTextOptions.includeFootnotes = false;app.findChangeTextOptions.includeHiddenLayers = false;app.findChangeTextOptions.includeLockedLayersForFind = false;app.findChangeTextOptions.includeLockedStoriesForFind = false;app.findChangeTextOptions.includeMasterPages = false;app.findChangeTextOptions.wholeWord = false;var FondItem = myDoc.findText();var myGeoBounds = new Array;myGeoBounds[0] =  FondItem[0].parent.textContainers[0].geometricBounds[0] -20;myGeoBounds[1]=  FondItem[0].parent.textContainers[0].geometricBounds[1];myGeoBounds[2]=  FondItem[0].parent.textContainers[0].geometricBounds[0];myGeoBounds[3]=  FondItem[0].parent.textContainers[0].geometricBounds[3];var myPrice = myPage.textFrames.add();myPrice.geometricBounds = myGeoBounds;app.findTextPreferences = NothingEnum.nothing;app.changeTextPreferences = NothingEnum.nothing;