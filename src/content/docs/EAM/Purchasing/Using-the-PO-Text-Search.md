---
title: "Using the PO Text Search"
draft: false

---

Menu Path: Purchasing > PO Text Search

The **PO Text: \<query name\>** window displays the PO Text Library in the form of a grid. Purchase order text or PO text is textual information that you add to a purchase order. Examples of this text are instructions to a supplier about servicing agreements, contact information of third parties, terms and conditions, and so on.

This library is a collection of text IDs or text codes. You can identify a text ID’s use from its brief description, and each text ID associates with the textual information or content.

Using the **PO Text: \<query name\>** window, you can search for and display records of the PO Text Library. From the list of PO texts displayed, you can click a text ID’s hyperlink, or select the required record and click **Details** in the Contextual Panel to access the **[PO text module](Using-the-PO-Text-Search.md#using-the-po-text-module)** that contains detailed information about the selected PO text record.

The **PO Text: \<query name\>** window allows you to search by text ID and description. If you do not enter a value in the fields for text ID and description, the search uses only the selection criteria of the selected query.

To perform a search:

1.  Select a **Query** from the drop-down list and click **Search**.

    The system displays all the PO texts for the selected query.

1.  To search for a specific PO text, perform the following:
1.  Enter a full or partial value in the **Text ID** or the **Description** field. The value you enter becomes an add-on to the selection criteria built into the selected query. The more complete the information entered, the narrower the resulting search will be. 
      <br> a. Click **Search**.

    It displays a list of PO texts matching the selection criteria. See **Generic Components and Troubleshooting** - **Scenario 2** also.

### PO Text Search Screen Grid

In the **PO Text: \<query name\>** window, a list of PO texts matching the selection criteria will be displayed in the grid. See **Grid Operations** for more details about the grid.

### Action Bar

In the **PO Text: \<query name\>** window, the action bar located at the top of the grid allows you to manage the PO texts. The **PO Text: \<query name\>** window remains open when you jump to other windows using the action buttons. The actions buttons are:

-   **New Text**: Opens the **PO Text \#:** window from where you can **[create a new PO text](Create-a-New-PO-Text.md)**.
-   **Sequence Text**: Opens the **Sequence Text** window from where you can **[change the sequence of PO texts](Using-the-PO-Text-Search.md#change-the-sequence-of-po-texts)**.
-   **Export**: Saves the data present in all columns of the grid to a Microsoft Excel file. The system uses the name of the selected query used to search PO texts for the file name.
-   **Delete**: Opens a popup to delete the selected PO text record.

### Contextual Panel

In the **PO Text: \<query name\>** window, you can select a record to enable the Contextual Panel located at the right of the window. In the Contextual Panel, click **Details** to open the [PO text module](Using-the-PO-Text-Search.md#using-the-po-text-module).

### Change the Sequence of PO Texts

You can change the sequence in which PO texts appear on all new purchase orders you create in the future from the **PO Text: \<query name\>** window. These are the PO texts you’ve created that the system adds automatically to a new purchase order. For more information, see [Create a New PO Text](Create-a-New-PO-Text.md) later in this chapter.

To change the sequence of a PO text:

1.  On the action bar, click **Sequence Text**.

    The **Sequence Text opens** in a new tab.

2.  Perform one of the following:
    -   Click the **Initial** radio button to display initial PO texts.
    -   Click the **Final** radio button to display final PO texts.

    >[!Note] The system only displays text IDs that are Active.

1.  Hover over the equal sign in the **New Sequence** column, and when the cursor changes to a hand icon, drag to reposition the record as needed.
2.  Click the **Save** button.

### Using the PO Text Module

The PO text module consists of the PO text’s details. You can select a record in PO text search grid, and click **Details** in Contextual Panel to open the PO text module. If selected, **PO Text \#\<text ID\>: \<text description\>** window appears.

You can click the hyperlink in the **Text ID** column,or double-click any grid record to open the PO text module.

The PO text module has the **Main** tab that contains the **Basic Information** and **Text Content** sections. The **Delete** button on the action bar is also available after you click the **Actions** button. <br>You can perform the following actions in the PO text module page:

-   **Open in New Tab**: Click (![](../assets/purchasing/f112e1b5654e89ef27f5d029b2253699.png)) to open the PO text module page in a new separate tab.
-   **Close**: Click the **X** button to close the PO text module.

**Main Tab**

The **Main** tab consists of the following sections:

**Basic Information**

Here you can see basic details about the PO text. This section consists of **Text ID\***, **Text Type\***, **Text Description\***, and **Active\*** fields.

The system, by default turns off the **Active** toggle when creating a new PO text.

**Text Content**

This section contains the **Text Content\*** field that shows the detailed text of the selected PO text record.

### Editing the PO Text Module

Click the **Edit** button to open the PO text module in edit mode. You can edit the **Text Content** field in the **Text Content** section.

If the PO text's Text ID isn't linked to any purchase order, then you can edit its **Text Type**, **Text Description** fields, and the **Active** toggle in the **Basic Information** section. If the Text ID is linked to a purchase order, you can only turn on or turn off the **Active** toggle.

### Inactive PO Text

Turn off the **Active** toggle to inactivate PO texts that you want to archive and not appear either automatically or manually by selection on a purchase order. The PO Text Library retains inactive PO texts.

If you inactivate a PO text and if its Text ID is linked to a purchase order, a message appears: **Text ID \<Text ID\> is in use on an Item, an Active Supplier or an Open Purchase Order. Are you sure you want to inactivate this text ID?** with the following buttons:

-   **Yes**: Click this to inactivate the PO text.
-   **No**: Click this to keep the PO text active.

See [Edit](Using-the-PO-Text-Search.md#editing-the-po-text-module) for more details.

>[!Important] The fields marked * earlier in the Main tab’s sections represent the mandatory fields during new PO text creation.