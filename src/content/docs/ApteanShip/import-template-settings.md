---
title: "Import Template Settings"
draft: false
type: Article
---

You can configure additional settings for batch import and handling of shipment data in the lower section of the Shipment Import Setup screen.
## Batch Name


The Batch Name field is where you can specify the name of the batch of shipments you are importing.
>[!Note] When processing batches, the preferences settings for the current user will be applied to the imported shipments. Settings regarding address validation, auto-packing, storing line item information, etc., will all have a direct effect on the shipments, in the same way as orders being imported from a source interface.
## Action


In the Action field, you can select how Aptean Ship should process the shipments you are importing. The "Ship/Process and print labels/documents" option will automatically process the shipment and print out any labels or documents for all shipments. If you don't want to print labels/documents now, select the "Ship/Process without printing" option. To just save the shipments without processing them, select the "Save as draft" option.

![](assets/images/aptean-shipping-software-import-24-1.png)

## On Error


The On Error setting defines how Aptean Ship should proceed if any errors are encountered. The "Prompt user for action" option is the default setting and means that when an error occurs on import, the error will display in Batch Process Notifications and the user can take further action. Other choices are to always save the imported shipments as a draft or to skip the shipment causing the error.

![](assets/images/aptean-shipping-software-import-25-1.png)

## On Duplicate


The On Duplicate setting defines the action Aptean Ship takes if a shipment that is being imported already exists in the Aptean Ship database. You can choose to create new shipments from the duplicates, skip the duplicate shipments, or prompt the user for an action. If you select the "Prompt" option, the information will display in Batch Process Notifications and the user can then decide the action to take. The default setting is the Prompt option.

![](assets/images/aptean-shipping-software-import-26-1.png)

## Batch Process Notifications


Notifications about errors on import, duplicates, or the status of a batch import display under Batch Process Notifications, located in the toolbar.

![](assets/images/aptean-shipping-software-import-27-1.png)

>[!Tip] **Next Steps** <br>At this point you can proceed with the import process by clicking Import, or exit and save the template to the database. After your template is set up, you can:
* [Import Shipments](import-shipments.md)
* [Update the template Source File](update-the-source-file.md)
* [Manage Imported Batches](manage-imported-batches.md)




