---

title: "Choose primary or critical capacity constrained resource (Advanced Scheduling only)"
draft: false
type: Article

---

Use the **CCR Selection** page to manually choose the primary or critical capacity constrained resource (CCR) based on your shop floor knowledge and experience. The current CCR always displays in this window. You can use this window as an alternative to selecting the CCR with each schedule generation. Every time you change the CCR, you must update the schedule. For more information, see Related Information.

> [!Note]

> - The **CCR Selection** page is only available when Advanced Scheduling is active.

> - You should only select the CCR manually if you have a good knowledge of your shop floor and want to protect a particular resource.

> - To prevent Advanced Scheduling from overwriting the CCR you selected manually, clear the **Auto Set CCR** check box in the **Plan – Infinite** page.

**To choose a primary or critical capacity constrained resource**

1. Start the What-If Session.

2. Open the **CCR Selection (PSCCRSEL)** page.

    - Select **Scheduling > CCR Selection**.

    Or

    - Search for **PSCCRSEL** or **CCR Selection** in the **Navigation box** and then select **CCR Selection**.

    The **CCR Selection (PSCCRSEL)** page appears.

3. Click the **Current CCR** lookup reference button.

4. Select the resource from the **Lookup For Current CCR** window.

> [!Note] Only work centers that have the **Capacity Constraint** check box selected in the M2M **Work Centers(WORK)** page are displayed.

5. On the **Toolbar**, click **Save**.

​