---
title: "Moving Material to Inventory"
draft: false
type: Article
---

The **Work Center Console** allows to move the material to inventory.

You can also set up Shop Floor Manager to issue non-lot-controlled parts to inventory automatically by selecting the **Auto Move To Inventory At last operation** checkbox in the **[Facility Setup](facility_setup.md)** tab of the **Setup** window.

##  To move material to the Inventory

1.  Open the **Work Center Console (SFMWC)** page.

    Select **Production Management** > **Production Transactions** > **Shop Floor** > **Work Center Console**.

    *Or*

    Search for **SFMWC** or **Work Center Console** in the **Navigation box** and then select **Work Center Console**.

    The **Work Center Console (SFMWC)** page appears.

2.  Click **Move to Inventory**.

    The **Move To Inventory** window appears in the right hand pane.

3.  In the left-hand pane, click on the job with the [Material](issuing-material-to-a-job-from-the-work-center-console.md) you want to move to inventory.

    The current **Location**, **Bin** and **Qty To Move** are displayed.

    If one of these values is not correct, double-click on that field to enter the desired value.

4.  Select the required bin in the **Bin** field for the location. This is a mandatory field.

    >[!note]
    > If the location has a Bin added then blank Bin field are not valid. You will have to first add a blank bin record in the **Inventory Bins (BIN)** page. If the location does not have any Bin added, system allows you to enter dynamic bin records or have a blank bin record while processing the transaction.

1.  Enter the quantity to move to inventory in the **Qty To Move** field.
2.  Click **Complete Move** to move the material to inventory, else click **Cancel**.