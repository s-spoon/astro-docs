---
title: "Change table tag attributes in the data dictionary"
draft: false
type: Article 
---

You can work with any table's data dictionary record of fields and tags. You can change tag attributes such as field browse orders.

When you customize pages, you create groups that can see the customizations. The default group is EVERYONE. For more information about page customization, see the **.

### To change table tag attributes

1. Open the **Data Dictionary (DICT)** page.

    1. Select **Utilities** > **Maintenance**> **Data Dictionary**.

    Or

    2. Search for **DICT** or Data Dictionary in the **Navigation box** and then select **Data Dictionary**.

    **Data Dictionary (DICT)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Data Dictionary** window appears.

3. Select the row that contains the required table or group, and click **Select**.

    Or, double-click the row that contains the required table or group.

    Else, click **Cancel** to exit from the **Browse For Data Dictionary** window.

4. Click the **Tags** tab.

5. In the grid, under the **Tag Name** column, select the required tag, to set this as the table's recovery tag.

6. Select the **Recovery Tag** check box.

    >[!NOTE] Do not set more than one tag as the table's recovery tag.

7. In the **Type** area, select the tag's key from one of the following:

    - **Primary**

    - **Candidate**

    - **Regular**

8. To change the description that appears in the status bar, type it in the **Status Bar Description** box.

9. To change the description that appears for this tag, type it in the **Selection Description** box.

10. To include the tag in a small set of pages, type the page mnemonics in the **Only Show In Screens** box.

11. To include the tag in all pages except those you specify, type the mnemonics of the pages to exclude in the **Don't Show In Screens** box.

    >[!NOTE] Separate page mnemonics with carets (\^). For example, type **SO** or **JO** or **PO** to separate the mnemonics for the Sales Orders, Job Orders, and Purchase Orders pages.

12. On the **Toolbar**, click **Save** to save your changes.

    Or, click **Cancel** to discard your changes​.

​