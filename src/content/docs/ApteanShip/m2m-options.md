---
title: "M2M Options"
draft: false
type: Article
---

Made2Manage Options allow you to configure settings for Related Documents, Source Documents, and settings that help Technical Support.

Options available for the Made2Manage interface can be accessed by selecting **Setup** > **Source Interfaces** > **Made2Manage**, and clicking on **Options**.

All options are saved per Location (denoted by a building icon), except for "Disable Search of Source Documents" and "Allow switching source interface on Source Documents screen", which are global settings (globe icon) that apply to all users. All users who log into a specific Location will see the data that belongs to that Location and inherit Location settings.
### Related Documents


### Retrieve related documents when shipping


When checked, Aptean Ship will show documents with the same Ship-To addresses, allowing you the possibility of combining related documents. When shipping, this allows you to select related documents to process when browsing documents on the Rate/Ship screen or in the Shipping Assistant.
### Maximum Number of Related Documents


To limit the number of related documents retrieved by Aptean Ship, set a number here. The default setting is 8.

![](assets/images/m2m-options-1.png)
### Options


### When importing a document that has an existing non-posted shipment, always


* Prompt: Prompt the user for action. The prompt will include the options to **Create New**, **View**, or **Edit**. Note that View is only available for Processed shipments; Draft (Open) shipments will always open in Edit mode.
* Create New: Aptean Ship will automatically create a new shipment from the data being imported from Made2Manage without prompting the user.
* Edit Existing: Set the existing document to “Open” status so that it can be edited.
* View Existing: Open the existing shipment in View-only mode.


### Aptean Ship will search for any draft shipment or shipment processed within the last “#” days


When importing a document (Shipment) from Made2Manage, Aptean Ship will scan all open (draft) shipments, and only the processed shipments within the number of days you set here, for shipments that may already exist for that document. 

So, for example, if you add a Shipment to a shipment you’ve already saved or processed in Aptean Ship, you can reprocess the shipment with the new order added without voiding write-back or tracking numbers. Note that you cannot set the number of days if you set the option above it to Create New.
### Run in Diagnostic Mode


Check this option to have Aptean Ship run in a special diagnostic mode that shows the raw input from the source interface before any mapping or translations are performed on it. 

When enabled, a **Show Diagnostics** button appears on the source interface tab. Clicking the Show Diagnostics button will display the input information from the source interface in raw message format for Technical Support purposes.
### Enable Logging of Source Interface Transactions


Aptean Ship will run in a special mode that provides more information to aid Technical Support. You can also specify Normal or Maximum levels of logging.
### Disable Search of Source Documents


This option controls searching for Made2Manage documents when shipping. When it is checked, Aptean Ship will not display the Search Documents grid and will require that you enter the exact Document Number.
### Allow switching source interface on Source Documents screen


When checked, this global option allows user to switch between source interfaces from Rate/Ship.

![](assets/images/m2m-replace-options.png)
