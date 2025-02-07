---
title: "FAQ"
draft: false
type: Article
---

### **Q: What kind of files are supported by Invoice Automation?**
A: Invoice Automation supports PDF files only currently.

---

### **Q: Can I scan an invoice I received in the post and upload it?**
A: Not recommended and not supported, due to scans/photos of documents not being aligned correctly and straight these can cause Invoice Automation to incorrectly read the data or fail to read the data altogether. Only invoices that were received digitally are supported.

---

### **Q: I noticed an error on my Purchase Order and corrected it in my ERP solution, when will the change be reflected in Invoice Automation?**
A: If you are using Aptean AppCentral for your ERP solution, changes will be reflected near real time (under 1 minute). Non AppCentral solutions update their data on a scheduled basis, the schedule frequency was set when the integration was installed.

---

### **Q: How often are invoices exported to my ERP Solution?**
A: If you are using Aptean AppCentral for your ERP solution, completed invoices are exported near real time. Non AppCentral solutions export on a schedule frequency was set when the integration was installed.

---

### **Q: I have anchored a value to a piece of text but the value is not being tracked correctly.**
A: Anchors have to be unique on the document as the first instance of the text will be used to try and locate the desired value, try selecting a different piece of text to anchor to.

---

### **Q: Non-table items are being picked up in my table resulting in validation errors.**
A: Tables offer several features to help limit or remove erroneous data from being included like the required flag & Row Identifiers. Please see [Populating Fields](./features/template-editor/populating-fields.md) for more information.

---

### **Q: I have created a template for a vendor but future documents keep failing to use it.**
A: This is often caused by the [Template Keys](./features/template-editor/fields.md#keys) not being configured correctly, for example they have moved position or changed value. This can be confirmed by editing the template and opening the configured keys, the Selected Value shows what has been detected on this invoice & Stored Value is what the template is expecting.

---

<!--CQ-->
### **Q: My Vendor sends their invoices with a different UOM, can Invoice Automation automatically detect and change the pack size?**
A: No, Invoice Automation cannot detect and adjust this automatically. For occasional changes using the [Pack Size Adjustment](./features/document-view/line-matching-dialog.md#pack-size-adjustment) is recommended. If the vendor consistently sends differing stocking quantities we recommend changing your ERP POs so the UOM matches, using a purchasing or alternate UOM.

---

<!--CQ-->
### **Q: What happens to an Invoice if I delete or void it in my ERP solution after it has been exported from Invoice Automation?**
A: Nothing, once an invoice has been exported from IA the document is locked and no further changes will occur to it, even if it is deleted in your ERP. You can however choose to manually delete the document in IA if you wish.

---

<!--CQ-->
### **Q: My Vendor applies a complex prefix or suffix to one of my fields used in template, can I use wildcards to match?**
A: Invoice Automation supports using advanced [Regular Expressions (Opens in new tab) :octicons-link-external-16:](https://www.regular-expressions.info/){target="_blank"} to remove prefixes and suffixes.

!!! warning "Please note"
	Only ECMAScript Regular Expressions are supported.

