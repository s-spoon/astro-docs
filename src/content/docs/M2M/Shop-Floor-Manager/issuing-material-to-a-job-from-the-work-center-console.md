---
title: "Issuing Material to a Job from the Work Center Console"
draft: false
type: Article 
---

After you release a job order, you can issue material to the shop floor from the **Work Center Console**.

-   You can only issue one item at a time from the work center console. If you want to issue multiple items, you should use the supervisor console.
-   If you want to issue items from the supervisor console, highlight the job, click **Related** on the gird toolbar and select **JO Material Issue**.

## To issue material to a job from the Work Center Console

1.  Open the **Work Center Console (SFMWC)** page.

    Select **Production Management** > **Production Transactions** > **Shop Floor** > **Work Center Console**.

    *Or*

    Search for **SFMWC** or **Work Center Console** in the **Navigation box** and then select **Work Center Console**.

    The **Work Center Console (SFMWC)** page appears.

1.  Click **Issue Material**.

    The **Issue Material To Operation** window appears in the right hand pane.

2.  In the left-hand pane, click on the job that needs material.
3.  In the **Issue Material To Operation** window, click one of the following tabs and select the part number.

    - The **Used In Oper** tab lists all the components assigned to the selected job operation, based on the integrated BOM and Routing.

    - The **BOM Items** tab lists all the components for the selected job order.

    - The **All Items** tab lists all standard items in the Item Master so you can issue miscellaneous items if necessary.

    >[!Note]
    >The All Items tab displays only if **Issue Materials - Display All Items** is checked in the **Company Setup** tab of the Setup window.

1.  Enter the quantity to issue to the job in the **Qty To Issue** field.

    >[!Note]
    >If the part is lot-controlled,the **Qty To Issue** will be entered in the **Lot Control issues to Jobs** window.

1.  Select the required bin in the **Bin** field for the location. This is a mandatory field.

    >[!Note]
    > If the location has a Bin added then blank Bin field are not valid. You will have to first add a blank bin record in the **Inventory Bins (BIN)** page. If the location does not have any Bin added, system allows you to enter dynamic bin records or have a blank bin record while processing the transaction.

1.  Click **Issue Item** to issue the part to the job, else click **Cancel**.