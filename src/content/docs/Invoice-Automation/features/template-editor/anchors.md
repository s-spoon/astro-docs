---
title: "Anchors"
draft: false
type: Article
---


Anchors allow data to be selected even if it isn’t in the same place on each document.

To use an anchor the Document Field value must first be selected, after selecting clicking on the ‘Add Anchor’ button will allow for an additional area to be selected. The additional area should contain text that will always be in the same position relative to the value you wish to select. After selecting the text a new selection box will drawn around the first line of the selected text.
Anchors however do have some limitations.

-	The selected text must be unique on the document, when attempting to use an anchor Invoice Automation will attempt to use the first instance of the anchored text it finds on the document to locate the fields value.
-	When editing an existing field with an anchor, if the anchored text on the document can not be found the anchor will have to be deleted and recreated.

!!! info
	The text selected for the anchor does not need to related to the value being selected, it only needs to always be in the same place relative to the value. For example, if trying to anchor a value for Tax, but the word tax is also used elsewhere on the document, the field may also be able to be anchor to Gross Total or Shipping Charge for example.
