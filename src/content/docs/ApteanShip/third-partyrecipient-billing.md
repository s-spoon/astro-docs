---

title: "Third Party or Recipient Billing"
draft: false
type: Article

---

This topic is for users that have the Shipping Carrier Integration External Plug-in enabled but still want to be able to bill to a Third Party or Recipient's UPS or FedEx account using the Customer Account. To achieve this, you first set up special Ship Via codes in Acumatica and then map certain Aptean Ship fields to the Ship Via codes you created.

Acumatica only makes the Customer Account field available when the External Plug-in is enabled or "checked". However, when it is checked, Acumatica will use data from the Integrated Carrier to overwrite the tracking numbers that were written back by Aptean Ship. To use the Customer Account number from Acumatica to bill a Third Party or Recipient's UPS or FedEx account without losing the tracking numbers from Aptean Ship, you will need to set up special Ship Via codes in Acumatica as shown in the procedure below. You will then use those Ship Via codes as both the Carrier-Service and Billing Type in Aptean Ship.

>[!Note] We do not encourage customers to utilize this configuration, but if you do need to use the Customer Account field, you can use this process to work around the issues caused by having the Carrier Integration plug-in enabled in Acumatica.

### Step 1. Create Ship Via Codes in Acumatica

In Acumatica, create Ship Via Codes that will represent the billing type(s). Make sure that the "External Plug-In" check box is unchecked. These Ship Via codes will be used as both the Ship Via and the Billing Type in Aptean Ship. We recommend giving the Ship Via codes easily recognizable names. In our example, we used UPSG3rdParty and UPSGRecBilled to indicate these will be used for Third Party and Recipient Billed billing types.

![](assets/images/upsgrecbilled.png)

### Step 2. Map Fields in Aptean Ship

1. In Aptean Ship, go to Setup > Source Interfaces > Acumatica (version) and select the Interface tab.

2. Select the document, either Sales Orders or Shipments.

3. Select Recipient > UPS Account (and/or FedEx Account).

4. Set the Field Mapping Source to "Acumatica Field" and select Customer UPS Account (or Customer FedEx Account, depending on the carrier you are setting up).

5. Next, select Shipment > Carrier Information > Carrier - Service. Set the Field Mapping Source to "Acumatica Field" and select Ship Via from the Sales Orders/Shipments Field.

6. Now set the Value Translations. Locate the Ship Via codes that you previously created. Set them to the corresponding Carrier; for example, set UPSG3rdParty to UPS Ground.

7. Select Shipment > General Information > Billing Type. Set the Field Mapping Source to "Acumatica Field" and select Ship Via from the Sales Order/Shipment Field.

8. Again, set the Value Translations. Locate the Ship Via codes that you previously created and set them to the corresponding Billing Type; for example, set the UPSG3rdParty Ship Via to the Third Party Billing Type, and the UPSRecBilled Ship Via to the Recipient Billing Type.

9. Click Save All to save the mappings.


