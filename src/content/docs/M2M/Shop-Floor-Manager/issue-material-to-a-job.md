---
title: "Issuing Material to a Job from the Supervisor Console"
draft: false
type: Article 
---

After you release a job order, you can issue material to the shop floor for production from the **Supervisor Console** (**SFMS**).

## To issue material to a job from the Supervisor Console

1.  Open the **Supervisor Console (SFMS)** page.

    Select Production Management > Production Transactions > Shop Floor > Supervisor Console.

    *Or*

      Search for **SFMS** or **Supervisor Console** in the **Navigation box** and then select **Supervisor Console**.

    The **Supervisor Console (SFMS)** page appears.

2.  Select **Job Number** from **Job Order Operations** grid.
3.  Click the ellipsis under the **Action** column.
4.  Select **Grid Actions** > **Issues to JobOrders**. The **Issues to Job Orders** page appears.
5.  Enter the value in the **Quantity To Issue** field.
6.  Click **Save** on the Toolbar to save the value, else click **Cancel**.
7.  Click **Change Qty to Issue to Zero** if you want to issue a few items. The values in **Quantity to Issue** field will change to 0.000.
    >[!Note]
    >On changing the values in Quantity to Issue to 0.000, the Change Qty to Issue to Zero label changes to Change Qty to Issue to Remaining.
1.  Click **Change Qty to Issue to Remaining** if you want to issue the total quantity for most of the items.

    >[!Note]
    >The Change Qty to Issue to Remaining label changes to Change Qty to Issue to Zero.

1.  Click **Confirm Quantity To Issue**.

    The **Quantity Issued** field will be updated.

    >[!Note]
    >The Confirm Quantity To Issue label changes to Quantity Issued.

1.  Click **Save** on the toolbar.

    

# Related Options

The **Related** feature in **Supervisor Console**![](../assets/shop-floor-manager/picture9.png) and **Work Center Console**![](../assets/shop-floor-manager/picture10.png) provides the below options.

The options available from the two consoles are identical, with one exception. The Supervisor Console menu includes **JO Matl Issue**, and the work center console menu grays out **Jo Material Issue** because the Work Center Console includes Issue Material to perform the same role.

**Option**| **Description**
---|---
Job Order Detail|Displays Job Order Detail (**SFMJODTL**) window with detailed information about the job, routing, and BOM. On the Routing tab, you can change the work center as long as labor has not been posted to an operation. In addition, click **Related**![](../assets/shop-floor-manager/picture12.png) on the grid toolbar to view the following menu options:<li> Component Matl Available<li> Component Purchasing Status <li>Component Where Used
Job Order Status| Displays Job Order Status/Cost (**JOSTAT**) window with information about the cost, material, and production status for a job, and optionally, its sub-jobs.
Job Order Material Available/JO Material Available | Displays the Job Order Material Available (**SFMJMAVL**) window with information about the material available for a job. 
JO Material Issue/Issues to Job Orders|Displays the Issues to Job Order (**JOISS**) window where you can issue material to the shop floor for production after releasing a job order.<br>This option is not available in the Work Center Console. It is only available on the Supervisor Console menu when the grid contains jobs that have been released. <br>For example, this option will never display on the Job Order Release window since that window only contains unreleased jobs.
JO Document Attachment|Displays the Document Attachments (SFMATTCH) window with information about documents attached for the selected job order.



The **Work Center Console**![](../assets/shop-floor-manager/picture10.png)  and the **Supervisor Console**![](../assets/shop-floor-manager/picture9.png) includes the following features,

-   [Browse](printing-or-exporting-information-from-shop-floor-manager.md)
-   [Related Options](#related-options)
-   [Assign Lot/SNs](assign-a-lot-number-to-a-job-order-from-the-work-center-or-supervisor-console.md) - Displays the Assign Lot/SNs to Job Orders (ASSIGN) window for the selected job order where you can assign a lot control number or serial number for the specific job order.