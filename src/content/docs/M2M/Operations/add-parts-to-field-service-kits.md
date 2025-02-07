---
title: "Add parts to field-service kits"
draft: false
type: Article
---

Field-service kits let you group parts you need to service machines. You can specify field kits by machines, by customer locations, or both.

A field kit is typically a collection of parts needed to produce a specific service task. Usually you create an item master part for a field kit then assign each needed part as a component to a standard bill of material for the kit part. You would then issue and process an internal job for internal use to relieve inventory of the equipment items to establish the cost of the kit. Finally you create a service order for a machine using the field kit you define.

There are two types of field kits you can assign to a service order:

- Regular field kits allow you to specify a range of machines and/or customer locations where you want the kit installed.

- Regular field kits are needed for a particular machine or group of like machines.

- Site licenses allow you to pick a range of parts for the field kit from the item master, and Made2Manage finds the machines that contain those parts for you.

- Site licenses are needed for a particular component part.

## To add parts to field-service kits

1. Open the  **Field Kit (KITTBL)** page.

    Navigate **Customer Relationship Management** > **Master Data** > **Field Service** > **Field Kit**.

    Or

    Search for **KITTBL** in the **Navigation box** and then select **Field Kit.**

    The **Field Kit (KITTBL)** page appears.

2. On the **Toolbar**, click **New**.

    Or, click **Copy** to base this field kit on the one the page shows.

3. Describe the field kit:

    1. In the **Kit Description**box, enter a description for the kit.

    2. In the **Type Of Kit** dropdown list, select the type of kit to create.

    3. Click the **Part Number**Lookup Reference.

        The **Lookup For Part Number** window appears.

    4. Select the row that contains the required part number, and click **Select**.

        Or, double-click the row that contains the required part number.

        Click **Cancel** to exit from the **Lookup For Part Number** window.

    5. In the **Urgency** dropdown list, select the urgency of the field kit.

    6. If you do not want to bill the customer for parts or labor, select the appropriate check box.

        This overrides any warranty setting.

    7. In the **Mail/Ship By** field, enter the date you want the field kit mailed or shipped by.

        Or, click the Calendar icon to display the Calendar. Select an appropriate date.

    8. In the **Estimate Install Hours** field, enter the estimated number of install hours.

        Or, click the Calculator icon to display the calculator. Enter the required value.

    9. In the **Quantity Required** field, enter the quantity of field kits required.

        Or, click the Calculator icon to display the calculator. Enter the required value.

    10. In the **Notes** box, enter additional notes.

4. On the **Toolbar**, click **Save**.

5. Assign parts and/or customer locations to the field kit:

    1. On the child toolbar, select **Copy** > **Assign Field Kits To**.

    2. Select the required a row and click **Select**.

        Or, double-click the row to use.

        If there are multiple entries for a single item then click **Next**.

        Click **Cancel** to exit from the **Copying Assign Field Kits To** window.

    3. Select the items to include in the field kit:

        - To include a single part, double-click the part to add.

        - To include all parts, click the **Select** check box.

 The system automatically populates in the table on the **Field Kit** page with the information you enter.

After you identify all machines and machine locations, you can schedule the installation. 
​