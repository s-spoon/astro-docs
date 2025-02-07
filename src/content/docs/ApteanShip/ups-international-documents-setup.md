---

title: "UPS International Documents Setup"
draft: false
type: Article

---

UPS International documents can be selected in UPS Account Setup and enabled in Printing Profiles. The selected documents are requested from UPS and returned collectively in one PDF document, which Aptean Ship can then print.

Follow these setup steps to configure international documents to print when you process a UPS International shipment.

### Select the documents to print in UPS Account Properties

1. Select Setup > Carrier Interfaces > UPS and click the **Accounts** heading.

2. Select the account and click **Edit** (or double-click the account).

3. Click the **Settings** heading and scroll down to the International section.

4. Place a check mark next to the documents that you want to print. When you are done, click **Save**.

	* CN22 is for Sure Post and Mail Innovations only.

	* If you select to print the Packing List, there must be at least one item in each package.

		![ups-intl1](assets/images/ups-intl1.png)

### Enable the International Documents

1. In Aptean Ship, select Setup > Printing & Scale.

2. Select the Printing Profile you want to use and click the **Edit** button.

	![aptean-ups-1](assets/images/aptean-ups-1.png)

3. Click "Show all documents" and start typing "UPS International" into the Search field.

	![aptean-ups-1-1](assets/images/aptean-ups-1-1.png)

4. Enable UPS International Forms, select the Printer, and configure the document settings. For more information about this dialog, see [Document Settings](printing-profiles.md#documents).

	![aptean-ups-2](assets/images/aptean-ups-2.png)

5. Click **OK** and **Save all changes**.


### UPS Certificate of Origin Forms

With UPS Web Services, Aptean Ship prints the Certificate of Origins forms from UPS. Note that when designating the Certificate of Origin for items in a shipment, you cannot have different Certificate of Origin types on the items.

If you need to mix CO types, you can print the Aptean Ship Certificate of Origin forms, which you can also enable from Setup > Printing and Scale > Printing Profile (Edit) and select the Certificate of Origin document.

