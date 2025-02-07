---

title: "Sales order estimate vs Job actual"
draft: false
type: Article

---

You can print a graph that compares your jobs' estimated costs to their actual costs.

**To generate Est vs Job Actual Graph**

1.  Open the **Sales Order Est vs Job Actual (GRQU)** page.

    1. Select **Executive Information System** > **EIS Graphs** > **Sales Order Est vs Job Actual**.

    Or

    2. Search for **GRQU** in the **Navigation box** and then select **Sales Order Est vs Job Actual**.

    The **Sales Order Est vs Job Actual (GRQU)** page appears.

2.  In the **Data** section of the **Selection Criteria** tab, select appropriate value from the **By** and **Filter** list.

3.  In the **Date Information** section, select from the range of dates the **Start Date** and **End Date**.

4.  In the **Date Range** area, select from the options the date from which you want to generate the graph.

5.  Click the **Graph** tab to view the graph. For more information on the options available in **Graph** tab, see [to generate graph for reports]().

    

**Possible trouble in jobs**

| Sales order items opened but not in process | Jobs in process with costs that exceed the selling price |
|-----------------------------------------------|----------------------------------------------------------|
| Sales orders with unresolved revisions        | Open jobs with all quantities complete                   |
| Sales order items beyond their due dates      | Unresolved labor entry errors                            |

| Sales orders with items that could be shipped                                             | Job orders where the pick list and traveler have not yet been printed |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Jobs currently in the Startedstate                                                        | AP invoices on hold                                                   |
| Jobs beyond their Release date but not Released                                           | Number of items that need to be made or purchased                     |
| Jobs released but not scheduled                                                           | Number of jobs and purchase orders past due                           |
| Jobs on-hold                                                                              | Vendor returns that have not been replaced                            |
| Jobs with rework or scrap that have no disposition                                        | Standard parts that have no routing                                   |
| Jobs in process that have cost overruns                                                   | Make and buy items in stock                                           |
| Jobs where the routing or BOM has changed and whose release dates need to be recalculated | Purchase orders that have been started                                |
|