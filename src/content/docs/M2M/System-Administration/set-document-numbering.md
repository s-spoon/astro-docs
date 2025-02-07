---
title: "Set document numbering"
draft: false
type: Article
---

Made2Manage numbers documents such as sales orders and receivers and other items such as customers and recurring events. Each kind of document or item has its own numbering sequence that you can control, if you want. You can add prefixes and suffixes to help you identify numbers more easily. You can configure Made2Manage to set a new document's number, or let the user set the number.

Document numbers typically range from **0 to 999,999**. If you think you will need to store more than 999,999 of a particular kind of document, you can use alphanumeric numbering to give you up to **2,176,782,336** documents.

You can also specify the document number width for each document according to your company requirements.

>[!NOTE] The width set must be lesser than the maximum width allowed.

>[!IMPORTANT] If you use Auto Numbering, once you set the width and generate a new document using the new number scheme, you cannot modify the width to a lower number.

You first use the **Document Numbering System Specific** page to set numbering for documents that affect the entire system, such as payment terms and report IDs. Then use the **Document Numbering Company Specific** page to set numbering for documents that can have different sequences for each company, including sales orders, invoices, and so on.

To set document numbering

1. Prepare to set document numbering:

    1. Open the appropriate page.

    2. On the **Toolbar**, click **Browse** , select the number sequence to change, and click **Select**.

2. In the **Starting Number** field, type the number of the first document.

    Once you set the starting number, you can safely change it ONLY to a higher number. Changing the starting number to a lower number can corrupt some of your records.

3. In the **Prefix** and/or **Suffix** fields, type values to add a prefix and/or suffix to the number.

    **For example**, you could add a prefix that identifies documents by company.

    >[!NOTE] If you add a prefix, then the search operation will only return documents that contain the prefix. To search for document numbers without the prefix, perform the search using wild cards. For example, if you enter prefix as **15** for the class **SOMAST.FSONO**, then searching for SO 28 will prefix the sales order number with 15 and search for SO 150028. To search for SO 000028, you must type **%28** in the **SO Number** field while searching.

4. In the **Increment** field, type or select the number to add to the last document number to get the next number. You usually type **1** in this field.

5. To use alphanumeric numbering:

    1. In the **Alpha Column** field, type or select the column at which to begin alphanumeric numbering.

        If you type **6**, alphanumeric numbering begins with a **sixth** digit.

    2. In the **Alpha Skips** field, type any letters you don't want to use in alphanumeric numbering.

6. In the **Width** field, type or select the new width, to set the document number width according to your company requirements.

    Ensure that the width set is lesser than the width displayed in the **Maximum Width** field.

7. Select the **Manual Sequencing** check box, to allow users to select numbers for their documents.

    When this check box is not selected, Made2Manage assigns numbers to documents for users.

8. On the **Toolbar**, click **Save** to save the changes.

    Repeat these steps for each number sequence you want to set up.

​