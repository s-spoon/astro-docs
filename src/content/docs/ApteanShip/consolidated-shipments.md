---
title: "Consolidated Shipments"
draft: false
type: Article
---

Aptean Ship supports consolidating shipments so that you can ship multiple shipments, each with different final destinations but going to the same distribution center, under a master Bill of Lading.

The consolidated shipment is called the "master shipment" and the individual shipments it contains are called "child shipments". Though the child shipments can be both freight and parcel shipments, the master shipment must be a freight shipment.
## Distribution Center Codes


Each distribution center is identified by a Distribution Center Code (DC Code). The DC Codes can be entered per customer in Maintain Customer, entered "on-the-fly", mapped from the source interface, or imported. DC codes are assigned to child shipments and then used to locate and add these shipments to the master shipment.
### Location Attribute for Customers


In Maintain > Customers, the Customer record has a location attribute for Distribution Center. Each customer address can be assigned to one distribution center/DC code. When you enter DC codes in Maintain Customers, Aptean Ship saves them to an internal list and uses them to populate the Consolidation Code drop-down list when creating consolidated shipments. DC Codes are limited to 10 characters.

If you plan to use the Shipment Consolidation feature often, you can set up the distribution centers for all customers now in order to make shipment consolidation easier when you ship.
## Set Up DC Codes


1. In Maintain > Customers, edit the Customer record.
2. Under the Address, in the Location Type field, select **Distribution Center**.
3. Enter the DC Code and save the Customer record.


    >[!Tip] For more information about DC Codes, see Maintain Customers > [Location Type](customer-information.md#location-type-and-attributes).

 
## Consolidation Option


When shipping, the Consolidation option appears under Shipment Details. This option allows you to specify the distribution center where the child shipment will go. It has a drop-down list that is populated by the DC Codes that were added in Maintain > Customers > Location Type > Attributes.

![](assets/images/maintain-customers-9.png)

There are a couple of ways to populate the Consolidation Code field.
* **Select an existing code**.
You can select from the Distribution Center Codes you added in Maintain Customers.

![master-bol-1](assets/images/consolidation-master-bol-1.png)

* **Type in a new DC Code on-the-fly**.
You can select other in the Consolidation Code field and then type the DC Code into the "Other" field. There is one thing to remember when entering DC Codes manually, and that is --  for DC Codes not entered through Maintain Customers, you will need to also manually enter the DC Code when creating a consolidated shipment ... it can't be selected from the Consolidated Code drop-down list. So if you type a new code here, then you'll have to type the DC code into the Consolidation Code field to find shipments assigned to that code when creating the shipment.

![master-bol-2](assets/images/consolidation-master-bol-2.png)

* **Map the Consolidation Code field**.
You can automatically populate this field by mapping it to a field from the source interface or by mapping it to a fixed value in Setup > Source Interfaces > "Your Interface" > Interfaces. Under Shipment Options, select Consolidation Settings and then Consolidation Code to map it.

![master-bol-3](assets/images/consolidation-master-bol-3.png)

* **Import the DC Codes**.
You can also use the Import Data feature to [import DC Codes](import-dc-codes.md) with the customer record in Maintain > Customers.


## Create a Consolidated Shipment


Aptean Ship simplifies consolidated shipments by automating the process for you. You create and process the child shipments as you normally would, but you assign a DC Code to the shipment. When you create the master shipment, Aptean Ship will find all shipments based on the DC Code so you can easily add them to the consolidated shipment.

1. For each child shipment, select the Consolidation option and select or type in the Consolidation Code. Ship/Process the shipment, and any other shipment you want to include in the master shipment, using the same Consolidation Code.

2. On the Shipments page, select the **New Consolidated Shipment** button.

![consolidation-master-bol-4](assets/images/consolidation-master-bol-4.png)

3. Select the DC Code from the Consolidation drop-down list. If you entered the DC Code on-the-fly, type it in.

![consolidation-master-bol-5](assets/images/consolidation-master-bol-5.png)

4. Select the shipments to add to the consolidated shipment and click **Create Consolidated Shipment**.

![consolidation-master-bol-6](assets/images/consolidation-master-bol-6.png)

5. The new master shipment is created and opens in the Shipment Editor. All packages from the child shipments are added to master shipment. You can modify and rearrange the packaging and pallets in the Packaging section. At this point, the child shipments are associated with the Master Shipment ID, shown at the top of the shipment screen. The master shipment has been saved as a draft. If you were to exit the shipment before processing, you'll notice the child shipments will not be available to ship.

6. Under Shipment Details, the **Consolidation** option will be enabled and the DC Code you selected is populated. To view the child shipments, you can select the Consolidation option and click "Show Child Shipments" to launch the Search for Shipments dialog populated with the child shipment detail.

    >[!Note] If you make changes to the child shipment, or if you delete a child shipment, the change will not be reflected in the master shipment. The child shipment becomes part of the master shipment once the master is created. For more information about deleting shipments, see [Deleting a Child Shipment](consolidated-shipments.md#deleting-a-child-shipment).
    
    ![master-bol-12-1-as](assets/images/consolidation-master-bol-12-1-as.png)

7. Continue to process the shipment as you would any freight shipment; the BOL will print when you **Ship/Process** the shipment.

![master-bol-9-1-as](assets/images/consolidation-master-bol-9-1-as.png)


## Exit Consolidated Shipment Mode


When you are done processing consolidated shipments, you can exit Consolidated Shipment Mode by clicking Cancel on the Shipments page.

![consolidation-master-bol-7](assets/images/consolidation-master-bol-7.png)

## Master/Child Shipment Indicators


After a consolidated shipment is processed, the shipments will be identified as either a Master Shipment or Child Shipment. This indicator can be found under Options when you expand the shipment detail in Shipments.

![consolidation-master-bol-10-1](assets/images/consolidation-master-bol-10-1.png)

### Viewing Master/Child Shipments


To view associated master/child shipments, select to View the shipment and then under the Shipment Details section, click the "Show Consolidated Shipment" to view the master shipment, or "Show Child Shipments" to view the child shipments.

![consolidation-master-bol-14](assets/images/consolidation-master-bol-14.png)

### Deleting a Child Shipment


Because the child shipment becomes part of the master shipment, the master shipment will retain the contents of a child shipment even if you delete that child. The original child shipment is disconnected from the master once you add it to a master shipment. To delete a child shipment, you should delete the master shipment and recreate it without that child shipment.

