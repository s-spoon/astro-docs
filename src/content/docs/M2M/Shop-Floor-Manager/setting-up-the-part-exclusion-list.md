---
title: "Set up the Part Exclusion List"
draft: false
type: Article 
---

When a part is excluded, it cannot be seen in the material availability list and the material status message is not displayed. We have the option to select which parts you do not want to display the material status message. However, you can check this option if you want the excluded parts to show up on the **BOM** tab in the **JO Detail** (**SFMJODTL**) window.

The job order whose parent part is in the exclusion list displays.

Use the **Part Exclusion** tab on the **Setup** page to add or delete parts to or from the exclusion list.

## To set up Part Exclusion List

1.  Open the **Setup (SFMSETUP)** page.

    Select **Production Management** > **Production Transactions** > **Shop Floor** > **Setup** .

    *Or*

    *Search for* **SFMSETUP** *or* **Setup** *in the* **Navigation box** *and then select* **Setup**.

    The **Setup (SFMSETUP)** page appears.

2.  Click the **Part Exclusion** tab.
3.  To add parts to the exclusion list:
    1.  On the grid toolbar, select **Copy** > **Item Master**.
    2.  The **Copying Item Master** window appears.

        The window shows the facility, part number, revision, and check boxes to select the parts to add to the exclusion list.

    3.  Select the check box that corresponds to the required part number, and click **Select**.
    4.  On the **Toolbar**, click **Save** to add the part to the exclusion list, else click **Cancel**.
4.  To remove a part from the exclusion list:
    1.  In the grid, select the row that contains the required part to remove.
    2.  Under the **Action** column, click the trash icon.
    3.  A message, *Are you sure you would like to delete this record?* appears.

    4.  Click **OK** to remove the part, else click **Cancel** to retain the part.
    5.  On the **Toolbar**, click **Save**.
5.  If you do not have permissions to the above, then set User Preferences.