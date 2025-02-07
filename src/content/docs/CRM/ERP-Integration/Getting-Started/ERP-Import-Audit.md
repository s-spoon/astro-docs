---
title: "ERP Import Audit"
draft: false
type: Article
---



During the import process, ERP sends bulk updates to the CRM, which are initially stored in a staging table. Once the ERP completes the "finish import" action, items are transferred from the staging table to the database in a specific sequence. This sequence is determined by the processing order and the creation date of each item, ensuring consistency in the import process.

One key advantage of this screen is that, if an error occurs during import due to a record failure, the user can manually delete the problematic item using the list control. Typically, the item causing the failure will appear at the top of the list if the import process halts. After removing the item, the user can resume the import by selecting the **Options** icon at the top-right of the screen. This process can be repeated as necessary until all records are successfully processed.

>[!Note] Currently, the table does not include any fields or logic to explicitly indicate a failed record. Therefore, we assume that the top record in the list (based on the default sorting order) is the one that has failed.


![004](/Modules/assets/images/004.png)