---

title: "Generate sales commissions report"   

draft: false 

type: Article
---
## 

Use the **Sales Commissions** report to generate a listing of the earned commissions detail table information. This report provides subtotals for each sort level and calculates the average commission rate for each subtotal as well as for the report total.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria. For more information on Advanced Filters, [click here](#).

---

### To Generate the Sales Commissions Report:

1. **Open the Sales Commissions (RPCOM) page.**  
2. From the **Selection** box, select the information you want to view.  
3. In the **Sort Order** area, select from the options on how to sort the report.  
   - The **Sort Order** field is populated based on the type of report selected in the **Selection** field.  
4. In the **Layout** area, select the layout in which you want to view the report.  
   - The **Layout** field is populated based on the type of report selected in the **Selection** field.  
5. Select the **Summary** check box to obtain a high-level data report.  
6. In the **Date Range** area, specify the date range for the report to be generated.  
   - You can select the date in the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** area.  
   - The **Date On** field is populated based on the type of report selected in the **Selection** field.  
   - To include the entire time frame, leave the date fields blank.  
   - In the **Fill Dates** area, you can select from the predefined date ranges. Options include:  
     - **Custom:** Enables the **From** and **To** fields in the **Date Range** area.  
     - **Calendar Year:** Displays the **Calendar Year** field. You can select any predefined calendar year format from the drop-down list.  
     - **GL Periods:** Displays the **GL Periods** field. You can select any predefined GL period format from the drop-down list.  
7. In the **Sort Range** area, specify the sort range:  
   - The **Sort On** field is populated based on the type of report selected in the **Selection** field.  
   - The available sort ranges are:  
     - **Single:** Select this option to include only one item.  
       - Enables the **From** field. Do one of the following:  
         - Type the item reference in the **From** field.  
         - Click the lookup reference and select the sort item from the **Lookup for From**. Highlight the required sort item and click **Select**.  
     - **Range:** Select this option to include a range of items.  
       - Enables the **From** and **To** fields. Do one of the following:  
         - Type the first and last values of the range in the **From** and **To** fields.  
         - Click the lookup reference (if available) and select the sort item from the **Lookup**. Highlight the required sort item and click **Select**.  
     - **All:** Select this to include all available items.  
8. Click **Run Report** on the Toolbar to generate the report.  
   - Select **Open Now** to open the report in a new tab or select **Notify when Complete** to get a notification.  
   - You can open the downloaded report from the **My Reports** page.  

---

### Additional Notes:
- **Total Commission Rate** is calculated from the **Total Sales Amount** and **Total Commission Amount**.  
- The **Total Sales Amount** calculation excludes records with a commission rate of 0%.  
