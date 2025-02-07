---
title: "Ship M2M Shipments"
draft: false
type: Article
---

This section contains general information for manually shipping against Made2Manage Shipments with a Shipped status. More information about parts of the Ship screen and general shipping can be found [here](process-a-parcel-shipment.md).

### 1. Select the Shipment

On the Rate/Ship screen, select the Shipment. You can type in the Shipper Number or search for a Shipment using the available filters. You can also select a batch of Shipments to ship. Not able to search? See this [note](ship-m2m-shipments.md#notes).

![m2m-ship-1](assets/images/m2m-ship-1.png)

>[!Tip] Filters" <br>If using filters, click Add Filter and then enter your specific criteria. Certain filters also allow you to select from a list of existing values. For more information about filters, see [Source Documents Search](searching-in-aptean-ship.md#source-documents-search).

Click the **Create Shipment** button or click the truck icon in the **Shipment** row to create a new shipment.

![m2m-ship-2](assets/images/m2m-ship-2.png)

### 2. Select the Shipping Method

If the Carrier and Service are not populated, select the shipping method - **Carrier and Service** in the **Transportation** section. You can also [Rate Shop](rate-shopping.md) to select a carrier and service based on the best rate.

You can set up field maps to automatically import the correct carrier and service with the Shipment from Made2Manage.

>[!Tip] For more information about automating Carrier and Service import, see [Ship Via](mapping-m2m-fields.md#ship-via) in the Made2Manage Field Mapping topic.

![m2m-ship-3](assets/images/m2m-ship-3.png)

### 3. Pack Items into Packages


By default, in the Packaging section, Aptean Ship will pack loose items into one default package. You can also pack line items (if not packed) by dragging loose items into packaging. Click here for more information about [packaging settings](ship-m2m-shipments.md#notes).

>[!Tip] Packaging Scenarios <br>Aptean Ship can automatically pack your items based on packaging scenarios that you can enter manually for items that you ship often. Aptean Ship also has a feature that you can enable that allows it to automatically learn your packaging scenarios when you save shipments. You can learn how to set up packaging scenarios in [Inventory Item Packaging](inventory-item-packaging.md).

![m2m-ship-4](assets/images/m2m-ship-4.png)

Then, enter the weight of the first box or use an electronic scale to read the weight in the **Packaging** section. Repeat the weighing process for each package.

![m2m-ship-5](assets/images/m2m-ship-5.png)
 

>[!Tip] More information about [Packing Line Items](packing-line-items.md).

You can also use Aptean Ship’s Packing Assistant, which simplifies shipping by providing a graphical, step-by-step means of classifying and packing items. If enabled in your [settings](ship-m2m-shipments.md#Notes), it will appear automatically when you ship against a Shipment. You can also select **Switch to Packing Assistant** on the **Ship** screen.

For Freight shipments, Aptean Ship populates the Bill of Lading using line item and packing information. [Bill of Lading](bill-of-lading.md) settings in **Freight Preferences** allow you some flexibility regarding how Aptean Ship converts item packaging information into the Bill of Lading body. Typically, similar items with the same class are grouped under one general description. The commodity description may be edited on the BOL tab. You can also manually enter the BOL.

### 4. Enter Shipment Details

Enter or select any **Shipment Details**, such as Shipment Options, and any other shipment information that wasn't populated.

![traverse-ship-5](assets/images/traverse-ship-5.png)

### 5. Finalize the Shipment

### Rate

The shipment should be automatically rated but if you change shipment details or the Carrier/Service, you can also rate the shipment with the currently selected carrier by clicking **Rate** from the menu or by pressing **Ctrl + Alt + R**. To rate shop, select **Rate Shop** from the menu or press **Ctrl + Alt + S** and select a carrier from the **Rate Quotes** section.

![traverse-ship-8](assets/images/traverse-ship-8.png)

### Process or Save

Click the **Ship/Process** button to process the shipment. You can also select **Shipment > Ship/Process** or hit **F3**. If you set up the bill of lading and/or labels to print automatically, they are now generated. Aptean Ship also performs write-back of Freight and Notes to Made2Manage.

To save a shipment without processing it, select **Shipment** > **Save** or press **Ctrl+S**. This action saves the shipment as a draft, but does not process the shipment, request pickup from the carrier, automatically print shipping documentation, or write back any information to Made2Manage. The shipment is essentially saved as a draft so you may open it and make changes.

### Post Processing


After you process a shipment, you can see document and label printing details by clicking the **Printing Notifications** button.

![traverse-ship-9](assets/images/traverse-ship-9.png)

To see recent shipment details, click the **Recent Shipments** button.

![m2m-ship-6](assets/images/m2m-ship-6.png)

Or, you can view all processed shipments, batches and packages by clicking **Shipments** on the left menu.

![m2m-ship-7](assets/images/m2m-ship-7.png)

### Notes

* The documents that display on the **Rate/Ship** > **Shipments** screen can be affected by the Made2Manage Option: [Disable Search of Source Documents](m2m-options.md#disable-search-of-source-documents).

* The Packing Assistant is enabled in **Setup** > **Preferences** > **Freight** > [**Packing Assistant**](packing-assistant.md) (for Freight) or **Setup** > **Preferences** > **Parcel** > [**Packing Assistant**](packing-assistant.md) (for Parcel).

* The setting "When importing orders, pack all loose items into default package(s)" controls the automatic packing of loose items into your default packaging. For Parcel, see the setting [here](parcel-packing-preferences.md#when-importing-orders-pack-all-loose-items-into-default-packages). For Freight, see the setting [here](freight-packing-preferences.md).

* To set up packaging and packaging defaults, see [**Maintain** > **Packaging**](packaging-overview.md).


 

