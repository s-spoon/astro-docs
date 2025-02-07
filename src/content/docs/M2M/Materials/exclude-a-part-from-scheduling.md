---

title: "Exclude a part from scheduling (R1-NA)"
draft: false
type: Article

---

If your company uses the **Advanced Scheduling** option in Planning and Scheduling, you can exclude parts from Advanced Scheduling schedules. Choosing this setting tells Advanced Scheduling to ignore all standard routing operations relating to non-scheduled parts when creating a schedule. For example, you may want to exclude a part from scheduling if you have manufactured a stock item to forecast.

**To exclude a part from scheduling**

1. Open the **Item Master Extension (INX)** page.

    - Select **Production Management** > **Master Data** > **Item Master Extension**.

    Or

    - Search for **INX** or **Item Master Extension** in the **Navigation box** and then select **Item Master Extension.**

   The **Item Master Extension (INX)** page appears.

2. Find the part's MRP information:

    Click the **Material Requirements Plan** tab.

3. Make the necessary changes.

4. Select the **Exclude From Scheduling** check box.

5. To apply the settings on the **Material Requirements Plan** tab to other parts:

    1. Select **At a Glance** > **Actions** > **Set Global**.

       The **Set Global** window appears.

    2. Select the **Facility From** and **To** from the list.

    3. Click the **Product Class From** and **To** lookup reference.

        The **Lookup For Product Class** / **Lookup For To** windows appears.

    4. Highlight a row and click **Select**.

        Click **Cancel** to exit from the windows.

    5. Click the **Group Code From** and **To** lookup reference.

        **Lookup For Group Code** / **Lookup For To** windows appears.

    6. Highlight a row and click **Select**.

        Click **Cancel** to exit from the windows.

    7. Click the arrow at the end of the **ABC Code** **From** and **To** field.

        Select any one from the list.

        You can either add a new value or modify the existing one.

    8. Click the **Save** on the toolbar to keep the changes.

        Or click the **Cancel** on the toolbar to discard the changes.

    9. Click the **X** available at the right side of the screen to close the **Set Global** window.