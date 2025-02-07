---
title: "Keywords"
draft: false
type: Article
---

This section lists the key words that Aptean Ship recognizes when interpreting input values. Note that Aptean Ship ignores upper/lower case letters when interpreting the input fields.
## Country


Aptean Ship looks at the Country field before interpreting the Ship Via/Service fields.


| Input Value | Interpreted As |
| --- | --- |
| USA, U.S.A., U.S., United States | USA |
| Canada | Canada |
| any other value | Country other than the USA or Canada can be selected from the Country drop-down list. |


## Ship Via


These tables show Aptean Ship's interpretation of the following Ship Via values:

### Carrier

Carrier keywords are used in conjunction with their corresponding domestic and international service and option keywords. Example: Aptean Ship translates UPS & 2ND & AM as UPS 2ND DAY AIR A.M


| Input Value | Interpreted As |
| --- | --- |
| UPS, U.P.S | UPS |
| FDXG, FDX G, FEDEXG, FEDEX G | FedEx Ground |
| FEDEX, FDX | FedEx Express |
| USPS, PARCEL POST, MAIL | USPS |
| DHL, D.H.L | DHL |
| SPEE-DEE | Spee-Dee |
| User-Defined Short Name, User-Defined Long Name | User-defined Carrier 1-10 |


### Contract Services


| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | STANDARD |
| 100, HWT, MWT | UPS HWT  FDXG MWT |


### UPS Domestic


>[!Note] An "&" symbol indicates that both values are present.

| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | GROUND |
| GR, GT | GROUND |
| 3 | 3RD DAY SELECT |
| 2ND & AM, 2ND & A.M, SECOND & AM, SECOND & A.M, BLUE & AM, BLUE & A.M | 2ND DAY AIR A.M. |
| 2ND, SECOND, BLUE | 2ND DAY AIR |
| 1 & SAV, NEXT & SAV, RED & SAV | NEXT DAY AIR SAVER |
| 1, NEXT, RED | NEXT DAY AIR |
| EARLY | EARLY A.M. |
| GROUNDTRAC | GROUNDTRAC |
| HWT | HUNDREDWEIGHT |
| (ANY SERVICE) & COLLECT | BILL RECIPIENT |


### UPS Canada


| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | STANDARD |
| EXPEDITE, BLUE | EXPEDITED |
| AIR, EXPRESS, RED | EXPRESS |


### UPS International




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | EXPEDITED |
| EXPRESS, RED | EXPRESS |


### FedEx Express Domestic




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | STANDARD OVERNIGHT |
| XPR | EXPRESS SAVER |
| 2, ECON | 2ND DAY |
| PRI | PRIORITY OVERNIGHT |
| 1ST, FIRST | FIRST OVERNIGHT |
| FREIGHT & 1 | 1DAY FREIGHT |
| FREIGHT & 2 | 2DAY FREIGHT |
| FREIGHT & 3 | 3DAY FREIGHT |
|  |  |


### FedEx Express International




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | PRIORITY OVERNIGHT |
| ECON | FEDEX INTERNATIONAL ECONOMY |
| FREIGHT & ECON | ECONOMY FREIGHT |
| FREIGHT | PRIORITY FREIGHT |


### FedEx Ground Domestic




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | GROUND |


### FedEx Ground Canada




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | GROUND |


### USPS Domestic




| Input Value | Interpreted As |
| --- | --- |
| 1ST, FIRST | FIRST CLASS |
| (DEFAULT) | PARCEL POST |
| PRIORITY | PRIORITY |
| EXPRESS | EXPRESS |
| BOOK, SP | MEDIA MAIL |
| BOUND | BOUND PRINTED MATTER |


### USPS International


>[!Note] An "&" symbol indicates that both values are present.




| Input Value | Interpreted As |
| --- | --- |
| USPS, MAIL, PARCEL POST | PARCEL POST AIRMAIL |
| PARCEL POST ECONOMY, PARCEL POST SURFACE, PP SURFACE | PARCEL POST ECONOMY |
| PP AIR, PARCEL POST AIR, AIRMAIL | PARCEL POST AIRMAIL |
| LP SURFACE, LETTER POST SURFACE, LETTER POST ECONOMY | LETTER POST ECONOMY |
| LP AIR, LETTER POST AIR | LETTER POST AIRMAIL |
| PUBLISH, PERIODICAL | PUBLISHERS' PERIODICALS |
| EXPRESS | GLOBAL EXPRESS MAIL |
| PRIORITY | GLOBAL PRIORITY MAIL |


### DHL International




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | PRIORITY EXPRESS |
|  | DOCUMENT SERVICE |


### Spee-Dee




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | GROUND |


### Packaging




| Input Value | Interpreted As |
| --- | --- |
| (DEFAULT) | OTHER |
| LETTER, LTR | LETTER |


### Terms/COD


Aptean Ship interprets the input value in the Terms (also called COD) field as defined below.  Note that the Primary COD Type can be set up from Setup > Preferences.




| Input Value | |
| --- | --- |
| Key 1 | Key 2 |
| COD, C.O.D. |  |
| COD, C.O.D. | CERT, GUAR, CASH |


### Bill Freight


This is the input value of the Billing field.


| Input Value | Interpreted As |
| --- | --- |
| S | UPS Prepaid;  FedEx Express and FedEx Ground: Sender;  DHL Sender;  USPS Sender |
| R | UPS Freight Collect;  FedEx Express and FedEx Ground: Recipient;  DHL Recipient;  USPS Recipient |
| T | UPS, FedEx Express, FedEx Ground, DHL: Third Party |
| RECIP | FedEx Ground Recipient |
| C | UPS Consignee Billed;  FedEx Express and FedEx Ground: Collect |
| COLLECT | UPS Recipient  FedEx Ground Collect |
| CLT | FedEx Ground Collect |


 

