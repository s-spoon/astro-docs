---
title: "Schedule preventative maintenance"
draft: false
type: Article
---

You can schedule how often your company services a machine.

You can also set up a special set of item master parts for this purpose on the **Item Master (INV)** page. Use the Made2Manage standard routing method to establish the specific list of preventative maintenance tasks. Then use that set of part numbers to pull in the routing steps so that the related reports will contain a detailed description of the necessary tasks you need to perform.


## To schedule preventative maintenance for a machine

1. Open the **Machine(MACHSER)** page.

    1. Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Machine**.

    Or

    2. Search for **MACHSER** or **Machine** in the **Navigation box** and then select **Machine**.

    **Machine(MACHSER)** page appears.

2. Select **More Actions** > **Actions** > **Preventative Maintenance**.

3. On the **Toolbar**,click **New**.

4. Enter the frequency at which the preventative maintenance takes place.

    Or click the **Frequency** dropdown and select from the list.

5. Define when the preventative maintenance task ends in the **Repeat Until** field:

    1. To schedule the preventative maintenance task until you manually change the status to completed, click the **Cancelled**.

    2. To enter the date after which this preventative maintenance task cannot be scheduled, click **Date** and enter the date.

        Or click the icon at the end of the date field to display the Calendar. You can select the desired date.

    3. To enter the number of times this preventative maintenance task can be scheduled, click **Times** and enter the appropriate time.

        Or you can increase or decrease the value by 1 using the arrow icons.

6. Enter the date in the **Starting Date** field on which the preventative maintenance schedule begins.

    Or click the Calendar icon at the end of the **Starting Date** field to display the Calendar. You can select the desired date.

7. Enter the part number associated with this preventative maintenance task.

    Or click the **PM Part No** lookup reference.

    The **Lookup For PM Part No** window appears.

8. Select the required row and click **Select**. Or double-click the part number.

    Click **Cancel** to exit from the **Lookup For PM Part No** window.

    The system auto populates the associated standard routing steps and descriptions in the **PM Procedure** box. You can also make changes to the notes in the **PM Procedure** box.

9. On the toolbar,click **Save**.

Now you can view a machine's preventative maintenance schedule.
​