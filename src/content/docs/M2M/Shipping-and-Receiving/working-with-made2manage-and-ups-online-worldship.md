---
title: "Working with Made2Manage and UPS OnLine WorldShip"
draft: false
type: Article
---

Shipment information originates on the **Shipping (SHIP)** page in Made2Manage when you create shippers, and is based on the options specified on the **UPS Setup (UPSSET)** page. After creating the Made2Manage shipper , you must export the shipper information from Made2Manage, and then import it into UPS OnLine WorldShip. After UPS processes the shipment, that information is exported from UPS, and then imported back into the Made2Manage shipper.

There are two ways to export shippers from Made2Manage: **keyed** and **batch**. You should use the method that works best for your company’s shipping operations.

- Keyed export automatically looks for new shippers that meet the specified export criteria and exports the information out of Made2Manage. The **ProcessUPS** service is executed based on the specified intervals to export shippers and import shipping information from UPS. No other user action is required.

- Batch export enables you to select only the shippers you want to export from a list of all eligible shippers on the **Records Exported to UPS (UPSOUT)** page.

    Once records are exported from Made2Manage, they must be imported to UPS. If you import a Made2Manage shipper into UPS that contains more than one package, you must perform the following:

  1. Determine which reference field you mapped to the **fshipno** field in the Made2Manage **UPSMAST** table.

        See the **UPS Installation & Setup Guide** for information about import and export field mappings.

  2. After importing the shipper into WorldShip, open the shipper in WorldShip.

  3. Click the **Reference** tab.

  4. Verify that the Made2Manage shipper number appears in the **Reference** field that is mapped to the **Fshipno** field in the **UPSMAST** table. Select the **Use on all packages** check box that displays above that field.

After shipments are processed in UPS, the information can be returned to Made2Manage. There is a separate process that updates the shipper with the UPS information. If you want to control when information is applied to shippers, you can use the **Records received from UPS (UPSIN)** window.

## To work with Made2Manage and UPS OnLine WorldShip:

1. Configure the **UPS Setup (UPSSET)** page to control the flow of shipping information between Made2Manage and UPS:



2. Check the shipping method:



3. Exclude existing shippers from future UPS exports:



4. Export selected shippers to UPS OnLine WorldShip using the **Records Exported to UPS (UPSOUT)** page:



5. Import UPS shipment information to Made2Manage shippers using the **Records received from UPS (UPSIN)** page:



6. Optionally, you can use the **PROC** window > **ProcessUPS** processor service to process imports and exports:
   


    See the **UPS Installation & Setup Guide** for more detailed information on setting up the UPS Interface.

​