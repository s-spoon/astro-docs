---
title: "Calculating extended material costs"
draft: false
type: Article
---

Made2Manage uses the Extend flag on the Bill of Material to determine the extended quantity required, which is used to generate the material costing estimates.

| If the Extend flag is... | then...                                           
|--------------------------|---|
| checked                  | The extended quantity required is determined by multiplying the unit quantity of the component by its parent’s quantity.                                         
| not checked| The unit quantity of the component is used as the extended quantity required. The cost is rolled to the parent based on the cost divided by the **SPQ** from the Routing. If no Routing **record** is found, then an **SPQ** of 1 is used. The calculation for "Non-extended" component cost is  **((Ext Qty  Unit Cost)/parent SPQ)parent qty**. |

In the following example, BOM costs would calculate as follows:

(Part D is marked as tooling and is not extended. Part D’s parent, Part B, has an SPQ of 2.)

| Part     | Qty      | SPQ       | Unit Matl Cost | Ext | Ext Qty | Ext Cost |       |         |
|----------|----------|-----------|----------------|-----|---------|----------|-------|---------|
| Part A   |          |           | 1              | 1   | -       | -        | -     | -       |
|  Part B  |          |           | 2              | 2   | -       | Y        | 2     | -       |
|          | Part C   |           | 5              | -   | \$1.00  | Y        | 10    | \$10.00 |
|          | Part D |           | 3              | -   | \$2.00  | N        | 3     | \$ 6.00 |
|          |          | Tooling |                |     |         |          | Total | \$16.00 |

Using the calculation ((Ext Qty  Unit Cost)/parent SPQ)parent qty, the "Non-extended" component cost is calculated as follows:   
((32)/2)2=(6/2)2= 32 = 6.

You can follow the **Cost Roll Up (CRUP) calculations** to get a better understanding of how this works.

- Initially the system would roll up a **single unit** of Part B which would calculate as follows:

| Part    | Qty      | SPQ        | Unit Matl Cost | Ext | Ext Qty | Ext Cost |       |         |
|---------|----------|------------|----------------|-----|---------|----------|-------|---------|
| Part B  |          |            | 1              | 2   |         | Y        |       |         |
|         | Part C   |            | 5              |     | \$1.00  | Y        | 5     | \$5.00  |
|         | Part D |            | 3              |     | \$2.00  | N        | 3     | \$3.00  |
|         |          |  Tooling |                |     |         |          | Total | \$8.00  |

The Ext Cost for Part D makes use of the parent part’s SPQ and is (3\$2)/2=\$3. The **Item Master Costing** tab would then show a Material cost for Part B of \$8.00.

- Next, the system will roll up a **single unit** of Part A which would calculate as follows:

| Part   | Qty    | SPQ | Unit Matl Cost | Ext | Ext Qty | Ext Cost |       |         |
|--------|--------|-----|----------------|-----|---------|----------|-------|---------|
| Part A |        |     | 1              | 1   |         |          |       |         |
|        | Part B |     | 2              | 2   | \$8.00  | Y        | 2     | \$16.00 |
|        |        |     |                |     |         |          | Total | \$16.00 |

Material costs may be difficult to follow if you have non-extended components at different BOM levels, and you use varying SPQ quantities. This is due to the way that non-extended component costs interact with parent SPQ quantities.

If you have difficulty validating your material costs, start at the lowest manufactured component, and apply the calculation referenced above. Once you can validate costs at the lowest level, proceed upward through each level until you reach the top level parent component.