---  

title: "Enable Cloud Printing in EAM"  
draft: false 
type: Article

---

To enable cloud printing in EAM, perform the following steps:

  1. From the left panel, navigate to **Setup** > **Setup** **Options**. 

  2. In the **Setup** **Options** panel, click **Cloud** **Printing**.

      ![](../assets/cloud-print/IC/BC-icons/Installing%20and%20Activating_2.jpg)


  3. From the right panel, turn on the **Enable cloud Printing** toggle button. 

  4. In the **AccountId** field, enter the account id. 

  5. In the **Account Key** field, enter the API key. 

  6. Click the **SETUP ACCOUNT** button. All the available physical printers installed on the agent computer will be displayed in the **Printer List** section. 

  
>[!Note]
>The **Cloud Printing** option will be enabled for Work Management, Requisition, Picklist, and Cycle Count modules. The **Print Labels** option will also be enabled for Inventory module. You can reset the account configured using the **RESET ACCOUNT** button.

>[!Note]
>If a new printer is added to a printer server, restart the Aptean Print service on that server, and then click the RETRIEVE PRINTER LIST button in EAM to get the latest list of printers.

