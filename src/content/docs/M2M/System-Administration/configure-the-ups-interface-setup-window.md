---
title: "Configure the UPS Setup (UPSSET) page"
draft: false
type: Article
---

Use the **UPS Setup (UPSSET)** page to configure the flow of shipping information between Made2Manage and UPS OnLine WorldShip.

### To configure the UPS Setup page

1. Open the UPS Setup (UPSSET) page.

    1. Select **Production Management** > **Production Transactions** > **Shipping** > **UPS** > **UPS Setup**.

    Or

    2. Search for **UPSSET** or **UPS Setup** in the **Navigation box** and then select **UPS Setup**.

    **UPS Setup (UPSSET)** page appears.

2. In the **UPS Interface Export Mode** section, set the export mode:

    - **Keyed Import**: Schedules automated exports of shippers from Made2Manage using the **ProcessUPS** command in the **M2M Processor Service Configuration (PROC)** page. When you use this option, previously exported shippers remain in the export table. Use this export mode if you use **Keyed Imports** in **UPS**.

    - **Batch**: Exports selected shippers from Made2Manage using the **UPSOUT** page. When you use this option, the export table only contains the shippers selected for the most recent export. Use this export mode if you use **Batch Imports** in **UPS**.

        >[!CAUTION]You should not switch back and forth between export modes. Because each export stores data differently, switching export modes could result in the loss of exported shipper data.

3. In the **Shipper Information Is Available For Export At** section, specify when to export shipping information to UPS:

    - Click **Shipper Creation** to export shipping information after you create shippers.

    - Click **Shipper Confirmation** to export shipping information after you confirm shippers.

    >[!NOTE]A shipper is considered confirmed when you change its status to shipped.

4. To enable Quantum View Notify Shipment Option in UPS for M2M Shipments:

    1. Select the **Turn On Quantum View Notify Shipment Option In UPS For M2M Shipments** check box.

    2. In the **QVN Subject** field, type the Quantum View Notification Subject line that you want to appear on every email that is generated through the **UPS Quantum View Notify Shipment** option.

5. In the **Import** section, specify the information you want to import back to the Made2Manage shipper after processing the shipments in UPS:

    1. Select the **Apply UPS Calculated Shipment Charges to Shipper** check box to apply the UPS shipment charges to the shipper. When you post the completed UPS shipment to the shipper, the UPS shipment charges will replace any existing freight charges.

        >[!TIP]You must also map the **UPS Shipment Information** table and **Total Shipment Charge** field to the **Made2Manage upsin** table and **fncost** field. For more information, see the **UPS Interface Installation and Setup Guide**.

    2. Select the **Apply Number of Boxes to Shipper** check box to import the number of packages from UPS. When you post the completed UPS shipment to the shipper, the number of packages from UPS will replace any amount previously stored in the **No of Boxes** field.

        >[!TIP]You must also map the **UPS Shipment Information** table and **Number of Packages** field to the **Made2Manage upsin** table and **fnboxes** field. For more information, see the **UPS Interface Installation and Setup Guide**.

    3. Select the **Add UPS Calculated Weight to Shipper** check box to transfer the shipment's weight from UPS. When you post the completed UPS shipment to the shipper, the UPS shipment weight will be added to any amount previously stored in the **Ship Weight** field.

        >[!TIP]You must also map the **UPS Package** table and **Weight** field to the **Made2Manage upsin** table and **fnpkgwt** field. For more information, see the **UPS Interface Installation and Setup Guide**.

6. On the **Toolbar**, click **More Actions**.

7. Select **More Actions** \> **Actions** \> **Exclude Existing Shippers** to exclude the shipper records whose shipments are complete from the list of shipments available for export to UPS. Normally you will only do this once, but it is always available if necessary. For more information, see the  ‘**Use the UPSOUT window to exclude existing shippers from future exports to UPS**’.

8. On the **Toolbar**, click **Save** to save the settings.

    After you configure the **UPS Setup** page, the next step is to check the shipping method. See the **Related Information**.

​