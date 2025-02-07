---  
 
title: "Print Labels Using BarTender"  
draft: false 
type: KB Article
 
---
## About this Guide

This user guide is to understand the print labels using the BarTender software.

The guide is written for the users who perform label printing using BarTender with data present in Aptean EAM.


## Introduction

The BarTender software gives you the tools to design labels and templates, configure and connect to data sources and different systems, and launch print commands from any system or device.

We are using the Seagull Scientific **Bartender Professional Edition** as part of printing labels in Aptean EAM.

For Installation of the BarTender, refer the official website. <https://www.seagullscientific.com/>.

In the software, you need to navigate to **Downloads** and select the 30 days trial option to install BarTender Latest version with the product key.

The installation and registration will be part of the standard procedure as like any other software and it is a prerequisites for using Aptean EAM Item print.

### BarTender Designer Application

-   Once the installation has been completed, the user needs to open the **BarTender Designer App** from the start menu.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT1.png)

-   The Initial UI looks as below and it will prompt the user to select a Blank template or the existing template from the library.

    > [!Note]  
    > For the own customized template, it is recommended to select the **Blank**
    template and proceed **Next**.

     ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT2.jpeg)

    > [!Note]    
    > At this moment, Users can click on Finish to directly land on the template
    creation page or he/she can select Next and then customize the print
    settings as per the options provided prior to land on the template
    creation page. 

-   Clicking on **Next** will lead to printer selection page as below and default it will be set to **Print to pdf** based on your printer setting in local computer. It will also show the Document page setup, i.e. Document Properties and Printer properties and the list of printers, if the local computer is tagged to any printer as below image.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT3.jpeg)


    > [!Note]  
    > As part of the initial testing, it is always recommended to use the print to pdf
    as we can change the print-preference at the later point of time, when the
    template will ready to be printed.

     ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT4.jpeg)

-   User can select the predefined stocks or can specify the custom settings based on the requirement or can skip this step by clicking on **Finish**.

-   Clicking on **Next** will give options for the user for selecting of its own BG Color, Image or picture and a flexibility to check the preview by selecting Next again. User also can skip this without selecting any checks and move forward as below:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT5.jpeg)

-   At this page, user will get one option to have a quick review of its selection so far as part of all the previous steps like mentioned in above pic under the **Review** section.
-   User can go back to do some changes at this point of time or can click on **Finish** to land upon the **Actual Template** creation page.

-   Click on **Finish** to move ahead.

-   The BarTender Template Designer page looks as below with the default template name as document1.btw. Here, **.btw** is the extension for the BarTender templates.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT6.jpeg)

### Extracting the Label Print Data From Aptean EAM Query

You can design and print barcode labels using any barcode font type with the help of BarTender software.

In the document, we have taken inventory labels as an example and created an out-of-the-box query (Items_BarTender) in Query Wizard for Inventory label data. This label data can be very basic - for example, item \#, description, bin, manufacturer/manufacturer serial.

The approach explained below will work for any label that needs to be printed.

You can perform the following to extract the Label Print Data From Aptean EAM Query:

-   You can create a query in Query Wizard with required numbers of columns which needs to be printed. You can select that query in Item Search wizard and click on search to get the list of results.

-   Aptean EAM provides an option to export the query to excel, once the query is executed as shown below:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT7.jpeg)

-   Clicking on **Export** will export the Query results with the Column names to an excel file. You must have at-least one record in the query to use Export function.

-   Now open the Excel file, and we need to see the number of columns available in that query.

-   Let’s assume the Exported query came like below and the user had added one more extra column Barcode towards the end in column.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT8.jpeg)

-   Now, user needs to save this Excel (in .xlsx format) in the same computer where the BarTender Designer software has been installed for further Data mapping communication.

### Design Templates in BarTender

Below, we are giving examples of designing templates. Refer to the BarTender documentation for more information on designing template for your business. Aptean EAM’s mobile scanning solution can read barcode of two types. Therefore, your barcode should be configured for one of these two options:

1.  Barcode which contain the Item ID
2.  Barcode which contains the Item ID and the bin \# Perform the following to design templates in BarTender:
    -   Let’s open the BarTender design software which was already opened with the default blank template previously.
    -   User need to select the number of boxes as below as per his/her own convenience and look and feel of the template.

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT9.jpeg)

    -   In the above pic, user needs to select the **Shapes** icon as pointed and then select the box as per his/her own choice.
    -   Here, the second icon that is oval shaped box has been selected as pointed/marked above.
    -   User needs to drag the mouse and re-size the box and can fit the box to the window as per own convenience.
    -   User also can copy and paste through Keyboard actions multiple times and the **measurement scale** available in this tool will automatically guide the user to place the objects to maintain the alignment.

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT10.jpeg)

    -   User can also add the BarCodes and select the type of BarCodes and can paste it on the template and re-size it. Used the Barcode version code39(Full ASCII) as part of this documentation.

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT11.jpeg)

    -   User needs to count the exact number of columns (except the manually added BARCODE column) and has to create exactly same number of text fields inside the template.
    -   User can select the text field type as **Normal** or **Normalwrapped** on its own convenience.
    -   User can copy paste the same field as per the excel sheet.

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT12.jpeg)

    > [!Note]  
    > The BARCODE field has been dragged inside the second box for the better
look. User can customize any such design as per his/her own convenience.

    -   The Next step is to rename the Labels with the same name as the Column names mentioned in the excel sheet. However, the order of the columns can be anything and not exactly the same as on the excel sheet.
    -   Now, for these above 3 fields, users need to add 3 more fields for the values and can fill the value for the 1st row of the excel sheet as shown below:

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT13.jpeg)

     > [!Note]   
     > The below box will be filled by Barcode with the function column which will concatenate the columns.

    > [!Note]  
    > One thing to be noticed that the columns which contains binary fields like 1 or 0 flags, has to be mentioned as Yes or No. As there is a challenge in BarTender to add check box.

    -   The user needs to modify the excel sheet manually as Yes or No wherever it is 1 and 0.
    -   Therefore, modified the excel sheet as below: All the flags has been replaced with Yes and No.

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT14.jpeg)

    -   Now, since the template is ready, lets save the template and it will automatically store it in the default path as shown in below picture:

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT15.jpeg)


### Database Connection Setup

-   User needs to perform the connection setup now between the excel sheet and the template which was created above.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT16.jpeg)

-   User has to select the type of Database as Excel and proceed next.

-   User need to select the specified file in the next window as shown below and proceed next.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT17.jpeg)

-   User needs to select the automatic field detection as recommended and he/she can also select the option of ignoring blank records if required, but it is not recommended.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT18.jpeg)

-   In the next **select table** window where user will get the option to either select specific records by passing the Excel Index numbers or he/she can ignore it and complete list of records will be displayed.
-   User also can select from the worksheets if the excel sheet has multiple worksheets from the drop down.

-   The first row should always be checked as it has the list of column names .

-   User can also preview the list of records in this same window.

-   Refer the below pic and then user can proceed.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT19.jpeg)

-   Once this setup is done, user needs to proceed and Tables window will appear asking user for a confirmation if this is the only worksheet or he/she needs to add any other? Mostly there will be one worksheet for each export query in excel sheet so user can select the second option **No, I am finished** and can proceed to finish.

     ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT20.jpeg)

-   Once user will be finished with the above table setup, then connection property window will appear and user has to select **OK** to complete the connection setup.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT21.jpeg)

-   Clicking on OK will be landed to the template page where the Labels and Values are defined.

### Data Mapping from Template to Excel Sheet

-   Now, user needs to map the data and the column name of the excel sheet to the fields created in the template.

-   User needs to select the Value field and right click on it and click on property to open the **Text properties** window as below:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT22.jpeg)

-   Now, select the Embedded data to Database and click on next as shown below:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT23.jpg)

     ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT24.jpeg)

-   Now in the Data Field mapping window, as per the Data select the column name which will be auto filled in the drop down.
-   User needs to select Bin Type as the Field name since the Data is Primary and click on **Finish**.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT25.png)

-   Once clicked on Finish, one the next screen he/she has to click on close.

-   Now, for all the remaining fields, user has to do the same step as above.

### Barcode

Now, to add a Barcode and concatenate more than one columns to that Barcode, perform the following:

-   From the left panel, select Data sources, select **Visual Basic Script** and drag and drop in the 2nd box, where user wants the Bar Code to be printed.

-   As soon as the user will drag it, a new window will appear (vb editor) as below:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT27.jpeg)

-   Now, expand the **Database Fields** and just double click on the fields which you want to concatenate on the barcode print and pass them with one **&** for concatenation as shown below:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT28.jpeg)

-   Now, close this window and you will get the Field with concatenated value as below:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT29.jpeg)

-   Right click on this field and tag it with a name as below in property:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT30.jpeg)

-   You can also cross verify the output and spacing by passing blank space.

-   Now, Add a Barcode and right click on the Barcode and select the below field (linked to an existing named datasource) and proceed with Next.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT31.jpeg)

-   As soon as user will hit on Next, the name of Datasourse will be displayed which you have named for the concatenated columns.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT32.jpeg)

-   Click on Finish and the Barcode will show the names in single code.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT32%20(2).jpeg)

### Print PDF

-   User can click on the Print now and do the printer settings with layout as part of standard print settings:

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT33.jpeg)

-   The list of Items will be printed as available in the excel sheet.

    ![](../assets/kb-articles/Audit%20Tracking_&_PLT/PLT34.jpeg)

