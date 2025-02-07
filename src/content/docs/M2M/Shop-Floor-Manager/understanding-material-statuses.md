---
title: "Understand Material Statuses"
draft: false
type: Article
---

The SFM **Status Generation Interval** calculates the material statuses based on the user-specified interval. The default interval is 15 minutes.

Shop Floor Manager windows provide information at varying levels of detail. The SFM window you are viewing may contain information in the work center, job order operation, job order, or at the component level. The material status that displays on the window is directly related to the level of detail you are viewing.

For example, a work center may show a status of **Make** - **Short**, indicating there is a shortage of one or more make items for the work center. If you drill down into that work center's jobs, you can see which jobs are responsible for the shortage. Then further, you can drill down into the job order detail and see what components are short.

Shop Floor Manager uses the following items as a basis for determining Material Statuses:

-   Floor Stock items are always available and are never considered to be short.
-   Customer supplied material is always available.
-   Safety stock is not included in material demand.
-   Only Job Orders with the following statuses are factored into material availability:

    - Completed

    - Released

    - Open

    - On Hold

-   SFM factors in a component that is tied to a specific job operation (integrated BOM & Routing), otherwise all job components are considered necessary for the first operation on the job routing.
-   Sales Order demand is factored in based on the setting on the **Company Setup** tab of the **Setup** window.
-   The demand is considered in material availability only if **Include SO Demand In Material Status** check box is selected. **Open SOs** that have been fulfilled are not included in the demand.
-   **IDOs** and **ISOs** are factored into demand and supply.

The following chart explains the material statuses that SFM uses, and their meanings:

|  **Source Type** | **Status Description** | **Indicates Shortage** | **Detail Level**         |  **Definition**                     |
|------------------|------------------------|------------------------|--------------------------|-------------------------------------|
| Make             | Make - Short           | X                      | Work Center or Job Order | Make component on the JO is short |
|                  |                        | JO - Started           | X                        | Make component on the JO has a sub-job in Started status                                  |
|                  |                        | JO - Open              | X                        | Make component on JO has a sub-job in Open status                                         |
|                  |                        | JO - Released          | X                        | Make component on the JO has a sub-job in Released status                                 |
|                  |                        | JO - Partial Complete  | X                        | Make component on the JO has a sub-job which has some operations with Qty Complete        |
|                  |                        | JO - Complete          |                          | Make component on the JO has a sub-job which is Complete                                |
| Buy              | Buy - Short            | X                      | Work Center or Job Order | Buy item on the JO is short                                                                 |
|                  |                        | PO - No PO             | X                        | Component Buy item on the JO has no PO                                                      |
|                  |                        | PO - None Recvd        | X                        | Component Buy item on the JO has a PO created (Started, Open or On Hold) but no quantity  received                                                                                                                            |
|                  |                        | PO - Partially Recvd   |                          | Component Buy item on the JO has a PO which has some quantity received, but not all                                               |
|                  |                        | Blank                  |                          | Buy item on the JO has been received in full                                                                                        |
| Stock            | Stock - Short          | X                      | Work Center or Job Order | Stock item on the JO is short                                                                                                       |
|                  |                        | None Issued            |                          | Component Stock item on the JO has no quantity issued to the job, but the component is not short because there is sufficient supply |
|                  |                        | None Issued - Short    | X                        | Component Stock item on the JO has no quantity issued to the job, and has an insufficient supply                                  |
|                  |                        | Partial Issue          |                          | Component Stock item on the JO has some quantity issued to the job and has a sufficient supply                                      |
|                  |                        | Partial Issue -        | X                        | Component                                                                                                                          
|                  |                        | Short                  |                          | Stock item on the JO has some quantity issued to the job and has an insufficient supply |
|                  |                        | Blank                  |                          | Stock item on the JO has been issued in full                                              |
| Combination      | Short                  | X                      | Work Center or Job Order | Combination of Stock, Buy or Make shortage                                                |


>[!Note]
>- If you select the option to Include SO Demand In Material Status in the **Company Setup** tab of the **Setup** window, you may see the status **SO - Short**. This status appears when the component has insufficient supply for the SO quantity.<li> If you select the option to **Display Excluded Parts On BOM** in the **Company Setup** tab of the **Setup** window, a message in red displays to indicate the part is excluded from displaying the material status. <li>If you did not select the **Display Excluded Parts On BOM** checkbox on the **Company Setup Setup 2** tab of the **Setup** window, a message in red displays to indicate that one or more component parts are being excluded. The parts will not display on the material availability lists and will not generate material status messages.