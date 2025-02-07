---
title: "International Documents"
draft: false
type: Article
---

In this topic, we'll talk about the different components that require setup in order to print your international documents successfully.

## The Connector

The Aptean Ship Connector is needed to print to local printers. If your printers are not shared from a central server, install the Connector on each machine. Or, if the printers are shared, you can install the Connector on one machine to act as a print server. Once installed, set up your printing configuration on the [Printing tab] of the Connector(s).

>[!Tip] **Connector Information** <br>Click [here](aptean-ship-connector-installation.md) for more information about Aptean Ship Connector installation.

## Printers

If you haven't done so already, add your printer(s) in Aptean Ship from Setup > Printing & Scale > Printers and associate each one with a Connector. Read the [Printers](printers.md) topic for information on how to do that.

## Printing Profiles

With the Connector(s) and Printer(s) set up, you can now create or edit the Printing Profile(s) you use to print. You'll need to set up at least one Printing Profile before you can enable and configure international documents. Printing Profiles are comprised of an associated Connector, Printer, and documents. You can set profiles up in Setup > Printing & Scale > Printing Profiles. For more information, see [Printing Profiles](printing-profiles.md).

## Printed Documents

International documents that you'll be printing should be set up within each of the Printing Profile(s) you'll be using for international shipments.

Under Setup > Printing & Scale, go to Printing Profiles and edit the Printing Profile that you use for international shipments. Type a keyword for the document you want to set up; for example, type “Origin” into the Search field to display the available Certification of Origin documents.

![shipping-software-international-coo-1](assets/images/starship-shipping-software-international-coo-1.png)

Enable and configure printing options for each document you want to print. For more information about configuring documents, see [Document Settings](document-settings.md).

![shipping-software-international-coo-2](assets/images/starship-shipping-software-international-coo-2.png)

####         Request Documents from UPS

If you want Aptean Ship to request and print the UPS version of international documents, make sure that you also enable those settings in your account setup.

For UPS, edit the UPS account, and enable the documents in the International section on the Settings page.

![software-international-docs-ups](assets/images/starship-shipping-software-international-docs-ups.png)

### Paperless Documents

Aptean Ship also supports paperless documents. These documents are enabled in the Carrier Interfaces setup for the carrier. See [Paperless Trade Documents](paperless-trade-documents.md) for more information.


>[!Tip] **Document Information** <br>Want to know more about the Commercial Invoice and/or Certification of Origin? Check out the links below:
>* [Commercial Invoice](commercial-invoice.md)
>* [Certification of Origin](certification-of-origin.md)


