---

title: "Analyze the results of finite plan run"
draft: false
type: Article

---

You can analyze the results of a finite plan run. Use the information to understand potential revenue or costs associated with a given plan.

The **Plan Results** window is only available when Advanced Planning is active.

**To analyze the results of finite plan run**

1. In the **Plan — Finite** window, click the **Plan Results** button.

2. In the **Description** box, type a description for the script.

3. Interpret the results in each box:

    - The amount in the **Revenue** box shows the total revenue of the plan. Finite Planning calculates this number by multiplying the number of units produced by their respective prices (unit prices or sales prices). This amount appears only if you set the goal of the plan run to "Maximize Tactical Profit".

    - The amount in the **Purchased Materials** box shows the total purchased material cost of the plan. Finite Planning calculates this number by multiplying the number of purchased parts consumed by the plan by the unit cost. This amount appears only if you set the goal of the plan run to "Maximize Tactical Profit".

    - The amount in the **Inventory Holding** box shows the cost over time of keeping parts in inventory. This typically occurs when you manufacture items sooner than they are needed for sales orders. To calculate this figure, Finite Planning multiplies the Inventory Holding Cost (Annual %) factor in the **Plan — Finite** window by the cost value of the inventoried part. Finite Planning assumes the cost of any part is equal to the sum of the cost of its purchased parts.

    - The **Late** or **Missed Demand** box shows the total cost of being Late to Demand. Finite Planning calculates this number by multiplying the revenue value of demands (sales orders, demand forecast, or safety stock projected to be late) and the number of weeks late for each demand by the Penalty for Week Late to Demand or Penalty for Week Late to Safety Stock factors in the **Global Parameters** window.

    - The amount in the Total Tactical Cost box shows the total cost of the plan. To generate this figure, Finite Planning adds together the amounts in the **Purchased Materials**, **Inventory Holding**, and **Late** or **Missed Demands** boxes. This amount appears only if you set the goal of the plan run to "Maximize Tactical Profit".

    - The **Tactical Profit** box shows the total amount of profit from this planned use of resource. Finite Planning calculates this number by subtracting the amount in the **Total Tactical** box from the amount in the **Revenue** box, and applying the figure in the **Discount Factor** box in the **Global Parameters** window. This amount appears only if you set the goal of the plan run to "Maximize Tactical Profit".

4. To save any changes to these results, click the **Save** button.

​