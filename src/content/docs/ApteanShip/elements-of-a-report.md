---
title: "Elements of a Report"
draft: false
type: Article
---

To create a new report in the Report Designer that will be available in Dashboard > Reports, click the **New Report** button. You can also choose to edit an existing Aptean Ship report by clicking the **Edit** button and then, after making modifications, "Save As" to a new name. This topic covers each part of a report to assist you when configuring new or existing reports.

>[!Tip] To get to the Report Designer, select **Setup** from the top menu in Aptean Ship and then select **Report Designer** from the side menu.
### Report Options


### Add a Grand Total Footer


A quick way to create a report grand total at the end of the report is to check the "Enable Grand Total Footer" check box. This will add a grand total to the footer. Note that if you define a footer in your report, this option will be ignored.

![](assets/images/aptean-ship-reports-designer-2-2.png)
### Group Your Data


You can organize your report by selecting the fields into which you want to group data. Shipments with the same value defined by the "Group By" field will be grouped together in the report.

![](assets/images/aptean-ship-reports-designer-3.png))
### Create Secondary Groups


Groups can be nested so that you can easily identify the relationships among the groups and find the information you want quickly. You can also create subgroups by enabling the "Secondary Group By Fields" option and selecting the shipment fields to group.
### More Customization


Use the Custom Formulas field to further customize the report using your own JavaScript or using the examples provided in the dialog box.

>[!Tip] **$data variable:** Data is passed to the formula in the $data variable. For Custom Formulas in the Header or Footer, the $data variable will be an array of shipments. For Custom Formulas in the Body, the $data variable will be a single shipment. Click the **Formula Examples** buttons to see examples of this in practice.

We have provided the following predefined functions to help you compose Custom Formulas:
- ReportUtils.get($data, path):
    Returns the value of 'path' in a shipment. For an array of shipments, this method will return an array of values for 'path' for all shipments.
- ReportUtils.first($data, path):
    Returns the first value of 'path' in a shipment. For an array of shipments, this method will return the first value of 'path' for the first shipment.
- ReportUtils.sum($data, path):
    Returns the sum of all values of 'path' in a shipment. For an array of shipments, this method will return the sum of all values of 'path' for all shipments.
- ReportUtils.toDate($data, path):
    Formats the value of 'path' in a shipment to MM/DD/YYYY. For an array of shipments, this method returns a comma delimited string of the dates defined by 'path' in all shipments.
- ReportUtils.combine($data, path):
    Returns a comma delimited string of all values defined by 'path' in the shipment. For an array of shipments, this method returns a comma delimited string of all values defined by 'path' in all shipments.
- ReportUtils.toCurrency($data, path):
    Returns a sum of fields defined by 'path' in the shipment, formatted as a dollar amount. For an array of shipments, this method returns a sum of fields defined by 'path' in all shipments, formatted as a dollar amount.
- ReportUtils.toWeight($data, path):
    Returns a sum of fields defined by 'path' in the shipment, formatted as a weight. For an array of shipments, this method returns a sum of fields defined by 'path' in all shipments, formatted as a weight.
- ReportUtils.hasOption($data, option, isPackOption):
    Returns true if the shipment has the ShipmentOption 'option' enabled on it. Set 'isPackOption' to true to check if a package on the shipment has the option enabled. This is not intended to be used on an array of shipments.


### Filters


You can further narrow down report results by selecting filters. The filter values can be modified and saved in Dashboard > Reports as Variations.

>[!Tip] **Locking Filters:** If you don't want users to be able to change or add filters in Dashboard > Reports, check the Lock Filter option when adding a filter. This will prevent any change to the filters unless edited in the Report Designer.

![](assets/images/aptean-ship-reports-designer-4.png)
### Remove Redundant Data


When the "Enable Distinct Shipments" option is checked, shipments containing duplicate data presented in the report will be filtered out.

![](assets/images/aptean-ship-reports-designer-5.png)
### Data Optimization


Data is optimized when you summarize it and display it in the best way possible. Aptean Ship Reports are automatically optimized to get only the data that is needed. Sometimes, the optimization logic can potentially be incorrect. If your report is missing data, select the "Disable Optimization" option.

![](assets/images/aptean-ship-reports-designer-6.png)
### Report Content


### Add a Header


To add a Header to the report table, click in the cell and select the **H**.

![](assets/images/aptean-shipping-software-reports-7-1.png)
### Add a Footer


To add a Footer to the report table, click in the cell and select the **F**.

![](assets/images/aptean-shipping-software-reports-8-1.png))
### Add Data


Now it's time to add the data you want to present in the report. Click inside the cell where you want to add the data and select the **Edit Cell Properties** button.

![](assets/images/aptean-shipping-software-reports-5b-1.png)


In the Data Properties dialog, configure the data to insert by selecting the Data Type, Data Value, and Data Format. You can also add some formatting by selecting Bold, Underline, or Bottom Border.

![](assets/images/aptean-shipping-software-reports-5c-1.png)
### Row Properties


The Row Properties button allows you to define the Band Types that will appear in the report. A Band is a specific row on the report table, used to define how to render report controls that belong to it, their rendering order and how many times they are rendered.

Available Bands are Line Items, Orders, Packs, and Pallets. For example, if you selected the Line Items Band and a shipment has three items, the band would repeat 3 times, once for each item. Bands of the same type that are adjacent to one another will group the rows together while repeating.

To edit the row properties, click in a cell and select the **Edit Row** button. The dialog allows you to specify the Band Type and the maximum number of records to include in the band. If you leave the default setting, which is "0", this allows for an unlimited number of records to be included.

![](assets/images/aptean-shipping-software-reports-14-1.png)

>[!Note] Bands are only color coded in the Report Designer. The generated report will not display these colors.
### Formatting Options


Typical formatting options are available from the toolbar or by clicking in a cell.

![](assets/images/aptean-shipping-software-reports-11-1.png)
### Links, Images and More


* The **Insert Link** button allows you to add a URL and Title to a cell, which you can configure to open in a new tab.
![](assets/images/aptean-shipping-software-reports-15-1.png)
You can also click the **Choose Link** button to insert a predefined link such as Froala, Google, or Facebook.

    ![](assets/images/aptean-shipping-software-reports-16-1.png)
* Click the **Insert Image** button to add an image to the report. Images can be added by uploading a file (or dragging and dropping to the image box) or by URL. You can also click Browse to select a Letterhead or Signature image that you've already added under Setup > Company > Edit Address > Images. \
![](assets/images/aptean-shipping-software-reports-17-1.png)
* Tables can be added to a report by clicking the **Insert Table** button and selecting the number of columns and rows to include. Note that a report can only contain one table. If a table already exists in the report, add a new report.

    ![](assets/images/aptean-shipping-software-reports-18-1.png)
* Be sure to explore the many options that are available on the toolbar, such as adding a video, special characters, emoticons, and other formatting options.


