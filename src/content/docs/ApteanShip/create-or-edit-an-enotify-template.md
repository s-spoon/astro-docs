---
title: "Create or Edit an eNotify Template"
draft: false
type: Article
---

eNotify templates consist of 3 different sections that can be configured for the email.
* Properties: How (and when) emails that the use the template are sent. See [Template Properties](http://ask.shipping.apteancloud.com/akb/template-properties/) for more information.
* Header: Email addresses, subject, and attachments.
* Body: The text and shipment fields that comprise the email.


## Header


The Header section contains the email address information, subject, and attachments. Click on any of the field names to edit their information.
### Email Addresses


Click on the To, From, Cc, and Bcc fields to add or edit email information. Note that the From field is limited by what is allowed by your email server.

>[!Tip] A 'To' address must be specified when enabling a template. If you attempt to enable and save a template that does not have a 'To' address, the template will be saved but not enabled.
#### Fixed




On the Add New Email Address dialog, select a Fixed Email Address to enter the address data yourself.

![](assets/images/enotify-header10.png)

 


#### Shipment Data




You can also populate the email address from Shipment Data. You can select from a list of fields in the Email Address field.

![](assets/images/enotify-header7.png)

 

>[!Note] If you create and enable a template that uses a dynamic email address from the shipment data, and that email field is not populated in the shipment, an email will not be generated.

 




### Subject


Enter the subject line for the email notification. You can type directly into this field or select a dynamic field to insert. When selecting a dynamic field, most fields are imported directly without formatting.

### Attachments




You can attach multiple shipment documents and other files to the email template using the Attachment Tool. Shipment documents are attached in PDF format. Carrier shipping labels and documents need to be enabled in the [Printing Profile](http://ask.shipping.apteancloud.com/akb/printing-profiles/) in order to attach them to an email. The attached files display in the Attachments field. To delete an attachment, click the "X".

![](assets/images/enotify-header4.png)


#### From Local File




Enter the file location or browse for the file you want to attach. Click Attach.

![](assets/images/enotify-header8.png)


#### From Shipment Data




Select from the list of available shipment documents and labels. Click Attach.

![](assets/images/enotify-header9.png)

 


>[!Tip] <ul><li> Carrier Shipping labels: Only laser labels may be attached to an email template.</li><li>FedEx, DHL and USPS: These carriers do not support having both thermal labels enabled for shipping and laser labels enabled for email attachments.</li><li>UPS, OnTrac & SpeeDee: If you want to enable thermal labels for shipping and laser labels for email attachments but don't want to actually print the laser label, enable the laser label and uncheck the "On Ship" option in the Printing Profile.</li><li> Carrier BOLs: If you have both the Aptean Ship BOL and the Carrier BOL enabled for a carrier, the Aptean Ship BOL is the one that will print and be attached to the email. If you prefer to use the Carrier BOL, you must make sure the Carrier BOL is enabled in the Printing Profile.</li> </ul>



## Body


This is where you create the email body. The body of the email can contain text, links, images, and shipment data. To add text, you can type directly into the window, and add other elements using the tools provided.

![](assets/images/enotify-body.png)

>[!Tip] Use the keyboard shortcut Ctrl + Z to undo actions in the email body.

Click a link below for more information about each element of the email body.
* [text properties](http://ask.shipping.apteancloud.com/akb/enotify-text/)
* [links](http://ask.shipping.apteancloud.com/akb/enotify-links/)
* [images](http://ask.shipping.apteancloud.com/akb/enotify-images/)
* [tables](http://ask.shipping.apteancloud.com/akb/enotify-text/#tables)
* [shipment fields](http://ask.shipping.apteancloud.com/akb/enotify-shipment-fields/)
* [dynamic blocks](http://ask.shipping.apteancloud.com/akb/dynamic-blocks/)










