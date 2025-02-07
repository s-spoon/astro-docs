---  

title: "Document Search"  
draft: false 
type: Article

---

The **Document Search** module enables users to search existing documents and
perform various actions.

**Menu path** : Choose **Documents** > **Documents Search** in the navigation
pane.

The Document Search header consists of the following fields to filter and
search the existing documents:

Field name  | Description  
---|---  
**Document name** |  Enter the name of the document.
**User** | Enter the name of the user who uploaded the document. 
**End date** |  Enter the end date or click the calendar icon to enter it.
**Include tags** |  Select one or more tags from the drop-down.<br>The search results include documents with the selected tags, and these tags are displayed below the search field. Click the Close (X) icon to remove these tags.
**Exclude tags** |  Select one or more tags from the drop-down.<br> The search results exclude documents with the selected tags, and these tags are displayed below the search field. Click the Close (X) icon to remove these tags.
**Show inactive ones** | By default, this toggle button is disabled. When enabled, the search results include the latest active and inactive versions of the documents.<br>When disabled, only the latest active version of the document will be filtered.

  
  
## Document Search Screen Grid

The grid result will display a list of documents matching the selection
criteria.

## Action Bar

Select one or more displayed documents from the grid result to enable the
buttons from the action bar. The **Document Search** window remains open when
you navigate to another window using the action buttons. The actions buttons
are:

**New** : Allow users to add a new document. To add a document from the
system, click the **New** button and do one of the following:

  * Drag and drop the document from user’s system, then click Upload.

  * Click Pick Files, and a dialogue box opens; select the required document, click Open, and then click Upload.

    * Upload status meaning:

      * **Pending** : Files have been picked.

      * **Complete** : The upload has been successfully completed.

      * **Failed** : The upload encountered an error and was unsuccessful.

**View Document** : Allows users to view the selected document, based on the
document type, it downloads (Excel, Word, PPT) or opens (PDF or image) in a
new tab. Users can only view the latest version of the document.

**Add Tags** : Enables users to attach tags to selected documents. To add a
tag, select one or more documents, click Add Tags, enter the tag name, and
click Save.

**Mark Inactive** : Allows users to designate the selected document as
inactive. When marked as inactive, the document will no longer be associated
with new documents.

If an attempt is made to mark an inactive document as inactive again, a **DMS
Can not Deactive** alert prompt will open, stating, **“Only active documents
can be marked as inactive”**. The Mark inactive action can also be performed
from the Details icon in the contextual panel.

>[!Note]
>Activities such as **adding new documents** , **adding tags** , and **marking
them as inactive** are recorded. You can view the details under the **Activity
Log** icon in the contextual panel.

## Contextual Panel

In the Document Search grid, select an inspection definition to enable the
Contextual Panel located at the right of the window. The Document search
window remains open when you navigate to other windows using the Contextual
Panel. The Contextual Panel consists of the following functions:

  * [Details](Details.md)
  * [Linked Equipment](Linked-Equipment.md)
  * [Linked Serial](Linked-Serial.md)
  * [Linked Items](Linked-Items.md)
  * [Linked Work Order](Linked-Work-Order.md)
  * [Linked Validation Codes](Linked-Validation-Codes.md)
  * [Activity Log](Activity-Log.md)
>[!Note]
>The actions **Multilink** and **Link** are available depending on the user's
security settings. This applies to all icons that are under the Contextual
Panel.

>[!Note]
>If none of the documents or more than one document is selected, the icons in
the contextual panel, by default, are disabled.

