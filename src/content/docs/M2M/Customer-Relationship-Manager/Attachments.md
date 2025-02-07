---  

title: "Location of document attachments"  
draft: false
type: Article

---


Attaching the file to the actual record in Made2Manage might make the record unusable, Made2Manage navigation and overall program stability unstable depending on the attachment size. To alleviate this, a link to the document is kept with the record, while the actual attachment is stored on the SQL Server in the **M2MDATAxx** (where **xx** is the number of the company). There are sub-folders depending on the record type of where the attachment was added.

The attachment is saved in the format of "**\#\#\#\#_filename.ext**" (where **\#\#\#\#** = the record number based on record type, **filename** = file name of the attachment, and **ext** = the extension of the file).

Another benefit is that the attachment will be available to all Made2Manage users, not just the user who initially stored the attachment on the desktop.

# Working with Attachments

You can append documents from the desktop to the **Attachment** pane. You can perform the following:

-   Allows you to link to the file’s contents
-   Attach new file associations
-   Release an association

    Several Made2Manage screens support a document attachment feature. This feature enables you to attach an external document to a record, and then view that document from within Made2Manage.

    You can attach any type of document, but you must be able to access the related application to view the document. For example, if you attach a file with an **.xls** extension, you must have Microsoft Excel to view the attachment.

    It contains links in the document screen to the documents stored on the SQL Server. They will not copy over to a new **Sales Order** or **Quote**.

    Documents are stored in the SQL Server in the **M2MDATAxx** (where **xx** is the number of the company).

    If you want to access attachments from different computers, you should place your documents in a shared network location using a common drive letter mapping.

    You can associate Web sites with certain forms and records in Made2Manage and you can launch new Web Links at any time.

    **Attachment** is provided as a separate on the **Ribbon**. The number in parenthesis indicates the number of attachments associated with the form.

    

   

