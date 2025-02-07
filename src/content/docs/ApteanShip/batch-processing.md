---
title: "Batch Processing"
draft: false
type: Article
---

Using Aptean Ship's Batch Processing feature, you can process multiple documents from your source interface, if supported.
### How To Batch Process Shipments


1. Select **Rate/Ship** from the menu bar.
![](assets/images/aptean-shipping-software-batch-processing.png)
2. Select the documents (such as Orders) you want to batch process. You can choose individual orders from the list or check the "Group Related" option to process a batch of shipments to the same address.
![](assets/images/aptean-shipping-software-batch-processing2-1-1.png)
3. Click the **Process Selected** button.
![](assets/images/aptean-shipping-software-batch-processing3-1.png)
4. Configure **Batch Settings**by making the following selections and then clicking **OK**:
	* Batch Name: Enter a name to identify the current batch in Aptean Ship.
	* Action: Choose whether you want Aptean Ship to process the shipment(s) with or without printing labels and documents.
	* On Error: If any errors should occur during processing, select the action Aptean Ship should take. The shipment(s) can be saved as a draft or skipped, or you can choose to abort the import process completely. To allow the user to select one of these actions on a case-by-case basis, select "prompt user for action". In the case of an error, after the batch is processed, the user can then click on the Batch Process Notifications icon and make a selection.
	* On Duplicate: If one or more shipments with the same document key exists in the database, you can choose to create a new shipment or skip the duplicate. To allow the user to select the action to take, set this field to "prompt user for action". After the batch is processed, the user can then click on the Batch Process Notifications icon and make a selection.
	* Merge Related Orders: This setting appears if you checked the "Retrieve related documents when shipping" setting in Source Interface Setup > "Your Interface" > Options. Check this option to merge the related orders into one shipment and process that shipment. You can also save the shipment as a draft.![](assets/images/aptean-shipping-software-batch-processing4-1.png)
5. The batch processing initiates. Click **OK** on the dialog.
![](assets/images/starship-shipping-software-batch-processing9.png)


### Batch Process Notifications


After batches are processed, you can view their status by clicking the Batch Process Notifications icon from the menu bar.

![](assets/images/aptean-ship-shipping-software-batch-processing10.png)

Select the "Show batches with prompts only" check box to display batches with unread notifications. Uncheck this option to view all processed batches.

Expand the batch information by clicking on the " + ".

![](assets/images/aptean-shipping-software-batch-processing11-1.png)

If you selected to prompt the user when there are errors or duplicates in Batch Settings, this is where the user can select the action to take. In this example, the user can save the batch as a draft or skip it.

![](assets/images/starship-shipping-software-batch-processing8.png)

When "Save as Draft" is selected, the user can then click on the Shipment number to view shipment details in the Shipment Editor.

![](assets/images/starship-shipping-software-batch-processing12.png)
### View Batches


You can view all processed batches by selecting the Shipments menu item and then clicking on the Batches page. This page will give you general information about processed batches and you can also click on the magnifying glass to view shipments in the batch.

![](assets/images/aptean-shipping-software-batch-processing14-1.png)

 

