---

title: "Set cycle counting rules"
draft: false
type: Article

---

After you select an archive method, the next step in preparing for cycle counting is to set cycle counting rules.

**To set up a cycle counting rule**

1. Open the Cycle Count Selection Rules (PHYCCR) page.

    - Select **Production Management** > **Production Transactions** > **Inventory** > **Physical Inventory** > **Cycle Count Selection Rules**.

    Or

    - Search for **PHYCCR** or **Cycle Count Selection Rules** in the **Navigation box** and then select **Cycle Count Selection Rules.**

        The **Cycle Count Selection Rules (PHYCCR)** page appears.

2. Click **New** on the **Toolbar**. Or to base this rule on the one the window shows, click **Copy** on the **Toolbar**.

3. Identify the rule:

    1. Click the **Facility** arrow and select the facility.

    2. In the **Rule** box, type the rule's name.

    3. In the **Description** box, type the rule's description.

4. In the **Selection Based Upon** area, specify the rule:

    - For a period-of-time rule:

        1. Select the **Date Frequency of**.

        2. Click the arrow in the box that follows and specify the frequency.

    - For a usage level rule:

        1. Click the **Usage Maximum Greater than** or **Usage Minimum Less than** .

        2. Click the stepper in the **first** box to specify the usage level by increasing or decreasing the value by 1.

        3. Click the arrow in the **second** box and specify a time period.

    - For a statistical sample rule:

        1. Click the **Statistical Sample with a**.

        2. In the **% Error (Plus/Minus)** box, type a confidence level percentage.

            Or click the icon at the end of the **% Error (Plus/Minus)** field. This displays the Calculator. You can select the desired value.

            To learn how Made2Manage calculates the statistical sample, see **Related Information**.

    - To use the rule the **Item Master** window shows on the **Costs** tab (a number of cycle counts per year), select the **Part Master No Counts/Year**.

5. In the **Include Only Items With** area, specify the items the rule includes:

    1. Select each appropriate check box.

    2. To specify an **ABC Code**, click the arrow at the end of **ABC Code** field. Select the code.

    3. Click the lookup reference at the end of the **Product Class** field.

        The **Lookup For Product Class** window appears.

    4. Highlight a row and click **Select**. Or double-click the row to use.

        Click **Cancel** to exit from **Lookup For product class** window.

    5. Click the lookup reference at the end of the **Group Code** field.

        The **Lookup For Group Code** window appears.

    6. Highlight a row and click **Select**. Or double-click the row to use.

        Click **Cancel** to exit from **Lookup For Group Code** window.

    7. Click the arrow at the end of the **Source** field to select an appropriate value.

    8. To specify an on-hand value, type it in the **On-hand Value Greater Than** box.

        Or click the icon at the end of **On-hand Value Greater Than** field. This displays the Calculator. You can select a desired value.

    9. To specify a location:

        1. Click the **Location** lookup reference at the end of the field.

            **Lookup For Location** window appears.

        2. Highlight a row and click **Select**.

            Click **Cancel** to exit from **Lookup For Location** window. Or double-click the location to use.

        3. To specify a range of bins, type the first and last bin numbers in the **Bin Minimum** and **Bin Maximum** boxes.

6. To limit the total number of parts:

    1. Select the **Selected Result Shall Not Exceed** check box.

    2. In the **Parts/Items** box, select or type the maximum number of parts.

        Or, click the stepper at the end of **Selected Result Shall Not Exceed** field to increase or decrease the value by 1.

7. Click **Save** on the **Toolbar** to keep the rule.

    The next step is to make active any inactive cycle counting rule that you want to use. Then, print cycle counting worksheets.



​