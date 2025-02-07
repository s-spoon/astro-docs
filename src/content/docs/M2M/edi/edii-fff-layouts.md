---

title: "EDII FFF Layouts"
draft: false
type: Article

---

# Inbound FFF Layouts

## 820 - Payment Order/Remittance Advice

Inbound 820 (Payment Order/Remittance Advice) results in the document automation of the Made2Manage Cash Receipts (CASH) screen. The layout of the 820 Fixed File Format is listed below. The hierarchy of each 820 transaction is a single HDR segment followed by at least one DET segment.

![](media/e52b8693e9535fafe625eeaf35469abb.png)

### 820 - HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                  | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**    |  **Req** |
|----------------------------------------|---------------|--------------|----------|----------|---------------|--------------------|----------|
| Header Record Tag: 'HDR'               | 1             | 3            | 3        | 0        | C             | 'HDR'              | X        |
| Trading Partner EDI ID\*               | 4             | 23           | 20       | 0        | C             | GLCSHM.FCNAMEID    | X        |
| Not currently used                     | 24            | 43           | 20       | 0        | -             | Not currently used |          |
| Transaction Currency                   | 44            | 46           | 3        | 0        | C             | GLCSHM.FCCURID     |          |
| Numeric Expression (When evaluated)    | 47            | 62           | 16       | 5        | N             | GLCSHM.FCFACTOR    |          |
| How Payment Was Made/Rendered.         | 63            | 63           | 1        | 0        | C             | GLCSHM.FCPAIDBY    |          |
| 'R' - A/R (Receipt), 'P' A/P (Payment) | 64            | 64           | 1        | 0        | C             | GLCSHM.FCPAYCLASS  |          |
| Check Number Or Reference              | 65            | 84           | 20       | 0        | C             | GLCSHM.FCREFERENC  | X        |
| Type of Cash Receipt/Payment           | 85            | 85           | 1        | 0        | C             | GLCSHM.FCTYPE      |          |
| Date Check Deposit                     | 86            | 93           | 8        | 0        | D             | GLCSHM.FDPAIDDATE  |          |
| Payment Notes/Comments Line 1          | 94            | 173          | 80       | 0        | M             | GLCSHM.FMDETAIL    |          |
| Payment Notes/Comments Line 2          | 174           | 253          | 80       | 0        | M             | GLCSHM.FMDETAIL    |          |
| Check Amount (Default Currency)        | 254           | 269          | 16       | 4        | Y             | GLCSHM.FNAMOUNT    | X        |
| Check Number For Payments              | 270           | 273          | 4        | 0        | I             | GLCSHM.FNNUMBER    |          |
| Transaction Check Amount               | 274           | 289          | 16       | 4        | Y             | GLCSHM.FNTXNAMT    |          |
| Reference                              | 290           | 293          | 4        | 0        | I             | GLCSHM.FNREFID     |          |

### 820 – DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with O are obsolete.

| **Field Description**                                          | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**    |  **Req** |
|----------------------------------------------------------------|---------------|--------------|----------|----------|---------------|--------------------|----------|
| Header Record Tag: 'DET'                                       | 1             | 3            | 3        | 0        | C             | 'DET'              | X        |
| Invoice Number                                                 | 4             | 23           | 20       | 0        | C             | GLCSHI.FCINVOICE   |          |
| Vendor/Customer Number                                         | 24            | 29           | 6        | 0        | C             | GLCSHI.FCNAMEID    |          |
| Pay Class                                                      | 30            | 30           | 1        | 0        | C             | GLCSHI.FCPAYCLASS  |          |
| Check Number Reference                                         | 31            | 50           | 20       | 0        | C             | GLCSHI.FCREFERENC  |          |
| Status                                                         | 51            | 51           | 1        | 0        | C             | GLCSHI.FCSTATUS    |          |
| Date Check Was Issued                                          | 52            | 59           | 8        | 0        | D             | GLCSHI.FDPAIDDATE  |          |
| Amount of Any Non-Cash Adjustment Applied                      | 60            | 75           | 16       | 4        | Y             | GLCSHI.FNADJAMT    |          |
| Amount in Cash Applied/Paid on This Invoice                    | 76            | 91           | 16       | 4        | Y             | GLCSHI.FNCASHAMT   |          |
| Cash Payment Terms Discount Amount Applied (Taken)             | 92            | 107          | 16       | 4        | Y             | GLCSHI.FNDISCOUNT  |          |
| Euro Amount of Any Non-Cash Adjustment Applied                 | 108           | 123          | 16       | 4        | Y             | GLCSHI.FNEURADJAMT | O        |
| Euro Amount in Cash Applied/Paid on This Invoice               | 124           | 139          | 16       | 4        | Y             | GLCSHI.FNEURCSHAMT | O        |
| Euro Cash Payment Terms Discount Amount Applied (Taken)        | 140           | 155          | 16       | 4        | Y             | GLCSHI.FNEURDSCT   | O        |
| Gain/Loss Amount in Functional Currency                        | 156           | 171          | 16       | 4        | Y             | GLCSHI.FNGAINLOSS  | O        |
| Transaction Amount of Any Non-Cash Adjustment Applied          | 172           | 187          | 16       | 4        | Y             | GLCSHI.FNTXNADJAMT |          |
| Transaction Amount in Cash Applied/Paid on This Invoice        | 188           | 203          | 16       | 4        | Y             | GLCSHI.FNTXNCSHAMT |          |
| Transaction Cash Payment Terms Discount Amount Applied (Taken) | 204           | 219          | 16       | 4        | Y             | GLCSHI.FNTXNDSCT   |          |
| Payment Currency Cash Payment Terms Discount Amount Applied    | 220           | 235          | 16       | 4        | Y             | GLCSHI.FNPAYDSCT   |          |
| Payment Currency Amount of Any Non- Cash Adjustment Applied    | 236           | 251          | 16       | 4        | Y             | GLCSHI.FNPYADJAMT  |          |
| Payment Currency Amount in Cash Applied/Paid on This Invoice   | 252           | 267          | 16       | 4        | Y             | GLCSHI.FNPYCSHAMT  |          |

## 830 - Planning Schedule with Release Capability

Inbound 830 (Planning Schedule with Release Capability) results in the document automation of the Made2Manage Orders (SO) screen. The layout of the 830 Fixed File Format is listed below. The hierarchy of each 830 transaction is a single HDR segment followed by at least one DET segment followed by optional REL segments. The REF, HDT and MSG records are extensions of the HDR record. The PID and DDT records are extensions of the DET record. The HAC and DAC records create line item records for special allowances and charges from the header and item level respectively.

![](media/85a1ecf7e82e092858aec3935123ca94.png)

### 830-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**    |  **Req** |
|----------------------------------|---------------|--------------|----------|----------|---------------|--------------------|----------|
| Header Record Tag: 'HDR'         | 1             | 3            | 3        | 0        | C             | 'HDR'              | X        |
| Trading Partner EDI ID\*         | 4             | 23           | 20       | 0        | C             | SOMAST.FCUSTNO     | X        |
| Customer Purchase Order Number\* | 24            | 43           | 20       | 0        | C             | SOMAST.FCUSTPONO   | X        |
| Company Name                     | 44            | 78           | 35       | 0        | C             | SOMAST.FCOMPANY    |          |
| Sold-To Address Key              | 79            | 98           | 20       | 0        | C             | SOMAST.FSOLDADDR   |          |
| Sold-To Address Line 1           | 99            | 178          | 80       | 0        | M             | SOMAST.FMSTREET    |          |
| Sold-To Address Line 2           | 179           | 258          | 80       | 0        | M             | SOMAST.FMSTREET    |          |
| City                             | 259           | 278          | 20       | 0        | C             | SOMAST.FCITY       |          |
| State                            | 279           | 298          | 20       | 0        | C             | SOMAST.FSTATE      |          |
| Zip Code                         | 299           | 308          | 10       | 0        | C             | SOMAST.FZIP        |          |
| Country                          | 309           | 333          | 25       | 0        | C             | SOMAST.FCOUNTRY    |          |
| Contact First Name               | 334           | 348          | 15       | 0        | C             | SOMAST.FCFNAME     |          |
| Contact Last Name                | 349           | 378          | 30       | 0        | C             | SOMAST.FCONTACT    |          |
| Phone Number                     | 379           | 398          | 20       | 0        | C             | SOMAST.FPHONE      |          |
| Fax Number                       | 399           | 418          | 20       | 0        | C             | SOMAST.FFAX        |          |
| Sales Order Name                 | 419           | 453          | 35       | 0        | C             | SOMAST.FORDERNAME  |          |
| Order Date                       | 454           | 461          | 8        | 0        | D             | SOMAST.FORDERDATE  |          |
| Due Date                         | 462           | 469          | 8        | 0        | D             | SOMAST.FDUEDATE    |          |
| Discount Rate                    | 470           | 476          | 7        | 3        | N             | SOMAST.FDISRATE    |          |
| Sales Order Transaction Currency | 477           | 479          | 3        | 0        | C             | SOMAST.FCCURID     |          |
| Ship To Address Key              | 480           | 499          | 20       | 0        | C             | SOMAST.FSHPTOADDR  |          |
| Ship Via                         | 500           | 519          | 20       | 0        | C             | SOMAST.FSHIPVIA    |          |
| Payment Type                     | 520           | 520          | 1        | 0        | C             | SOMAST.FPAYTYPE    |          |
| Terms For A Cash Payment         | 521           | 524          | 4        | 0        | C             | SOMAST.FTERM       |          |
| Freight on Board Point           | 525           | 544          | 20       | 0        | C             | SOMAST.FFOB        |          |
| User Defined Character 1         | 545           | 564          | 20       | 0        | C             | SOMAST.FCUSRCHR1   |          |
| User Defined Character 2         | 565           | 604          | 40       | 0        | C             | SOMAST.FCUSRCHR2   |          |
| User Defined Character 3         | 605           | 644          | 40       | 0        | C             | SOMAST.FCUSRCHR3   |          |
| User Defined Quantity 1          | 645           | 658          | 14       | 5        | N             | SOMAST.FNUSRQTY1   |          |
| User Defined Currency 1          | 659           | 674          | 16       | 5        | N             | SOMAST.FNUSRCUR1   |          |
| User Defined Date 1              | 675           | 682          | 8        | 0        | D             | SOMAST.FDUSRDATE1  |          |
| User Defined Memo 1 Line 1       | 683           | 762          | 80       | 0        | M             | SOMAST.FMUSRMEMO1  |          |
| EDI Date 11                      | 1223          | 1230         | 8        | 0        | D             | SOHDR.FCEDIDATE11  |          |
| EDI Date 12                      | 1231          | 1238         | 8        | 0        | D             | SOHDR.FCEDIDATE12  |          |
| EDI Date 13                      | 1239          | 1246         | 8        | 0        | D             | SOHDR.FCEDIDATE13  |          |
| EDI Date 14                      | 1247          | 1254         | 8        | 0        | D             | SOHDR.FCEDIDATE14  |          |
| EDI Date 15                      | 1255          | 1262         | 8        | 0        | D             | SOHDR.FCEDIDATE15  |          |
| EDI Numeric 1                    | 1263          | 1278         | 16       | 5        | N             | SOHDR.FCEDINUM1    |          |
| EDI Numeric 2                    | 1279          | 1294         | 16       | 5        | N             | SOHDR.FCEDINUM2    |          |
| EDI Numeric 3                    | 1295          | 1310         | 16       | 5        | N             | SOHDR.FCEDINUM3    |          |
| EDI Numeric 4                    | 1311          | 1326         | 16       | 5        | N             | SOHDR.FCEDINUM4    |          |
| EDI Numeric 5                    | 1327          | 1342         | 16       | 5        | N             | SOHDR.FCEDINUM5    |          |
| EDI Numeric 6                    | 1343          | 1358         | 16       | 5        | N             | SOHDR.FCEDINUM6    |          |
| EDI Numeric 7                    | 1359          | 1374         | 16       | 5        | N             | SOHDR.FCEDINUM7    |          |
| EDI Numeric 8                    | 1375          | 1390         | 16       | 5        | N             | SOHDR.FCEDINUM8    |          |
| EDI Numeric 9                    | 1391          | 1406         | 16       | 5        | N             | SOHDR.FCEDINUM9    |          |
| EDI Numeric 10                   | 1407          | 1422         | 16       | 5        | N             | SOHDR.FCEDINUM10   |          |
| EDI Memo 1 Line 1                | 1423          | 1502         | 80       | 0        | M             | SOHDR.FCEDIMEMO1   |          |
| EDI Memo 1 Line 2                | 1503          | 1582         | 80       | 0        | M             | SOHDR.FCEDIMEMO1   |          |
| EDI Memo 2 Line 1                | 1583          | 1662         | 80       | 0        | M             | SOHDR.FCEDIMEMO2   |          |
| EDI Memo 2 Line 2                | 1663          | 1742         | 80       | 0        | M             | SOHDR.FCEDIMEMO2   |          |
| Coordinator                      | 1743          | 1745         | 3        | 0        | C             | SOMAST.FSOCOORD    |          |
| Contract Code                    | 1746          | 1755         | 10       | 0        | C             | SOMAST.CONTRACTNU  |          |
| Bill To Address Key              | 1756          | 1775         | 20       | 0        | C             | SOMAST.FBILLADDR   |          |
| Drop Ship Company Name           | 1776          | 1810         | 35       | 0        | C             | SOSHIP.FCCOMPANY   |          |
| Drop Ship-To Address Line 1      | 1811          | 1890         | 80       | 0        | M             | SOSHIP.FMSTREET    |          |
| Drop Ship-To Address Line 2      | 1891          | 1970         | 80       | 0        | M             | SOSHIP.FMSTREET    |          |
| Drop Ship City                   | 1971          | 1990         | 20       | 0        | C             | SOSHIP.FCCITY      |          |
| Drop Ship State                  | 1991          | 2010         | 20       | 0        | C             | SOSHIP.FCSTATE     |          |
| Drop Ship Zip Code               | 2011          | 2020         | 10       | 0        | C             | SOSHIP.FCZIP       |          |
| Drop Ship Country                | 2021          | 2045         | 25       | 0        | C             | SOSHIP.FCCOUNTRY   |          |
| Drop Ship Phone Number           | 2046          | 2065         | 20       | 0        | C             | SOSHIP.FCPHONE     |          |
| Drop Ship Fax Number             | 2066          | 2075         | 20       | 0        | C             | SOSHIP.FCFAX       |          |
| Ship To Company                  | 2089          | 2123         | 35       | 0        | C             | SOMAST.SHIPCOMPANY |          |
| Ship To Address                  | 2124          | 2283         | 160      | 0        | C             | SOMAST.SHIPADDRESS |          |
| Ship To City                     | 2284          | 2303         | 20       | 0        | C             | SOMAST.SHIPCITY    |          |
| Ship To State                    | 2304          | 2323         | 20       | 0        | C             | SOMAST.SHIPSTATE   |          |
| Ship To Country                  | 2324          | 2348         | 25       | 0        | C             | SOMAST.SHIPCOUNTRY |          |
| Zip Code                         | 2349          | 2358         | 10       | 0        | C             | SOMAST.SHIPZIP     |          |
| Phone No.                        | 2359          | 2378         | 20       | 0        | C             | SOMAST.SHIPPHONE   |          |
| Fax                              | 2379          | 2398         | 20       | 0        | C             | SOMAST.SHIPFAX     |          |

### 830 - REF

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|----------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'REF'         | 1             | 3            | 3        | 0        | C             | 'REF'             | X        |
| Contact First Name               | 4             | 18           | 15       | 0        | C             | SOMAST.FCFNAME    |          |
| Contact Last Name                | 19            | 48           | 30       | 0        | C             | SOMAST.FCONTACT   |          |
| Phone Number                     | 49            | 68           | 20       | 0        | C             | SOMAST.FPHONE     |          |
| Fax Number                       | 69            | 88           | 20       | 0        | C             | SOMAST.FFAX       |          |
| Sales Order Name                 | 89            | 123          | 35       | 0        | C             | SOMAST.FORDERNAME |          |
| Sales Order Transaction Currency | 124           | 126          | 3        | 0        | C             | SOMAST.FCCURID    |          |
| Ship Via                         | 127           | 146          | 20       | 0        | C             | SOMAST.FSHIPVIA   |          |
| Payment Type                     | 147           | 147          | 1        | 0        | C             | SOMAST.FPAYTYPE   |          |
| Terms For A Cash Payment         | 148           | 151          | 4        | 0        | C             | SOMAST.FTERM      |          |
| Freight on Board Point           | 152           | 171          | 20       | 0        | C             | SOMAST.FFOB       |          |
| User Defined Character 1         | 172           | 191          | 20       | 0        | C             | SOMAST.FCUSRCHR1  |          |
| User Defined Character 2         | 192           | 231          | 40       | 0        | C             | SOMAST.FCUSRCHR2  |          |
| User Defined Character 3         | 232           | 271          | 40       | 0        | C             | SOMAST.FCUSRCHR3  |          |
| EDI Character 1                  | 272           | 291          | 20       | 0        | C             | SOHDR.FCEDICHAR1  |          |
| EDI Character 2                  | 292           | 311          | 20       | 0        | C             | SOHDR.FCEDICHAR2  |          |
| EDI Character 3                  | 312           | 331          | 20       | 0        | C             | SOHDR.FCEDICHAR3  |          |
| EDI Character 4                  | 332           | 351          | 20       | 0        | C             | SOHDR.FCEDICHAR4  |          |
| EDI Character 5                  | 352           | 371          | 20       | 0        | C             | SOHDR.FCEDICHAR5  |          |
| EDI Character 6                  | 372           | 391          | 20       | 0        | C             | SOHDR.FCEDICHAR6  |          |
| EDI Character 7                  | 392           | 411          | 20       | 0        | C             | SOHDR.FCEDICHAR7  |          |
| EDI Character 8                  | 412           | 431          | 20       | 0        | C             | SOHDR.FCEDICHAR8  |          |
| EDI Character 9                  | 432           | 451          | 20       | 0        | C             | SOHDR.FCEDICHAR9  |          |
| EDI Character 10                 | 452           | 471          | 20       | 0        | C             | SOHDR.FCEDICHAR10 |          |
| EDI Character 11                 | 472           | 491          | 20       | 0        | C             | SOHDR.FCEDICHAR11 |          |
| EDI Character 12                 | 492           | 511          | 20       | 0        | C             | SOHDR.FCEDICHAR12 |          |
| EDI Character 13                 | 512           | 531          | 20       | 0        | C             | SOHDR.FCEDICHAR13 |          |
| EDI Character 14                 | 532           | 551          | 20       | 0        | C             | SOHDR.FCEDICHAR14 |          |
| EDI Character 15                 | 552           | 571          | 20       | 0        | C             | SOHDR.FCEDICHAR15 |          |
| Contract Code                    | 572           | 581          | 10       | 0        | C             | SOMAST.CONTRACTNU |          |

### 830 - HAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

|  **Field Description**           | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**  |  **Req** |
|----------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'HAC'         | 1             | 3            | 3        | 0        | C             | 'HAC'             | X        |
| Part Number                      | 4             | 28           | 25       | 0        | C             | SOITEM.FPARTNO    |          |
| Quantity                         | 29            | 44           | 16       | 5        | N             | SOITEM.FQUANTITY  |          |
| Unit of Measure                  | 45            | 47           | 3        | 0        | C             | SOITEM.FMEASURE   |          |
| Part Number Description          | 48            | 127          | 80       | 0        | M             | SOITEM.FDESC      |          |
| Unit Price                       | 128           | 143          | 16       | 5        | N             | SORELS.FUNETPRICE |          |
| Customer Part Number             | 144           | 168          | 25       | 0        | C             | SOITEM.FCUSTPART  |          |
| Customer Part Number Description | 169           | 248          | 80       | 0        | M             | SOITEM.FDESCMEMO  |          |
| EDI Character 1                  | 249           | 268          | 20       | 0        | C             | SODET.FCEDICHAR1  |          |
| EDI Character 2                  | 269           | 288          | 20       | 0        | C             | SODET.FCEDICHAR2  |          |
| EDI Character 3                  | 289           | 308          | 20       | 0        | C             | SODET.FCEDICHAR3  |          |
| EDI Character 4                  | 309           | 328          | 20       | 0        | C             | SODET.FCEDICHAR4  |          |
| EDI Character 5                  | 329           | 348          | 20       | 0        | C             | SODET.FCEDICHAR5  |          |
| EDI Character 6                  | 349           | 368          | 20       | 0        | C             | SODET.FCEDICHAR6  |          |
| EDI Character 7                  | 369           | 388          | 20       | 0        | C             | SODET.FCEDICHAR7  |          |
| EDI Character 8                  | 389           | 408          | 20       | 0        | C             | SODET.FCEDICHAR8  |          |
| EDI Character 9                  | 409           | 428          | 20       | 0        | C             | SODET.FCEDICHAR9  |          |
| EDI Character 10                 | 429           | 448          | 20       | 0        | C             | SODET.FCEDICHAR10 |          |
| EDI Character 11                 | 449           | 468          | 20       | 0        | C             | SODET.FCEDICHAR11 |          |
| EDI Character 12                 | 469           | 488          | 20       | 0        | C             | SODET.FCEDICHAR12 |          |
| EDI Character 13                 | 489           | 508          | 20       | 0        | C             | SODET.FCEDICHAR13 |          |
| EDI Character 14                 | 509           | 528          | 20       | 0        | C             | SODET.FCEDICHAR14 |          |
| EDI Character 15                 | 529           | 548          | 20       | 0        | C             | SODET.FCEDICHAR15 |          |
| EDI Numeric 1                    | 549           | 564          | 16       | 5        | N             | SODET.FCEDINUM1   |          |
| EDI Numeric 2                    | 565           | 580          | 16       | 5        | N             | SODET.FCEDINUM2   |          |
| EDI Numeric 3                    | 581           | 596          | 16       | 5        | N             | SODET.FCEDINUM3   |          |
| EDI Numeric 4                    | 597           | 612          | 16       | 5        | N             | SODET.FCEDINUM4   |          |
| EDI Numeric 5                    | 613           | 628          | 16       | 5        | N             | SODET.FCEDINUM5   |          |
| EDI Numeric 6                    | 629           | 644          | 16       | 5        | N             | SODET.FCEDINUM6   |          |
| EDI Numeric 7                    | 645           | 660          | 16       | 5        | N             | SODET.FCEDINUM7   |          |
| EDI Numeric 8                    | 661           | 676          | 16       | 5        | N             | SODET.FCEDINUM8   |          |
| EDI Numeric 9                    | 677           | 692          | 16       | 5        | N             | SODET.FCEDINUM9   |          |
| EDI Numeric 10                   | 693           | 708          | 16       | 5        | N             | SODET.FCEDINUM10  |          |
| EDI Memo 1                       | 709           | 788          | 80       | 0        | M             | SODET.FCEDIMEMO1  |          |
| EDI Memo 2                       | 789           | 868          | 80       | 0        | M             | SODET.FCEDIMEMO2  |          |
| Discount Rate                    | 869           | 875          | 7        | 3        | N             | SOMAST.FDISRATE1  |          |

**Tip:** In HAC-1, the Discount Rate is calculated as the sum of all discount rates when multiple HAC records are present.

### 830 - HDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'HDT' | 1             | 3            | 3       | 0       | C             | 'HDT'             | X       |
| Order Date               | 4             | 11           | 8       | 0       | D             | SOMAST.FORDERDATE |         |
| Due Date                 | 12            | 19           | 8       | 0       | D             | SOMAST.FDUEDATE   |         |
| User Defined Date 1      | 20            | 27           | 8       | 0       | D             | SOMAST.FDUSRDATE1 |         |
| EDI Date 1               | 28            | 35           | 8       | 0       | D             | SOHDR.FCEDIDATE1  |         |
| EDI Date 2               | 36            | 43           | 8       | 0       | D             | SOHDR.FCEDIDATE2  |         |
| EDI Date 3               | 44            | 51           | 8       | 0       | D             | SOHDR.FCEDIDATE3  |         |
| EDI Date 4               | 52            | 59           | 8       | 0       | D             | SOHDR.FCEDIDATE4  |         |
| EDI Date 5               | 60            | 67           | 8       | 0       | D             | SOHDR.FCEDIDATE5  |         |
| EDI Date 6               | 68            | 75           | 8       | 0       | D             | SOHDR.FCEDIDATE6  |         |
| EDI Date 7               | 76            | 83           | 8       | 0       | D             | SOHDR.FCEDIDATE7  |         |
| EDI Date 8               | 84            | 91           | 8       | 0       | D             | SOHDR.FCEDIDATE8  |         |
| EDI Date 9               | 92            | 99           | 8       | 0       | D             | SOHDR.FCEDIDATE9  |         |
| EDI Date 10              | 100           | 107          | 8       | 0       | D             | SOHDR.FCEDIDATE10 |         |
| EDI Date 11              | 108           | 115          | 8       | 0       | D             | SOHDR.FCEDIDATE11 |         |
| EDI Date 12              | 116           | 123          | 8       | 0       | D             | SOHDR.FCEDIDATE12 |         |
| EDI Date 13              | 124           | 131          | 8       | 0       | D             | SOHDR.FCEDIDATE13 |         |
| EDI Date 14              | 132           | 139          | 8       | 0       | D             | SOHDR.FCEDIDATE14 |         |
| EDI Date 15              | 140           | 147          | 8       | 0       | D             | SOHDR.FCEDIDATE15 |         |

### 830 - MSG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

|  **Field Description**   | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'MSG' | 1             | 3            | 3       | 0       | C             | 'MSG'             | X       |
| User Defined Memo 1      | 4             | 83           | 80      | 0       | M             | SOMAST.FMUSRMEMO1 |         |
| EDI Memo 1               | 84            | 163          | 80      | 0       | M             | SOHDR.FCEDIMEMO1  |         |
| EDI Memo 2               | 164           | 243          | 80      | 0       | M             | SOHDR.FCEDIMEMO2  |         |

### 830 - DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with X must be selected.

Only one of the fields marked X1 must be selected.

|  **Field Description**                | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|---------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DET'              | 1             | 3            | 3       | 0       | C             | 'DET'             | X       |
| Part Number                           | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO    | X1      |
| Part Revision                         | 29            | 31           | 3       | 0       | C             | SOITEM.FPARTREV   |         |
| Quantity                              | 32            | 47           | 16      | 5       | N             | SOITEM.FQUANTITY  | X       |
| Unit of Measure                       | 48            | 50           | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Source                                | 51            | 51           | 1       | 0       | C             | SOITEM.FSOURCE    |         |
| Part Number Description Line 1        | 52            | 131          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Part Number Description Line 2        | 132           | 211          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Product Class                         | 212           | 215          | 4       | 0       | C             | SOITEM.FPRODCL    |         |
| Group Code                            | 216           | 221          | 6       | 0       | C             | SOITEM.FGROUP     |         |
| Unit Price                            | 222           | 237          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Customer Part Number                  | 238           | 262          | 25      | 0       | C             | SOITEM.FCUSTPART  | X1      |
| Customer Part Revision                | 263           | 265          | 3       | 0       | C             | SOITEM.FCUSTPTREV |         |
| Customer Part Description Line 1      | 266           | 345          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Customer Part Description Line 2      | 346           | 425          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Delivery Notes Line 1                 | 426           | 505          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2                 | 506           | 585          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Order Billing Type                    | 586           | 588          | 3       | 0       | C             | SOITEM.FORDERTYPE |         |
| Use Standard BOMs and Routings        | 589           | 589          | 1       | 0       | L             | SOITEM.FSTANDPART |         |
| Lot/Serial Number Required            | 590           | 590          | 1       | 0       | L             | SOITEM.FLLOTREQD  |         |
| Extent of Lot Control                 | 591           | 591          | 1       | 0       | C             | SOITEM.FCLOTEXT   |         |
| Taxable                               | 592           | 592          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Price Schedule Code                   | 593           | 598          | 6       | 0       | C             | SOITEM.FSCHECODE  |         |
| Ship-to Address Key                   | 599           | 618          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                              | 619           | 626          | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| Close within minimum %                | 627           | 637          | 11      | 5       | N             | SOITEM.FNUNDER    |         |
| Close within maximum %                | 638           | 648          | 11      | 5       | N             | SOITEM.FNOVER     |         |
| Multi-Release                         | 649           | 649          | 1       | 0       | L             | SOITEM.FMULTIPLE  |         |
| Ship Item                             | 650           | 650          | 1       | 0       | L             | SOITEM.FSHIPITEM  |         |
| Split Ship                            | 651           | 651          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Create Jobs                           | 652           | 652          | 1       | 0       | L             | SOITEM.FAUTOCREAT |         |
| Print Memo                            | 653           | 653          | 1       | 0       | L             | SOITEM.FPRINTMEMO |         |
| Ship Early                            | 654           | 654          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| CTP Approved                          | 655           | 655          | 1       | 0       | L             | SORELS.FLATP      |         |
| EDI Character 1                       | 656           | 675          | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2                       | 676           | 695          | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3                       | 696           | 715          | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4                       | 716           | 735          | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5                       | 736           | 755          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6                       | 756           | 775          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7                       | 776           | 795          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8                       | 796           | 815          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9                       | 816           | 835          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10                      | 836           | 855          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11                      | 856           | 875          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12                      | 876           | 895          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |
| EDI Character 13                      | 896           | 915          | 20      | 0       | C             | SODET.FCEDICHAR13 |         |
| EDI Character 14                      | 916           | 935          | 20      | 0       | C             | SODET.FCEDICHAR14 |         |
| EDI Character 15                      | 936           | 955          | 20      | 0       | C             | SODET.FCEDICHAR15 |         |
| EDI Date 1                            | 956           | 963          | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2                            | 964           | 971          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3                            | 972           | 979          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4                            | 980           | 987          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5                            | 988           | 995          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6                            | 996           | 1003         | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7                            | 1004          | 1011         | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8                            | 1012          | 1019         | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9                            | 1020          | 1027         | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10                           | 1028          | 1035         | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11                           | 1036          | 1043         | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12                           | 1044          | 1051         | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13                           | 1052          | 1059         | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14                           | 1060          | 1067         | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15                           | 1068          | 1075         | 8       | 0       | D             | SODET.FCEDIDATE15 |         |
| EDI Numeric 1                         | 1076          | 1091         | 16      | 5       | N             | SODET.FCEDINUM1   |         |
| EDI Numeric 2                         | 1092          | 1107         | 16      | 5       | N             | SODET.FCEDINUM2   |         |
| EDI Numeric 3                         | 1108          | 1123         | 16      | 5       | N             | SODET.FCEDINUM3   |         |
| EDI Numeric 4                         | 1124          | 1139         | 16      | 5       | N             | SODET.FCEDINUM4   |         |
| EDI Numeric 5                         | 1140          | 1155         | 16      | 5       | N             | SODET.FCEDINUM5   |         |
| EDI Numeric 6                         | 1156          | 1171         | 16      | 5       | N             | SODET.FCEDINUM6   |         |
| EDI Numeric 7                         | 1172          | 1187         | 16      | 5       | N             | SODET.FCEDINUM7   |         |
| EDI Numeric 8                         | 1188          | 1203         | 16      | 5       | N             | SODET.FCEDINUM8   |         |
| EDI Numeric 9                         | 1204          | 1219         | 16      | 5       | N             | SODET.FCEDINUM9   |         |
| EDI Numeric 10                        | 1220          | 1235         | 16      | 5       | N             | SODET.FCEDINUM10  |         |
| EDI Memo 1 Line 1                     | 1236          | 1315         | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 1 Line 2                     | 1316          | 1395         | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 2 Line 1                     | 1396          | 1475         | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| EDI Memo 2 Line 2                     | 1476          | 1555         | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| Price Schedule Type                   | 1556          | 1556         | 1       | 0       | C             | SOITEM.FSCHEDTYPE |         |
| Quantity in Alternate Unit of Measure | 1557          | 1573         | 17      | 5       | N             | SOITEM.FNALTQTY   |         |
| Alternate Unit of Measure             | 1574          | 1576         | 3       | 0       | C             | SOITEM.FCALTUM    |         |
| Location                              | 1577          | 1590         | 14      | 0       | C             | SORELS.FCLOC      |         |
| Bin                                   | 1591          | 1604         | 14      | 0       | C             | SORELS.FCBIN      |         |
| Contract                              | 1605          | 1614         | 10      | 0       | C             | SOITEM.CONTRACTNU |         |

### 830 - PID

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**  | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|------------------|---------|
| Header Record Tag: 'PID'         | 1             | 3            | 3       | 0       | C             | 'PID             | X       |
| Part Number Description          | 4             | 83           | 80      | 0       | M             | SOITEM.FDESC     |         |
| Customer Part Number Description | 84            | 163          | 80      | 0       | M             | SOITEM.FDESCMEMO |         |
| Delivery Notes                   | 164           | 243          | 80      | 0       | M             | SORELS.FDELIVERY |         |
| EDI Memo 1                       | 244           | 323          | 80      | 0       | M             | SODET.FCEDIMEMO1 |         |
| EDI Memo 2                       | 324           | 403          | 80      | 0       | M             | SODET.FCEDIMEMO2 |         |

### 830 - DDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DDT' | 1             | 3            | 3       | 0       | C             | 'DDT'             | X       |
| Delivery Notes           | 4             | 83           | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Due Date                 | 84            | 91           | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| EDI Date 1               | 92            | 99           | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2               | 100           | 107          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3               | 108           | 115          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4               | 116           | 123          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5               | 124           | 131          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6               | 132           | 139          | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7               | 140           | 147          | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8               | 148           | 155          | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9               | 156           | 163          | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10              | 164           | 171          | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11              | 172           | 179          | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12              | 180           | 187          | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13              | 188           | 195          | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14              | 196           | 203          | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15              | 204           | 211          | 8       | 0       | D             | SODET.FCEDIDATE15 |         |

### 830 - DAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'DAC'         | 1             | 3            | 3       | 0       | C             | 'DAC'              | X       |
| Part Number                      | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO     |         |
| Quantity                         | 29            | 44           | 16      | 5       | N             | SOITEM.FQUANTITY   |         |
| Unit of Measure                  | 45            | 47           | 3       | 0       | C             | SOITEM.FMEASURE    |         |
| Part Number Description          | 48            | 127          | 80      | 0       | M             | SOITEM.FDESC       |         |
| Unit Price                       | 128           | 143          | 16      | 5       | N             | SORELS.FUNETPRICE  |         |
| Customer Part Number             | 144           | 168          | 25      | 0       | C             | SOITEM.FCUSTPART   |         |
| Customer Part Number Description | 169           | 248          | 80      | 0       | M             | SOITEM.FDESCMEMO   |         |
| EDI Character 1                  | 249           | 268          | 20      | 0       | C             | SODET.FCEDICHAR1   |         |
| EDI Character 2                  | 269           | 288          | 20      | 0       | C             | SODET.FCEDICHAR2   |         |
| EDI Character 3                  | 289           | 308          | 20      | 0       | C             | SODET.FCEDICHAR3   |         |
| EDI Character 4                  | 309           | 328          | 20      | 0       | C             | SODET.FCEDICHAR4   |         |
| EDI Character 5                  | 329           | 348          | 20      | 0       | C             | SODET.FCEDICHAR5   |         |
| EDI Character 6                  | 349           | 368          | 20      | 0       | C             | SODET.FCEDICHAR6   |         |
| EDI Character 7                  | 369           | 388          | 20      | 0       | C             | SODET.FCEDICHAR7   |         |
| EDI Character 8                  | 389           | 408          | 20      | 0       | C             | SODET.FCEDICHAR8   |         |
| EDI Character 9                  | 409           | 428          | 20      | 0       | C             | SODET.FCEDICHAR9   |         |
| EDI Character 10                 | 429           | 448          | 20      | 0       | C             | SODET.FCEDICHAR10  |         |
| EDI Character 11                 | 449           | 468          | 20      | 0       | C             | SODET.FCEDICHAR11  |         |
| EDI Character 12                 | 469           | 488          | 20      | 0       | C             | SODET.FCEDICHAR12  |         |
| EDI Character 13                 | 489           | 508          | 20      | 0       | C             | SODET.FCEDICHAR13  |         |
| EDI Character 14                 | 509           | 528          | 20      | 0       | C             | SODET.FCEDICHAR14  |         |
| EDI Character 15                 | 529           | 548          | 20      | 0       | C             | SODET.FCEDICHAR15  |         |
| EDI Numeric 1                    | 549           | 564          | 16      | 5       | N             | SODET.FCEDINUM1    |         |
| EDI Numeric 2                    | 565           | 580          | 16      | 5       | N             | SODET.FCEDINUM2    |         |
| EDI Numeric 3                    | 581           | 596          | 16      | 5       | N             | SODET.FCEDINUM3    |         |
| EDI Numeric 4                    | 597           | 612          | 16      | 5       | N             | SODET.FCEDINUM4    |         |
| EDI Numeric 5                    | 613           | 628          | 16      | 5       | N             | SODET.FCEDINUM5    |         |
| EDI Numeric 6                    | 629           | 644          | 16      | 5       | N             | SODET.FCEDINUM6    |         |
| EDI Numeric 7                    | 645           | 660          | 16      | 5       | N             | SODET.FCEDINUM7    |         |
| EDI Numeric 8                    | 661           | 676          | 16      | 5       | N             | SODET.FCEDINUM8    |         |
| EDI Numeric 9                    | 677           | 692          | 16      | 5       | N             | SODET.FCEDINUM9    |         |
| EDI Numeric 10                   | 693           | 708          | 16      | 5       | N             | SODET.FCEDINUM10   |         |
| EDI Memo 1                       | 709           | 788          | 80      | 0       | M             | SODET.FCEDIMEMO1   |         |
| EDI Memo 2                       | 789           | 868          | 80      | 0       | M             | SODET.FCEDIMEMO2   |         |
| Discount Rate                    | 869           | 875          | 7       | 3       | N             | SORELS.FUNETPRICE1 |         |

**Tip:** In **DAC-1**, allowance or charge discount rate is calculated as the sum of all discount rates when multiple DAC records are present for a line item and a unit discount amount calculated as a function of the parent unit price and the calculated discount.

### 830 - REL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REL' | 1             | 3            | 3       | 0       | C             | 'REL'             | x       |
| Ship-To Address Key      | 4             | 23           | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                 | 24            | 31           | 8       | 0       | D             | SORELS.FDUEDATE   |         |
| Delivery Notes Line 1    | 32            | 111          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2    | 112           | 191          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
|                          |               |              |         |         |               |                   |         |

## 840 - Request for Quote

Inbound 840 (Request for Quote) results in the document automation of the Made2Manage Quotes (QUOTE) screen. The layout of the 840 Fixed File Format is listed below. The hierarchy of each 840 transaction is a single HDR segment followed by at least one DET segment.

![](media/340b3bce82271dbc90e50ee600b58133.png)

### 840 – HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

### Note: All the fields marked with O are obsolete.

| **Field Description**          | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'HDR'       | 1             | 3            | 3       | 0       | C             | 'HDR'             | X       |
| Trading Partner EDI ID\*       | 4             | 23           | 20      | 0       | C             | QTMAST.FCUSTNO    | X       |
| Customer Company Name          | 24            | 58           | 35      | 0       | C             | QTMAST.FCOMPANY   |         |
| Sold-To Address Key            | 59            | 78           | 20      | 0       | C             | QTMAST.FCSOLDTO   |         |
| Sold-To Address Line 1         | 79            | 158          | 80      | 0       | M             | QTMAST.FMSTREET   |         |
| Sold-To Address Line 2         | 159           | 238          | 80      | 0       | M             | QTMAST.FMSTREET   |         |
| Sold-To City                   | 239           | 258          | 20      | 0       | C             | QTMAST.FCITY      |         |
| Sold-To State                  | 259           | 278          | 20      | 0       | C             | QTMAST.FSTATE     |         |
| Sold-To Zip Code               | 279           | 288          | 10      | 0       | C             | QTMAST.FZIP       |         |
| Ship-To Address Key            | 289           | 308          | 20      | 0       | C             | QTMAST.FCSHIPTO   |         |
| Sold-To Country                | 309           | 333          | 25      | 0       | C             | QTMAST.FCOUNTRY   |         |
| Contact First Name             | 334           | 348          | 15      | 0       | C             | QTMAST.FCFNAME    |         |
| Contact Last Name              | 349           | 368          | 20      | 0       | C             | QTMAST.FQUOTETO   |         |
| Phone Number                   | 369           | 388          | 20      | 0       | C             | QTMAST.FPHONE     |         |
| Fax Number                     | 389           | 408          | 20      | 0       | C             | QTMAST.FFAX       |         |
| Pay Type                       | 409           | 409          | 1       | 0       | C             | QTMAST.FPAYTYPE   |         |
| User Code                      | 410           | 416          | 7       | 0       | C             | QTMAST.FUSERCODE  |         |
| Term                           | 417           | 420          | 4       | 0       | C             | QTMAST.FTERM      |         |
| Type of Quote                  | 421           | 421          | 1       | 0       | C             | QTMAST.FTYPE      |         |
| Quote Created Date             | 422           | 429          | 8       | 0       | D             | QTMAST.FQUOTEDATE |         |
| Quote Due Date                 | 430           | 437          | 8       | 0       | D             | QTMAST.FDATEDUE   |         |
| Quote Expiration Date          | 438           | 445          | 8       | 0       | D             | QTMAST.FDEXPIRED  |         |
| Customer RFQ Number            | 446           | 460          | 15      | 0       | C             | QTMAST.FREQUESTNO |         |
| Distributor Number             | 461           | 466          | 6       | 0       | C             | QTMAST.FDISTNO    |         |
| Salesperson                    | 467           | 469          | 3       | 0       | C             | QTMAST.FSALESPN   |         |
| The Person Entering the Quote  | 470           | 472          | 3       | 0       | C             | QTMAST.FESTIMATOR |         |
| Distribution Rate              | 473           | 486          | 14      | 5       | N             | QTMAST.FDISRATE   |         |
| Anticipated Order Timing       | 487           | 487          | 1       | 0       | C             | QTMAST.FORDTIME   |         |
| Order Potential                | 488           | 488          | 1       | 0       | C             | QTMAST.FORDPOTENT |         |
| General Quote Description Name | 489           | 553          | 65      | 0       | C             | QTMAST.FJOBNAME   |         |
| Salutation Memo Line 1         | 554           | 633          | 80      | 0       | M             | QTMAST.FSALUMEMO  |         |
| Salutation Memo Line 2         | 634           | 713          | 80      | 0       | M             | QTMAST.FSALUMEMO  |         |
| Standard Closing Memo Line 1   | 714           | 793          | 80      | 0       | M             | QTMAST.FCLOSMEMO  |         |
| Standard Closing Memo Line 2   | 794           | 873          | 80      | 0       | M             | QTMAST.FCLOSMEMO  |         |
| Quote Printed?                 | 874           | 874          | 1       | 0       | L             | QTMAST.FPRINTED   |         |
| Quote Transaction Currency     | 875           | 877          | 3       | 0       | C             | QTMAST.FCCURID    |         |
| Currency Conversion Factor     | 878           | 893          | 16      | 5       | N             | QTMAST.FCFACTOR   |         |
| Currency Conversion Date       | 894           | 901          | 8       | 0       | D             | QTMAST.FDCURDATE  |         |
| Euro Conversion Factor         | 902           | 917          | 16      | 5       | N             | QTMAST.FEUROFCTR  | O       |
| Euro Currency Conversion Date  | 918           | 925          | 8       | 0       | D             | QTMAST.FDEURODATE | O       |
| User Defined Character 1       | 926           | 945          | 20      | 0       | C             | QTMAST.FCUSRCHR1  |         |
| User Defined Character 2       | 946           | 985          | 40      | 0       | C             | QTMAST.FCUSRCHR2  |         |
| User Defined Character 3       | 986           | 1025         | 40      | 0       | C             | QTMAST.FCUSRCHR3  |         |
| User Defined Quantity 1        | 1026          | 1039         | 14      | 5       | N             | QTMAST.FNUSRQTY1  |         |
| User-Defined Currency 1        | 1040          | 1055         | 16      | 5       | N             | QTMAST.FNUSRCUR1  |         |
| User Defined Date 1            | 1056          | 1063         | 8       | 0       | D             | QTMAST.FDUSRDATE1 |         |
| User-Defined Memo 1Line 1      | 1064          | 1143         | 80      | 0       | M             | QTMAST.FMUSERMEMO |         |
| User-Defined Memo 1 Line 2     | 1144          | 1223         | 80      | 0       | M             | QTMAST.FMUSERMEMO |         |
| Bill To Address Key            | 1224          | 1243         | 20      | 0       | C             | QTMAST.FBILLADDR  |         |

### 840 - DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked X must be selected. Only one of the fields marked X1 must be selected.

| **Field Description**                   | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|-----------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DET'                | 1             | 3            | 3       | 0       | C             | 'DET'             | X       |
| Part Number                             | 4             | 28           | 25      | 0       | C             | QTITEM.FPARTNO    | X1      |
| Part Revision Number                    | 29            | 31           | 3       | 0       | C             | QTITEM.FPARTREV   |         |
| Description Line 1                      | 32            | 111          | 80      | 0       | M             | QTITEM.FDESC      |         |
| Description Line 2                      | 112           | 191          | 80      | 0       | M             | QTITEM.FDESC      |         |
| Customer Part Number                    | 192           | 216          | 25      | 0       | C             | QTITEM.FCUSTPART  | X1      |
| Customer Part Number Revision           | 217           | 219          | 3       | 0       | C             | QTITEM.FCUSTPTREV |         |
| Item Source                             | 220           | 220          | 1       | 0       | C             | QTITEM.FSOURCE    |         |
| Product Class                           | 221           | 224          | 4       | 0       | C             | QTITEM.FPRODCL    |         |
| Group Code                              | 225           | 230          | 6       | 0       | C             | QTITEM.FGROUP     |         |
| External Item Number                    | 231           | 233          | 3       | 0       | C             | QTITEM.FENUMBER   |         |
| BOM or Routing has been Changed         | 234           | 234          | 1       | 0       | L             | QTITEM.FSTANDPART |         |
| Delivery Notes Line 1                   | 235           | 314          | 80      | 0       | M             | QTITEM.FDELIVERY  |         |
| Delivery Notes Line 2                   | 315           | 394          | 80      | 0       | M             | QTITEM.FDELIVERY  |         |
| Part Additional Instruction Memo Line 1 | 395           | 474          | 80      | 0       | M             | QTITEM.FDESCMEMO  |         |
| Part Additional Instruction Memo Line 2 | 475           | 554          | 80      | 0       | M             | QTITEM.FDESCMEMO  |         |
| Item Description Print Memo             | 555           | 555          | 1       | 0       | L             | QTITEM.FPRINTMEMO |         |
| Default Estimate Quantity               | 556           | 569          | 14      | 5       | N             | QTITEM.FESTQTY    |         |
| Quantity Unit of Measure                | 570           | 572          | 3       | 0       | C             | QTITEM.FMEASURE   |         |
| Unit Selling Price                      | 573           | 588          | 16      | 5       | N             | QTITEM.FUNETPRICE |         |
| Price Schedule Code                     | 589           | 594          | 6       | 0       | C             | QTITEM.FSCHECODE  |         |
| Lot Required                            | 595           | 595          | 1       | 0       | L             | QTITEM.FLLOTREQD  |         |
| Lot Text                                | 596           | 596          | 1       | 0       | C             | QTITEM.FCLOTEXT   |         |
| Taxable Item                            | 597           | 597          | 1       | 0       | L             | QTITEM.FLISTAXABL |         |

## 850 - Purchase Order

Inbound 850 (Purchase Order) results in the document automation of the Made2Manage Orders (SO) screen. The layout of the 850 Fixed File Format is listed below. The hierarchy of each 850 transaction is a single HDR segment followed by at least one DET segment followed by optional REL segments.

The REF, HDT and MSG records are extensions of the HDR record. The PID and DDT records are extensions of the DET record. The HAC and DAC records create line-item records for special allowances and charges from the header and item level respectively.

![](media/9eaf1e08c50bdb5341d8a126c4b5f274.png)

### 850-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'HDR'         | 1             | 3            | 3       | 0       | C             | 'HDR'              | X       |
| Trading Partner EDI ID\*         | 4             | 23           | 20      | 0       | C             | SOMAST.FCUSTNO     | X       |
| Customer Purchase Order Number\* | 24            | 43           | 20      | 0       | C             | SOMAST.FCUSTPONO   | X       |
| Company Name                     | 44            | 78           | 35      | 0       | C             | SOMAST.FCOMPANY    |         |
| Sold-To Address Key              | 79            | 98           | 20      | 0       | C             | SOMAST.FSOLDADDR   |         |
| Sold-To Address Line 1           | 99            | 178          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| Sold-To Address Line 2           | 179           | 258          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| City                             | 259           | 278          | 20      | 0       | C             | SOMAST.FCITY       |         |
| State                            | 279           | 298          | 20      | 0       | C             | SOMAST.FSTATE      |         |
| Zip Code                         | 299           | 308          | 10      | 0       | C             | SOMAST.FZIP        |         |
| Country                          | 309           | 333          | 25      | 0       | C             | SOMAST.FCOUNTRY    |         |
| Contact First Name               | 334           | 348          | 15      | 0       | C             | SOMAST.FCFNAME     |         |
| Contact Last Name                | 349           | 378          | 30      | 0       | C             | SOMAST.FCONTACT    |         |
| Phone Number                     | 379           | 398          | 20      | 0       | C             | SOMAST.FPHONE      |         |
| Fax Number                       | 399           | 418          | 20      | 0       | C             | SOMAST.FFAX        |         |
| Sales Order Name                 | 419           | 453          | 35      | 0       | C             | SOMAST.FORDERNAME  |         |
| Order Date                       | 454           | 461          | 8       | 0       | D             | SOMAST.FORDERDATE  |         |
| Due Date                         | 462           | 469          | 8       | 0       | D             | SOMAST.FDUEDATE    |         |
| Discount Rate                    | 470           | 476          | 7       | 3       | N             | SOMAST.FDISRATE    |         |
| Sales Order Transaction Currency | 477           | 479          | 3       | 0       | C             | SOMAST.FCCURID     |         |
| Ship To Address Key              | 480           | 499          | 20      | 0       | C             | SOMAST.FSHPTOADDR  |         |
| Ship Via                         | 500           | 519          | 20      | 0       | C             | SOMAST.FSHIPVIA    |         |
| Payment Type                     | 520           | 520          | 1       | 0       | C             | SOMAST.FPAYTYPE    |         |
| Terms For A Cash Payment         | 521           | 524          | 4       | 0       | C             | SOMAST.FTERM       |         |
| Freight on Board Point           | 525           | 544          | 20      | 0       | C             | SOMAST.FFOB        |         |
| User Defined Character 1         | 545           | 564          | 20      | 0       | C             | SOMAST.FCUSRCHR1   |         |
| User Defined Character 2         | 565           | 604          | 40      | 0       | C             | SOMAST.FCUSRCHR2   |         |
| User Defined Character 3         | 605           | 644          | 40      | 0       | C             | SOMAST.FCUSRCHR3   |         |
| User Defined Quantity 1          | 645           | 658          | 14      | 5       | N             | SOMAST.FNUSRQTY1   |         |
| User Defined Currency 1          | 659           | 674          | 16      | 5       | N             | SOMAST.FNUSRCUR1   |         |
| User Defined Date 1              | 675           | 682          | 8       | 0       | D             | SOMAST.FDUSRDATE1  |         |
| User Defined Memo 1 Line 1       | 683           | 762          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| User Defined Memo 1 Line 2       | 763           | 842          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| EDI Character 1                  | 843           | 862          | 20      | 0       | C             | SOHDR.FCEDICHAR1   |         |
| EDI Character 2                  | 863           | 882          | 20      | 0       | C             | SOHDR.FCEDICHAR2   |         |
| EDI Character 3                  | 883           | 902          | 20      | 0       | C             | SOHDR.FCEDICHAR3   |         |
| EDI Character 4                  | 903           | 922          | 20      | 0       | C             | SOHDR.FCEDICHAR4   |         |
| EDI Character 5                  | 923           | 942          | 20      | 0       | C             | SOHDR.FCEDICHAR5   |         |
| EDI Character 6                  | 943           | 962          | 20      | 0       | C             | SOHDR.FCEDICHAR6   |         |
| EDI Character 7                  | 963           | 982          | 20      | 0       | C             | SOHDR.FCEDICHAR7   |         |
| EDI Character 8                  | 983           | 1002         | 20      | 0       | C             | SOHDR.FCEDICHAR8   |         |
| EDI Character 9                  | 1003          | 1022         | 20      | 0       | C             | SOHDR.FCEDICHAR9   |         |
| EDI Character 10                 | 1023          | 1042         | 20      | 0       | C             | SOHDR.FCEDICHAR10  |         |
| EDI Character 11                 | 1043          | 1062         | 20      | 0       | C             | SOHDR.FCEDICHAR11  |         |
| EDI Character 12                 | 1063          | 1082         | 20      | 0       | C             | SOHDR.FCEDICHAR12  |         |
| EDI Character 13                 | 1083          | 1102         | 20      | 0       | C             | SOHDR.FCEDICHAR13  |         |
| EDI Character 14                 | 1103          | 1122         | 20      | 0       | C             | SOHDR.FCEDICHAR14  |         |
| EDI Character 15                 | 1123          | 1142         | 20      | 0       | C             | SOHDR.FCEDICHAR15  |         |
| EDI Date 1                       | 1143          | 1150         | 8       | 0       | D             | SOHDR.FCEDIDATE1   |         |
| EDI Date 2                       | 1151          | 1158         | 8       | 0       | D             | SOHDR.FCEDIDATE2   |         |
| User Defined Character 2         | 565           | 604          | 40      | 0       | C             | SOMAST.FCUSRCHR2   |         |
| User Defined Character 3         | 605           | 644          | 40      | 0       | C             | SOMAST.FCUSRCHR3   |         |
| User Defined Quantity 1          | 645           | 658          | 14      | 5       | N             | SOMAST.FNUSRQTY1   |         |
| User Defined Currency 1          | 659           | 674          | 16      | 5       | N             | SOMAST.FNUSRCUR1   |         |
| User Defined Date 1              | 675           | 682          | 8       | 0       | D             | SOMAST.FDUSRDATE1  |         |
| User Defined Memo 1 Line 1       | 683           | 762          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| User Defined Memo 1 Line 2       | 763           | 842          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| EDI Character 1                  | 843           | 862          | 20      | 0       | C             | SOHDR.FCEDICHAR1   |         |
| EDI Character 2                  | 863           | 882          | 20      | 0       | C             | SOHDR.FCEDICHAR2   |         |
| EDI Character 3                  | 883           | 902          | 20      | 0       | C             | SOHDR.FCEDICHAR3   |         |
| EDI Character 4                  | 903           | 922          | 20      | 0       | C             | SOHDR.FCEDICHAR4   |         |
| EDI Character 5                  | 923           | 942          | 20      | 0       | C             | SOHDR.FCEDICHAR5   |         |
| EDI Character 6                  | 943           | 962          | 20      | 0       | C             | SOHDR.FCEDICHAR6   |         |
| EDI Character 7                  | 963           | 982          | 20      | 0       | C             | SOHDR.FCEDICHAR7   |         |
| EDI Character 8                  | 983           | 1002         | 20      | 0       | C             | SOHDR.FCEDICHAR8   |         |
| EDI Character 9                  | 1003          | 1022         | 20      | 0       | C             | SOHDR.FCEDICHAR9   |         |
| EDI Character 10                 | 1023          | 1042         | 20      | 0       | C             | SOHDR.FCEDICHAR10  |         |
| EDI Character 11                 | 1043          | 1062         | 20      | 0       | C             | SOHDR.FCEDICHAR11  |         |
| EDI Character 12                 | 1063          | 1082         | 20      | 0       | C             | SOHDR.FCEDICHAR12  |         |
| EDI Character 13                 | 1083          | 1102         | 20      | 0       | C             | SOHDR.FCEDICHAR13  |         |
| EDI Character 14                 | 1103          | 1122         | 20      | 0       | C             | SOHDR.FCEDICHAR14  |         |
| EDI Character 15                 | 1123          | 1142         | 20      | 0       | C             | SOHDR.FCEDICHAR15  |         |
| EDI Date 1                       | 1143          | 1150         | 8       | 0       | D             | SOHDR.FCEDIDATE1   |         |
| EDI Date 2                       | 1151          | 1158         | 8       | 0       | D             | SOHDR.FCEDIDATE2   |         |
| EDI Date 3                       | 1159          | 1166         | 8       | 0       | D             | SOHDR.FCEDIDATE3   |         |
| EDI Date 4                       | 1167          | 1174         | 8       | 0       | D             | SOHDR.FCEDIDATE4   |         |
| EDI Date 5                       | 1175          | 1182         | 8       | 0       | D             | SOHDR.FCEDIDATE5   |         |
| EDI Date 6                       | 1183          | 1190         | 8       | 0       | D             | SOHDR.FCEDIDATE6   |         |
| EDI Date 7                       | 1191          | 1198         | 8       | 0       | D             | SOHDR.FCEDIDATE7   |         |
| EDI Date 8                       | 1199          | 1206         | 8       | 0       | D             | SOHDR.FCEDIDATE8   |         |
| EDI Date 9                       | 1207          | 1214         | 8       | 0       | D             | SOHDR.FCEDIDATE9   |         |
| EDI Date 10                      | 1215          | 1222         | 8       | 0       | D             | SOHDR.FCEDIDATE10  |         |
| EDI Date 11                      | 1223          | 1230         | 8       | 0       | D             | SOHDR.FCEDIDATE11  |         |
| EDI Date 12                      | 1231          | 1238         | 8       | 0       | D             | SOHDR.FCEDIDATE12  |         |
| EDI Date 13                      | 1239          | 1246         | 8       | 0       | D             | SOHDR.FCEDIDATE13  |         |
| EDI Date 14                      | 1247          | 1254         | 8       | 0       | D             | SOHDR.FCEDIDATE14  |         |
| EDI Date 15                      | 1255          | 1262         | 8       | 0       | D             | SOHDR.FCEDIDATE15  |         |
| EDI Numeric 1                    | 1263          | 1278         | 16      | 5       | N             | SOHDR.FCEDINUM1    |         |
| EDI Numeric 2                    | 1279          | 1294         | 16      | 5       | N             | SOHDR.FCEDINUM2    |         |
| EDI Numeric 3                    | 1295          | 1310         | 16      | 5       | N             | SOHDR.FCEDINUM3    |         |
| EDI Numeric 4                    | 1311          | 1326         | 16      | 5       | N             | SOHDR.FCEDINUM4    |         |
| EDI Numeric 5                    | 1327          | 1342         | 16      | 5       | N             | SOHDR.FCEDINUM5    |         |
| EDI Numeric 6                    | 1343          | 1358         | 16      | 5       | N             | SOHDR.FCEDINUM6    |         |
| EDI Numeric 7                    | 1359          | 1374         | 16      | 5       | N             | SOHDR.FCEDINUM7    |         |
| EDI Numeric 8                    | 1375          | 1390         | 16      | 5       | N             | SOHDR.FCEDINUM8    |         |
| EDI Numeric 9                    | 1391          | 1406         | 16      | 5       | N             | SOHDR.FCEDINUM9    |         |
| EDI Numeric 10                   | 1407          | 1422         | 16      | 5       | N             | SOHDR.FCEDINUM10   |         |
| EDI Memo 1 Line 1                | 1423          | 1502         | 80      | 0       | M             | SOHDR.FCEDIMEMO1   |         |
| EDI Memo 1 Line 2                | 1503          | 1582         | 80      | 0       | M             | SOHDR.FCEDIMEMO1   |         |
| EDI Memo 2 Line 1                | 1583          | 1662         | 80      | 0       | M             | SOHDR.FCEDIMEMO2   |         |
| EDI Memo 2 Line 2                | 1663          | 1742         | 80      | 0       | M             | SOHDR.FCEDIMEMO2   |         |
| Coordinator                      | 1743          | 1745         | 3       | 0       | C             | SOMAST.FSOCOORD    |         |
| Drop Ship Company Name           | 1746          | 1780         | 35      | 0       | C             | SOSHIP.FCCOMPANY   |         |
| Drop Ship-To Address Line 1      | 1781          | 1860         | 80      | 0       | M             | SOSHIP.FMSTREET    |         |
| Drop Ship-To Address Line 2      | 1861          | 1940         | 80      | 0       | M             | SOSHIP.FMSTREET    |         |
| Drop Ship City                   | 1941          | 1960         | 20      | 0       | C             | SOSHIP.FCCITY      |         |
| Drop Ship State                  | 1961          | 1980         | 20      | 0       | C             | SOSHIP.FCSTATE     |         |
| Drop Ship Zip Code               | 1981          | 1990         | 10      | 0       | C             | SOSHIP.FCZIP       |         |
| Drop Ship Country                | 1991          | 2015         | 25      | 0       | C             | SOSHIP.FCCOUNTRY   |         |
| Drop Ship Phone Number           | 2016          | 2035         | 20      | 0       | C             | SOSHIP.FCPHONE     |         |
| Drop Ship Fax Number             | 2036          | 2055         | 20      | 0       | C             | SOSHIP.FCFAX       |         |
| Contract Code                    | 2056          | 2065         | 10      | 0       | C             | SOMAST.CONTRACTNU  |         |
| Bill To Address Key              | 2066          | 2085         | 20      | 0       | C             | SOMAST.FBILLADDR   |         |
| Ship To Company                  | 2089          | 2123         | 35      | 0       | C             | SOMAST.SHIPCOMPANY |         |
| Ship To Address                  | 2124          | 2283         | 160     | 0       | C             | SOMAST.SHIPADDRESS |         |
| Ship To City                     | 2284          | 2303         | 20      | 0       | C             | SOMAST.SHIPCITY    |         |
| Ship To State                    | 2304          | 2323         | 20      | 0       | C             | SOMAST.SHIPSTATE   |         |
| Ship To Country                  | 2324          | 2348         | 25      | 0       | C             | SOMAST.SHIPCOUNTRY |         |
| Zip Code                         | 2349          | 2358         | 10      | 0       | C             | SOMAST.SHIPZIP     |         |
| Phone No.                        | 2359          | 2378         | 20      | 0       | C             | SOMAST.SHIPPHONE   |         |
| Fax                              | 2379          | 2398         | 20      | 0       | C             | SOMAST.SHIPFAX     |         |

### 850-REF

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REF'         | 1             | 3            | 3       | 0       | C             | 'REF'             | X       |
| Contact First Name               | 4             | 18           | 15      | 0       | C             | SOMAST.FCFNAME    |         |
| Contact Last Name                | 19            | 48           | 30      | 0       | C             | SOMAST.FCONTACT   |         |
| Phone Number                     | 49            | 68           | 20      | 0       | C             | SOMAST.FPHONE     |         |
| Fax Number                       | 69            | 88           | 20      | 0       | C             | SOMAST.FFAX       |         |
| Sales Order Name                 | 89            | 123          | 35      | 0       | C             | SOMAST.FORDERNAME |         |
| Sales Order Transaction Currency | 124           | 126          | 3       | 0       | C             | SOMAST.FCCURID    |         |
| Ship Via                         | 127           | 146          | 20      | 0       | C             | SOMAST.FSHIPVIA   |         |
| Payment Type                     | 147           | 147          | 1       | 0       | C             | SOMAST.FPAYTYPE   |         |
| Terms For A Cash Payment         | 148           | 151          | 4       | 0       | C             | SOMAST.FTERM      |         |
| Freight on Board Point           | 152           | 171          | 20      | 0       | C             | SOMAST.FFOB       |         |
| User Defined Character 1         | 172           | 191          | 20      | 0       | C             | SOMAST.FCUSRCHR1  |         |
| User Defined Character 2         | 192           | 231          | 40      | 0       | C             | SOMAST.FCUSRCHR2  |         |
| User Defined Character 3         | 232           | 271          | 40      | 0       | C             | SOMAST.FCUSRCHR3  |         |
| EDI Character 1                  | 272           | 291          | 20      | 0       | C             | SOHDR.FCEDICHAR1  |         |
| EDI Character 2                  | 292           | 311          | 20      | 0       | C             | SOHDR.FCEDICHAR2  |         |
| EDI Character 3                  | 312           | 331          | 20      | 0       | C             | SOHDR.FCEDICHAR3  |         |
| EDI Character 4                  | 332           | 351          | 20      | 0       | C             | SOHDR.FCEDICHAR4  |         |
| EDI Character 5                  | 352           | 371          | 20      | 0       | C             | SOHDR.FCEDICHAR5  |         |
| EDI Character 6                  | 372           | 391          | 20      | 0       | C             | SOHDR.FCEDICHAR6  |         |
| EDI Character 7                  | 392           | 411          | 20      | 0       | C             | SOHDR.FCEDICHAR7  |         |
| EDI Character 8                  | 412           | 431          | 20      | 0       | C             | SOHDR.FCEDICHAR8  |         |
| EDI Character 9                  | 432           | 451          | 20      | 0       | C             | SOHDR.FCEDICHAR9  |         |
| EDI Character 10                 | 452           | 471          | 20      | 0       | C             | SOHDR.FCEDICHAR10 |         |
| EDI Character 11                 | 472           | 491          | 20      | 0       | C             | SOHDR.FCEDICHAR11 |         |
| EDI Character 12                 | 492           | 511          | 20      | 0       | C             | SOHDR.FCEDICHAR12 |         |
| EDI Character 13                 | 512           | 531          | 20      | 0       | C             | SOHDR.FCEDICHAR13 |         |
| EDI Character 14                 | 532           | 551          | 20      | 0       | C             | SOHDR.FCEDICHAR14 |         |
| EDI Character 15                 | 552           | 571          | 20      | 0       | C             | SOHDR.FCEDICHAR15 |         |
| Contract Code                    | 572           | 581          | 10      | 0       | C             | SOMAST.CONTRACTNU |         |

### 850-HAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|----------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'HAC'         | 1             | 3            | 3        | 0        | C             | 'HAC'             | X        |
| Part Number                      | 4             | 28           | 25       | 0        | C             | SOITEM.FPARTNO    |          |
| Quantity                         | 29            | 44           | 16       | 5        | N             | SOITEM.FQUANTITY  |          |
| Unit of Measure                  | 45            | 47           | 3        | 0        | C             | SOITEM.FMEASURE   |          |
| Part Number Description          | 48            | 127          | 80       | 0        | M             | SOITEM.FDESC      |          |
| Unit Price                       | 128           | 143          | 16       | 5        | N             | SORELS.FUNETPRICE |          |
| Customer Part Number             | 144           | 168          | 25       | 0        | C             | SOITEM.FCUSTPART  |          |
| Customer Part Number Description | 169           | 248          | 80       | 0        | M             | SOITEM.FDESCMEMO  |          |
| EDI Character 1                  | 249           | 268          | 20       | 0        | C             | SODET.FCEDICHAR1  |          |
| EDI Character 2                  | 269           | 288          | 20       | 0        | C             | SODET.FCEDICHAR2  |          |
| EDI Character 3                  | 289           | 308          | 20       | 0        | C             | SODET.FCEDICHAR3  |          |
| EDI Character 4                  | 309           | 328          | 20       | 0        | C             | SODET.FCEDICHAR4  |          |
| EDI Character 5                  | 329           | 348          | 20       | 0        | C             | SODET.FCEDICHAR5  |          |
| EDI Character 6                  | 349           | 368          | 20       | 0        | C             | SODET.FCEDICHAR6  |          |
| EDI Character 7                  | 369           | 388          | 20       | 0        | C             | SODET.FCEDICHAR7  |          |
| EDI Character 8                  | 389           | 408          | 20       | 0        | C             | SODET.FCEDICHAR8  |          |
| EDI Character 9                  | 409           | 428          | 20       | 0        | C             | SODET.FCEDICHAR9  |          |
| EDI Character 10                 | 429           | 448          | 20       | 0        | C             | SODET.FCEDICHAR10 |          |
| EDI Character 11                 | 449           | 468          | 20       | 0        | C             | SODET.FCEDICHAR11 |          |
| EDI Character 12                 | 469           | 488          | 20       | 0        | C             | SODET.FCEDICHAR12 |          |
| EDI Character 13                 | 489           | 508          | 20       | 0        | C             | SODET.FCEDICHAR13 |          |
| EDI Character 14                 | 509           | 528          | 20       | 0        | C             | SODET.FCEDICHAR14 |          |
| EDI Character 15                 | 529           | 548          | 20       | 0        | C             | SODET.FCEDICHAR15 |          |
| EDI Numeric 1                    | 549           | 564          | 16       | 5        | N             | SODET.FCEDINUM1   |          |
| EDI Numeric 2                    | 565           | 580          | 16       | 5        | N             | SODET.FCEDINUM2   |          |
| EDI Numeric 3                    | 581           | 596          | 16       | 5        | N             | SODET.FCEDINUM3   |          |
| EDI Numeric 4                    | 597           | 612          | 16       | 5        | N             | SODET.FCEDINUM4   |          |
| EDI Numeric 5                    | 613           | 628          | 16       | 5        | N             | SODET.FCEDINUM5   |          |
| EDI Numeric 6                    | 629           | 644          | 16       | 5        | N             | SODET.FCEDINUM6   |          |
| EDI Numeric 7                    | 645           | 660          | 16       | 5        | N             | SODET.FCEDINUM7   |          |
| EDI Numeric 8                    | 661           | 676          | 16       | 5        | N             | SODET.FCEDINUM8   |          |
| EDI Numeric 9                    | 677           | 692          | 16       | 5        | N             | SODET.FCEDINUM9   |          |
| EDI Numeric 10                   | 693           | 708          | 16       | 5        | N             | SODET.FCEDINUM10  |          |
| EDI Memo 1                       | 709           | 788          | 80       | 0        | M             | SODET.FCEDIMEMO1  |          |
| EDI Memo 2                       | 789           | 868          | 80       | 0        | M             | SODET.FCEDIMEMO2  |          |
| Discount Rate                    | 869           | 875          | 7        | 3        | N             | SOMAST.FDISRATE1  |          |

**Tip:** In **HAC-1**, the Discount Rate is calculated as the sum of all discount rates when multiple HAC records are present.

### 850-HDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'HDT' | 1             | 3            | 3       | 0       | C             | 'HDT'             | X       |
| Order Date               | 4             | 11           | 8       | 0       | D             | SOMAST.FORDERDATE |         |
| Due Date                 | 12            | 19           | 8       | 0       | D             | SOMAST.FDUEDATE   |         |
| User Defined Date 1      | 20            | 27           | 8       | 0       | D             | SOMAST.FDUSRDATE1 |         |
| EDI Date 1               | 28            | 35           | 8       | 0       | D             | SOHDR.FCEDIDATE1  |         |
| EDI Date 2               | 36            | 43           | 8       | 0       | D             | SOHDR.FCEDIDATE2  |         |
| EDI Date 3               | 44            | 51           | 8       | 0       | D             | SOHDR.FCEDIDATE3  |         |
| EDI Date 4               | 52            | 59           | 8       | 0       | D             | SOHDR.FCEDIDATE4  |         |
| EDI Date 5               | 60            | 67           | 8       | 0       | D             | SOHDR.FCEDIDATE5  |         |
| EDI Date 6               | 68            | 75           | 8       | 0       | D             | SOHDR.FCEDIDATE6  |         |
| EDI Date 7               | 76            | 83           | 8       | 0       | D             | SOHDR.FCEDIDATE7  |         |
| EDI Date 8               | 84            | 91           | 8       | 0       | D             | SOHDR.FCEDIDATE8  |         |
| EDI Date 9               | 92            | 99           | 8       | 0       | D             | SOHDR.FCEDIDATE9  |         |
| EDI Date 10              | 100           | 107          | 8       | 0       | D             | SOHDR.FCEDIDATE10 |         |
| EDI Date 11              | 108           | 115          | 8       | 0       | D             | SOHDR.FCEDIDATE11 |         |
| EDI Date 12              | 116           | 123          | 8       | 0       | D             | SOHDR.FCEDIDATE12 |         |
| EDI Date 13              | 124           | 131          | 8       | 0       | D             | SOHDR.FCEDIDATE13 |         |
| EDI Date 14              | 132           | 139          | 8       | 0       | D             | SOHDR.FCEDIDATE14 |         |
| EDI Date 15              | 140           | 147          | 8       | 0       | D             | SOHDR.FCEDIDATE15 |         |

### 850-MSG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'MSG' | 1             | 3            | 3       | 0       | C             | 'MSG'             | X       |
| User Defined Memo 1      | 4             | 83           | 80      | 0       | M             | SOMAST.FMUSRMEMO1 |         |
| EDI Memo 1               | 84            | 163          | 80      | 0       | M             | SOHDR.FCEDIMEMO1  |         |
| EDI Memo 2               | 164           | 243          | 80      | 0       | M             | SOHDR.FCEDIMEMO2  |         |

### 

### 

### 

### 850-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with X must be selected.

Only one of the fields marked X1 must be selected.

### 

| **Field Description**                 | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|---------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DET'              | 1             | 3            | 3       | 0       | C             | 'DET'             | X       |
| Part Number                           | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO    | X1      |
| Part Revision                         | 29            | 31           | 3       | 0       | C             | SOITEM.FPARTREV   |         |
| Quantity                              | 32            | 47           | 16      | 5       | N             | SOITEM.FQUANTITY  | X       |
| Unit of Measure                       | 48            | 50           | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Source                                | 51            | 51           | 1       | 0       | C             | SOITEM.FSOURCE    |         |
| Part Number Description Line 1        | 52            | 131          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Part Number Description Line 2        | 132           | 211          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Product Class                         | 212           | 215          | 4       | 0       | C             | SOITEM.FPRODCL    |         |
| Group Code                            | 216           | 221          | 6       | 0       | C             | SOITEM.FGROUP     |         |
| Unit Price                            | 222           | 237          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Customer Part Number                  | 238           | 262          | 25      | 0       | C             | SOITEM.FCUSTPART  | X1      |
| Customer Part Revision                | 263           | 265          | 3       | 0       | C             | SOITEM.FCUSTPTREV |         |
| Customer Part Description Line 1      | 266           | 345          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Customer Part Description Line 2      | 346           | 425          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Delivery Notes Line 1                 | 426           | 505          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2                 | 506           | 585          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Order Billing Type                    | 586           | 588          | 3       | 0       | C             | SOITEM.FORDERTYPE |         |
| Use Standard BOMs and Routings        | 589           | 589          | 1       | 0       | L             | SOITEM.FSTANDPART |         |
| Lot/Serial Number Required            | 590           | 590          | 1       | 0       | L             | SOITEM.FLLOTREQD  |         |
| Extent of Lot Control                 | 591           | 591          | 1       | 0       | C             | SOITEM.FCLOTEXT   |         |
| Taxable                               | 592           | 592          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Price Schedule Code                   | 593           | 598          | 6       | 0       | C             | SOITEM.FSCHECODE  |         |
| Ship-to Address Key                   | 599           | 618          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                              | 619           | 626          | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| Close within minimum %                | 627           | 637          | 11      | 5       | N             | SOITEM.FNUNDER    |         |
| Close within maximum %                | 638           | 648          | 11      | 5       | N             | SOITEM.FNOVER     |         |
| Multi-Release                         | 649           | 649          | 1       | 0       | L             | SOITEM.FMULTIPLE  |         |
| Ship Item                             | 650           | 650          | 1       | 0       | L             | SOITEM.FSHIPITEM  |         |
| Split Ship                            | 651           | 651          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Create Jobs                           | 652           | 652          | 1       | 0       | L             | SOITEM.FAUTOCREAT |         |
| Print Memo                            | 653           | 653          | 1       | 0       | L             | SOITEM.FPRINTMEMO |         |
| Ship Early                            | 654           | 654          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| CTP Approved                          | 655           | 655          | 1       | 0       | L             | SORELS.FLATP      |         |
| EDI Character 1                       | 656           | 675          | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2                       | 676           | 695          | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3                       | 696           | 715          | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4                       | 716           | 735          | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5                       | 736           | 755          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6                       | 756           | 775          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7                       | 776           | 795          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8                       | 796           | 815          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9                       | 816           | 835          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10                      | 836           | 855          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11                      | 856           | 875          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12                      | 876           | 895          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |
| EDI Character 13                      | 896           | 915          | 20      | 0       | C             | SODET.FCEDICHAR13 |         |
| EDI Character 14                      | 916           | 935          | 20      | 0       | C             | SODET.FCEDICHAR14 |         |
| EDI Character 15                      | 936           | 955          | 20      | 0       | C             | SODET.FCEDICHAR15 |         |
| EDI Date 1                            | 956           | 963          | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2                            | 964           | 971          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3                            | 972           | 979          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4                            | 980           | 987          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5                            | 988           | 995          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6                            | 996           | 1003         | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7                            | 1004          | 1011         | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8                            | 1012          | 1019         | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9                            | 1020          | 1027         | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10                           | 1028          | 1035         | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11                           | 1036          | 1043         | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12                           | 1044          | 1051         | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13                           | 1052          | 1059         | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14                           | 1060          | 1067         | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15                           | 1068          | 1075         | 8       | 0       | D             | SODET.FCEDIDATE15 |         |
| EDI Numeric 1                         | 1076          | 1091         | 16      | 5       | N             | SODET.FCEDINUM1   |         |
| EDI Numeric 2                         | 1092          | 1107         | 16      | 5       | N             | SODET.FCEDINUM2   |         |
| EDI Numeric 3                         | 1108          | 1123         | 16      | 5       | N             | SODET.FCEDINUM3   |         |
| EDI Numeric 4                         | 1124          | 1139         | 16      | 5       | N             | SODET.FCEDINUM4   |         |
| EDI Numeric 5                         | 1140          | 1155         | 16      | 5       | N             | SODET.FCEDINUM5   |         |
| EDI Numeric 6                         | 1156          | 1171         | 16      | 5       | N             | SODET.FCEDINUM6   |         |
| EDI Numeric 7                         | 1172          | 1187         | 16      | 5       | N             | SODET.FCEDINUM7   |         |
| EDI Numeric 8                         | 1188          | 1203         | 16      | 5       | N             | SODET.FCEDINUM8   |         |
| EDI Numeric 9                         | 1204          | 1219         | 16      | 5       | N             | SODET.FCEDINUM9   |         |
| EDI Numeric 10                        | 1220          | 1235         | 16      | 5       | N             | SODET.FCEDINUM10  |         |
| EDI Memo 1 Line 1                     | 1236          | 1315         | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 1 Line 2                     | 1316          | 1395         | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 2 Line 1                     | 1396          | 1475         | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| EDI Memo 2 Line 2                     | 1476          | 1555         | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| Price Schedule Type                   | 1556          | 1556         | 1       | 0       | C             | SOITEM.FSCHEDTYPE |         |
| Quantity in Alternate Unit of Measure | 1557          | 1573         | 17      | 5       | N             | SOITEM.FNALTQTY   |         |
| Alternate Unit of Measure             | 1574          | 1576         | 3       | 0       | C             | SOITEM.FCALTUM    |         |
| Location                              | 1577          | 1590         | 14      | 0       | C             | SORELS.FCLOC      |         |
| Bin                                   | 1591          | 1604         | 14      | 0       | C             | SORELS.FCBIN      |         |
| Contract                              | 1605          | 1614         | 10      | 0       | C             | SOITEM.CONTRACTNU |         |

### 850-PID

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'PID'         | 1             | 3            | 3       | 0       | C             | 'PID              | X       |
| Part Number Description          | 4             | 83           | 80      | 0       | M             | SOITEM.FDESC      |         |
| Customer Part Number Description | 84            | 163          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Delivery Notes                   | 164           | 243          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| EDI Memo 1                       | 244           | 323          | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 2                       | 324           | 403          | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| EDI Character 1                  | 404           | 423          | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2                  | 424           | 443          | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3                  | 444           | 463          | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4                  | 464           | 483          | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5                  | 484           | 503          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6                  | 504           | 523          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7                  | 524           | 543          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8                  | 544           | 563          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9                  | 564           | 583          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10                 | 584           | 603          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11                 | 604           | 623          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12                 | 624           | 643          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |
| EDI Character 13                 | 644           | 663          | 20      | 0       | C             | SODET.FCEDICHAR13 |         |
| EDI Character 14                 | 664           | 683          | 20      | 0       | C             | SODET.FCEDICHAR14 |         |
| EDI Character 15                 | 684           | 703          | 20      | 0       | C             | SODET.FCEDICHAR15 |         |
| EDI Numeric 1                    | 704           | 719          | 16      | 5       | N             | SODET.FCEDINUM1   |         |
| EDI Numeric 2                    | 720           | 735          | 16      | 5       | N             | SODET.FCEDINUM2   |         |
| EDI Numeric 3                    | 736           | 751          | 16      | 5       | N             | SODET.FCEDINUM3   |         |
| EDI Numeric 4                    | 752           | 767          | 16      | 5       | N             | SODET.FCEDINUM4   |         |
| EDI Numeric 5                    | 768           | 783          | 16      | 5       | N             | SODET.FCEDINUM5   |         |
| EDI Numeric 6                    | 784           | 799          | 16      | 5       | N             | SODET.FCEDINUM6   |         |
| EDI Numeric 7                    | 800           | 815          | 16      | 5       | N             | SODET.FCEDINUM7   |         |
| EDI Numeric 8                    | 816           | 831          | 16      | 5       | N             | SODET.FCEDINUM8   |         |
| EDI Numeric 9                    | 832           | 847          | 16      | 5       | N             | SODET.FCEDINUM9   |         |
| EDI Numeric 10                   | 848           | 863          | 16      | 5       | N             | SODET.FCEDINUM10  |         |

### 850-DDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DDT' | 1             | 3            | 3       | 0       | C             | 'DDT'             | X       |
| Delivery Notes           | 4             | 83           | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Due Date                 | 84            | 91           | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| EDI Date 1               | 92            | 99           | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2               | 100           | 107          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3               | 108           | 115          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4               | 116           | 123          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5               | 124           | 131          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6               | 132           | 139          | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7               | 140           | 147          | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8               | 148           | 155          | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9               | 156           | 163          | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10              | 164           | 171          | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11              | 172           | 179          | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12              | 180           | 187          | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13              | 188           | 195          | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14              | 196           | 203          | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15              | 204           | 211          | 8       | 0       | D             | SODET.FCEDIDATE15 |         |

### 850-DAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'DAC'         | 1             | 3            | 3       | 0       | C             | 'DAC'              | X       |
| Part Number                      | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO     |         |
| Quantity                         | 29            | 44           | 16      | 5       | N             | SOITEM.FQUANTITY   |         |
| Unit of Measure                  | 45            | 47           | 3       | 0       | C             | SOITEM.FMEASURE    |         |
| Part Number Description          | 48            | 127          | 80      | 0       | M             | SOITEM.FDESC       |         |
| Unit Price                       | 128           | 143          | 16      | 5       | N             | SORELS.FUNETPRICE  |         |
| Customer Part Number             | 144           | 168          | 25      | 0       | C             | SOITEM.FCUSTPART   |         |
| Customer Part Number Description | 169           | 248          | 80      | 0       | M             | SOITEM.FDESCMEMO   |         |
| EDI Character 1                  | 249           | 268          | 20      | 0       | C             | SODET.FCEDICHAR1   |         |
| EDI Character 2                  | 269           | 288          | 20      | 0       | C             | SODET.FCEDICHAR2   |         |
| EDI Character 3                  | 289           | 308          | 20      | 0       | C             | SODET.FCEDICHAR3   |         |
| EDI Character 4                  | 309           | 328          | 20      | 0       | C             | SODET.FCEDICHAR4   |         |
| EDI Character 5                  | 329           | 348          | 20      | 0       | C             | SODET.FCEDICHAR5   |         |
| EDI Character 6                  | 349           | 368          | 20      | 0       | C             | SODET.FCEDICHAR6   |         |
| EDI Character 7                  | 369           | 388          | 20      | 0       | C             | SODET.FCEDICHAR7   |         |
| EDI Character 8                  | 389           | 408          | 20      | 0       | C             | SODET.FCEDICHAR8   |         |
| EDI Character 9                  | 409           | 428          | 20      | 0       | C             | SODET.FCEDICHAR9   |         |
| EDI Character 10                 | 429           | 448          | 20      | 0       | C             | SODET.FCEDICHAR10  |         |
| EDI Character 11                 | 449           | 468          | 20      | 0       | C             | SODET.FCEDICHAR11  |         |
| EDI Character 12                 | 469           | 488          | 20      | 0       | C             | SODET.FCEDICHAR12  |         |
| EDI Character 13                 | 489           | 508          | 20      | 0       | C             | SODET.FCEDICHAR13  |         |
| EDI Character 14                 | 509           | 528          | 20      | 0       | C             | SODET.FCEDICHAR14  |         |
| EDI Character 15                 | 529           | 548          | 20      | 0       | C             | SODET.FCEDICHAR15  |         |
| EDI Numeric 1                    | 549           | 564          | 16      | 5       | N             | SODET.FCEDINUM1    |         |
| EDI Numeric 2                    | 565           | 580          | 16      | 5       | N             | SODET.FCEDINUM2    |         |
| EDI Numeric 3                    | 581           | 596          | 16      | 5       | N             | SODET.FCEDINUM3    |         |
| EDI Numeric 4                    | 597           | 612          | 16      | 5       | N             | SODET.FCEDINUM4    |         |
| EDI Numeric 5                    | 613           | 628          | 16      | 5       | N             | SODET.FCEDINUM5    |         |
| EDI Numeric 6                    | 629           | 644          | 16      | 5       | N             | SODET.FCEDINUM6    |         |
| EDI Numeric 7                    | 645           | 660          | 16      | 5       | N             | SODET.FCEDINUM7    |         |
| EDI Numeric 8                    | 661           | 676          | 16      | 5       | N             | SODET.FCEDINUM8    |         |
| EDI Numeric 9                    | 677           | 692          | 16      | 5       | N             | SODET.FCEDINUM9    |         |
| EDI Numeric 10                   | 693           | 708          | 16      | 5       | N             | SODET.FCEDINUM10   |         |
| EDI Memo 1                       | 709           | 788          | 80      | 0       | M             | SODET.FCEDIMEMO1   |         |
| EDI Memo 2                       | 789           | 868          | 80      | 0       | M             | SODET.FCEDIMEMO2   |         |
| Discount Rate                    | 869           | 875          | 7       | 3       | N             | SORELS.FUNETPRICE1 |         |

**Tip:** In **DAC-1**, allowance or charge discount rate is calculated as the sum of all discount rates when multiple DAC records are present for a line item and a unit discount amount calculated as a function of the parent unit price and the calculated discount.

### 850-REL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REL' | 1             | 3            | 3       | 0       | C             | 'REL'             | X       |
| Ship-To Address Key      | 4             | 23           | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                 | 24            | 31           | 8       | 0       | D             | SORELS.FDUEDATE   |         |
| Delivery Notes Line 1    | 32            | 111          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2    | 112           | 191          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Taxable                  | 192           | 192          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Allow Split Shipments    | 193           | 193          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Ship Early               | 194           | 194          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| Release Quantity         | 195           | 208          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Unit Price               | 209           | 224          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Ship-To Address Key 2    | 225           | 244          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 2       | 245           | 258          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 3    | 259           | 278          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 3       | 279           | 292          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 4    | 293           | 312          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 4       | 313           | 326          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 5    | 327           | 346          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 5       | 347           | 360          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 6    | 361           | 380          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 6       | 381           | 394          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 7    | 395           | 414          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 7       | 415           | 428          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 8    | 429           | 448          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 8       | 449           | 462          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 9    | 463           | 482          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 9       | 483           | 496          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 10   | 497           | 516          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 10      | 517           | 530          | 14      | 5       | N             | SORELS.FORDERQTY  |         |

## 860 - Purchase Order Change

Inbound 860 (Purchase Order Change) results in the document automation of the Made2Manage Orders (SO) screen. The layout of the 860 Fixed File Format is listed below. The hierarchy of each 860 transaction is a single HDR segment followed by at least one DET segment followed by optional REL segments. The REF, HDT and MSG records are extensions of the HDR record. The PID and DDT records are extensions of the DET record. The HAC and DAC records create line-item records for special allowances and charges from the header and item level respectively.

### 860-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'HDR'         | 1             | 3            | 3       | 0       | C             | 'HDR'              | X       |
| Trading Partner EDI ID\*         | 4             | 23           | 20      | 0       | C             | SOMAST.FCUSTNO     | X       |
| Customer Purchase Order Number\* | 24            | 43           | 20      | 0       | C             | SOMAST.FCUSTPONO   | X       |
| Company Name                     | 44            | 78           | 35      | 0       | C             | SOMAST.FCOMPANY    |         |
| Sold-To Address Key              | 79            | 98           | 20      | 0       | C             | SOMAST.FSOLDADDR   |         |
| Sold-To Address Line 1           | 99            | 178          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| Sold-To Address Line 2           | 179           | 258          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| City                             | 259           | 278          | 20      | 0       | C             | SOMAST.FCITY       |         |
| State                            | 279           | 298          | 20      | 0       | C             | SOMAST.FSTATE      |         |
| Zip Code                         | 299           | 308          | 10      | 0       | C             | SOMAST.FZIP        |         |
| Country                          | 309           | 333          | 25      | 0       | C             | SOMAST.FCOUNTRY    |         |
| Contact First Name               | 334           | 348          | 15      | 0       | C             | SOMAST.FCFNAME     |         |
| Contact Last Name                | 349           | 378          | 30      | 0       | C             | SOMAST.FCONTACT    |         |
| Phone Number                     | 379           | 398          | 20      | 0       | C             | SOMAST.FPHONE      |         |
| Fax Number                       | 399           | 418          | 20      | 0       | C             | SOMAST.FFAX        |         |
| Sales Order Name                 | 419           | 453          | 35      | 0       | C             | SOMAST.FORDERNAME  |         |
| Order Date                       | 454           | 461          | 8       | 0       | D             | SOMAST.FORDERDATE  |         |
| Due Date                         | 462           | 469          | 8       | 0       | D             | SOMAST.FDUEDATE    |         |
| Discount Rate                    | 470           | 476          | 7       | 3       | N             | SOMAST.FDISRATE    |         |
| Sales Order Transaction Currency | 477           | 479          | 3       | 0       | C             | SOMAST.FCCURID     |         |
| Ship To Address Key              | 480           | 499          | 20      | 0       | C             | SOMAST.FSHPTOADDR  |         |
| Ship Via                         | 500           | 519          | 20      | 0       | C             | SOMAST.FSHIPVIA    |         |
| Payment Type                     | 520           | 520          | 1       | 0       | C             | SOMAST.FPAYTYPE    |         |
| Terms For A Cash Payment         | 521           | 524          | 4       | 0       | C             | SOMAST.FTERM       |         |
| Freight on Board Point           | 525           | 544          | 20      | 0       | C             | SOMAST.FFOB        |         |
| User Defined Character 1         | 545           | 564          | 20      | 0       | C             | SOMAST.FCUSRCHR1   |         |
| User Defined Character 2         | 565           | 604          | 40      | 0       | C             | SOMAST.FCUSRCHR2   |         |
| User Defined Character 3         | 605           | 644          | 40      | 0       | C             | SOMAST.FCUSRCHR3   |         |
| User Defined Quantity 1          | 645           | 658          | 14      | 5       | N             | SOMAST.FNUSRQTY1   |         |
| User Defined Currency 1          | 659           | 674          | 16      | 5       | N             | SOMAST.FNUSRCUR1   |         |
| User Defined Date 1              | 675           | 682          | 8       | 0       | D             | SOMAST.FDUSRDATE1  |         |
| User Defined Memo 1 Line 1       | 683           | 762          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| User Defined Memo 1 Line 2       | 763           | 842          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| EDI Character 1                  | 843           | 862          | 20      | 0       | C             | SOHDR.FCEDICHAR1   |         |
| EDI Character 2                  | 863           | 882          | 20      | 0       | C             | SOHDR.FCEDICHAR2   |         |
| EDI Character 3                  | 883           | 902          | 20      | 0       | C             | SOHDR.FCEDICHAR3   |         |
| EDI Character 4                  | 903           | 922          | 20      | 0       | C             | SOHDR.FCEDICHAR4   |         |
| EDI Character 5                  | 923           | 942          | 20      | 0       | C             | SOHDR.FCEDICHAR5   |         |
| EDI Character 6                  | 943           | 962          | 20      | 0       | C             | SOHDR.FCEDICHAR6   |         |
| EDI Character 7                  | 963           | 982          | 20      | 0       | C             | SOHDR.FCEDICHAR7   |         |
| EDI Character 8                  | 983           | 1002         | 20      | 0       | C             | SOHDR.FCEDICHAR8   |         |
| EDI Character 9                  | 1003          | 1022         | 20      | 0       | C             | SOHDR.FCEDICHAR9   |         |
| EDI Character 10                 | 1023          | 1042         | 20      | 0       | C             | SOHDR.FCEDICHAR10  |         |
| EDI Character 11                 | 1043          | 1062         | 20      | 0       | C             | SOHDR.FCEDICHAR11  |         |
| EDI Character 12                 | 1063          | 1082         | 20      | 0       | C             | SOHDR.FCEDICHAR12  |         |
| EDI Character 13                 | 1083          | 1102         | 20      | 0       | C             | SOHDR.FCEDICHAR13  |         |
| EDI Character 14                 | 1103          | 1122         | 20      | 0       | C             | SOHDR.FCEDICHAR14  |         |
| EDI Character 15                 | 1123          | 1142         | 20      | 0       | C             | SOHDR.FCEDICHAR15  |         |
| EDI Date 1                       | 1143          | 1150         | 8       | 0       | D             | SOHDR.FCEDIDATE1   |         |
| EDI Date 2                       | 1151          | 1158         | 8       | 0       | D             | SOHDR.FCEDIDATE2   |         |
| EDI Date 3                       | 1159          | 1166         | 8       | 0       | D             | SOHDR.FCEDIDATE3   |         |
| EDI Date 4                       | 1167          | 1174         | 8       | 0       | D             | SOHDR.FCEDIDATE4   |         |
| EDI Date 5                       | 1175          | 1182         | 8       | 0       | D             | SOHDR.FCEDIDATE5   |         |
| EDI Date 6                       | 1183          | 1190         | 8       | 0       | D             | SOHDR.FCEDIDATE6   |         |
| EDI Date 7                       | 1191          | 1198         | 8       | 0       | D             | SOHDR.FCEDIDATE7   |         |
| EDI Date 8                       | 1199          | 1206         | 8       | 0       | D             | SOHDR.FCEDIDATE8   |         |
| EDI Date 9                       | 1207          | 1214         | 8       | 0       | D             | SOHDR.FCEDIDATE9   |         |
| EDI Date 10                      | 1215          | 1222         | 8       | 0       | D             | SOHDR.FCEDIDATE10  |         |
| EDI Date 11                      | 1223          | 1230         | 8       | 0       | D             | SOHDR.FCEDIDATE11  |         |
| EDI Date 12                      | 1231          | 1238         | 8       | 0       | D             | SOHDR.FCEDIDATE12  |         |
| EDI Date 13                      | 1239          | 1246         | 8       | 0       | D             | SOHDR.FCEDIDATE13  |         |
| EDI Date 14                      | 1247          | 1254         | 8       | 0       | D             | SOHDR.FCEDIDATE14  |         |
| EDI Date 15                      | 1255          | 1262         | 8       | 0       | D             | SOHDR.FCEDIDATE15  |         |
| EDI Numeric 1                    | 1263          | 1278         | 16      | 5       | N             | SOHDR.FCEDINUM1    |         |
| EDI Numeric 2                    | 1279          | 1294         | 16      | 5       | N             | SOHDR.FCEDINUM2    |         |
| EDI Numeric 3                    | 1295          | 1310         | 16      | 5       | N             | SOHDR.FCEDINUM3    |         |
| EDI Numeric 4                    | 1311          | 1326         | 16      | 5       | N             | SOHDR.FCEDINUM4    |         |
| EDI Numeric 5                    | 1327          | 1342         | 16      | 5       | N             | SOHDR.FCEDINUM5    |         |
| EDI Numeric 6                    | 1343          | 1358         | 16      | 5       | N             | SOHDR.FCEDINUM6    |         |
| EDI Numeric 7                    | 1359          | 1374         | 16      | 5       | N             | SOHDR.FCEDINUM7    |         |
| EDI Numeric 8                    | 1375          | 1390         | 16      | 5       | N             | SOHDR.FCEDINUM8    |         |
| EDI Numeric 9                    | 1391          | 1406         | 16      | 5       | N             | SOHDR.FCEDINUM9    |         |
| EDI Numeric 10                   | 1407          | 1422         | 16      | 5       | N             | SOHDR.FCEDINUM10   |         |
| EDI Memo 1 Line 1                | 1423          | 1502         | 80      | 0       | M             | SOHDR.FCEDIMEMO1   |         |
| EDI Memo 1 Line 2                | 1503          | 1582         | 80      | 0       | M             | SOHDR.FCEDIMEMO1   |         |
| EDI Memo 2 Line 1                | 1583          | 1662         | 80      | 0       | M             | SOHDR.FCEDIMEMO2   |         |
| EDI Memo 2 Line 2                | 1663          | 1742         | 80      | 0       | M             | SOHDR.FCEDIMEMO2   |         |
| Coordinator                      | 1743          | 1745         | 3       | 0       | C             | SOMAST.FSOCOORD    |         |
| Contract Code                    | 1746          | 1755         | 10      | 0       | C             | SOMAST.CONTRACTNU  |         |
| Bill To Address Key              | 1756          | 1775         | 20      | 0       | C             | SOMAST.FBILLADDR   |         |
| Ship To Company                  | 2089          | 2123         | 35      | 0       | C             | SOMAST.SHIPCOMPANY |         |
| Ship To Address                  | 2124          | 2283         | 160     | 0       | C             | SOMAST.SHIPADDRESS |         |
| Ship To City                     | 2284          | 2303         | 20      | 0       | C             | SOMAST.SHIPCITY    |         |
| Ship To State                    | 2304          | 2323         | 20      | 0       | C             | SOMAST.SHIPSTATE   |         |
| Ship To Country                  | 2324          | 2348         | 25      | 0       | C             | SOMAST.SHIPCOUNTRY |         |
| Zip Code                         | 2349          | 2358         | 10      | 0       | C             | SOMAST.SHIPZIP     |         |
| Phone No.                        | 2359          | 2378         | 20      | 0       | C             | SOMAST.SHIPPHONE   |         |
| Fax                              | 2379          | 2398         | 20      | 0       | C             | SOMAST.SHIPFAX     |         |

### 860-REF

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REF'         | 1             | 3            | 3       | 0       | C             | 'REF'             | X       |
| Contact First Name               | 4             | 18           | 15      | 0       | C             | SOMAST.FCFNAME    |         |
| Contact Last Name                | 19            | 48           | 30      | 0       | C             | SOMAST.FCONTACT   |         |
| Phone Number                     | 49            | 68           | 20      | 0       | C             | SOMAST.FPHONE     |         |
| Fax Number                       | 69            | 88           | 20      | 0       | C             | SOMAST.FFAX       |         |
| Sales Order Name                 | 89            | 123          | 35      | 0       | C             | SOMAST.FORDERNAME |         |
| Sales Order Transaction Currency | 124           | 126          | 3       | 0       | C             | SOMAST.FCCURID    |         |
| Ship Via                         | 127           | 146          | 20      | 0       | C             | SOMAST.FSHIPVIA   |         |
| Payment Type                     | 147           | 147          | 1       | 0       | C             | SOMAST.FPAYTYPE   |         |
| Terms For A Cash Payment         | 148           | 151          | 4       | 0       | C             | SOMAST.FTERM      |         |
| Freight on Board Point           | 152           | 171          | 20      | 0       | C             | SOMAST.FFOB       |         |
| User Defined Character 1         | 172           | 191          | 20      | 0       | C             | SOMAST.FCUSRCHR1  |         |
| User Defined Character 2         | 192           | 231          | 40      | 0       | C             | SOMAST.FCUSRCHR2  |         |
| User Defined Character 3         | 232           | 271          | 40      | 0       | C             | SOMAST.FCUSRCHR3  |         |
| EDI Character 1                  | 272           | 291          | 20      | 0       | C             | SOHDR.FCEDICHAR1  |         |
| EDI Character 2                  | 292           | 311          | 20      | 0       | C             | SOHDR.FCEDICHAR2  |         |
| EDI Character 3                  | 312           | 331          | 20      | 0       | C             | SOHDR.FCEDICHAR3  |         |
| EDI Character 4                  | 332           | 351          | 20      | 0       | C             | SOHDR.FCEDICHAR4  |         |
| EDI Character 5                  | 352           | 371          | 20      | 0       | C             | SOHDR.FCEDICHAR5  |         |
| EDI Character 6                  | 372           | 391          | 20      | 0       | C             | SOHDR.FCEDICHAR6  |         |
| EDI Character 7                  | 392           | 411          | 20      | 0       | C             | SOHDR.FCEDICHAR7  |         |
| EDI Character 8                  | 412           | 431          | 20      | 0       | C             | SOHDR.FCEDICHAR8  |         |
| EDI Character 9                  | 432           | 451          | 20      | 0       | C             | SOHDR.FCEDICHAR9  |         |
| EDI Character 10                 | 452           | 471          | 20      | 0       | C             | SOHDR.FCEDICHAR10 |         |
| EDI Character 11                 | 472           | 491          | 20      | 0       | C             | SOHDR.FCEDICHAR11 |         |
| EDI Character 12                 | 492           | 511          | 20      | 0       | C             | SOHDR.FCEDICHAR12 |         |
| EDI Character 13                 | 512           | 531          | 20      | 0       | C             | SOHDR.FCEDICHAR13 |         |
| EDI Character 14                 | 532           | 551          | 20      | 0       | C             | SOHDR.FCEDICHAR14 |         |
| EDI Character 15                 | 552           | 571          | 20      | 0       | C             | SOHDR.FCEDICHAR15 |         |
| Contract Code                    | 572           | 581          | 10      | 0       | C             | SOMAST.CONTRACTNU |         |

### 860-HAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'HAC'         | 1             | 3            | 3       | 0       | C             | 'HAC'             | X       |
| Part Number                      | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO    |         |
| Quantity                         | 29            | 44           | 16      | 5       | N             | SOITEM.FQUANTITY  |         |
| Unit of Measure                  | 45            | 47           | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Part Number Description          | 48            | 127          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Unit Price                       | 128           | 143          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Customer Part Number             | 144           | 168          | 25      | 0       | C             | SOITEM.FCUSTPART  |         |
| Customer Part Number Description | 169           | 248          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| EDI Character 1                  | 249           | 268          | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2                  | 269           | 288          | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3                  | 289           | 308          | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4                  | 309           | 328          | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5                  | 329           | 348          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6                  | 349           | 368          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7                  | 369           | 388          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8                  | 389           | 408          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9                  | 409           | 428          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10                 | 429           | 448          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11                 | 449           | 468          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12                 | 469           | 488          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |
| EDI Character 13                 | 489           | 508          | 20      | 0       | C             | SODET.FCEDICHAR13 |         |
| EDI Character 14                 | 509           | 528          | 20      | 0       | C             | SODET.FCEDICHAR14 |         |
| EDI Character 15                 | 529           | 548          | 20      | 0       | C             | SODET.FCEDICHAR15 |         |
| EDI Numeric 1                    | 549           | 564          | 16      | 5       | N             | SODET.FCEDINUM1   |         |
| EDI Numeric 2                    | 565           | 580          | 16      | 5       | N             | SODET.FCEDINUM2   |         |
| EDI Numeric 3                    | 581           | 596          | 16      | 5       | N             | SODET.FCEDINUM3   |         |
| EDI Numeric 4                    | 597           | 612          | 16      | 5       | N             | SODET.FCEDINUM4   |         |
| EDI Numeric 5                    | 613           | 628          | 16      | 5       | N             | SODET.FCEDINUM5   |         |
| EDI Numeric 6                    | 629           | 644          | 16      | 5       | N             | SODET.FCEDINUM6   |         |
| EDI Numeric 7                    | 645           | 660          | 16      | 5       | N             | SODET.FCEDINUM7   |         |
| EDI Numeric 8                    | 661           | 676          | 16      | 5       | N             | SODET.FCEDINUM8   |         |
| EDI Numeric 9                    | 677           | 692          | 16      | 5       | N             | SODET.FCEDINUM9   |         |
| EDI Numeric 10                   | 693           | 708          | 16      | 5       | N             | SODET.FCEDINUM10  |         |
| EDI Memo 1                       | 709           | 788          | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 2                       | 789           | 868          | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| Discount Rate                    | 869           | 875          | 7       | 3       | N             | SOMAST.FDISRATE1  |         |

**Tip:** In **HAC-1**, the Discount Rate is calculated as the sum of all discount rates when multiple HAC records are present.

### 860-HDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'HDT' | 1             | 3            | 3       | 0       | C             | 'HDT'             | X       |
| Order Date               | 4             | 11           | 8       | 0       | D             | SOMAST.FORDERDATE |         |
| Due Date                 | 12            | 19           | 8       | 0       | D             | SOMAST.FDUEDATE   |         |
| User Defined Date 1      | 20            | 27           | 8       | 0       | D             | SOMAST.FDUSRDATE1 |         |
| EDI Date 1               | 28            | 35           | 8       | 0       | D             | SOHDR.FCEDIDATE1  |         |
| EDI Date 2               | 36            | 43           | 8       | 0       | D             | SOHDR.FCEDIDATE2  |         |
| EDI Date 3               | 44            | 51           | 8       | 0       | D             | SOHDR.FCEDIDATE3  |         |
| EDI Date 4               | 52            | 59           | 8       | 0       | D             | SOHDR.FCEDIDATE4  |         |
| EDI Date 5               | 60            | 67           | 8       | 0       | D             | SOHDR.FCEDIDATE5  |         |
| EDI Date 6               | 68            | 75           | 8       | 0       | D             | SOHDR.FCEDIDATE6  |         |
| EDI Date 7               | 76            | 83           | 8       | 0       | D             | SOHDR.FCEDIDATE7  |         |
| EDI Date 8               | 84            | 91           | 8       | 0       | D             | SOHDR.FCEDIDATE8  |         |
| EDI Date 9               | 92            | 99           | 8       | 0       | D             | SOHDR.FCEDIDATE9  |         |
| EDI Date 10              | 100           | 107          | 8       | 0       | D             | SOHDR.FCEDIDATE10 |         |
| EDI Date 11              | 108           | 115          | 8       | 0       | D             | SOHDR.FCEDIDATE11 |         |
| EDI Date 12              | 116           | 123          | 8       | 0       | D             | SOHDR.FCEDIDATE12 |         |
| EDI Date 13              | 124           | 131          | 8       | 0       | D             | SOHDR.FCEDIDATE13 |         |
| EDI Date 14              | 132           | 139          | 8       | 0       | D             | SOHDR.FCEDIDATE14 |         |
| EDI Date 15              | 140           | 147          | 8       | 0       | D             | SOHDR.FCEDIDATE15 |         |

### 860-MSG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'MSG' | 1             | 3            | 3       | 0       | C             | 'MSG'             | X       |
| User Defined Memo 1      | 4             | 83           | 80      | 0       | M             | SOMAST.FMUSRMEMO1 |         |
| EDI Memo 1               | 84            | 163          | 80      | 0       | M             | SOHDR.FCEDIMEMO1  |         |
| EDI Memo 2               | 164           | 243          | 80      | 0       | M             | SOHDR.FCEDIMEMO2  |         |

### 860-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                 | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|---------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DET'              | 1             | 3            | 3       | 0       | C             | 'DET'             | X       |
| Part Number                           | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO    | X       |
| Part Revision                         | 29            | 31           | 3       | 0       | C             | SOITEM.FPARTREV   |         |
| Quantity                              | 32            | 47           | 16      | 5       | N             | SOITEM.FQUANTITY  | X       |
| Unit of Measure                       | 48            | 50           | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Source                                | 51            | 51           | 1       | 0       | C             | SOITEM.FSOURCE    |         |
| Part Number Description Line 1        | 52            | 131          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Part Number Description Line 2        | 132           | 211          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Product Class                         | 212           | 215          | 4       | 0       | C             | SOITEM.FPRODCL    |         |
| Group Code                            | 216           | 221          | 6       | 0       | C             | SOITEM.FGROUP     |         |
| Unit Price                            | 222           | 237          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Customer Part Number                  | 238           | 262          | 25      | 0       | C             | SOITEM.FCUSTPART  |         |
| Customer Part Revision                | 263           | 265          | 3       | 0       | C             | SOITEM.FCUSTPTREV |         |
| Customer Part Description Line 1      | 266           | 345          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Customer Part Description Line 2      | 346           | 425          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Delivery Notes Line 1                 | 426           | 505          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2                 | 506           | 585          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Order Billing Type                    | 586           | 588          | 3       | 0       | C             | SOITEM.FORDERTYPE |         |
| Use Standard BOMs and Routings        | 589           | 589          | 1       | 0       | L             | SOITEM.FSTANDPART |         |
| Lot/Serial Number Required            | 590           | 590          | 1       | 0       | L             | SOITEM.FLLOTREQD  |         |
| Extent of Lot Control                 | 591           | 591          | 1       | 0       | C             | SOITEM.FCLOTEXT   |         |
| Taxable                               | 592           | 592          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Price Schedule Code                   | 593           | 598          | 6       | 0       | C             | SOITEM.FSCHECODE  |         |
| Ship-to Address Key                   | 599           | 618          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                              | 619           | 626          | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| Close within minimum %                | 627           | 637          | 11      | 5       | N             | SOITEM.FNUNDER    |         |
| Close within maximum %                | 638           | 648          | 11      | 5       | N             | SOITEM.FNOVER     |         |
| Multi-Release                         | 649           | 649          | 1       | 0       | L             | SOITEM.FMULTIPLE  |         |
| Ship Item                             | 650           | 650          | 1       | 0       | L             | SOITEM.FSHIPITEM  |         |
| Split Ship                            | 651           | 651          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Create Jobs                           | 652           | 652          | 1       | 0       | L             | SOITEM.FAUTOCREAT |         |
| Print Memo                            | 653           | 653          | 1       | 0       | L             | SOITEM.FPRINTMEMO |         |
| Ship Early                            | 654           | 654          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| CTP Approved                          | 655           | 655          | 1       | 0       | L             | SORELS.FLATP      |         |
| EDI Character 1                       | 656           | 675          | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2                       | 676           | 695          | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3                       | 696           | 715          | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4                       | 716           | 735          | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5                       | 736           | 755          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6                       | 756           | 775          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7                       | 776           | 795          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8                       | 796           | 815          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9                       | 816           | 835          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10                      | 836           | 855          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11                      | 856           | 875          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12                      | 876           | 895          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |
| EDI Character 13                      | 896           | 915          | 20      | 0       | C             | SODET.FCEDICHAR13 |         |
| EDI Character 14                      | 916           | 935          | 20      | 0       | C             | SODET.FCEDICHAR14 |         |
| EDI Character 15                      | 936           | 955          | 20      | 0       | C             | SODET.FCEDICHAR15 |         |
| EDI Date 1                            | 956           | 963          | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2                            | 964           | 971          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3                            | 972           | 979          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4                            | 980           | 987          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5                            | 988           | 995          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6                            | 996           | 1003         | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7                            | 1004          | 1011         | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8                            | 1012          | 1019         | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9                            | 1020          | 1027         | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10                           | 1028          | 1035         | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11                           | 1036          | 1043         | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12                           | 1044          | 1051         | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13                           | 1052          | 1059         | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14                           | 1060          | 1067         | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15                           | 1068          | 1075         | 8       | 0       | D             | SODET.FCEDIDATE15 |         |
| EDI Numeric 1                         | 1076          | 1091         | 16      | 5       | N             | SODET.FCEDINUM1   |         |
| EDI Numeric 2                         | 1092          | 1107         | 16      | 5       | N             | SODET.FCEDINUM2   |         |
| EDI Numeric 3                         | 1108          | 1123         | 16      | 5       | N             | SODET.FCEDINUM3   |         |
| EDI Numeric 4                         | 1124          | 1139         | 16      | 5       | N             | SODET.FCEDINUM4   |         |
| EDI Numeric 5                         | 1140          | 1155         | 16      | 5       | N             | SODET.FCEDINUM5   |         |
| EDI Numeric 6                         | 1156          | 1171         | 16      | 5       | N             | SODET.FCEDINUM6   |         |
| EDI Numeric 7                         | 1172          | 1187         | 16      | 5       | N             | SODET.FCEDINUM7   |         |
| EDI Numeric 8                         | 1188          | 1203         | 16      | 5       | N             | SODET.FCEDINUM8   |         |
| EDI Numeric 9                         | 1204          | 1219         | 16      | 5       | N             | SODET.FCEDINUM9   |         |
| EDI Numeric 10                        | 1220          | 1235         | 16      | 5       | N             | SODET.FCEDINUM10  |         |
| EDI Memo 1 Line 1                     | 1236          | 1315         | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 1 Line 2                     | 1316          | 1395         | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 2 Line 1                     | 1396          | 1475         | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| EDI Memo 2 Line 2                     | 1476          | 1555         | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| Price Schedule Type                   | 1556          | 1556         | 1       | 0       | C             | SOITEM.FSCHEDTYPE |         |
| Quantity in Alternate Unit of Measure | 1557          | 1573         | 17      | 5       | N             | SOITEM.FNALTQTY   |         |
| Alternate Unit of Measure             | 1574          | 1576         | 3       | 0       | C             | SOITEM.FCALTUM    |         |
| Location                              | 1577          | 1590         | 14      | 0       | C             | SORELS.FCLOC      |         |
| Bin                                   | 1591          | 1604         | 14      | 0       | C             | SORELS.FCBIN      |         |
| Contract                              | 1605          | 1614         | 10      | 0       | C             | SOITEM.CONTRACTNU |         |

### 860-PID

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**  | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|------------------|---------|
| Header Record Tag: 'PID'         | 1             | 3            | 3       | 0       | C             | 'PID             | X       |
| Part Number Description          | 4             | 83           | 80      | 0       | M             | SOITEM.FDESC     |         |
| Customer Part Number Description | 84            | 163          | 80      | 0       | M             | SOITEM.FDESCMEMO |         |
| Delivery Notes                   | 164           | 243          | 80      | 0       | M             | SORELS.FDELIVERY |         |
| EDI Memo 1                       | 244           | 323          | 80      | 0       | M             | SODET.FCEDIMEMO1 |         |
| EDI Memo 2                       | 324           | 403          | 80      | 0       | M             | SODET.FCEDIMEMO2 |         |

### 860-DDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DDT' | 1             | 3            | 3       | 0       | C             | 'DDT'             | X       |
| Delivery Notes           | 4             | 83           | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Due Date                 | 84            | 91           | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| EDI Date 1               | 92            | 99           | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2               | 100           | 107          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3               | 108           | 115          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4               | 116           | 123          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5               | 124           | 131          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6               | 132           | 139          | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7               | 140           | 147          | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8               | 148           | 155          | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9               | 156           | 163          | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10              | 164           | 171          | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11              | 172           | 179          | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12              | 180           | 187          | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13              | 188           | 195          | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14              | 196           | 203          | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15              | 204           | 211          | 8       | 0       | D             | SODET.FCEDIDATE15 |         |

### 860-DAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'DAC'         | 1             | 3            | 3       | 0       | C             | 'DAC'              | X       |
| Part Number                      | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO     |         |
| Quantity                         | 29            | 44           | 16      | 5       | N             | SOITEM.FQUANTITY   |         |
| Unit of Measure                  | 45            | 47           | 3       | 0       | C             | SOITEM.FMEASURE    |         |
| Part Number Description          | 48            | 127          | 80      | 0       | M             | SOITEM.FDESC       |         |
| Unit Price                       | 128           | 143          | 16      | 5       | N             | SORELS.FUNETPRICE  |         |
| Customer Part Number             | 144           | 168          | 25      | 0       | C             | SOITEM.FCUSTPART   |         |
| Customer Part Number Description | 169           | 248          | 80      | 0       | M             | SOITEM.FDESCMEMO   |         |
| EDI Character 1                  | 249           | 268          | 20      | 0       | C             | SODET.FCEDICHAR1   |         |
| EDI Character 2                  | 269           | 288          | 20      | 0       | C             | SODET.FCEDICHAR2   |         |
| EDI Character 3                  | 289           | 308          | 20      | 0       | C             | SODET.FCEDICHAR3   |         |
| EDI Character 4                  | 309           | 328          | 20      | 0       | C             | SODET.FCEDICHAR4   |         |
| EDI Character 5                  | 329           | 348          | 20      | 0       | C             | SODET.FCEDICHAR5   |         |
| EDI Character 6                  | 349           | 368          | 20      | 0       | C             | SODET.FCEDICHAR6   |         |
| EDI Character 7                  | 369           | 388          | 20      | 0       | C             | SODET.FCEDICHAR7   |         |
| EDI Character 8                  | 389           | 408          | 20      | 0       | C             | SODET.FCEDICHAR8   |         |
| EDI Character 9                  | 409           | 428          | 20      | 0       | C             | SODET.FCEDICHAR9   |         |
| EDI Character 10                 | 429           | 448          | 20      | 0       | C             | SODET.FCEDICHAR10  |         |
| EDI Character 11                 | 449           | 468          | 20      | 0       | C             | SODET.FCEDICHAR11  |         |
| EDI Character 12                 | 469           | 488          | 20      | 0       | C             | SODET.FCEDICHAR12  |         |
| EDI Character 13                 | 489           | 508          | 20      | 0       | C             | SODET.FCEDICHAR13  |         |
| EDI Character 14                 | 509           | 528          | 20      | 0       | C             | SODET.FCEDICHAR14  |         |
| EDI Character 15                 | 529           | 548          | 20      | 0       | C             | SODET.FCEDICHAR15  |         |
| EDI Numeric 1                    | 549           | 564          | 16      | 5       | N             | SODET.FCEDINUM1    |         |
| EDI Numeric 2                    | 565           | 580          | 16      | 5       | N             | SODET.FCEDINUM2    |         |
| EDI Numeric 3                    | 581           | 596          | 16      | 5       | N             | SODET.FCEDINUM3    |         |
| EDI Numeric 4                    | 597           | 612          | 16      | 5       | N             | SODET.FCEDINUM4    |         |
| EDI Numeric 5                    | 613           | 628          | 16      | 5       | N             | SODET.FCEDINUM5    |         |
| EDI Numeric 6                    | 629           | 644          | 16      | 5       | N             | SODET.FCEDINUM6    |         |
| EDI Numeric 7                    | 645           | 660          | 16      | 5       | N             | SODET.FCEDINUM7    |         |
| EDI Numeric 8                    | 661           | 676          | 16      | 5       | N             | SODET.FCEDINUM8    |         |
| EDI Numeric 9                    | 677           | 692          | 16      | 5       | N             | SODET.FCEDINUM9    |         |
| EDI Numeric 10                   | 693           | 708          | 16      | 5       | N             | SODET.FCEDINUM10   |         |
| EDI Memo 1                       | 709           | 788          | 80      | 0       | M             | SODET.FCEDIMEMO1   |         |
| EDI Memo 2                       | 789           | 868          | 80      | 0       | M             | SODET.FCEDIMEMO2   |         |
| Discount Rate                    | 869           | 875          | 7       | 3       | N             | SORELS.FUNETPRICE1 |         |

**Tip: In DAC-1**, allowance o,r charge discount rate is calculated as the sum of all discount rates when multiple DAC records are present for a line item and a unit discount amount calculated as a function of the parent unit price and the calculated discount.

### 860-REL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REL' | 1             | 3            | 3       | 0       | C             | 'REL'             | X       |
| Ship-To Address Key      | 4             | 23           | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                 | 24            | 31           | 8       | 0       | D             | SORELS.FDUEDATE   |         |
| Delivery Notes Line 1    | 32            | 111          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2    | 112           | 191          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Taxable                  | 192           | 192          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Allow Split Shipments    | 193           | 193          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Ship Early               | 194           | 194          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| Release Quantity         | 195           | 208          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Unit Price               | 209           | 224          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Ship-To Address Key 2    | 225           | 244          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 2       | 245           | 258          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 3    | 259           | 278          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 3       | 279           | 292          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 4    | 293           | 312          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 4       | 313           | 326          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 5    | 327           | 346          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 5       | 347           | 360          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 6    | 361           | 380          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 6       | 381           | 394          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 7    | 395           | 414          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 7       | 415           | 428          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 8    | 429           | 448          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 8       | 449           | 462          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 9    | 463           | 482          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 9       | 483           | 496          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 10   | 497           | 516          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 10      | 517           | 530          | 14      | 5       | N             | SORELS.FORDERQTY  |         |

## 862 - Shipping Authorization

Inbound 862 (Shipping Authorization) results in the document automation of the Made2Manage Orders (SO) screen. The layout of the 862 Fixed File Format is listed below. The hierarchy of each 862 transaction is a single HDR segment followed by at least one DET segment followed by optional REL segments. The REF, HDT and MSG records are extensions of the HDR record. The PID and DDT records are extensions of the DET record. The HAC and DAC records create line-item records for special allowances and charges from the header and item level respectively.

![](media/85a1ecf7e82e092858aec3935123ca94.png)

### 862-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'HDR'         | 1             | 3            | 3       | 0       | C             | 'HDR'              | X       |
| Trading Partner EDI ID\*         | 4             | 23           | 20      | 0       | C             | SOMAST.FCUSTNO     | X       |
| Customer Purchase Order Number\* | 24            | 43           | 20      | 0       | C             | SOMAST.FCUSTPONO   | X       |
| Company Name                     | 44            | 78           | 35      | 0       | C             | SOMAST.FCOMPANY    |         |
| Sold-To Address Key              | 79            | 98           | 20      | 0       | C             | SOMAST.FSOLDADDR   |         |
| Sold-To Address Line 1           | 99            | 178          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| Sold-To Address Line 2           | 179           | 258          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| City                             | 259           | 278          | 20      | 0       | C             | SOMAST.FCITY       |         |
| State                            | 279           | 298          | 20      | 0       | C             | SOMAST.FSTATE      |         |
| Zip Code                         | 299           | 308          | 10      | 0       | C             | SOMAST.FZIP        |         |
| Country                          | 309           | 333          | 25      | 0       | C             | SOMAST.FCOUNTRY    |         |
| Contact First Name               | 334           | 348          | 15      | 0       | C             | SOMAST.FCFNAME     |         |
| Contact Last Name                | 349           | 378          | 30      | 0       | C             | SOMAST.FCONTACT    |         |
| Phone Number                     | 379           | 398          | 20      | 0       | C             | SOMAST.FPHONE      |         |
| Fax Number                       | 399           | 418          | 20      | 0       | C             | SOMAST.FFAX        |         |
| Sales Order Name                 | 419           | 453          | 35      | 0       | C             | SOMAST.FORDERNAME  |         |
| Order Date                       | 454           | 461          | 8       | 0       | D             | SOMAST.FORDERDATE  |         |
| Due Date                         | 462           | 469          | 8       | 0       | D             | SOMAST.FDUEDATE    |         |
| Discount Rate                    | 470           | 476          | 7       | 3       | N             | SOMAST.FDISRATE    |         |
| Sales Order Transaction Currency | 477           | 479          | 3       | 0       | C             | SOMAST.FCCURID     |         |
| Ship To Address Key              | 480           | 499          | 20      | 0       | C             | SOMAST.FSHPTOADDR  |         |
| Ship Via                         | 500           | 519          | 20      | 0       | C             | SOMAST.FSHIPVIA    |         |
| Payment Type                     | 520           | 520          | 1       | 0       | C             | SOMAST.FPAYTYPE    |         |
| Terms For A Cash Payment         | 521           | 524          | 4       | 0       | C             | SOMAST.FTERM       |         |
| Freight on Board Point           | 525           | 544          | 20      | 0       | C             | SOMAST.FFOB        |         |
| User Defined Character 1         | 545           | 564          | 20      | 0       | C             | SOMAST.FCUSRCHR1   |         |
| User Defined Character 2         | 565           | 604          | 40      | 0       | C             | SOMAST.FCUSRCHR2   |         |
| User Defined Character 3         | 605           | 644          | 40      | 0       | C             | SOMAST.FCUSRCHR3   |         |
| User Defined Quantity 1          | 645           | 658          | 14      | 5       | N             | SOMAST.FNUSRQTY1   |         |
| User Defined Currency 1          | 659           | 674          | 16      | 5       | N             | SOMAST.FNUSRCUR1   |         |
| User Defined Date 1              | 675           | 682          | 8       | 0       | D             | SOMAST.FDUSRDATE1  |         |
| User Defined Memo 1 Line 1       | 683           | 762          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| User Defined Memo 1 Line 2       | 763           | 842          | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| EDI Character 1                  | 843           | 862          | 20      | 0       | C             | SOHDR.FCEDICHAR1   |         |
| EDI Character 2                  | 863           | 882          | 20      | 0       | C             | SOHDR.FCEDICHAR2   |         |
| EDI Character 3                  | 883           | 902          | 20      | 0       | C             | SOHDR.FCEDICHAR3   |         |
| EDI Character 4                  | 903           | 922          | 20      | 0       | C             | SOHDR.FCEDICHAR4   |         |
| EDI Character 5                  | 923           | 942          | 20      | 0       | C             | SOHDR.FCEDICHAR5   |         |
| EDI Character 6                  | 943           | 962          | 20      | 0       | C             | SOHDR.FCEDICHAR6   |         |
| EDI Character 7                  | 963           | 982          | 20      | 0       | C             | SOHDR.FCEDICHAR7   |         |
| EDI Character 8                  | 983           | 1002         | 20      | 0       | C             | SOHDR.FCEDICHAR8   |         |
| EDI Character 9                  | 1003          | 1022         | 20      | 0       | C             | SOHDR.FCEDICHAR9   |         |
| EDI Character 10                 | 1023          | 1042         | 20      | 0       | C             | SOHDR.FCEDICHAR10  |         |
| EDI Character 11                 | 1043          | 1062         | 20      | 0       | C             | SOHDR.FCEDICHAR11  |         |
| EDI Character 12                 | 1063          | 1082         | 20      | 0       | C             | SOHDR.FCEDICHAR12  |         |
| EDI Character 13                 | 1083          | 1102         | 20      | 0       | C             | SOHDR.FCEDICHAR13  |         |
| EDI Character 14                 | 1103          | 1122         | 20      | 0       | C             | SOHDR.FCEDICHAR14  |         |
| EDI Character 15                 | 1123          | 1142         | 20      | 0       | C             | SOHDR.FCEDICHAR15  |         |
| EDI Date 1                       | 1143          | 1150         | 8       | 0       | D             | SOHDR.FCEDIDATE1   |         |
| EDI Date 2                       | 1151          | 1158         | 8       | 0       | D             | SOHDR.FCEDIDATE2   |         |
| EDI Date 3                       | 1159          | 1166         | 8       | 0       | D             | SOHDR.FCEDIDATE3   |         |
| EDI Date 4                       | 1167          | 1174         | 8       | 0       | D             | SOHDR.FCEDIDATE4   |         |
| EDI Date 5                       | 1175          | 1182         | 8       | 0       | D             | SOHDR.FCEDIDATE5   |         |
| EDI Date 6                       | 1183          | 1190         | 8       | 0       | D             | SOHDR.FCEDIDATE6   |         |
| EDI Date 7                       | 1191          | 1198         | 8       | 0       | D             | SOHDR.FCEDIDATE7   |         |
| EDI Date 8                       | 1199          | 1206         | 8       | 0       | D             | SOHDR.FCEDIDATE8   |         |
| EDI Date 9                       | 1207          | 1214         | 8       | 0       | D             | SOHDR.FCEDIDATE9   |         |
| EDI Date 10                      | 1215          | 1222         | 8       | 0       | D             | SOHDR.FCEDIDATE10  |         |
| EDI Date 11                      | 1223          | 1230         | 8       | 0       | D             | SOHDR.FCEDIDATE11  |         |
| EDI Date 12                      | 1231          | 1238         | 8       | 0       | D             | SOHDR.FCEDIDATE12  |         |
| EDI Date 13                      | 1239          | 1246         | 8       | 0       | D             | SOHDR.FCEDIDATE13  |         |
| EDI Date 14                      | 1247          | 1254         | 8       | 0       | D             | SOHDR.FCEDIDATE14  |         |
| EDI Date 15                      | 1255          | 1262         | 8       | 0       | D             | SOHDR.FCEDIDATE15  |         |
| EDI Numeric 1                    | 1263          | 1278         | 16      | 5       | N             | SOHDR.FCEDINUM1    |         |
| EDI Numeric 2                    | 1279          | 1294         | 16      | 5       | N             | SOHDR.FCEDINUM2    |         |
| EDI Numeric 3                    | 1295          | 1310         | 16      | 5       | N             | SOHDR.FCEDINUM3    |         |
| EDI Numeric 4                    | 1311          | 1326         | 16      | 5       | N             | SOHDR.FCEDINUM4    |         |
| EDI Numeric 5                    | 1327          | 1342         | 16      | 5       | N             | SOHDR.FCEDINUM5    |         |
| EDI Numeric 6                    | 1343          | 1358         | 16      | 5       | N             | SOHDR.FCEDINUM6    |         |
| EDI Numeric 7                    | 1359          | 1374         | 16      | 5       | N             | SOHDR.FCEDINUM7    |         |
| EDI Numeric 8                    | 1375          | 1390         | 16      | 5       | N             | SOHDR.FCEDINUM8    |         |
| EDI Numeric 9                    | 1391          | 1406         | 16      | 5       | N             | SOHDR.FCEDINUM9    |         |
| EDI Numeric 10                   | 1407          | 1422         | 16      | 5       | N             | SOHDR.FCEDINUM10   |         |
| EDI Memo 1 Line 1                | 1423          | 1502         | 80      | 0       | M             | SOHDR.FCEDIMEMO1   |         |
| EDI Memo 1 Line 2                | 1503          | 1582         | 80      | 0       | M             | SOHDR.FCEDIMEMO1   |         |
| EDI Memo 2 Line 1                | 1583          | 1662         | 80      | 0       | M             | SOHDR.FCEDIMEMO2   |         |
| EDI Memo 2 Line 2                | 1663          | 1742         | 80      | 0       | M             | SOHDR.FCEDIMEMO2   |         |
| Coordinator                      | 1743          | 1745         | 3       | 0       | C             | SOMAST.FSOCOORD    |         |
| Contract Code                    | 1746          | 1755         | 10      | 0       | C             | SOMAST.CONTRACTNU  |         |
| Bill To Address Key              | 1756          | 1775         | 20      | 0       | C             | SOMAST.FBILLADDR   |         |
| Ship To Company                  | 2089          | 2123         | 35      | 0       | C             | SOMAST.SHIPCOMPANY |         |
| Ship To Address                  | 2124          | 2283         | 160     | 0       | C             | SOMAST.SHIPADDRESS |         |
| Ship To City                     | 2284          | 2303         | 20      | 0       | C             | SOMAST.SHIPCITY    |         |
| Ship To State                    | 2304          | 2323         | 20      | 0       | C             | SOMAST.SHIPSTATE   |         |
| Ship To Country                  | 2324          | 2348         | 25      | 0       | C             | SOMAST.SHIPCOUNTRY |         |
| Zip Code                         | 2349          | 2358         | 10      | 0       | C             | SOMAST.SHIPZIP     |         |
| Phone No.                        | 2359          | 2378         | 20      | 0       | C             | SOMAST.SHIPPHONE   |         |
| Fax                              | 2379          | 2398         | 20      | 0       | C             | SOMAST.SHIPFAX     |         |

### 862-REF

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REF'         | 1             | 3            | 3       | 0       | C             | 'REF'             | X       |
| Contact First Name               | 4             | 18           | 15      | 0       | C             | SOMAST.FCFNAME    |         |
| Contact Last Name                | 19            | 48           | 30      | 0       | C             | SOMAST.FCONTACT   |         |
| Phone Number                     | 49            | 68           | 20      | 0       | C             | SOMAST.FPHONE     |         |
| Fax Number                       | 69            | 88           | 20      | 0       | C             | SOMAST.FFAX       |         |
| Sales Order Name                 | 89            | 123          | 35      | 0       | C             | SOMAST.FORDERNAME |         |
| Sales Order Transaction Currency | 124           | 126          | 3       | 0       | C             | SOMAST.FCCURID    |         |
| Ship Via                         | 127           | 146          | 20      | 0       | C             | SOMAST.FSHIPVIA   |         |
| Payment Type                     | 147           | 147          | 1       | 0       | C             | SOMAST.FPAYTYPE   |         |
| Terms For A Cash Payment         | 148           | 151          | 4       | 0       | C             | SOMAST.FTERM      |         |
| Freight on Board Point           | 152           | 171          | 20      | 0       | C             | SOMAST.FFOB       |         |
| User Defined Character 1         | 172           | 191          | 20      | 0       | C             | SOMAST.FCUSRCHR1  |         |
| User Defined Character 2         | 192           | 231          | 40      | 0       | C             | SOMAST.FCUSRCHR2  |         |
| User Defined Character 3         | 232           | 271          | 40      | 0       | C             | SOMAST.FCUSRCHR3  |         |
| EDI Character 1                  | 272           | 291          | 20      | 0       | C             | SOHDR.FCEDICHAR1  |         |
| EDI Character 2                  | 292           | 311          | 20      | 0       | C             | SOHDR.FCEDICHAR2  |         |
| EDI Character 3                  | 312           | 331          | 20      | 0       | C             | SOHDR.FCEDICHAR3  |         |
| EDI Character 4                  | 332           | 351          | 20      | 0       | C             | SOHDR.FCEDICHAR4  |         |
| EDI Character 5                  | 352           | 371          | 20      | 0       | C             | SOHDR.FCEDICHAR5  |         |
| EDI Character 6                  | 372           | 391          | 20      | 0       | C             | SOHDR.FCEDICHAR6  |         |
| EDI Character 7                  | 392           | 411          | 20      | 0       | C             | SOHDR.FCEDICHAR7  |         |
| EDI Character 8                  | 412           | 431          | 20      | 0       | C             | SOHDR.FCEDICHAR8  |         |
| EDI Character 9                  | 432           | 451          | 20      | 0       | C             | SOHDR.FCEDICHAR9  |         |
| EDI Character 10                 | 452           | 471          | 20      | 0       | C             | SOHDR.FCEDICHAR10 |         |
| EDI Character 11                 | 472           | 491          | 20      | 0       | C             | SOHDR.FCEDICHAR11 |         |
| EDI Character 12                 | 492           | 511          | 20      | 0       | C             | SOHDR.FCEDICHAR12 |         |
| EDI Character 13                 | 512           | 531          | 20      | 0       | C             | SOHDR.FCEDICHAR13 |         |
| EDI Character 14                 | 532           | 551          | 20      | 0       | C             | SOHDR.FCEDICHAR14 |         |
| EDI Character 15                 | 552           | 571          | 20      | 0       | C             | SOHDR.FCEDICHAR15 |         |
| Contract Code                    | 572           | 581          | 10      | 0       | C             | SOMAST.CONTRACTNU |         |

### 862-HAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'HAC'         | 1             | 3            | 3       | 0       | C             | 'HAC'             | X       |
| Part Number                      | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO    |         |
| Quantity                         | 29            | 44           | 16      | 5       | N             | SOITEM.FQUANTITY  |         |
| Unit of Measure                  | 45            | 47           | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Part Number Description          | 48            | 127          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Unit Price                       | 128           | 143          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Customer Part Number             | 144           | 168          | 25      | 0       | C             | SOITEM.FCUSTPART  |         |
| Customer Part Number Description | 169           | 248          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| EDI Character 1                  | 249           | 268          | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2                  | 269           | 288          | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3                  | 289           | 308          | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4                  | 309           | 328          | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5                  | 329           | 348          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6                  | 349           | 368          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7                  | 369           | 388          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8                  | 389           | 408          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9                  | 409           | 428          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10                 | 429           | 448          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11                 | 449           | 468          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12                 | 469           | 488          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |
| EDI Character 13                 | 489           | 508          | 20      | 0       | C             | SODET.FCEDICHAR13 |         |
| EDI Character 14                 | 509           | 528          | 20      | 0       | C             | SODET.FCEDICHAR14 |         |
| EDI Character 15                 | 529           | 548          | 20      | 0       | C             | SODET.FCEDICHAR15 |         |
| EDI Numeric 1                    | 549           | 564          | 16      | 5       | N             | SODET.FCEDINUM1   |         |
| EDI Numeric 2                    | 565           | 580          | 16      | 5       | N             | SODET.FCEDINUM2   |         |
| EDI Numeric 3                    | 581           | 596          | 16      | 5       | N             | SODET.FCEDINUM3   |         |
| EDI Numeric 4                    | 597           | 612          | 16      | 5       | N             | SODET.FCEDINUM4   |         |
| EDI Numeric 5                    | 613           | 628          | 16      | 5       | N             | SODET.FCEDINUM5   |         |
| EDI Numeric 6                    | 629           | 644          | 16      | 5       | N             | SODET.FCEDINUM6   |         |
| EDI Numeric 7                    | 645           | 660          | 16      | 5       | N             | SODET.FCEDINUM7   |         |
| EDI Numeric 8                    | 661           | 676          | 16      | 5       | N             | SODET.FCEDINUM8   |         |
| EDI Numeric 9                    | 677           | 692          | 16      | 5       | N             | SODET.FCEDINUM9   |         |
| EDI Numeric 10                   | 693           | 708          | 16      | 5       | N             | SODET.FCEDINUM10  |         |
| EDI Memo 1                       | 709           | 788          | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 2                       | 789           | 868          | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| Discount Rate                    | 869           | 875          | 7       | 3       | N             | SOMAST.FDISRATE1  |         |

**Tip:** In **HAC-1**, the Discount Rate is calculated as the sum of all discount rates when multiple HAC records are present.

### 862-HDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'HDT' | 1             | 3            | 3       | 0       | C             | 'HDT'             | X       |
| Order Date               | 4             | 11           | 8       | 0       | D             | SOMAST.FORDERDATE |         |
| Due Date                 | 12            | 19           | 8       | 0       | D             | SOMAST.FDUEDATE   |         |
| User Defined Date 1      | 20            | 27           | 8       | 0       | D             | SOMAST.FDUSRDATE1 |         |
| EDI Date 1               | 28            | 35           | 8       | 0       | D             | SOHDR.FCEDIDATE1  |         |
| EDI Date 2               | 36            | 43           | 8       | 0       | D             | SOHDR.FCEDIDATE2  |         |
| EDI Date 3               | 44            | 51           | 8       | 0       | D             | SOHDR.FCEDIDATE3  |         |
| EDI Date 4               | 52            | 59           | 8       | 0       | D             | SOHDR.FCEDIDATE4  |         |
| EDI Date 5               | 60            | 67           | 8       | 0       | D             | SOHDR.FCEDIDATE5  |         |
| EDI Date 6               | 68            | 75           | 8       | 0       | D             | SOHDR.FCEDIDATE6  |         |
| EDI Date 7               | 76            | 83           | 8       | 0       | D             | SOHDR.FCEDIDATE7  |         |
| EDI Date 8               | 84            | 91           | 8       | 0       | D             | SOHDR.FCEDIDATE8  |         |
| EDI Date 9               | 92            | 99           | 8       | 0       | D             | SOHDR.FCEDIDATE9  |         |
| EDI Date 10              | 100           | 107          | 8       | 0       | D             | SOHDR.FCEDIDATE10 |         |
| EDI Date 11              | 108           | 115          | 8       | 0       | D             | SOHDR.FCEDIDATE11 |         |
| EDI Date 12              | 116           | 123          | 8       | 0       | D             | SOHDR.FCEDIDATE12 |         |
| EDI Date 13              | 124           | 131          | 8       | 0       | D             | SOHDR.FCEDIDATE13 |         |
| EDI Date 14              | 132           | 139          | 8       | 0       | D             | SOHDR.FCEDIDATE14 |         |
| EDI Date 15              | 140           | 147          | 8       | 0       | D             | SOHDR.FCEDIDATE15 |         |

### 862-MSG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'MSG' | 1             | 3            | 3       | 0       | C             | 'MSG'             | X       |
| User Defined Memo 1      | 4             | 83           | 80      | 0       | M             | SOMAST.FMUSRMEMO1 |         |
| EDI Memo 1               | 84            | 163          | 80      | 0       | M             | SOHDR.FCEDIMEMO1  |         |
| EDI Memo 2               | 164           | 243          | 80      | 0       | M             | SOHDR.FCEDIMEMO2  |         |

### 862-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DET'         | 1             | 3            | 3       | 0       | C             | 'DET'             | X       |
| Part Number                      | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO    | X       |
| Part Revision                    | 29            | 31           | 3       | 0       | C             | SOITEM.FPARTREV   |         |
| Quantity                         | 32            | 47           | 16      | 5       | N             | SOITEM.FQUANTITY  | X       |
| Unit of Measure                  | 48            | 50           | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Source                           | 51            | 51           | 1       | 0       | C             | SOITEM.FSOURCE    |         |
| Part Number Description Line 1   | 52            | 131          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Part Number Description Line 2   | 132           | 211          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Product Class                    | 212           | 215          | 4       | 0       | C             | SOITEM.FPRODCL    |         |
| Group Code                       | 216           | 221          | 6       | 0       | C             | SOITEM.FGROUP     |         |
| Unit Price                       | 222           | 237          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Customer Part Number             | 238           | 262          | 25      | 0       | C             | SOITEM.FCUSTPART  |         |
| Customer Part Revision           | 263           | 265          | 3       | 0       | C             | SOITEM.FCUSTPTREV |         |
| Customer Part Description Line 1 | 266           | 345          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Customer Part Description Line 2 | 346           | 425          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Delivery Notes Line 1            | 426           | 505          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2            | 506           | 585          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Order Billing Type               | 586           | 588          | 3       | 0       | C             | SOITEM.FORDERTYPE |         |
| Use Standard BOMs and Routings   | 589           | 589          | 1       | 0       | L             | SOITEM.FSTANDPART |         |
| Lot/Serial Number Required       | 590           | 590          | 1       | 0       | L             | SOITEM.FLLOTREQD  |         |
| Extent of Lot Control            | 591           | 591          | 1       | 0       | C             | SOITEM.FCLOTEXT   |         |
| Taxable                          | 592           | 592          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Price Schedule Code              | 593           | 598          | 6       | 0       | C             | SOITEM.FSCHECODE  |         |
| Ship-to Address Key              | 599           | 618          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                         | 619           | 626          | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| Close within minimum %           | 627           | 637          | 11      | 5       | N             | SOITEM.FNUNDER    |         |
| Close within maximum %           | 638           | 648          | 11      | 5       | N             | SOITEM.FNOVER     |         |
| Multi-Release                    | 649           | 649          | 1       | 0       | L             | SOITEM.FMULTIPLE  |         |
| Ship Item                        | 650           | 650          | 1       | 0       | L             | SOITEM.FSHIPITEM  |         |
| Split Ship                       | 651           | 651          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Create Jobs                      | 652           | 652          | 1       | 0       | L             | SOITEM.FAUTOCREAT |         |
| Print Memo                       | 653           | 653          | 1       | 0       | L             | SOITEM.FPRINTMEMO |         |
| Ship Early                       | 654           | 654          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| CTP Approved                     | 655           | 655          | 1       | 0       | L             | SORELS.FLATP      |         |
| EDI Character 1                  | 656           | 675          | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2                  | 676           | 695          | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3                  | 696           | 715          | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4                  | 716           | 735          | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5                  | 736           | 755          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6                  | 756           | 775          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7                  | 776           | 795          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8                  | 796           | 815          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9                  | 816           | 835          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10                 | 836           | 855          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11                 | 856           | 875          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12                 | 876           | 895          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |

### 862-PID

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**  | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|------------------|---------|
| Header Record Tag: 'PID'         | 1             | 3            | 3       | 0       | C             | 'PID             | X       |
| Part Number Description          | 4             | 83           | 80      | 0       | M             | SOITEM.FDESC     |         |
| Customer Part Number Description | 84            | 163          | 80      | 0       | M             | SOITEM.FDESCMEMO |         |
| Delivery Notes                   | 164           | 243          | 80      | 0       | M             | SORELS.FDELIVERY |         |
| EDI Memo 1                       | 244           | 323          | 80      | 0       | M             | SODET.FCEDIMEMO1 |         |
| EDI Memo 2                       | 324           | 403          | 80      | 0       | M             | SODET.FCEDIMEMO2 |         |

### 862-DDT

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DDT' | 1             | 3            | 3       | 0       | C             | 'DDT'             | X       |
| Delivery Notes           | 4             | 83           | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Due Date                 | 84            | 91           | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| EDI Date 1               | 92            | 99           | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2               | 100           | 107          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3               | 108           | 115          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4               | 116           | 123          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5               | 124           | 131          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6               | 132           | 139          | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7               | 140           | 147          | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8               | 148           | 155          | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9               | 156           | 163          | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10              | 164           | 171          | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11              | 172           | 179          | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12              | 180           | 187          | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13              | 188           | 195          | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14              | 196           | 203          | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15              | 204           | 211          | 8       | 0       | D             | SODET.FCEDIDATE15 |         |

### 862-DAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**            | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|----------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'DAC'         | 1             | 3            | 3       | 0       | C             | 'DAC'              | X       |
| Part Number                      | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO     |         |
| Quantity                         | 29            | 44           | 16      | 5       | N             | SOITEM.FQUANTITY   |         |
| Unit of Measure                  | 45            | 47           | 3       | 0       | C             | SOITEM.FMEASURE    |         |
| Part Number Description          | 48            | 127          | 80      | 0       | M             | SOITEM.FDESC       |         |
| Unit Price                       | 128           | 143          | 16      | 5       | N             | SORELS.FUNETPRICE  |         |
| Customer Part Number             | 144           | 168          | 25      | 0       | C             | SOITEM.FCUSTPART   |         |
| Customer Part Number Description | 169           | 248          | 80      | 0       | M             | SOITEM.FDESCMEMO   |         |
| EDI Character 1                  | 249           | 268          | 20      | 0       | C             | SODET.FCEDICHAR1   |         |
| EDI Character 2                  | 269           | 288          | 20      | 0       | C             | SODET.FCEDICHAR2   |         |
| EDI Character 3                  | 289           | 308          | 20      | 0       | C             | SODET.FCEDICHAR3   |         |
| EDI Character 4                  | 309           | 328          | 20      | 0       | C             | SODET.FCEDICHAR4   |         |
| EDI Character 5                  | 329           | 348          | 20      | 0       | C             | SODET.FCEDICHAR5   |         |
| EDI Character 6                  | 349           | 368          | 20      | 0       | C             | SODET.FCEDICHAR6   |         |
| EDI Character 7                  | 369           | 388          | 20      | 0       | C             | SODET.FCEDICHAR7   |         |
| EDI Character 8                  | 389           | 408          | 20      | 0       | C             | SODET.FCEDICHAR8   |         |
| EDI Character 9                  | 409           | 428          | 20      | 0       | C             | SODET.FCEDICHAR9   |         |
| EDI Character 10                 | 429           | 448          | 20      | 0       | C             | SODET.FCEDICHAR10  |         |
| EDI Character 11                 | 449           | 468          | 20      | 0       | C             | SODET.FCEDICHAR11  |         |
| EDI Character 12                 | 469           | 488          | 20      | 0       | C             | SODET.FCEDICHAR12  |         |
| EDI Character 13                 | 489           | 508          | 20      | 0       | C             | SODET.FCEDICHAR13  |         |
| EDI Character 14                 | 509           | 528          | 20      | 0       | C             | SODET.FCEDICHAR14  |         |
| EDI Character 15                 | 529           | 548          | 20      | 0       | C             | SODET.FCEDICHAR15  |         |
| EDI Numeric 1                    | 549           | 564          | 16      | 5       | N             | SODET.FCEDINUM1    |         |
| EDI Numeric 2                    | 565           | 580          | 16      | 5       | N             | SODET.FCEDINUM2    |         |
| EDI Numeric 3                    | 581           | 596          | 16      | 5       | N             | SODET.FCEDINUM3    |         |
| EDI Numeric 4                    | 597           | 612          | 16      | 5       | N             | SODET.FCEDINUM4    |         |
| EDI Numeric 5                    | 613           | 628          | 16      | 5       | N             | SODET.FCEDINUM5    |         |
| EDI Numeric 6                    | 629           | 644          | 16      | 5       | N             | SODET.FCEDINUM6    |         |
| EDI Numeric 7                    | 645           | 660          | 16      | 5       | N             | SODET.FCEDINUM7    |         |
| EDI Numeric 8                    | 661           | 676          | 16      | 5       | N             | SODET.FCEDINUM8    |         |
| EDI Numeric 9                    | 677           | 692          | 16      | 5       | N             | SODET.FCEDINUM9    |         |
| EDI Numeric 10                   | 693           | 708          | 16      | 5       | N             | SODET.FCEDINUM10   |         |
| EDI Memo 1                       | 709           | 788          | 80      | 0       | M             | SODET.FCEDIMEMO1   |         |
| EDI Memo 2                       | 789           | 868          | 80      | 0       | M             | SODET.FCEDIMEMO2   |         |
| Discount Rate                    | 869           | 875          | 7       | 3       | N             | SORELS.FUNETPRICE1 |         |

**Tip:** In **DAC-1**, allowance or charge discount rate is calculated as the sum of all discount rates when multiple DAC records are present for a line item and a unit discount amount calculated as a function of the parent unit price and the calculated discount.

### 862-REL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REL' | 1             | 3            | 3       | 0       | C             | 'REL'             | X       |
| Ship-To Address Key      | 4             | 23           | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                 | 24            | 31           | 8       | 0       | D             | SORELS.FDUEDATE   |         |
| Delivery Notes Line 1    | 32            | 111          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2    | 112           | 191          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Taxable                  | 192           | 192          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Allow Split Shipments    | 193           | 193          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Ship Early               | 194           | 194          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| Release Quantity         | 195           | 208          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Unit Price               | 209           | 224          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Ship-To Address Key 2    | 225           | 244          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 2       | 245           | 258          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 3    | 259           | 278          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 3       | 279           | 292          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 4    | 293           | 312          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 4       | 313           | 326          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 5    | 327           | 346          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 5       | 347           | 360          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 6    | 361           | 380          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 6       | 381           | 394          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 7    | 395           | 414          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 7       | 415           | 428          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 8    | 429           | 448          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 8       | 449           | 462          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 9    | 463           | 482          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 9       | 483           | 496          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Ship-To Address Key 10   | 497           | 516          | 20      | 0       | C             | SORELS.FSHPTOADDR |         |
| Release Quantity 10      | 517           | 530          | 14      | 5       | N             | SORELS.FORDERQTY  |         |

# Outbound FFF Layouts

#### XGROUP Element Availability

Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

## 810 - Invoice

Outbound 810 (Invoice) originates from the Made2Manage Invoice (ARINV) and other Made2Manage data sources. The layout of the 810 Fixed File Format is listed below. The hierarchy of each 810 transaction is single HDR system key segment. The header information is exported into a single BEG segment, a single BG2 segment and the optional HML segment. Each line item is exported into a single DET segment, a single LIN segment and the optional DML segment. The optional SAC segment is exported associated with the designated Product Class on XEDI. A single SUM summary segment is exported after the last line item. The HML and DML segments are memo line count based.

![](media/94ca100f8c00c9d6222ce0943abd7d3c.png)

### 810-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                        | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**              | **Req** |
|----------------------------------------------|---------------|--------------|---------|---------|---------------|------------------------------|---------|
| Header Record Tag: 'HDR'                     | 1             | 3            | 3       | 0       | C             | 'HDR'                        | X       |
| Transaction Set ID (Application Alias Value) | 4             | 9            | 6       | 0       | C             | 'INV'                        | X       |
| Receiver EDI ID (Application Code)\#         | 10            | 29           | 20      | 0       | C             | XCUSTEDI.FCEDIID             | X       |
| Test / Production (Test Mode)                | 30            | 30           | 1       | 0       | C             | 'T' = Test; 'P' = Production | X       |
| Original / Resend                            | 31            | 31           | 1       | 0       | C             | 'O' = Original; 'R' = Resend | X       |
| Sender EDI Qualifier                         | 32            | 33           | 2       | 0       | C             | XSETUP.FCTPQUAL              | X       |
| Sender EDI ID                                | 34            | 63           | 30      | 0       | C             | XSETUP.FCTPID                | X       |
| Receiver EDI Qualifier                       | 64            | 65           | 2       | 0       | C             | XCUSTEDI.FCEDIQUAL           | X       |
| Receiver EDI ID                              | 66            | 95           | 30      | 0       | C             | XCUSTEDI.FCEDIID             | X       |
| EDI-XML Document Definition                  | 96            | 105          | 10      | 0       | C             | ‘M2M_810’                    | X       |

\# Specific EDI ID are exported when populated, otherwise general EDI ID exported.

### 810-BEG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with O are obsolete.

| **Field Description**                   | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**                  | **Req** |
|-----------------------------------------|---------------|--------------|---------|---------|---------------|----------------------------------|---------|
| Header Record Tag: 'BEG'                | 1             | 3            | 3       | 0       | C             | 'BEG'                            | X       |
| Customer Number                         | 4             | 9            | 6       | 0       | C             | ARMAST.FCUSTNO                   |         |
| Trading Partner EDI ID                  | 10            | 29           | 20      | 0       | C             | XCUSTEDI.FCEDIID                 |         |
| Invoice Number                          | 30            | 49           | 20      | 0       | C             | ARMAST.FCINVOICE                 |         |
| Customer Purchase Order Number          | 50            | 69           | 20      | 0       | C             | ARMAST.FPONO                     |         |
| Company Name                            | 70            | 104          | 35      | 0       | C             | ARMAST.FBCOMPANY                 |         |
| Bill-To Street Address Line 1           | 105           | 184          | 80      | 0       | M             | ARMAST.FMBSTREET                 |         |
| Bill-To Street Address Line 2           | 185           | 264          | 80      | 0       | M             | ARMAST.FMBSTREET                 |         |
| Bill-To City                            | 265           | 284          | 20      | 0       | C             | ARMAST.FBCITY                    |         |
| Bill-To State                           | 285           | 304          | 20      | 0       | C             | ARMAST.FBSTATE                   |         |
| Bill-To Country                         | 305           | 329          | 25      | 0       | C             | ARMAST.FBCOUNTRY                 |         |
| Bill-To Zip Code                        | 330           | 339          | 10      | 0       | C             | ARMAST.FBZIP                     |         |
| User Defined Character 1                | 340           | 359          | 20      | 0       | C             | SLCDPM.FCUSRCHR1                 |         |
| User Defined Character 2                | 360           | 399          | 40      | 0       | C             | SLCDPM.FCUSRCHR2                 |         |
| User Defined Character 3                | 400           | 439          | 40      | 0       | C             | SLCDPM.FCUSRCHR3                 |         |
| User Defined Date 1                     | 440           | 447          | 8       | 0       | D             | SLCDPM.FDUSRDATE1                |         |
| User Defined Memo 1 Line 1              | 448           | 527          | 80      | 0       | M             | SLCDPM.FMUSRMEMO1                |         |
| User Defined Memo 1 Line 2              | 528           | 607          | 80      | 0       | M             | SLCDPM.FMUSRMEMO1                |         |
| User Defined Currency 1                 | 608           | 623          | 16      | 5       | N             | SLCDPM.FNUSRCUR1                 |         |
| User Defined Quantity 1                 | 624           | 637          | 14      | 5       | N             | SLCDPM.FNUSRQTY1                 |         |
| User Defined Code                       | 638           | 644          | 7       | 0       | C             | SLCDPM.FUSERCODE                 |         |
| Tax Exemption Number                    | 645           | 659          | 15      | 0       | C             | SLCDPM.FTAXEXEMPT                |         |
| Sales Person ID                         | 660           | 662          | 3       | 0       | C             | ARMAST.FSALESPN                  |         |
| Salespersons Last Name                  | 663           | 687          | 25      | 0       | C             | SLSPNS.FLASTNAME                 |         |
| Sales Person Notes Line 1               | 688           | 767          | 80      | 0       | M             | SLSPNS.FMNOTES                   |         |
| Sales Person Notes Line 2               | 768           | 847          | 80      | 0       | M             | SLSPNS.FMNOTES                   |         |
| Invoice Type Code                       | 848           | 848          | 1       | 0       | C             | ARMAST.FINVTYPE                  |         |
| Invoice Date                            | 849           | 856          | 8       | 0       | D             | ARMAST.FINVDATE                  |         |
| Invoice Due Date                        | 857           | 864          | 8       | 0       | D             | ARMAST.FDUEDATE                  |         |
| Invoice Amount                          | 865           | 880          | 16      | 4       | Y             | ARMAST.FNAMOUNT                  |         |
| Credits for Advanced Prepayments        | 881           | 896          | 16      | 4       | Y             | ARMAST.FNCREDITS                 |         |
| Finance Charges                         | 897           | 912          | 16      | 4       | Y             | ARMAST.FNFINCHG                  |         |
| Goods Total                             | 913           | 928          | 16      | 4       | Y             | ARMAST.FNGOODSAMT                |         |
| Invoice Discount Rate                   | 929           | 938          | 10      | 5       | N             | ARMAST.FNINVDISRT                |         |
| Return Date                             | 939           | 946          | 8       | 0       | D             | ARMAST.FRETRNDATE                |         |
| Conversion Factor                       | 947           | 962          | 16      | 5       | N             | ARMAST.FCFACTOR                  |         |
| Euro as of Date                         | 963           | 970          | 8       | 0       | D             | ARMAST.FDEURODATE                | O       |
| Euro Factor                             | 971           | 986          | 16      | 5       | N             | ARMAST.FEUROFCTR                 | O       |
| Freight on Board Point                  | 987           | 1006         | 20      | 0       | C             | ARMAST.FFOB                      |         |
| Freight Total                           | 1007          | 1022         | 16      | 4       | Y             | ARMAST.FFREIGHT                  |         |
| As of Factor Date                       | 1023          | 1030         | 8       | 0       | D             | ARMAST.FDFACTDATE                |         |
| Tax Point Date                          | 1031          | 1038         | 8       | 0       | D             | ARMAST.FDTAXPOINT                |         |
| Date Shipped                            | 1039          | 1046         | 8       | 0       | D             | ARMAST.FSHIPDATE                 |         |
| Sales Tax Total                         | 1047          | 1062         | 16      | 4       | Y             | ARMAST.FTAXAMT                   |         |
| Terms Id                                | 1063          | 1066         | 4       | 0       | C             | ARMAST.FCTERMSID                 |         |
| Terms Description                       | 1067          | 1086         | 20      | 0       | C             | UTTERMS.FCDESCR                  |         |
| Percent Discount after 1st Days         | 1087          | 1093         | 7       | 3       | N             | UTTERMS.FNPERCENT                |         |
| Grace Allowed                           | 1094          | 1097         | 4       | 0       | I             | UTTERMS.FNGRACE                  |         |
| Final Days Due                          | 1098          | 1101         | 4       | 0       | I             | UTTERMS.FNDUEDAYS                |         |
| Days for which the 1st Discount Applies | 1102          | 1105         | 4       | 0       | I             | UTTERMS.FNDAYS                   |         |
| 2nd Percent Discount                    | 1106          | 1112         | 7       | 3       | N             | UTTERMS.FN2NDPER                 |         |
| 2nd Days Due                            | 1113          | 1116         | 4       | 0       | I             | UTTERMS.FN2NDDAYS                |         |
| Terms Notes Line 1                      | 1117          | 1196         | 80      | 0       | M             | UTTERMS.FMNOTES                  |         |
| Terms Notes Line 2                      | 1197          | 1276         | 80      | 0       | M             | UTTERMS.FMNOTES                  |         |
| Currency Exchange Gain/Loss             | 1277          | 1292         | 16      | 4       | Y             | ARMAST.FNCUREX                   |         |
| Invoice Notes Line 1                    | 1293          | 1372         | 80      | 0       | M             | ARMAST.FMNOTES                   |         |
| Invoice Notes Line 2                    | 1373          | 1452         | 80      | 0       | M             | ARMAST.FMNOTES                   |         |
| Invoice Remarks Line 1                  | 1453          | 1532         | 80      | 0       | M             | ARMAST.FMREMARKS                 |         |
| Invoice Remarks Line 2                  | 1533          | 1612         | 80      | 0       | M             | ARMAST.FMREMARKS                 |         |
| Terms Message Line 1                    | 1613          | 1692         | 80      | 0       | M             | ARMAST.FMTERMSMSG                |         |
| Terms Message Line 2                    | 1693          | 1772         | 80      | 0       | M             | ARMAST.FMTERMSMSG                |         |
| Invoice Weight                          | 1773          | 1783         | 11      | 4       | N             | ARMAST.FNTOTALWT                 |         |
| EDI Character 1                         | 1784          | 1803         | 20      | 0       | C             | SOHDR.FCEDICHAR1                 |         |
| EDI Character 2                         | 1804          | 1823         | 20      | 0       | C             | SOHDR.FCEDICHAR2                 |         |
| EDI Character 3                         | 1824          | 1843         | 20      | 0       | C             | SOHDR.FCEDICHAR3                 |         |
| EDI Character 4                         | 1844          | 1863         | 20      | 0       | C             | SOHDR.FCEDICHAR4                 |         |
| EDI Character 5                         | 1864          | 1883         | 20      | 0       | C             | SOHDR.FCEDICHAR5                 |         |
| EDI Character 6                         | 1884          | 1903         | 20      | 0       | C             | SOHDR.FCEDICHAR6                 |         |
| EDI Character 7                         | 1904          | 1923         | 20      | 0       | C             | SOHDR.FCEDICHAR7                 |         |
| EDI Character 8                         | 1924          | 1943         | 20      | 0       | C             | SOHDR.FCEDICHAR8                 |         |
| EDI Character 9                         | 1944          | 1963         | 20      | 0       | C             | SOHDR.FCEDICHAR9                 |         |
| EDI Character 10                        | 1964          | 1983         | 20      | 0       | C             | SOHDR.FCEDICHAR10                |         |
| EDI Character 11                        | 1984          | 2003         | 20      | 0       | C             | SOHDR.FCEDICHAR11                |         |
| EDI Character 12                        | 2004          | 2023         | 20      | 0       | C             | SOHDR.FCEDICHAR12                |         |
| EDI Character 13                        | 2024          | 2043         | 20      | 0       | C             | SOHDR.FCEDICHAR13                |         |
| EDI Character 14                        | 2044          | 2063         | 20      | 0       | C             | SOHDR.FCEDICHAR14                |         |
| EDI Character 15                        | 2064          | 2083         | 20      | 0       | C             | SOHDR.FCEDICHAR15                |         |
| EDI Date 1                              | 2084          | 2091         | 8       | 0       | D             | SOHDR.FCEDIDATE1                 |         |
| EDI Date 2                              | 2092          | 2099         | 8       | 0       | D             | SOHDR.FCEDIDATE2                 |         |
| EDI Date 3                              | 2100          | 2107         | 8       | 0       | D             | SOHDR.FCEDIDATE3                 |         |
| EDI Date 4                              | 2108          | 2115         | 8       | 0       | D             | SOHDR.FCEDIDATE4                 |         |
| EDI Date 5                              | 2116          | 2123         | 8       | 0       | D             | SOHDR.FCEDIDATE5                 |         |
| EDI Date 6                              | 2124          | 2131         | 8       | 0       | D             | SOHDR.FCEDIDATE6                 |         |
| EDI Date 7                              | 2132          | 2139         | 8       | 0       | D             | SOHDR.FCEDIDATE7                 |         |
| EDI Date 8                              | 2140          | 2147         | 8       | 0       | D             | SOHDR.FCEDIDATE8                 |         |
| EDI Date 9                              | 2148          | 2155         | 8       | 0       | D             | SOHDR.FCEDIDATE9                 |         |
| EDI Date 10                             | 2156          | 2163         | 8       | 0       | D             | SOHDR.FCEDIDATE10                |         |
| EDI Date 11                             | 2164          | 2171         | 8       | 0       | D             | SOHDR.FCEDIDATE11                |         |
| EDI Date 12                             | 2172          | 2179         | 8       | 0       | D             | SOHDR.FCEDIDATE12                |         |
| EDI Date 13                             | 2180          | 2187         | 8       | 0       | D             | SOHDR.FCEDIDATE13                |         |
| EDI Date 14                             | 2188          | 2195         | 8       | 0       | D             | SOHDR.FCEDIDATE14                |         |
| EDI Date 15                             | 2196          | 2203         | 8       | 0       | D             | SOHDR.FCEDIDATE15                |         |
| EDI Numeric 1                           | 2204          | 2219         | 16      | 5       | N             | SOHDR.FCEDINUM1                  |         |
| EDI Numeric 2                           | 2220          | 2235         | 16      | 5       | N             | SOHDR.FCEDINUM2                  |         |
| EDI Numeric 3                           | 2236          | 2251         | 16      | 5       | N             | SOHDR.FCEDINUM3                  |         |
| EDI Numeric 4                           | 2252          | 2267         | 16      | 5       | N             | SOHDR.FCEDINUM4                  |         |
| EDI Numeric 5                           | 2268          | 2283         | 16      | 5       | N             | SOHDR.FCEDINUM5                  |         |
| EDI Numeric 6                           | 2284          | 2299         | 16      | 5       | N             | SOHDR.FCEDINUM6                  |         |
| EDI Numeric 7                           | 2300          | 2315         | 16      | 5       | N             | SOHDR.FCEDINUM7                  |         |
| EDI Numeric 8                           | 2316          | 2331         | 16      | 5       | N             | SOHDR.FCEDINUM8                  |         |
| EDI Numeric 9                           | 2332          | 2347         | 16      | 5       | N             | SOHDR.FCEDINUM9                  |         |
| EDI Numeric 10                          | 2348          | 2363         | 16      | 5       | N             | SOHDR.FCEDINUM10                 |         |
| EDI Memo 1 Line 1                       | 2364          | 2443         | 80      | 0       | M             | SOHDR.FCEDIMEMO1                 |         |
| EDI Memo 1 Line 2                       | 2444          | 2523         | 80      | 0       | M             | SOHDR.FCEDIMEMO1                 |         |
| EDI Memo 2 Line 1                       | 2524          | 2603         | 80      | 0       | M             | SOHDR.FCEDIMEMO2                 |         |
| EDI Memo 2 Line 2                       | 2604          | 2683         | 80      | 0       | M             | SOHDR.FCEDIMEMO2                 |         |
| Remit Company Name                      | 2684          | 2718         | 35      | 0       | C             | UTCOMP.FCOMPANY                  |         |
| Remit Address Line 1                    | 2719          | 2798         | 80      | 0       | M             | UTCOMP.FMADDRESS                 |         |
| Remit Address Line 2                    | 2799          | 2878         | 80      | 0       | M             | UTCOMP.FMADDRESS                 |         |
| Remit City                              | 2879          | 2898         | 20      | 0       | C             | UTCOMP.FCITY                     |         |
| Remit State                             | 2899          | 2901         | 3       | 0       | C             | UTCOMP.FSTATE                    |         |
| Remit Zip Code                          | 2902          | 2911         | 10      | 0       | C             | UTCOMP.FZIP                      |         |
| Remit Country                           | 2912          | 2936         | 25      | 0       | C             | UTCOMP.FCOUNTRY                  |         |
| Remit Telephone Number                  | 2937          | 2956         | 20      | 0       | C             | UTCOMP.FPHONE                    |         |
| Remit Fax Number                        | 2957          | 2976         | 20      | 0       | C             | UTCOMP.FCFAX                     |         |
| Terms Discount Due Date                 | 2977          | 2984         | 8       | 0       | D             | ARMAST.FINVDATE + UTTERMS.FNDAYS |         |
| Currency                                | 2985          | 2987         | 3       | 0       | C             | ARMAST.FCCURID                   |         |
| Customer AP Supplier Number\*           | 2988          | 3007         | 20      | 0       | C             | XCUSTEDI.FCAPSUPNO               |         |
| Ship Via                                | 3008          | 3027         | 20      | 0       | C             | ARMAST.FSHIPVIA                  |         |
| Ship Via Display Value                  | 3028          | 3107         | 80      | 0       | C             | ARMAST.FSHIPVIA                  |         |
| SCAC Code                               | 3108          | 3127         | 20      | 0       |               | XSCAC.FCSCAC                     |         |
| SCAC Carrier Name                       | 3127          | 3327         | 20      | 0       | C             | XSCAC.FCCARRIER                  |         |
| Available for future use                | 3328          | 4096         |         |         |               |                                  |         |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 810-BG2

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**         | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------------|---------|
| Header Record Tag: 'BG2' | 1             | 3            | 3       | 0       | C             | 'BG2"                   | X       |
| Shipper Number           | 4             | 13           | 10      | 0       | C             | SHMAST.FSHIPNO          |         |
| Sales Order Number       | 14            | 23           | 10      | 0       | C             | SHMAST.FCSONO           |         |
| Sales Order Revision     | 24            | 25           | 2       | 0       | C             | SHMAST.FCSOREV          |         |
| Bill of Lading Number    | 26            | 45           | 20      | 0       | C             | SHMAST.FBL_LADING       |         |
| Company Shipped To       | 46            | 80           | 35      | 0       | C             | SHMAST.FCCOMPANY        |         |
| Street Address Line 1    | 81            | 160          | 80      | 0       | M             | SHMAST.FMSTREET         |         |
| Street Address Line 2    | 161           | 240          | 80      | 0       | M             | SHMAST.FMSTREET         |         |
| City Shipped To          | 241           | 260          | 20      | 0       | C             | SHMAST.FCCITY           |         |
| County Shipped To        | 261           | 280          | 20      | 0       | C             | SHMAST.FCCOUNTY         |         |
| Country Shipped To       | 281           | 305          | 25      | 0       | C             | SHMAST.FCCOUNTRY        |         |
| State Shipped To         | 306           | 325          | 20      | 0       | C             | SHMAST.FCSTATE          |         |
| Postal Code Shipped To   | 326           | 335          | 10      | 0       | C             | SHMAST.FCZIP            |         |
| Shipper Comment Line 1   | 336           | 415          | 80      | 0       | M             | SHMAST.FMREFERENC       |         |
| Shipper Comment Line 2   | 416           | 495          | 80      | 0       | M             | SHMAST.FMREFERENC       |         |
| Ship List Memo Line 1    | 496           | 575          | 80      | 0       | M             | SHMAST.FSHIPMEMO        |         |
| Ship List Memo Line 2    | 576           | 655          | 80      | 0       | M             | SHMAST.FSHIPMEMO        |         |
| Ship Date                | 656           | 663          | 8       | 0       | D             | SHMAST.FSHIPDATE        |         |
| Ship Via                 | 664           | 683          | 20      | 0       | C             | SHMAST.FSHIPVIA         |         |
| Weight                   | 684           | 694          | 11      | 4       | N             | SHMASTTRACKER.FSHIPWGHT |         |
| Shipper Type             | 695           | 696          | 2       | 0       | C             | SHMAST.FTYPE            |         |
| Confirmation Date        | 697           | 704          | 8       | 0       | D             | SHMAST.START            |         |
| Freight on Board         | 705           | 724          | 20      | 0       | C             | SHMAST.FFOB             |         |
| Freight Amount           | 725           | 740          | 16      | 5       | N             | SHMASTTRACKER.FFRTAMT   |         |
| Number of Boxes          | 741           | 745          | 5       | 0       | N             | SHMASTTRACKER.FNO_BOXES |         |
| Seal Number              | 746           | 753          | 8       | 0       | C             | BOLMAST.FCSEALNO        |         |
| Pro Number               | 754           | 788          | 35      | 0       | C             | BOLMAST.FCPRONO         |         |
| Carrier                  | 789           | 798          | 10      | 0       | C             | BOLMAST.FCCARRIER       |         |
| Appointment Number       | 799           | 806          | 8       | 0       | C             | BOLMAST.FCAPPTNO        |         |
| Carrier Trailer Number   | 807           | 816          | 10      | 0       | C             | BOLMAST.FCTRLRNO        |         |
| Vendor Ship Point        | 817           | 826          | 10      | 0       | C             | BOLMAST.FCSHPPOINT      |         |
| Ship Date                | 827           | 834          | 8       | 0       | D             | BOLMAST.FDSHPDATE       |         |
| Prepaid                  | 835           | 835          | 1       | 0       | L             | BOLMAST.FLPREPAID       |         |
| BOL Freight              | 836           | 851          | 16      | 5       | N             | BOLMAST.FNFREIGHT       |         |
| BOL Collect Amount       | 852           | 867          | 16      | 5       | N             | BOLMAST.FNCOLLECT       |         |
| BOL Comment Line 1       | 868           | 947          | 80      | 0       | M             | BOLMAST.FMCOMMENT       |         |
| BOL Comment Line 2       | 948           | 1027         | 80      | 0       | M             | BOLMAST.FMCOMMENT       |         |

| BOL Received Memo Line 1              | 1028 | 1107 | 80 | 0 | M | BOLMAST.FMRECEIVED     |   |
|---------------------------------------|------|------|----|---|---|------------------------|---|
| BOL Received Memo Line 2              | 1108 | 1187 | 80 | 0 | M | BOLMAST.FMRECEIVED     |   |
| Sales Order Coordinator               | 1188 | 1190 | 3  | 0 | C | SOMAST.FSOCOORD        |   |
| Sales Order Revision Date             | 1191 | 1198 | 8  | 0 | D | SOMAST.FORDREVDT       |   |
| Sales Order Sales Code                | 1199 | 1205 | 7  | 0 | C | SOMAST.FSALESCODE      |   |
| Sales Order User Defined Code         | 1206 | 1212 | 7  | 0 | C | SOMAST.FUSERCODE       |   |
| Sales Order Due Date                  | 1213 | 1220 | 8  | 0 | D | SOMAST.FDUEDATE        |   |
| Sales Order Order Date                | 1221 | 1228 | 8  | 0 | D | SOMAST.FORDERDATE      |   |
| Sales Order Description               | 1229 | 1263 | 35 | 0 | C | SOMAST.FORDERNAME      |   |
| Sales Order User Defined Character 1  | 1264 | 1283 | 20 | 0 | C | SOMAST.FCUSRCHR1       |   |
| Sales Order User Defined Character 2  | 1284 | 1323 | 40 | 0 | C | SOMAST.FCUSRCHR2       |   |
| Sales Order User Defined Character 3  | 1324 | 1363 | 40 | 0 | C | SOMAST.FCUSRCHR3       |   |
| Customer Purchase Order Number        | 1364 | 1383 | 20 | 0 | C | SOMAST.FCUSTPONO       |   |
| Sales Order User Defined Date 1       | 1384 | 1391 | 8  | 0 | D | SOMAST.FDUSRDATE1      |   |
| Sales Order User Defined Memo Line 1  | 1392 | 1471 | 80 | 0 | M | SOMAST.FMUSRMEMO1      |   |
| Sales Order User Defined Memo Line 2  | 1472 | 1551 | 80 | 0 | M | SOMAST.FMUSRMEMO1      |   |
| Sales Order User Defined Currency 1   | 1552 | 1567 | 16 | 5 | N | SOMAST.FNUSRCUR1       |   |
| Sales Order User Defined Quantity 1   | 1568 | 1581 | 14 | 5 | N | SOMAST.FNUSRQTY1       |   |
| Ship-To Address Key                   | 1582 | 1587 | 6  | 0 | C | SHMAST.FSHPTOADDR      |   |
| Trading Partner Ship-To Address Key\* | 1588 | 1607 | 20 | 0 | C | XADDREDI.FCEDIADDR     |   |
| Sold-To Address Key                   | 1608 | 1613 | 6  | 0 | C | SOMAST.FSOLDADDR       |   |
| Trading Partner Sold-To Address Key\* | 1614 | 1633 | 20 | 0 | C | XADDREDI.FCEDIADDR     |   |
| Sold-To Company Name                  | 1634 | 1668 | 35 | 0 | C | SOMAST.FCOMPANY        |   |
| Sold-To Address Line 1                | 1669 | 1748 | 80 | 0 | M | SOMAST.FMSTREET        |   |
| Sold-To Address Line 2                | 1749 | 1828 | 80 | 0 | M | SOMAST.FMSTREET        |   |
| Sold-To City                          | 1829 | 1848 | 20 | 0 | C | SOMAST.FCITY           |   |
| Sold-To State                         | 1849 | 1868 | 20 | 0 | C | SOMAST.FSTATE          |   |
| Sold-To Zip Code                      | 1869 | 1878 | 10 | 0 | C | SOMAST.FZIP            |   |
| Sold-To Country                       | 1879 | 1903 | 25 | 0 | C | SOMAST.FCOUNTRY        |   |
| Tracking Number Line 1                | 1904 | 1983 | 80 | 0 | M | SHMASTTRACKER.FMTRCKNO |   |
| Tracking Number Line 2                | 1984 | 2063 | 80 | 0 | M | SHMASTTRACKER.FMTRCKNO |   |
| Available for future use              | 2064 | 4084 |    |   |   |                        |   |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 810-HML

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**        | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**        | **Req** |
|------------------------------|---------------|--------------|---------|---------|---------------|------------------------|---------|
| Header Record Tag: 'HML'     | 1             | 3            | 3       | 0       | C             | 'HML'                  | X       |
| Invoice Notes                | 4             | 83           | 80      | 0       | M             | ARMAST.FMNOTES         |         |
| Invoice Remarks              | 84            | 163          | 80      | 0       | M             | ARMAST.FMREMARKS       |         |
| Invoice Terms Message        | 164           | 243          | 80      | 0       | M             | ARMAST.FMTERMSMSG      |         |
| Terms Notes                  | 244           | 323          | 80      | 0       | M             | UTTERMS.FMNOTES        |         |
| Shipper Tracking Number      | 324           | 403          | 80      | 0       | M             | SHMASTTRACKER.FMTRCKNO |         |
| Shipper Comment              | 404           | 483          | 80      | 0       | M             | SHMAST.FMREFERENC      |         |
| Shipper List                 | 484           | 563          | 80      | 0       | M             | SHMAST.FSHIPMEMO       |         |
| BOL Comment                  | 564           | 643          | 80      | 0       | M             | BOLMAST.FMCOMMENT      |         |
| BOL Received                 | 644           | 723          | 80      | 0       | M             | BOLMAST.FMRECEIVED     |         |
| Sales Order User Defined     | 724           | 803          | 80      | 0       | M             | SOMAST.FMUSRMEMO1      |         |
| EDI Header 1                 | 804           | 883          | 80      | 0       | M             | SOHDR.FCEDIMEMO1       |         |
| EDI Header 2                 | 884           | 963          | 80      | 0       | M             | SOHDR.FCEDIMEMO2       |         |
| Customer Master User Defined | 964           | 1043         | 80      | 0       | M             | SLCDPM.FMUSRMEMO1      |         |
| Sales Person Notes           | 1044          | 1123         | 80      | 0       | M             | SLSPNS.FMNOTES         |         |
| Available for future use     | 1124          | 4096         |         |         |               |                        |         |

### 810-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with O are obsolete.

| **Field Description**                  | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**     | **Req** |
|----------------------------------------|---------------|--------------|---------|---------|---------------|---------------------|---------|
| Header Record Tag: 'DET'               | 1             | 3            | 3       | 0       | C             | 'DET'               | X       |
| System Assigned Line-Item Number       | 4             | 9            | 6       | 0       | C             | ARITEM.FITEM        |         |
| User Definable Line-Item Number        | 10            | 19           | 10      | 0       | C             | ARITEM.FCUSERLINE   |         |
| Part Number                            | 20            | 44           | 25      | 0       | C             | ARITEM.FPARTNO      |         |
| Part Number Revision                   | 45            | 47           | 3       | 0       | C             | ARITEM.FREV         |         |
| Type of Item                           | 48            | 48           | 1       | 0       | C             | ARITEM.FCTYPE       |         |
| Order Qty                              | 49            | 62           | 14      | 5       | N             | ARITEM.FORDQTY      |         |
| Qty Invoiced                           | 63            | 76           | 14      | 5       | N             | ARITEM.FSHIPQTY     |         |
| Qty Back Ordered                       | 77            | 90           | 14      | 5       | N             | ARITEM.FBKORDQTY    |         |
| Unit Price                             | 91            | 106          | 16      | 5       | N             | ARITEM.FPRICE       |         |
| Average Unit Cost                      | 107           | 122          | 16      | 4       | Y             | ARITEM.FCOST        |         |
| Discount Amount                        | 123           | 138          | 16      | 4       | Y             | ARITEM.FDISCAMT     |         |
| Item Discount Amount in the EURO       | 139           | 154          | 16      | 4       | Y             | ARITEM.FDISCEURAMT  | O       |
| Item Discount Amount in TXN            | 155           | 170          | 16      | 4       | Y             | ARITEM.FDISCTXNAMT  |         |
| Discount Rate                          | 171           | 176          | 6       | 2       | N             | ARITEM.FDISRATE     |         |
| Unit Price in the Transaction Currency | 177           | 192          | 16      | 5       | N             | ARITEM.FEUROPRICE   | O       |
| Total Price in the EURO Currency       | 193           | 208          | 16      | 4       | Y             | ARITEM.FTOTEURPRICE | O       |
| Price \* Qty Less Discounts            | 209           | 224          | 16      | 4       | Y             | ARITEM.FTOTPRICE    |         |
| Net Price in the TXN Currency          | 225           | 240          | 16      | 4       | Y             | ARITEM.FTOTTXNPRICE |         |
| Unit Price in the TXN Currency         | 241           | 256          | 16      | 5       | N             | ARITEM.FTXNPRICE    |         |
| Description Line 1                     | 257           | 336          | 80      | 0       | M             | ARITEM.FMDESCRIPT   |         |
| Description Line 2                     | 337           | 416          | 80      | 0       | M             | ARITEM.FMDESCRIPT   |         |
| Invoice Number                         | 417           | 436          | 20      | 0       | C             | ARITEM.FCINVOICE    |         |
| Sales Tax Code                         | 437           | 446          | 10      | 0       | C             | ARITEM.FCTAXCODE    |         |
| Tax Description                        | 447           | 481          | 35      | 0       | C             | ARSTAX.FCDESCR      |         |
| Group Code Number                      | 482           | 487          | 6       | 0       | C             | INGRPC.FGC_NUMBER   |         |
| Group Code Description                 | 488           | 617          | 130     | 0       | C             | INGRPC.FPC_DESC     |         |
| Product Class Name                     | 618           | 629          | 12      | 0       | C             | INPROD.FPC_NAME     |         |
| Product Class Code                     | 630           | 633          | 4       | 0       | C             | INPROD.FPC_NUMBER   |         |
| Product Class Description              | 634           | 688          | 55      | 0       | C             | INPROD.FPC_DESC     |         |
| Freight Class of Item                  | 689           | 700          | 12      | 0       | C             | INMAST.FCCLASS      |         |
| Item Master Part Description           | 701           | 735          | 35      | 0       | C             | INMAST.FDESCRIPT    |         |
| Item Master Comment Line 1             | 736           | 815          | 80      | 0       | M             | INMAST.FCOMMENT     |         |
| Item Master Comment Line 2             | 816           | 895          | 80      | 0       | M             | INMAST.FCOMMENT     |         |
| Item Master User Defined Character 1   | 896           | 915          | 20      | 0       | C             | INMAST.FCUSRCHR1    |         |
| Item Master User Defined Character 2   | 916           | 955          | 40      | 0       | C             | INMAST.FCUSRCHR2    |         |
| Item Master User Defined Character 3   | 956           | 995          | 40      | 0       | C             | INMAST.FCUSRCHR3    |         |
| Item Master User Defined Date 1        | 996           | 1003         | 8       | 0       | D             | INMAST.FDUSRDATE1   |         |
| Item Master User Defined Memo Line 1   | 1004          | 1083         | 80      | 0       | M             | INMAST.FMUSRMEMO1   |         |
| Item Master User Defined Memo Line 2   | 1084          | 1163         | 80      | 0       | M             | INMAST.FMUSRMEMO1   |         |
| Item Master User Defined Currency 1    | 1164          | 1179         | 16      | 5       | N             | INMAST.FNUSRCUR1    |         |
| Item Master User Defined Quantity 1    | 1180          | 1193         | 14      | 5       | N             | INMAST.FNUSRQTY1    |         |
| Shipper Item Number                    | 1194          | 1199         | 6       | 0       | C             | SHITEM.FITEMNO      |         |
| Shipper Item Unit of Measure           | 1200          | 1202         | 3       | 0       | C             | SHITEM.FMEASURE     |         |
| Shipper Item Description Line 1        | 1203          | 1282         | 80      | 0       | M             | SHITEM.FMDESCRIPT   |         |
| Shipper Item Description Line 2        | 1283          | 1362         | 80      | 0       | M             | SHITEM.FMDESCRIPT   |         |
| Shipper Item Qty Shipped               | 1363          | 1376         | 14      | 5       | N             | SHITEM.FSHIPQTY     |         |
| Sales Order Item Group Code            | 1377          | 1382         | 6       | 0       | C             | SOITEM.FGROUP       |         |
| Sales Order Item Product Class         | 1383          | 1386         | 4       | 0       | C             | SOITEM.FPRODCL      |         |
| Sales Order Item Line Number           | 1387          | 1389         | 3       | 0       | C             | SOITEM.FENUMBER     |         |
| Sales Order Item Description Line 1    | 1390          | 1469         | 80      | 0       | M             | SOITEM.FDESC        |         |
| Sales Order Item Description Line 2    | 1470          | 1549         | 80      | 0       | M             | SOITEM.FDESC        |         |
| Sales Order Item Memo Descript Line 1  | 1550          | 1629         | 80      | 0       | M             | SOITEM.FDESCMEMO    |         |
| Sales Order Item Memo Descript Line 2  | 1630          | 1709         | 80      | 0       | M             | SOITEM.FDESCMEMO    |         |
| Sales Order Item Due Date              | 1710          | 1717         | 8       | 0       | D             | SOITEM.FDUEDATE     |         |
| Sales Order Item Salesperson           | 1718          | 1720         | 3       | 0       | C             | SOITEM.FSOLDBY      |         |
| Sales Order Release Due Date           | 1721          | 1728         | 8       | 0       | D             | SORELS.FDUEDATE     |         |
| Ship-To Company Name                   | 1729          | 1763         | 35      | 0       | C             | SYADDR.FCCOMPANY    |         |
| Ship-To Address Number                 | 1764          | 1769         | 6       | 0       | C             | SORELS.FSHPTOADDR   |         |
| Trading Partner Ship-To Address Key\*  | 1770          | 1789         | 20      | 0       | C             | XADDREDI.FCEDIADDR  |         |
| Ship-To Street Line 1                  | 1790          | 1869         | 80      | 0       | M             | SYADDR.FMSTREET     |         |
| Ship-To Street Line 2                  | 1870          | 1949         | 80      | 0       | M             | SYADDR.FMSTREET     |         |
| Ship-To City                           | 1950          | 1969         | 20      | 0       | C             | SYADDR.FCCITY       |         |
| Ship-To State                          | 1970          | 1989         | 20      | 0       | C             | SYADDR.FCSTATE      |         |
| Ship-To Zip                            | 1990          | 1999         | 10      | 0       | C             | SYADDR.FCZIP        |         |
| Ship-To County                         | 2000          | 2019         | 20      | 0       | C             | SYADDR.FCCOUNTY     |         |
| Ship-To Country                        | 2020          | 2044         | 25      | 0       | C             | SYADDR.FCCOUNTRY    |         |
| Ship-To Notes Line 1                   | 2045          | 2124         | 80      | 0       | M             | SYADDR.FMNOTES      |         |
| Ship-To Notes Line 2                   | 2125          | 2204         | 80      | 0       | M             | SYADDR.FMNOTES      |         |
| Customer Purchase Order Number         | 2205          | 2234         | 30      | 0       | C             | SOMAST.FCUSTPONO    |         |
| Delivery Notes Line 1                  | 2235          | 2314         | 80      | 0       | M             | SORELS.FDELIVERY    |         |
| Delivery Notes Line 2                  | 2315          | 2394         | 80      | 0       | M             | SORELS.FDELIVERY    |         |
| Item Master Part Weight                | 2395          | 2404         | 10      | 3       | N             | INMAST.FNWEIGHT     |         |
| Available for future use               | 2405          | 4090         |         |         |               |                     |         |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 810-LIN

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'LIN' | 1             | 3            | 3       | 0       | C             | 'LIN'             | X       |
| EDI Character 1          | 4             | 23           | 20      | 0       | C             | SODET.FCEDICHAR1  |         |
| EDI Character 2          | 24            | 43           | 20      | 0       | C             | SODET.FCEDICHAR2  |         |
| EDI Character 3          | 44            | 63           | 20      | 0       | C             | SODET.FCEDICHAR3  |         |
| EDI Character 4          | 64            | 83           | 20      | 0       | C             | SODET.FCEDICHAR4  |         |
| EDI Character 5          | 84            | 103          | 20      | 0       | C             | SODET.FCEDICHAR5  |         |
| EDI Character 6          | 104           | 123          | 20      | 0       | C             | SODET.FCEDICHAR6  |         |
| EDI Character 7          | 124           | 143          | 20      | 0       | C             | SODET.FCEDICHAR7  |         |
| EDI Character 8          | 144           | 163          | 20      | 0       | C             | SODET.FCEDICHAR8  |         |
| EDI Character 9          | 164           | 183          | 20      | 0       | C             | SODET.FCEDICHAR9  |         |
| EDI Character 10         | 184           | 203          | 20      | 0       | C             | SODET.FCEDICHAR10 |         |
| EDI Character 11         | 204           | 223          | 20      | 0       | C             | SODET.FCEDICHAR11 |         |
| EDI Character 12         | 224           | 243          | 20      | 0       | C             | SODET.FCEDICHAR12 |         |
| EDI Character 13         | 244           | 263          | 20      | 0       | C             | SODET.FCEDICHAR13 |         |
| EDI Character 14         | 264           | 283          | 20      | 0       | C             | SODET.FCEDICHAR14 |         |
| EDI Character 15         | 284           | 303          | 20      | 0       | C             | SODET.FCEDICHAR15 |         |
| EDI Date 1               | 304           | 311          | 8       | 0       | D             | SODET.FCEDIDATE1  |         |
| EDI Date 2               | 312           | 319          | 8       | 0       | D             | SODET.FCEDIDATE2  |         |
| EDI Date 3               | 320           | 327          | 8       | 0       | D             | SODET.FCEDIDATE3  |         |
| EDI Date 4               | 328           | 335          | 8       | 0       | D             | SODET.FCEDIDATE4  |         |
| EDI Date 5               | 336           | 343          | 8       | 0       | D             | SODET.FCEDIDATE5  |         |
| EDI Date 6               | 344           | 351          | 8       | 0       | D             | SODET.FCEDIDATE6  |         |
| EDI Date 7               | 352           | 359          | 8       | 0       | D             | SODET.FCEDIDATE7  |         |
| EDI Date 8               | 360           | 367          | 8       | 0       | D             | SODET.FCEDIDATE8  |         |
| EDI Date 9               | 368           | 375          | 8       | 0       | D             | SODET.FCEDIDATE9  |         |
| EDI Date 10              | 376           | 383          | 8       | 0       | D             | SODET.FCEDIDATE10 |         |
| EDI Date 11              | 384           | 391          | 8       | 0       | D             | SODET.FCEDIDATE11 |         |
| EDI Date 12              | 392           | 399          | 8       | 0       | D             | SODET.FCEDIDATE12 |         |
| EDI Date 13              | 400           | 407          | 8       | 0       | D             | SODET.FCEDIDATE13 |         |
| EDI Date 14              | 408           | 415          | 8       | 0       | D             | SODET.FCEDIDATE14 |         |
| EDI Date 15              | 416           | 423          | 8       | 0       | D             | SODET.FCEDIDATE15 |         |
| EDI Numeric 1            | 424           | 439          | 16      | 5       | N             | SODET.FCEDINUM1   |         |
| EDI Numeric 2            | 440           | 455          | 16      | 5       | N             | SODET.FCEDINUM2   |         |
| EDI Numeric 3            | 456           | 471          | 16      | 5       | N             | SODET.FCEDINUM3   |         |
| EDI Numeric 4            | 472           | 487          | 16      | 5       | N             | SODET.FCEDINUM4   |         |
| EDI Numeric 5            | 488           | 503          | 16      | 5       | N             | SODET.FCEDINUM5   |         |
| EDI Numeric 6            | 504           | 519          | 16      | 5       | N             | SODET.FCEDINUM6   |         |
| EDI Numeric 7            | 520           | 535          | 16      | 5       | N             | SODET.FCEDINUM7   |         |
| EDI Numeric 8            | 536           | 551          | 16      | 5       | N             | SODET.FCEDINUM8   |         |
| EDI Numeric 9            | 552           | 567          | 16      | 5       | N             | SODET.FCEDINUM9   |         |
| EDI Numeric 10           | 568           | 583          | 16      | 5       | N             | SODET.FCEDINUM10  |         |
| EDI Memo 1 Line 1        | 584           | 663          | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 1 Line 2        | 664           | 743          | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| EDI Memo 2 Line 1        | 744           | 823          | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| EDI Memo 2 Line 2        | 824           | 903          | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| Unit of Measure          | 904           | 906          | 3       | 0       | C             | ARITEM.FMEASURE   |         |
| Customer Part Number     | 907           | 931          | 25      | 0       | C             | SOITEM.FCUSTPART  |         |
| Customer Part Revision   | 932           | 934          | 3       | 0       | C             | SOITEM.FCUSTPTREV |         |
| Part Number              | 935           | 959          | 25      | 0       | C             | SOITEM.FPARTNO    |         |
| Part Revision            | 960           | 962          | 3       | 0       | C             | SOITEM.FPARTREV   |         |
| Quantity                 | 963           | 978          | 16      | 5       | N             | SOITEM.FQUANTITY  |         |
| Unit of Measure          | 979           | 981          | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Source                   | 982           | 982          | 1       | 0       | C             | SOITEM.FSOURCE    |         |
| Unit Price               | 983           | 998          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Available for future use | 999           | 4096         |         |         |               |                   |         |

### 810-DML

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                 | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|---------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DML'              | 1             | 3            | 3       | 0       | C             | 'DML'             | X       |
| Invoice Item Description              | 4             | 83           | 80      | 0       | M             | ARITEM.FMDESCRIPT |         |
| Shipper Item Description              | 84            | 163          | 80      | 0       | M             | SHITEM.FMDESCRIPT |         |
| Sales Order Item Description          | 164           | 243          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Sales Order Customer Part Description | 244           | 323          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Sales Order Release Delivery          | 324           | 403          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Sales Order EDI Item 1                | 404           | 483          | 80      | 0       | M             | SODET.FCEDIMEMO1  |         |
| Sales Order EDI Item 2                | 484           | 563          | 80      | 0       | M             | SODET.FCEDIMEMO2  |         |
| Item Master Comment                   | 564           | 643          | 80      | 0       | M             | INMAST.FCOMMENT   |         |
| Item Master User Defined              | 644           | 723          | 80      | 0       | M             | INMAST.FMUSRMEMO1 |         |
| Available for future use              | 724           | 4096         |         |         |               |                   |         |

### 

### 810-SAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**             | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|-----------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'SAC'          | 1             | 3            | 3       | 0       | C             | 'SAC'             | X       |
| Part Number                       | 4             | 28           | 25      | 0       | C             | ARITEM.FPARTNO    |         |
| Part Number Revision              | 29            | 31           | 3       | 0       | C             | ARITEM.FREV       |         |
| Description Line 1                | 32            | 111          | 80      | 0       | M             | ARITEM.FMDESCRIPT |         |
| Description Line 2                | 112           | 191          | 80      | 0       | M             | ARITEM.FMDESCRIPT |         |
| Qty Invoiced                      | 192           | 205          | 14      | 5       | N             | ARITEM.FSHIPQTY   |         |
| Unit Price                        | 206           | 221          | 16      | 5       | N             | ARITEM.FPRICE     |         |
| Discount Amount                   | 222           | 237          | 16      | 4       | Y             | ARITEM.FDISCAMT   |         |
| Price\* Qty Less Discounts        | 238           | 253          | 16      | 4       | Y             | ARITEM.FTOTPRICE  |         |
| SAC Allowance or Charge Indicator | 254           | 254          | 1       | 0       | C             | XINVEDI.FISACTYPE |         |
| Discount Percent                  | 255           | 261          | 7       | 2       | N             | ARITEM.FDISRATE   |         |
| Available for future use          | 262           | 4096         |         |         |               |                   |         |

### 810-SUM

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**          | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage** | **Req** |
|--------------------------------|---------------|--------------|---------|---------|---------------|-----------------|---------|
| Header Record Tag: 'SUM'       | 1             | 3            | 3       | 0       | C             | 'SUM'           | X       |
| Total Line Items\*             | 4             | 9            | 6       | 0       |               | Calculated      | X       |
| Total Invoice Amount           | 10            | 25           | 16      | 4       | N             | ARMAST.FNAMOUNT |         |
| Total Line-Item Quantity Sum\* | 26            | 41           | 16      | 5       | Y             | Calculated      | X       |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

## 846 - Inventory Advice

Outbound 846 (Inventory Advice) originates from the Made2Manage Item Master (INV) and other Made2Manage data sources. The layout of the 846 Fixed File Format is listed below. The hierarchy of each 846 transaction is single HDR system key segment. The header information is exported into a single BEG segment. Each inventory item is exported into a single DET segment.

![](media/de1f0b54c8792a5b023ebd9c5c4af31e.png)

### 846-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                        | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**              | **Req** |
|----------------------------------------------|---------------|--------------|---------|---------|---------------|------------------------------|---------|
| Header Record Tag: 'HDR'                     | 1             | 3            | 3       | 0       | C             | 'HDR'                        | X       |
| Transaction Set ID (Application Alias Value) | 4             | 9            | 6       | 0       | C             | 'INVADV'                     | X       |
| Receiver EDI ID (Application Code)\#         | 10            | 29           | 20      | 0       | C             | XCUSTEDI.FCEDIID             | X       |
| Test / Production (Test Mode)                | 30            | 30           | 1       | 0       | C             | 'T' = Test; 'P' = Production | X       |
| Currently not used                           | 31            | 31           | 1       | 0       | C             | Currently not used           | X       |
| Sender EDI Qualifier                         | 32            | 33           | 2       | 0       | C             | XSETUP.FCTPQUAL              | X       |
| Sender EDI ID                                | 34            | 63           | 30      | 0       | C             | XSETUP.FCTPID                | X       |
| Receiver EDI Qualifier                       | 64            | 65           | 2       | 0       | C             | XCUSTEDI.FCEDIQUAL           | X       |
| Receiver EDI ID                              | 64            | 95           | 30      | 0       | C             | XCUSTEDI.FCEDIID             | X       |
| EDI-XML Document Definition                  | 96            | 105          | 10      | 0       | C             | ‘M2M_846’                    | X       |

\# Specific EDI ID exported when populated, otherwise general EDI ID exported

### 846-BEG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**  | **Req** |
|--------------------------|---------------|--------------|---------|---------|---------------|------------------|---------|
| Header Record Tag: 'BEG' | 1             | 3            | 3       | 0       | C             | 'BEG'            | X       |
| Customer Number          | 4             | 9            | 6       | 0       | C             | SLCDPM.FCUSTNO   |         |
| Trading Partner EDI ID   | 10            | 29           | 20      | 0       | C             | XCUSTEDI.FCEDIID |         |
| Available for future use | 30            | 4096         |         |         |               |                  |         |

### 

### 846-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**              | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DET'           | 1             | 3            | 3       | 0       | C             | 'DET'             | X       |
| Part Number                        | 4             | 28           | 25      | 0       | C             | INMAST.FPARTNO    |         |
| Part Revision                      | 29            | 31           | 3       | 0       | C             | INMAST.FREV       |         |
| Quantity on Hand                   | 32            | 45           | 14      | 5       | N             | INMAST.FONHAND    |         |
| Item Description Line 1            | 46            | 125          | 80      | 0       | M             | INMAST.FDESCRIPT  |         |
| Item Description Line 2            | 126           | 205          | 80      | 0       | M             | INMAST.FDESCRIPT  |         |
| Item Unit of Measure               | 206           | 208          | 3       | 0       | C             | INMAST.FMEASURE   |         |
| Cross Reference Part Number        | 209           | 233          | 25      | 0       | C             | INCROS.FCROSSPART |         |
| Cross Reference Part Revision      | 234           | 236          | 3       | 0       | C             | INCROS.FCROSSREV  |         |
| Quantity Committed                 | 237           | 251          | 15      | 5       | N             | INMAST.FBOOK      |         |
| Quantity On Order                  | 252           | 266          | 15      | 5       | N             | INMAST.FONORDER   |         |
| Quantity In Process                | 267           | 281          | 15      | 5       | N             | INMAST.FPROQTY    |         |
| Quantity In Inspection             | 282           | 296          | 15      | 5       | N             | INMAST.FQTYINSPEC |         |
| Reorder Quantity                   | 297           | 311          | 15      | 5       | N             | INMAST.FREORDQTY  |         |
| Safety Stock Quantity              | 312           | 326          | 15      | 5       | N             | INMAST.FSAFETY    |         |
| Order Lead Time in Days            | 327           | 333          | 7       | 1       | N             | INMAST.FLEADTIME  |         |
| Source Facility                    | 334           | 353          | 20      | 0       | C             | INMAST.SFAC       |         |
| Resident Facility                  | 354           | 373          | 20      | 0       | C             | INMAST.FAC        |         |
| Default Location                   | 374           | 387          | 14      | 0       | C             | INMAST.FLOCATE1   |         |
| Default Bin                        | 388           | 401          | 14      | 0       | C             | INMAST.FBIN1      |         |
| Date Of Last Inventory Count       | 402           | 409          | 8       | 0       | D             | INMAST.FLCT       |         |
| Product Class                      | 410           | 413          | 4       | 0       | C             | INMAST.FPRODCL    |         |
| Group Code                         | 414           | 419          | 6       | 0       | C             | INMAST.FGROUP     |         |
| Freight Class                      | 420           | 431          | 12      | 0       | C             | INMAST.FCCLASS    |         |
| Source                             | 432           | 432          | 1       | 0       | C             | INMAST.FSOURCE    |         |
| Unit Price                         | 433           | 449          | 17      | 5       | N             | INMAST.FPRICE     |         |
| Taxable Item                       | 450           | 450          | 1       | 0       | L             | INMAST.FLISTAXABL |         |
| Item Weight                        | 451           | 459          | 9       | 3       | N             | INMAST.FWEIGHT    |         |
| Standard Item Memo Line 1          | 460           | 539          | 80      | 0       | M             | INMAST.FSTDMEMO   |         |
| Standard Item Memo Line 2          | 540           | 619          | 80      | 0       | M             | INMAST.FSTDMEMO   |         |
| Comments Line 1                    | 620           | 699          | 80      | 0       | M             | INMAST.FCOMMENT   |         |
| Comments Line 2                    | 700           | 779          | 80      | 0       | M             | INMAST.FCOMMENT   |         |
| User Defined Character Field \#1   | 780           | 799          | 20      | 0       | C             | INMAST.FCUSRCHR1  |         |
| User Defined Character Field \#2   | 800           | 839          | 40      | 0       | C             | INMAST.FCUSRCHR2  |         |
| User Defined Character Field \#3   | 840           | 879          | 40      | 0       | C             | INMAST.FCUSRCHR3  |         |
| User Defined Qty Field \#1         | 880           | 894          | 15      | 5       | N             | INMAST.FNUSRQTY1  |         |
| User Defined Currency Field \#1    | 895           | 911          | 17      | 5       | N             | INMAST.FNUSRCUR1  |         |
| User Defined Date Field \#1        | 912           | 919          | 8       | 0       | D             | INMAST.FDUSRDATE1 |         |
| User Defined Memo Field \#1 Line 1 | 920           | 999          | 80      | 0       | M             | INMAST.FMUSRMEMO1 |         |
| User Defined Memo Field \#1 Line 2 | 1000          | 1079         | 80      | 0       | M             | INMAST.FMUSRMEMO1 |         |
| Available for future use           | 1080          | 4094         |         |         |               |                   |         |

## 855 - Purchase Order Acknowledgment

Outbound 855 (Purchase Order Acknowledgment) originates from the Made2Manage Sales Order (SO) and other Made2Manage data sources. The layout of the 855 Fixed File Format is listed below. The hierarchy of each 855 transaction is single HDR system key segment. The header information is exported into a single BEG segment, a single BG2 segment and the optional HML segment. Each line item is exported into a single DET segment and associated optional DML segment. Each item released is exported into optional REL and RML segments. A single SUM summary segment is exported after the final line item. The HML, DML, and RML segments are memo line count based.

![](media/9cda342c69e997254d9e31e108c7b60e.png)

### 855-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**              |  **Req** |
|----------------------------------------------|---------------|--------------|----------|----------|---------------|------------------------------|----------|
| Header Record Tag: 'HDR'                     | 1             | 3            | 3        | 0        | C             | 'HDR'                        | X        |
| Transaction Set ID (Application Alias Value) | 4             | 9            | 6        | 0        | C             | 'POACK'                      | X        |
| Receiver EDI ID (Application Code)\#         | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| Test / Production (Test Mode)                | 30            | 30           | 1        | 0        | C             | 'T' = Test; 'P' = Production | X        |
| Original / Resend                            | 31            | 31           | 1        | 0        | C             | 'O' = Original; 'R' = Resend | X        |
| Sender EDI Qualifier                         | 32            | 33           | 2        | 0        | C             | XSETUP.FCTPQUAL              | X        |
| Sender EDI ID                                | 34            | 63           | 30       | 0        | C             | XSETUP.FCTPID                | X        |
| Receiver EDI Qualifier                       | 64            | 65           | 2        | 0        | C             | XCUSTEDI.FCEDIQUAL           | X        |
| Receiver EDI ID                              | 66            | 95           | 30       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| EDI-XML Document Definition                  | 96            | 105          | 10       | 0        | C             | ‘M2M_855’                    | X        |

\# Specific EDI ID exported when populated, otherwise general EDI ID exported

### 855-BEG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                   | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**    | **Req** |
|-----------------------------------------|---------------|--------------|---------|---------|---------------|--------------------|---------|
| Header Record Tag: 'BEG'                | 1             | 3            | 3       | 0       | C             | 'BEG'              | X       |
| Customer Number                         | 4             | 9            | 6       | 0       | C             | SOMAST.FCUSTNO     | X       |
| Trading Partner EDI ID                  | 10            | 29           | 20      | 0       | C             | XCUSTEDI.FCEDIID   |         |
| Customer Purchase Order Number          | 30            | 49           | 20      | 0       | C             | SOMAST.FCUSTPONO   | X       |
| Customer Notes Line 1                   | 50            | 129          | 80      | 0       | M             | SLCDPM.FMNOTES     |         |
| Customer Notes Line 2                   | 130           | 209          | 80      | 0       | M             | SLCDPM.FMNOTES     |         |
| User Defined Character 1                | 210           | 229          | 20      | 0       | C             | SLCDPM.FCUSRCHR1   |         |
| User Defined Character 2                | 230           | 269          | 40      | 0       | C             | SLCDPM.FCUSRCHR2   |         |
| User Defined Character 3                | 270           | 309          | 40      | 0       | C             | SLCDPM.FCUSRCHR3   |         |
| User Defined Date 1                     | 310           | 317          | 8       | 0       | D             | SLCDPM.FDUSRDATE1  |         |
| User Defined Memo 1 Line 1              | 318           | 397          | 80      | 0       | M             | SLCDPM.FMUSRMEMO1  |         |
| User Defined Memo 1 Line 2              | 398           | 477          | 80      | 0       | M             | SLCDPM.FMUSRMEMO1  |         |
| User Defined Currency 1                 | 478           | 493          | 16      | 5       | N             | SLCDPM.FNUSRCUR1   |         |
| User Defined Quantity 1                 | 494           | 507          | 14      | 5       | N             | SLCDPM.FNUSRQTY1   |         |
| User Defined Code                       | 508           | 514          | 7       | 0       | C             | SLCDPM.FUSERCODE   |         |
| Tax Exemption Number                    | 515           | 529          | 15      | 0       | C             | SLCDPM.FTAXEXEMPT  |         |
| Sold-To Company Name                    | 530           | 564          | 35      | 0       | C             | SOMAST.FCOMPANY    |         |
| Sold-To Address Key                     | 565           | 570          | 6       | 0       | C             | SOMAST.FSOLDADDR   |         |
| Trading Partner Sold-To Address Key\*   | 571           | 590          | 20      | 0       | C             | XADDREDI.FCEDIADDR |         |
| Sold-To Address Line 1                  | 591           | 670          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| Sold-To Address Line 2                  | 671           | 750          | 80      | 0       | M             | SOMAST.FMSTREET    |         |
| Sold-To City                            | 751           | 770          | 20      | 0       | C             | SOMAST.FCITY       |         |
| Sold-To State                           | 771           | 790          | 20      | 0       | C             | SOMAST.FSTATE      |         |
| Sold-to Zip Code                        | 791           | 800          | 10      | 0       | C             | SOMAST.FZIP        |         |
| Sold-To Country                         | 801           | 825          | 25      | 0       | C             | SOMAST.FCOUNTRY    |         |
| Contact First Name                      | 826           | 840          | 15      | 0       | C             | SOMAST.FCFNAME     |         |
| Contact Last Name                       | 841           | 870          | 30      | 0       | C             | SOMAST.FCONTACT    |         |
| Sold-To Phone Number                    | 871           | 890          | 20      | 0       | C             | SOMAST.FPHONE      |         |
| Sold-To Fax Number                      | 891           | 910          | 20      | 0       | C             | SOMAST.FFAX        |         |
| Sales Order Number                      | 911           | 920          | 10      | 0       | C             | SOMAST.FSONO       |         |
| Sales Order Revision                    | 921           | 923          | 3       | 0       | C             | SOMAST.FSOREV      |         |
| Sales Order Name                        | 924           | 958          | 35      | 0       | C             |                    |         |
| Order Date                              | 959           | 966          | 8       | 0       | D             | SOMAST.FORDERDATE  |         |
| Due Date                                | 967           | 974          | 8       | 0       | D             | SOMAST.FDUEDATE    |         |
| Acknowledgement Date                    | 975           | 982          | 8       | 0       | D             | SOMAST.FACKDATE    |         |
| Acknowledgement Memo Line 1             | 983           | 1062         | 80      | 0       | M             | SOMAST.FACKMEMO    |         |
| Acknowledgement Memo Line 2             | 1063          | 1142         | 80      | 0       | M             | SOMAST.FACKMEMO    |         |
| Cancelled Date                          | 1143          | 1150         | 8       | 0       | D             | SOMAST.FCANC_DT    |         |
| Closed Date                             | 1151          | 1158         | 8       | 0       | D             | SOMAST.FCLOS_DT    |         |
| Discount Rate                           | 1159          | 1165         | 7       | 3       | N             | SOMAST.FDISRATE    |         |
| Order Date Revision                     | 1166          | 1173         | 8       | 0       | D             | SOMAST.FORDREVDT   |         |
| Salesperson                             | 1174          | 1176         | 3       | 0       | C             | SOMAST.FSOLDBY     |         |
| Salespersons Last Name                  | 1177          | 1201         | 25      | 0       | C             | SLSPNS.FLASTNAME   |         |
| Sales Person Notes Line 1               | 1202          | 1281         | 80      | 0       | M             | SLSPNS.FMNOTES     |         |
| Sales Person Notes Line 2               | 1282          | 1361         | 80      | 0       | M             | SLSPNS.FMNOTES     |         |
| Sales Order Coordinator                 | 1362          | 1364         | 3       | 0       | C             | SOMAST.FSOCOORD    |         |
| Sales Order Transaction Currency        | 1365          | 1367         | 3       | 0       | C             | SOMAST.FCCURID     |         |
| Ship To Address Key                     | 1368          | 1373         | 6       | 0       | C             | SOMAST.FSHPTOADDR  |         |
| Trading Partner Ship-To Address Key\*   | 1374          | 1393         | 20      | 0       | C             | XADDREDI.FCEDIADDR |         |
| Ship Via                                | 1394          | 1413         | 20      | 0       | C             | SOMAST.FSHIPVIA    |         |
| Ship-To Company                         | 1414          | 1448         | 35      | 0       | C             | SYADDR.FCCOMPANY   |         |
| Ship-To Address Line 1                  | 1449          | 1528         | 80      | 0       | M             | SYADDR.FMSTREET    |         |
| Ship-To Address Line 2                  | 1529          | 1608         | 80      | 0       | M             | SYADDR.FMSTREET    |         |
| Ship-To City                            | 1609          | 1628         | 20      | 0       | C             | SYADDR.FCCITY      |         |
| Ship-To State                           | 1629          | 1648         | 20      | 0       | C             | SYADDR.FCSTATE     |         |
| Ship-To Zip                             | 1649          | 1658         | 10      | 0       | C             | SYADDR.FCZIP       |         |
| Ship-To Country                         | 1659          | 1683         | 25      | 0       | C             | SYADDR.FCCOUNTRY   |         |
| Ship-To Phone                           | 1684          | 1703         | 20      | 0       | C             | SYADDR.FCPHONE     |         |
| Ship-To Fax Number                      | 1704          | 1723         | 20      | 0       | C             | SYADDR.FCFAX       |         |
| Ship-To Email Address                   | 1724          | 1783         | 60      | 0       | C             | SYADDR.FCEMAIL     |         |
| Ship-To Contact First Name              | 1784          | 1798         | 15      | 0       | C             | SYADDR.FCFNAME     |         |
| Ship-To Contact Last Name               | 1799          | 1818         | 20      | 0       | C             | SYADDR.FCLNAME     |         |
| Payment Type                            | 1819          | 1819         | 1       | 0       | C             | SOMAST.FPAYTYPE    |         |
| Terms For A Cash Payment                | 1820          | 1823         | 4       | 0       | C             | SOMAST.FTERM       |         |
| Terms Description                       | 1824          | 1843         | 20      | 0       | C             | UTTERMS.FCDESCR    |         |
| Percent Discount after 1st Days         | 1844          | 1850         | 7       | 3       | N             | UTTERMS.FNPERCENT  |         |
| Grace Allowed                           | 1851          | 1854         | 4       | 0       | I             | UTTERMS.FNGRACE    |         |
| Final Days Due                          | 1855          | 1858         | 4       | 0       | I             | UTTERMS.FNDUEDAYS  |         |
| Days for which the 1st Discount Applies | 1859          | 1862         | 4       | 0       | I             | UTTERMS.FNDAYS     |         |
| 2nd Percent Discount                    | 1863          | 1869         | 7       | 3       | N             | UTTERMS.FN2NDPER   |         |
| 2nd Days Due                            | 1870          | 1873         | 4       | 0       | I             | UTTERMS.FN2NDDAYS  |         |
| Terms Notes Line 1                      | 1874          | 1953         | 80      | 0       | M             | UTTERMS.FMNOTES    |         |
| Terms Notes Line 2                      | 1954          | 2033         | 80      | 0       | M             | UTTERMS.FMNOTES    |         |
| Deposit Received                        | 2034          | 2049         | 16      | 5       | N             | SOMAST.FNDPSTRCVD  |         |
| Deposit Required                        | 2050          | 2065         | 16      | 5       | N             | SOMAST.FNDPSTRQD   |         |
| Sales Tax Code                          | 2066          | 2068         | 3       | 0       | C             | SOMAST.FTAXCODE    |         |
| Sales Tax Rate                          | 2069          | 2073         | 5       | 3       | N             | SOMAST.FTAXRATE    |         |
| Freight on Board Point                  | 2074          | 2093         | 20      | 0       | C             | SOMAST.FFOB        |         |
| Sales Order Status                      | 2094          | 2094         | 1       | 0       | C             | SOMAST.FSTATUS     |         |
| User Defined Character 1                | 2095          | 2114         | 20      | 0       | C             | SOMAST.FCUSRCHR1   |         |
| User Defined Character 2                | 2115          | 2154         | 40      | 0       | C             | SOMAST.FCUSRCHR2   |         |
| User Defined Character 3                | 2155          | 2194         | 40      | 0       | C             | SOMAST.FCUSRCHR3   |         |
| User Defined Quantity 1                 | 2195          | 2208         | 14      | 5       | N             | SOMAST.FNUSRQTY1   |         |
| User Defined Currency 1                 | 2209          | 2224         | 16      | 5       | N             | SOMAST.FNUSRCUR1   |         |
| User Defined Date 1                     | 2225          | 2232         | 8       | 0       | D             | SOMAST.FDUSRDATE1  |         |
| User Defined Memo 1 Line 1              | 2233          | 2312         | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| User Defined Memo 1 Line 2              | 2313          | 2392         | 80      | 0       | M             | SOMAST.FMUSRMEMO1  |         |
| Remit Company Name                      | 2393          | 2427         | 35      | 0       | C             | UTCOMP.FCOMPANY    |         |
| Remit Address Line 1                    | 2428          | 2507         | 80      | 0       | M             | UTCOMP.FMADDRESS   |         |
| Remit Address Line 2                    | 2508          | 2587         | 80      | 0       | M             | UTCOMP.FMADDRESS   |         |
| Remit City                              | 2588          | 2607         | 20      | 0       | C             | UTCOMP.FCITY       |         |
| Remit State                             | 2608          | 2610         | 3       | 0       | C             | UTCOMP.FSTATE      |         |
| Remit Zip Code                          | 2611          | 2620         | 10      | 0       | C             | UTCOMP.FZIP        |         |
| Remit Country                           | 2621          | 2645         | 25      | 0       | C             | UTCOMP.FCOUNTRY    |         |
| Remit Telephone Number                  | 2646          | 2665         | 20      | 0       | C             | UTCOMP.FPHONE      |         |
| Remit Fax Number                        | 2666          | 2685         | 20      | 0       | C             | UTCOMP.FCFAX       |         |
| Bill-To Company Name                    | 2686          | 2720         | 35      | 0       | C             | SLCDPM.FCOMPANY    |         |
| Bill-To Street Address Line 1           | 2722          | 2801         | 80      | 0       | M             | SLCDPM.FMSTREET    |         |
| Bill-To Street Address Line 2           | 2803          | 2882         | 80      | 0       | M             | SLCDPM.FMSTREET    |         |
| Bill-To City                            | 2884          | 2903         | 20      | 0       | C             | SLCDPM.FCITY       |         |
| Bill-To State                           | 2905          | 2924         | 20      | 0       | C             | SLCDPM.FSTATE      |         |
| Bill-To Zip Code                        | 2926          | 2935         | 10      | 0       | C             | SLCDPM.FZIP        |         |
| Bill-To Country                         | 2937          | 2961         | 25      | 0       | C             | SLCDPM.FCOUNTRY    |         |
| Contact First Name                      | 2963          | 2977         | 15      | 0       | C             | SLCDPM.FCFNAME     |         |
| Contact Last Name                       | 2979          | 2998         | 20      | 0       | C             | SLCDPM.FCONTACT    |         |
| Contact Phone Number                    | 3000          | 3019         | 20      | 0       | C             | SLCDPM.FPHONE      |         |
| Contact Fax Number                      | 3021          | 3040         | 20      | 0       | C             | SLCDPM.FFAX        |         |
| Bill To Address Key                     | 3041          | 3046         | 6       | 0       | C             | SOMAST.FBILLADDR   |         |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 855-BG2

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**    | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|--------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'BG2' | 1             | 3            | 3        | 0        | C             | 'BG2'             | X        |
| EDI Character 1          | 4             | 23           | 20       | 0        | C             | SOHDR.FCEDICHAR1  |          |
| EDI Character 2          | 24            | 43           | 20       | 0        | C             | SOHDR.FCEDICHAR2  |          |
| EDI Character 3          | 44            | 63           | 20       | 0        | C             | SOHDR.FCEDICHAR3  |          |
| EDI Character 4          | 64            | 83           | 20       | 0        | C             | SOHDR.FCEDICHAR4  |          |
| EDI Character 5          | 84            | 103          | 20       | 0        | C             | SOHDR.FCEDICHAR5  |          |
| EDI Character 6          | 104           | 123          | 20       | 0        | C             | SOHDR.FCEDICHAR6  |          |
| EDI Character 7          | 124           | 143          | 20       | 0        | C             | SOHDR.FCEDICHAR7  |          |
| EDI Character 8          | 144           | 163          | 20       | 0        | C             | SOHDR.FCEDICHAR8  |          |
| EDI Character 9          | 164           | 183          | 20       | 0        | C             | SOHDR.FCEDICHAR9  |          |
| EDI Character 10         | 184           | 203          | 20       | 0        | C             | SOHDR.FCEDICHAR10 |          |
| EDI Character 11         | 204           | 223          | 20       | 0        | C             | SOHDR.FCEDICHAR11 |          |
| EDI Character 12         | 224           | 243          | 20       | 0        | C             | SOHDR.FCEDICHAR12 |          |
| EDI Character 13         | 244           | 263          | 20       | 0        | C             | SOHDR.FCEDICHAR13 |          |
| EDI Character 14         | 264           | 283          | 20       | 0        | C             | SOHDR.FCEDICHAR14 |          |
| EDI Character 15         | 284           | 303          | 20       | 0        | C             | SOHDR.FCEDICHAR15 |          |
| EDI Date 1               | 304           | 311          | 8        | 0        | D             | SOHDR.FCEDIDATE1  |          |
| EDI Date 2               | 312           | 319          | 8        | 0        | D             | SOHDR.FCEDIDATE2  |          |
| EDI Date 3               | 320           | 327          | 8        | 0        | D             | SOHDR.FCEDIDATE3  |          |
| EDI Date 4               | 328           | 335          | 8        | 0        | D             | SOHDR.FCEDIDATE4  |          |
| EDI Date 5               | 336           | 343          | 8        | 0        | D             | SOHDR.FCEDIDATE5  |          |
| EDI Date 6               | 344           | 351          | 8        | 0        | D             | SOHDR.FCEDIDATE6  |          |
| EDI Date 7               | 352           | 359          | 8        | 0        | D             | SOHDR.FCEDIDATE7  |          |
| EDI Date 8               | 360           | 367          | 8        | 0        | D             | SOHDR.FCEDIDATE8  |          |
| EDI Date 9               | 368           | 375          | 8        | 0        | D             | SOHDR.FCEDIDATE9  |          |
| EDI Date 10              | 376           | 383          | 8        | 0        | D             | SOHDR.FCEDIDATE10 |          |
| EDI Date 11              | 384           | 391          | 8        | 0        | D             | SOHDR.FCEDIDATE11 |          |
| EDI Date 12              | 392           | 399          | 8        | 0        | D             | SOHDR.FCEDIDATE12 |          |
| EDI Date 13              | 400           | 407          | 8        | 0        | D             | SOHDR.FCEDIDATE13 |          |
| EDI Date 14              | 408           | 415          | 8        | 0        | D             | SOHDR.FCEDIDATE14 |          |
| EDI Date 15              | 416           | 423          | 8        | 0        | D             | SOHDR.FCEDIDATE15 |          |
| EDI Numeric 1            | 424           | 439          | 16       | 5        | N             | SOHDR.FCEDINUM1   |          |
| EDI Numeric 2            | 440           | 455          | 16       | 5        | N             | SOHDR.FCEDINUM2   |          |
| EDI Numeric 3            | 456           | 471          | 16       | 5        | N             | SOHDR.FCEDINUM3   |          |
| EDI Numeric 4            | 472           | 487          | 16       | 5        | N             | SOHDR.FCEDINUM4   |          |
| EDI Numeric 5            | 488           | 503          | 16       | 5        | N             | SOHDR.FCEDINUM5   |          |
| EDI Numeric 6            | 504           | 519          | 16       | 5        | N             | SOHDR.FCEDINUM6   |          |
| EDI Numeric 7            | 520           | 535          | 16       | 5        | N             | SOHDR.FCEDINUM7   |          |
| EDI Numeric 8            | 536           | 551          | 16       | 5        | N             | SOHDR.FCEDINUM8   |          |
| EDI Numeric 9            | 552           | 567          | 16       | 5        | N             | SOHDR.FCEDINUM9   |          |
| EDI Numeric 10           | 568           | 583          | 16       | 5        | N             | SOHDR.FCEDINUM10  |          |
| EDI Memo 1 Line 1        | 584           | 663          | 80       | 0        | M             | SOHDR.FCEDIMEMO1  |          |
| EDI Memo 1 Line 2        | 664           | 743          | 80       | 0        | M             | SOHDR.FCEDIMEMO1  |          |
| EDI Memo 2 Line 1        | 744           | 823          | 80       | 0        | M             | SOHDR.FCEDIMEMO2  |          |
| EDI Memo 2 Line 2        | 824           | 903          | 80       | 0        | M             | SOHDR.FCEDIMEMO2  |          |
| Available for future use | 904           | 4096         |          |          |               |                   |          |

### 855-HML

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'HML'     | 1             | 3            | 3        | 0        | C             | 'HML'             | X        |
| Sales Order Acknowledgement  | 4             | 83           | 80       | 0        | M             | SOMAST.FACKMEMO   |          |
| Sales Order User Defined     | 84            | 163          | 80       | 0        | M             | SOMAST.FMUSRMEMO1 |          |
| Sales Order EDI Header 1     | 164           | 243          | 80       | 0        | M             | SOHDR.FCEDIMEMO1  |          |
| Sales Order EDI Header 2     | 244           | 323          | 80       | 0        | M             | SOHDR.FCEDIMEMO2  |          |
| Customer Master Notes        | 324           | 403          | 80       | 0        | M             | SLCDPM.FMNOTES    |          |
| Customer Master User Defined | 404           | 483          | 80       | 0        | M             | SLCDPM.FMUSRMEMO1 |          |
| Sales Person Notes           | 484           | 563          | 80       | 0        | M             | SLSPNS.FMNOTES    |          |
| Terms Notes                  | 564           | 643          | 80       | 0        | M             | UTTERMS.FMNOTES   |          |
| Available for future use     | 644           | 4096         |          |          |               |                   |          |

### 855-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                 | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**    |  **Req** |
|---------------------------------------|---------------|--------------|----------|----------|---------------|--------------------|----------|
| Header Record Tag: 'DET'              | 1             | 3            | 3        | 0        | C             | 'DET'              | X        |
| Part Number                           | 4             | 28           | 25       | 0        | C             | SOITEM.FPARTNO     | X        |
| Part Revision                         | 29            | 31           | 3        | 0        | C             | SOITEM.FPARTREV    |          |
| Item Number                           | 32            | 34           | 3        | 0        | C             | SOITEM.FENUMBER    |          |
| Next Item Number                      | 35            | 38           | 4        | 0        | C             | SOITEM.FNEXTINUM   |          |
| Next Release Number                   | 39            | 41           | 3        | 0        | C             | SOITEM.FNEXTREL    |          |
| Quantity                              | 42            | 57           | 16       | 5        | N             | SOITEM.FQUANTITY   | X        |
| Unit of Measure                       | 58            | 60           | 3        | 0        | C             | SOITEM.FMEASURE    |          |
| Source                                | 61            | 61           | 1        | 0        | C             | SOITEM.FSOURCE     |          |
| Part Number Description Line 1        | 62            | 141          | 80       | 0        | M             | SOITEM.FDESC       |          |
| Part Number Description Line 2        | 142           | 221          | 80       | 0        | M             | SOITEM.FDESC       |          |
| Product Class                         | 222           | 225          | 4        | 0        | C             | SOITEM.FPRODCL     |          |
| Group Code                            | 226           | 231          | 6        | 0        | C             | SOITEM.FGROUP      |          |
| Unit Price                            | 232           | 247          | 16       | 5        | N             | SORELS.FUNETPRICE  |          |
| Customer Part Number                  | 248           | 272          | 25       | 0        | C             | SOITEM.FCUSTPART   |          |
| Customer Part Revision                | 273           | 275          | 3        | 0        | C             | SOITEM.FCUSTPTREV  |          |
| Part Number Description Line 1        | 276           | 355          | 80       | 0        | M             | SOITEM.FDESCMEMO   |          |
| Part Number Description Line 2        | 356           | 435          | 80       | 0        | M             | SOITEM.FDESCMEMO   |          |
| Delivery Notes Line 1                 | 436           | 515          | 80       | 0        | M             | SORELS.FDELIVERY   |          |
| Delivery Notes Line 2                 | 516           | 595          | 80       | 0        | M             | SORELS.FDELIVERY   |          |
| Order Billing Type                    | 596           | 598          | 3        | 0        | C             | SOITEM.FORDERTYPE  |          |
| Use Standard BOMs and Routings        | 599           | 599          | 1        | 0        | L             | SOITEM.FSTANDPART  |          |
| Lot/Serial Number Required            | 600           | 600          | 1        | 0        | L             | SOITEM.FLLOTREQD   |          |
| Extent of Lot Control                 | 601           | 601          | 1        | 0        | C             | SOITEM.FCLOTEXT    |          |
| Taxable                               | 602           | 602          | 1        | 0        | L             | SORELS.FLISTAXABL  |          |
| Price Schedule Code                   | 603           | 608          | 6        | 0        | C             | SOITEM.FSCHECODE   |          |
| Ship-To Address Key                   | 609           | 614          | 6        | 0        | C             | SORELS.FSHPTOADDR  |          |
| Trading Partner Ship-To Address Key\* | 615           | 634          | 20       | 0        | C             | XADDREDI.FCEDIADDR |          |
| Due Date                              | 635           | 642          | 8        | 0        | D             | SOITEM.FDUEDATE    |          |
| Close within minimum %                | 643           | 653          | 11       | 5        | N             | SOITEM.FNUNDER     |          |
| Close within maximum %                | 654           | 664          | 11       | 5        | N             | SOITEM.FNOVER      |          |
| Multi-Release                         | 665           | 665          | 1        | 0        | L             | SOITEM.FMULTIPLE   |          |
| Ship Item                             | 666           | 666          | 1        | 0        | L             | SOITEM.FSHIPITEM   |          |
| Split Ship                            | 667           | 667          | 1        | 0        | L             | SORELS.FSPLITSHP   |          |
| Create Jobs                           | 668           | 668          | 1        | 0        | L             | SOITEM.FAUTOCREAT  |          |
| Print Memo                            | 669           | 669          | 1        | 0        | L             | SOITEM.FPRINTMEMO  |          |
| Ship Early                            | 670           | 670          | 1        | 0        | L             | SORELS.FSHPBEFDUE  |          |
| CTP Approved                          | 671           | 671          | 1        | 0        | L             | SORELS.FLATP       |          |
| Cross Reference Part Number           | 672           | 696          | 25       | 0        | C             | INCROS.FCROSSPART  |          |
| Cross Reference Part Revision         | 697           | 699          | 3        | 0        | C             | INCROS.FCROSSREV   |          |
| Group Code Number                     | 700           | 705          | 6        | 0        | C             | INGRPC.FGC_NUMBER  |          |
| Group Code Description                | 706           | 835          | 130      | 0        | C             | INGRPC.FPC_DESC    |          |
| Product Class Name                    | 836           | 847          | 12       | 0        | C             | INPROD.FPC_NAME    |          |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 855-DML

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                 | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|---------------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'DML'              | 1             | 3            | 3        | 0        | C             | 'DML'             | X        |
| Sales Order Item Description          | 4             | 83           | 80       | 0        | M             | SOITEM.FDESC      |          |
| Sales Order Customer Part Description | 84            | 163          | 80       | 0        | M             | SOITEM.FDESCMEMO  |          |
| Salres Order Release Delivery         | 164           | 243          | 80       | 0        | M             | SORELS.FDELIVERY  |          |
| Sales Order EDI Item 1                | 244           | 323          | 80       | 0        | M             | SODET.FCEDIMEMO1  |          |
| Sales Order EDI Item 2                | 324           | 403          | 80       | 0        | M             | SODET.FCEDIMEMO2  |          |
| Item Master Comment                   | 404           | 483          | 80       | 0        | M             | INMAST.FCOMMENT   |          |
| Item Master User Defined              | 484           | 563          | 80       | 0        | M             | INMAST.FMUSRMEMO1 |          |
| Available for future use              | 564           | 4096         |          |          |               |                   |          |

### 855-REL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                 | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**    |  **Req** |
|---------------------------------------|---------------|--------------|----------|----------|---------------|--------------------|----------|
| Header Record Tag: 'REL'              | 1             | 3            | 3        | 0        | C             | 'REL'              | X        |
| Ship-To Address Key                   | 4             | 9            | 6        | 0        | C             | SORELS.FSHPTOADDR  |          |
| Trading Partner Ship-To Address Key\* | 10            | 29           | 20       | 0        | C             | XADDREDI.FCEDIADDR |          |
| Due Date                              | 30            | 37           | 8        | 0        | D             | SORELS.FDUEDATE    |          |
| Delivery Notes Line 1                 | 38            | 117          | 80       | 0        | M             | SORELS.FDELIVERY   |          |
| Delivery Notes Line 2                 | 118           | 197          | 80       | 0        | M             | SORELS.FDELIVERY   |          |
| Taxable                               | 198           | 198          | 1        | 0        | L             | SORELS.FLISTAXABL  |          |
| Allow Split Shipments                 | 199           | 199          | 1        | 0        | L             | SORELS.FSPLITSHP   |          |
| Ship Early                            | 200           | 200          | 1        | 0        | L             | SORELS.FSHPBEFDUE  |          |
| Release Quantity                      | 201           | 214          | 14       | 5        | N             | SORELS.FORDERQTY   |          |
| Release Number                        | 215           | 217          | 3        | 0        | C             | SORELS.FRELEASE    |          |
| Unit Price                            | 218           | 233          | 16       | 5        | N             | SORELS.FUNETPRICE  |          |
| Discount                              | 234           | 249          | 16       | 5        | N             | SORELS.FDISCOUNT   |          |
| Discount Percent                      | 250           | 265          | 16       | 5        | N             | SORELS.FDISCPCT    |          |
| Invoiced Quantity                     | 266           | 279          | 14       | 5        | N             | SORELS.FINVQTY     |          |
| Invoiced Amount                       | 280           | 293          | 14       | 5        | N             | SORELS.FINVAMOUNT  |          |
| Last Shipped Date                     | 294           | 301          | 8        | 0        | D             | SORELS.FLSHIPDATE  |          |
| Stock Quantity Shipped (Confirmed)    | 302           | 315          | 14       | 5        | N             | SORELS.FSHIPBOOK   |          |
| Buy Quantity Shipped (Confirmed)      | 316           | 329          | 14       | 5        | N             | SORELS.FSHIPBUY    |          |
| Make Quantity Shipped (Confirmed)     | 330           | 343          | 14       | 5        | N             | SORELS.FSHIPMAKE   |          |
| Stock Quantity Shipped (Unconfirmed)  | 344           | 357          | 14       | 5        | N             | SORELS.FTOSHPBOOK  |          |
| Buy Quantity Shipped (Unconfirmed)    | 358           | 371          | 14       | 5        | N             | SORELS.FTOSHPBUY   |          |
| Make Quantity Shipped (Unconfirmed)   | 372           | 385          | 14       | 5        | N             | SORELS.FTOSHPMAKE  |          |
| Available for future use              | 386           | 4094         |          |          |               |                    |          |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 855-RML

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**  |  **Req** |
|------------------------------|---------------|--------------|----------|----------|---------------|------------------|----------|
| Header Record Tag: 'RML'     | 1             | 3            | 3        | 0        | C M           | 'RML'            | X        |
| Sales Order Release Delivery | 4             | 83           | 80       | 0        |               | SORELS.FDELIVERY |          |
| Available for future use     | 84            | 4096         |          |          |               |                  |          |

### 855-SUM

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage** |  **Req** |
|------------------------------|---------------|--------------|----------|----------|---------------|-----------------|----------|
| Summary Record Tag: 'SUM'    | 1             | 3            | 3        | 0        | C             | ‘SUM’           | X        |
| Number of Line Items         | 4             | 7            | 4        | 0        | N             | Calculated      | X        |
| Total Line Item Quantity Sum | 8             | 23           | 16       | 5        | N             | Calculated      | X        |
| Order Transaction Total      | 24            | 39           | 16       | 5        | N             | Calculated      | X        |

## 856 - Ship Notice/Manifest

Outbound 856 (Invoice) originates from the Made2Manage Shipper (SHIP) and other Made2Manage data sources. The layout of the 856 Fixed File Format is listed below. The hierarchy of each 856 transaction is single HDR system key segment. The header information is exported into a single BEG segment, a single BSN segment, and an optional HML segment. Each line item is

exported into a single DET segment with an optional DML segment. Each container is exported to an HL segment.

The 856 transactions can be exported in either Standard or Pick-n-Pack format. The Standard format has two variations, Implied and Explicit. The Standard Implied format exports the DET line item only once. The Standard Explicit exports the DET line item for each associated container. The absence of HL level information is allowed with the Standard format; however, the Pick-n-Pack format requires at least one HL segment per DET segment. The special allowance or charge information is exported into an optional SAC segment. The HML and DML segments are memo line count based.

**Standard Implied Standard Explicit Pick-n-Pack**

![](media/d3a9f33135b7fde817227ad6f482782e.png)

### 856-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**              |  **Req** |
|----------------------------------------------|---------------|--------------|----------|----------|---------------|-------------------------------|----------|
| Header Record Tag: 'HDR'                     | 1             | 3            | 3        | 0        | C             | 'HDR'                         | X        |
| Transaction Set ID (Application Alias Value) | 4             | 9            | 6        | 0        | C             | 'ASN'                         | X        |
| Receiver EDI ID (Application Code)\#         | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID              | X        |
| Test / Production (Test Mode)                | 30            | 30           | 1        | 0        | C             | 'T' = Test; 'P' = Production  | X        |
| Original / Resend                            | 31            | 31           | 1        | 0        | C             | 'O' = Original; 'R' = Resend  | X        |
| Sender EDI Qualifier                         | 32            | 33           | 2        | 0        | C             | XSETUP.FCTPQUAL               | X        |
| Sender EDI ID                                | 34            | 63           | 30       | 0        | C             | XSETUP.FCTPID                 | X        |
| Receiver EDI Qualifier                       | 64            | 65           | 2        | 0        | C             | XCUSTEDI.FCEDIQUAL            | X        |
| Receiver EDI ID                              | 66            | 95           | 30       | 0        | C             | XCUSTEDI.FCEDIID              | X        |
| EDI-XML Document Definition                  | 96            | 105          | 10       | 0        | C             | ‘M2M_856STD’ / ‘M2M\_ 856PNP’ | X        |

\# Specific EDI ID exported when populated, otherwise general EDI ID exported

### 856-BEG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                 | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**         |  **Req** |
|---------------------------------------|---------------|--------------|----------|----------|---------------|-------------------------|----------|
| Header Record Tag: 'BEG'              | 1             | 3            | 3        | 0        | C             | 'BEG'                   | X        |
| Customer Number                       | 4             | 9            | 6        | 0        | C             | SHMAST.FCNUMBER         |          |
| Trading Partner EDI ID                | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID        |          |
| Shipper Number                        | 30            | 39           | 10       | 0        | C             | SHMAST.FSHIPNO          |          |
| Sales Order Number                    | 40            | 49           | 10       | 0        | C             | SHMAST.FCSONO           |          |
| Sales Order Revision                  | 50            | 51           | 2        | 0        | C             | SHMAST.FCSOREV          |          |
| Customer Purchase Order Number        | 52            | 61           | 10       | 0        | C             | SHMAST.FCPONO           |          |
| Bill of Lading Number                 | 62            | 81           | 20       | 0        | C             | SHMAST.FBL_LADING       |          |
| Ship-To Address Key                   | 82            | 87           | 6        | 0        | C             | SHMAST.FSHPTOADDR       |          |
| Trading Partner Ship-To Address Key\* | 88            | 107          | 20       | 0        | C             | XADDREDI.FCEDIADDR      |          |
| Ship-To Company                       | 108           | 142          | 35       | 0        | C             | SHMAST.FCCOMPANY        |          |
| Ship-To Street Address Line 1         | 143           | 222          | 80       | 0        | M             | SHMAST.FMSTREET         |          |
| Ship-To Street Address Line 2         | 223           | 302          | 80       | 0        | M             | SHMAST.FMSTREET         |          |
| Ship-To City                          | 303           | 322          | 20       | 0        | C             | SHMAST.FCCITY           |          |
| Ship-To County                        | 323           | 342          | 20       | 0        | C             | SHMAST.FCCOUNTY         |          |
| Ship-To Country                       | 343           | 367          | 25       | 0        | C             | SHMAST.FCCOUNTRY        |          |
| Ship-To State                         | 368           | 387          | 20       | 0        | C             | SHMAST.FCSTATE          |          |
| Ship-To Postal Code                   | 388           | 397          | 10       | 0        | C             | SHMAST.FCZIP            |          |
| Contact First Name                    | 398           | 412          | 15       | 0        | C             | SHMAST.FCFNAME          |          |
| Contact Last Name                     | 413           | 432          | 20       | 0        | C             | SHMAST.FCLNAME          |          |
| Contact Phone Number                  | 433           | 452          | 20       | 0        | C             | SHMAST.FCPHONE          |          |
| Contact Fax Number                    | 453           | 472          | 20       | 0        | C             | SHMAST.FCFAX            |          |
| Shipper Comment Line 1                | 473           | 552          | 80       | 0        | M             | SHMAST.FMREFERENC       |          |
| Shipper Comment Line 2                | 553           | 632          | 80       | 0        | M             | SHMAST.FMREFERENC       |          |
| Ship List Memo Line 1                 | 633           | 712          | 80       | 0        | M             | SHMAST.FSHIPMEMO        |          |
| Ship List Memo Line 2                 | 713           | 792          | 80       | 0        | M             | SHMAST.FSHIPMEMO        |          |
| Ship Date                             | 793           | 800          | 8        | 0        | D             | SHMAST.FSHIPDATE        |          |
| Ship Via                              | 801           | 820          | 20       | 0        | C             | SHMAST.FSHIPVIA         |          |
| Weight                                | 821           | 831          | 11       | 4        | N             | SHMASTTRACKER.FSHIPWGHT |          |
| Shipper Type                          | 832           | 833          | 2        | 0        | C             | SHMAST.FTYPE            |          |
| Confirmation Date                     | 834           | 841          | 8        | 0        | D             | SHMAST.START            |          |
| Freight on Board                      | 842           | 861          | 20       | 0        | C             | SHMAST.FFOB             |          |
| Freight Amount                        | 862           | 877          | 16       | 5        | N             | SHMASTTRACKER.FFRTAMT   |          |
| Invoiced Flag                         | 878           | 878          | 1        | 0        | L             | SHMAST.FLISINV          |          |
| Number of Boxes                       | 879           | 883          | 5        | 0        | N             | SHMASTTRACKER.FNO_BOXES |          |
| Seal Number                           | 884           | 891          | 8        | 0        | C             | BOLMAST.FCSEALNO        |          |
| Pro Number                            | 892           | 926          | 35       | 0        | C             | BOLMAST.FCPRONO         |          |
| Carrier                               | 927           | 936          | 10       | 0        | C             | BOLMAST.FCCARRIER       |          |
| Appointment Number                    | 937           | 944          | 8        | 0        | C             | BOLMAST.FCAPPTNO        |          |
| Carrier Trailer Number                | 945           | 954          | 10       | 0        | C             | BOLMAST.FCTRLRNO        |          |
| Vendor Ship Point                     | 955           | 964          | 10       | 0        | C             | BOLMAST.FCSHPPOINT      |          |
| Ship Date                             | 965           | 972          | 8        | 0        | D             | BOLMAST.FDSHPDATE       |          |
| Prepaid                               | 973           | 973          | 1        | 0        | L             | BOLMAST.FLPREPAID       |          |
| BOL Freight                           | 974           | 989          | 16       | 5        | N             | BOLMAST.FNFREIGHT       |          |
| BOL Collect Amount                    | 990           | 1005         | 16       | 5        | N             | BOLMAST.FNCOLLECT       |          |
| BOL Comment Line 1                    | 1006          | 1085         | 80       | 0        | M             | BOLMAST.FMCOMMENT       |          |
| BOL Comment Line 2                    | 1086          | 1165         | 80       | 0        | M             | BOLMAST.FMCOMMENT       |          |
| BOL Received Memo Line 1              | 1166          | 1245         | 80       | 0        | M             | BOLMAST.FMRECEIVED      |          |
| BOL Received Memo Line 2              | 1246          | 1325         | 80       | 0        | M             | BOLMAST.FMRECEIVED      |          |
| Available for future use              | 1326          | 1349         | 24       | 0        |               |                         |          |
| Sales Order Coordinator               | 1350          | 1352         | 3        | 0        | C             | SOMAST.FSOCOORD         |          |
| Sales Order Revision Date             | 1353          | 1360         | 8        | 0        | D             | SOMAST.FORDREVDT        |          |
| Sales Order Sales Code                | 1361          | 1367         | 7        | 0        | C             | SOMAST.FSALESCODE       |          |
| Sales Order User Defined Code         | 1368          | 1374         | 7        | 0        | C             | SOMAST.FUSERCODE        |          |
| Sales Order Due Date                  | 1375          | 1382         | 8        | 0        | D             | SOMAST.FDUEDATE         |          |
| Sales Order Order Date                | 1383          | 1390         | 8        | 0        | D             | SOMAST.FORDERDATE       |          |
| Sales Order Description               | 1391          | 1425         | 35       | 0        | C             | SOMAST.FORDERNAME       |          |
| Sales Order User Defined Character 1  | 1426          | 1445         | 20       | 0        | C             | SOMAST.FCUSRCHR1        |          |
| Sales Order User Defined Character 2  | 1446          | 1485         | 40       | 0        | C             | SOMAST.FCUSRCHR2        |          |
| Sales Order User Defined Character 3  | 1486          | 1525         | 40       | 0        | C             | SOMAST.FCUSRCHR3        |          |
| Customer Purchase Order Number        | 1526          | 1545         | 20       | 0        | C             | SOMAST.FCUSTPONO        |          |
| Sales Order User Defined Date 1       | 1546          | 1553         | 8        | 0        | D             | SOMAST.FDUSRDATE1       |          |
| Sales Order User Defined Memo Line 1  | 1554          | 1633         | 80       | 0        | M             | SOMAST.FMUSRMEMO1       |          |
| Sales Order User Defined Memo Line 2  | 1634          | 1713         | 80       | 0        | M             | SOMAST.FMUSRMEMO1       |          |
| Sales Order User Defined Currency 1   | 1714          | 1729         | 16       | 5        | N             | SOMAST.FNUSRCUR1        |          |
| Sales Order User Defined Quantity 1   | 1730          | 1743         | 14       | 5        | N             | SOMAST.FNUSRQTY1        |          |
| Sold-To Address Key                   | 1744          | 1749         | 6        | 0        | C             | SOMAST.FSOLDADDR        |          |
| Trading Partner Sold-To Address Key\* | 1750          | 1769         | 20       | 0        | C             | XADDREDI.FCEDIADDR      |          |
| Sold-To Company                       | 1770          | 1804         | 35       | 0        | C             | SOMAST.FCOMPANY         |          |
| Sold-To Street Address Line 1         | 1805          | 1964         | 80       | 0        | M             | SOMAST.FMSTREET         |          |
| Sold-To Street Address Line 2         | 1885          | 1964         | 80       | 0        | M             | SOMAST.FMSTREET         |          |
| Sold-To City                          | 1965          | 1984         | 20       | 0        | C             | SOMAST.FCITY            |          |
| Sold-To State                         | 1985          | 2004         | 20       | 0        | C             | SOMAST.FSTATE           |          |
| Sold-To Country                       | 2005          | 2029         | 25       | 0        | C             | SOMAST.FCOUNTRY         |          |
| Sold-To Zip                           | 2030          | 2039         | 10       | 0        | C             | SOMAST.FZIP             |          |
| Tracking Number Line 1                | 2040          | 2119         | 80       | 0        | M             | SHMASTTRACKER.FMTRCKNO  |          |
| Tracking Number Line 2                | 2120          | 2199         | 80       | 0        | M             | SHMASTTRACKER.FMTRCKNO  |          |
| Ship Via Display Value                | 2200          | 2279         | 80       | 0        | C             | SHMAST.FSHIPVIA         |          |
| BOL Appointment Date                  | 2280          | 2293         | 14       | 0        | T             | BOLMAST.FTAPPT          |          |
| BOL Arrival Date                      | 2294          | 2307         | 14       | 0        | T             | BOLMAST.FTARRIVAL       |          |
| BOL Leave Date                        | 2308          | 2321         | 14       | 0        | T             | BOLMAST.FTLEAVE         |          |
| SCAC Code                             | 2322          | 2321         | 20       | 0        | C             | XSCAC.FCSCAC            |          |
| SCAC Carrier Name                     | 2341          | 2540         | 200      | 0        | C             | XSCAC.FCCARRIER         |          |
| Available for future use              | 2541          | 4080         |          |          |               |                         |          |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 856-BSN

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with O are obsolete.

| **Field Description**                   | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**                 |  **Req** |
|-----------------------------------------|---------------|--------------|----------|----------|---------------|----------------------------------|----------|
| Header Record Tag: 'BSN'                | 1             | 3            | 3        | 0        | C             | 'BSN'                            | X        |
| Invoice Number                          | 4             | 23           | 20       | 0        | C             | ARMAST.FCINVOICE                 |          |
| Bill-To Street Address Line 1           | 24            | 103          | 80       | 0        | M             | ARMAST.FMBSTREET                 |          |
| Bill-To Street Address Line 2           | 104           | 183          | 80       | 0        | M             | ARMAST.FMBSTREET                 |          |
| Bill-To City                            | 184           | 203          | 20       | 0        | C             | ARMAST.FBCITY                    |          |
| Bill-To State                           | 204           | 223          | 20       | 0        | C             | ARMAST.FBSTATE                   |          |
| Bill-To Country                         | 224           | 248          | 25       | 0        | C             | ARMAST.FBCOUNTRY                 |          |
| Bill-To Zip Code                        | 249           | 258          | 10       | 0        | C             | ARMAST.FBZIP                     |          |
| User Defined Character 1                | 259           | 278          | 20       | 0        | C             | SLCDPM.FCUSRCHR1                 |          |
| User Defined Character 2                | 279           | 318          | 40       | 0        | C             | SLCDPM.FCUSRCHR2                 |          |
| User Defined Character 3                | 319           | 358          | 40       | 0        | C             | SLCDPM.FCUSRCHR3                 |          |
| User Defined Date 1                     | 359           | 366          | 8        | 0        | D             | SLCDPM.FDUSRDATE1                |          |
| User Defined Memo Line 1                | 367           | 446          | 80       | 0        | M             | SLCDPM.FMUSRMEMO1                |          |
| User Defined Memo Line 2                | 447           | 526          | 80       | 0        | M             | SLCDPM.FMUSRMEMO1                |          |
| User Defined Currency 1                 | 527           | 542          | 16       | 5        | N             | SLCDPM.FNUSRCUR1                 |          |
| User Defined Quantity 1                 | 543           | 556          | 14       | 5        | N             | SLCDPM.FNUSRQTY1                 |          |
| User Defined Code                       | 557           | 563          | 7        | 0        | C             | SLCDPM.FUSERCODE                 |          |
| Tax Exemption Number                    | 564           | 578          | 15       | 0        | C             | SLCDPM.FTAXEXEMPT                |          |
| Sales Person ID                         | 579           | 581          | 3        | 0        | C             | ARMAST.FSALESPN                  |          |
| Sales Person Last Name                  | 582           | 606          | 25       | 0        | C             | SLSPNS.FLASTNAME                 |          |
| Sales Person Notes Line 1               | 607           | 686          | 80       | 0        | M             | SLSPNS.FMNOTES                   |          |
| Sales Person Notes Line 2               | 687           | 766          | 80       | 0        | M             | SLSPNS.FMNOTES                   |          |
| Invoice Type Code                       | 767           | 767          | 1        | 0        | C             | ARMAST.FINVTYPE                  |          |
| Invoice Date                            | 768           | 775          | 8        | 0        | D             | ARMAST.FINVDATE                  |          |
| Invoice Due Date                        | 776           | 783          | 8        | 0        | D             | ARMAST.FDUEDATE                  |          |
| Invoice Amount                          | 784           | 799          | 16       | 4        | Y             | ARMAST.FNAMOUNT                  |          |
| Credits for Advanced Prepayments        | 800           | 815          | 16       | 4        | Y             | ARMAST.FNCREDITS                 |          |
| Finance Charges                         | 816           | 831          | 16       | 4        | Y             | ARMAST.FNFINCHG                  |          |
| Goods Total                             | 832           | 847          | 16       | 4        | Y             | ARMAST.FNGOODSAMT                |          |
| Invoice Discount Rate                   | 848           | 857          | 10       | 5        | N             | ARMAST.FNINVDISRT                |          |
| Return Date                             | 858           | 865          | 8        | 0        | D             | ARMAST.FRETRNDATE                |          |
| Conversion Factor                       | 866           | 881          | 16       | 5        | N             | ARMAST.FCFACTOR                  |          |
| Euro as of Date                         | 882           | 889          | 8        | 0        | D             | ARMAST.FDEURODATE                | O        |
| Euro Factor                             | 890           | 905          | 16       | 5        | N             | ARMAST.FEUROFCTR                 | O        |
| Freight on Board Point                  | 906           | 925          | 20       | 0        | C             | ARMAST.FFOB                      |          |
| Freight Total                           | 926           | 941          | 16       | 4        | Y             | ARMAST.FFREIGHT                  |          |
| As of Factor Date                       | 942           | 949          | 8        | 0        | D             | ARMAST.FDFACTDATE                |          |
| Tax Point Date                          | 950           | 957          | 8        | 0        | D             | ARMAST.FDTAXPOINT                |          |
| Date Shipped                            | 958           | 965          | 8        | 0        | D             | ARMAST.FSHIPDATE                 |          |
| Sales Tax Total                         | 966           | 981          | 16       | 4        | Y             | ARMAST.FTAXAMT                   |          |
| Terms Id                                | 982           | 985          | 4        | 0        | C             | ARMAST.FCTERMSID                 |          |
| Terms Description                       | 986           | 1005         | 20       | 0        | C             | UTTERMS.FCDESCR                  |          |
| Percent Discount after 1st Days         | 1006          | 1012         | 7        | 3        | N             | UTTERMS.FNPERCENT                |          |
| Grace Allowed                           | 1013          | 1016         | 4        | 0        | I             | UTTERMS.FNGRACE                  |          |
| Final Days Due                          | 1017          | 1020         | 4        | 0        | I             | UTTERMS.FNDUEDAYS                |          |
| Days for which the 1st Discount Applies | 1021          | 1024         | 4        | 0        | I             | UTTERMS.FNDAYS                   |          |
| 2nd Percent Discount                    | 1025          | 1031         | 7        | 3        | N             | UTTERMS.FN2NDPER                 |          |
| 2nd Days Due                            | 1032          | 1035         | 4        | 0        | I             | UTTERMS.FN2NDDAYS                |          |
| Terms Notes Line 1                      | 1036          | 1115         | 80       | 0        | M             | UTTERMS.FMNOTES                  |          |
| Terms Notes Line 2                      | 1116          | 1195         | 80       | 0        | M             | UTTERMS.FMNOTES                  |          |
| Currency Exchange Gain/Loss             | 1196          | 1211         | 16       | 4        | Y             | ARMAST.FNCUREX                   |          |
| Invoice Notes Line 1                    | 1212          | 1291         | 80       | 0        | M             | ARMAST.FMNOTES                   |          |
| Invoice Notes Line 2                    | 1292          | 1371         | 80       | 0        | M             | ARMAST.FMNOTES                   |          |
| Invoice Remarks Line 1                  | 1372          | 1451         | 80       | 0        | M             | ARMAST.FMREMARKS                 |          |
| Invoice Remarks Line 2                  | 1452          | 1531         | 80       | 0        | M             | ARMAST.FMREMARKS                 |          |
| Terms Message Line 1                    | 1532          | 1611         | 80       | 0        | M             | ARMAST.FMTERMSMSG                |          |
| Terms Message Line 2                    | 1612          | 1691         | 80       | 0        | M             | ARMAST.FMTERMSMSG                |          |
| Invoice Weight                          | 1692          | 1702         | 11       | 4        | N             | ARMAST.FNTOTALWT                 |          |
| Remit Company Name                      | 1703          | 1737         | 35       | 0        | C             | UTCOMP.FCOMPANY                  |          |
| Remit Address Line 1                    | 1738          | 1817         | 80       | 0        | M             | UTCOMP.FMADDRESS                 |          |
| Remit Address Line 2                    | 1818          | 1897         | 80       | 0        | M             | UTCOMP.FMADDRESS                 |          |
| Remit City                              | 1898          | 1917         | 20       | 0        | C             | UTCOMP.FCITY                     |          |
| Remit State                             | 1918          | 1920         | 3        | 0        | C             | UTCOMP.FSTATE                    |          |
| Remit Zip Code                          | 1921          | 1930         | 10       | 0        | C             | UTCOMP.FZIP                      |          |
| Remit Country                           | 1931          | 1955         | 25       | 0        | C             | UTCOMP.FCOUNTRY                  |          |
| Remit Telephone Number                  | 1956          | 1975         | 20       | 0        | C             | UTCOMP.FPHONE                    |          |
| Remit Fax Number                        | 1976          | 1995         | 20       | 0        | C             | UTCOMP.FCFAX                     |          |
| Terms Discount Due Date                 | 1996          | 2003         | 8        | 0        | D             | ARMAST.FINVDATE + UTTERMS.FNDAYS |          |
| EDI Character 1                         | 2004          | 2023         | 20       | 0        | C             | SOHDR.FCEDICHAR1                 |          |
| EDI Character 2                         | 2024          | 2043         | 20       | 0        | C             | SOHDR.FCEDICHAR2                 |          |
| EDI Character 3                         | 2044          | 2063         | 20       | 0        | C             | SOHDR.FCEDICHAR3                 |          |
| EDI Character 4                         | 2064          | 2083         | 20       | 0        | C             | SOHDR.FCEDICHAR4                 |          |
| EDI Character 5                         | 2084          | 2103         | 20       | 0        | C             | SOHDR.FCEDICHAR5                 |          |
| EDI Character 6                         | 2104          | 2123         | 20       | 0        | C             | SOHDR.FCEDICHAR6                 |          |
| EDI Character 7                         | 2124          | 2143         | 20       | 0        | C             | SOHDR.FCEDICHAR7                 |          |
| EDI Character 8                         | 2144          | 2163         | 20       | 0        | C             | SOHDR.FCEDICHAR8                 |          |
| EDI Character 9                         | 2164          | 2183         | 20       | 0        | C             | SOHDR.FCEDICHAR9                 |          |
| EDI Character 10                        | 2184          | 2203         | 20       | 0        | C             | SOHDR.FCEDICHAR10                |          |
| EDI Character 11                        | 2204          | 2223         | 20       | 0        | C             | SOHDR.FCEDICHAR11                |          |
| EDI Character 12                        | 2224          | 2243         | 20       | 0        | C             | SOHDR.FCEDICHAR12                |          |
| EDI Character 13                        | 2244          | 2263         | 20       | 0        | C             | SOHDR.FCEDICHAR13                |          |
| EDI Character 14                        | 2264          | 2283         | 20       | 0        | C             | SOHDR.FCEDICHAR14                |          |
| EDI Character 15                        | 2284          | 2303         | 20       | 0        | C             | SOHDR.FCEDICHAR15                |          |
| EDI Date 1                              | 2304          | 2311         | 8        | 0        | D             | SOHDR.FCEDIDATE1                 |          |
| EDI Date 2                              | 2312          | 2319         | 8        | 0        | D             | SOHDR.FCEDIDATE2                 |          |
| EDI Date 3                              | 2320          | 2327         | 8        | 0        | D             | SOHDR.FCEDIDATE3                 |          |
| EDI Date 4                              | 2328          | 2335         | 8        | 0        | D             | SOHDR.FCEDIDATE4                 |          |
| EDI Date 5                              | 2336          | 2343         | 8        | 0        | D             | SOHDR.FCEDIDATE5                 |          |
| EDI Date 6                              | 2344          | 2351         | 8        | 0        | D             | SOHDR.FCEDIDATE6                 |          |
| EDI Date 7                              | 2352          | 2359         | 8        | 0        | D             | SOHDR.FCEDIDATE7                 |          |
| EDI Date 8                              | 2360          | 2367         | 8        | 0        | D             | SOHDR.FCEDIDATE8                 |          |
| EDI Date 9                              | 2368          | 2375         | 8        | 0        | D             | SOHDR.FCEDIDATE9                 |          |
| EDI Date 10                             | 2376          | 2383         | 8        | 0        | D             | SOHDR.FCEDIDATE10                |          |
| EDI Date 11                             | 2384          | 2391         | 8        | 0        | D             | SOHDR.FCEDIDATE11                |          |
| EDI Date 12                             | 2392          | 2399         | 8        | 0        | D             | SOHDR.FCEDIDATE12                |          |
| EDI Date 13                             | 2400          | 2407         | 8        | 0        | D             | SOHDR.FCEDIDATE13                |          |
| EDI Date 14                             | 2408          | 2415         | 8        | 0        | D             | SOHDR.FCEDIDATE14                |          |
| EDI Date 15                             | 2416          | 2423         | 8        | 0        | D             | SOHDR.FCEDIDATE15                |          |
| EDI Numeric 1                           | 2424          | 2439         | 16       | 5        | N             | SOHDR.FCEDINUM1                  |          |
| EDI Numeric 2                           | 2440          | 2455         | 16       | 5        | N             | SOHDR.FCEDINUM2                  |          |
| EDI Numeric 3                           | 2456          | 2471         | 16       | 5        | N             | SOHDR.FCEDINUM3                  |          |
| EDI Numeric 4                           | 2472          | 2487         | 16       | 5        | N             | SOHDR.FCEDINUM4                  |          |
| EDI Numeric 5                           | 2488          | 2503         | 16       | 5        | N             | SOHDR.FCEDINUM5                  |          |
| EDI Numeric 6                           | 2504          | 2519         | 16       | 5        | N             | SOHDR.FCEDINUM6                  |          |
| EDI Numeric 7                           | 2520          | 2535         | 16       | 5        | N             | SOHDR.FCEDINUM7                  |          |
| EDI Numeric 8                           | 2536          | 2551         | 16       | 5        | N             | SOHDR.FCEDINUM8                  |          |
| EDI Numeric 9                           | 2552          | 2567         | 16       | 5        | N             | SOHDR.FCEDINUM9                  |          |
| EDI Numeric 10                          | 2568          | 2583         | 16       | 5        | N             | SOHDR.FCEDINUM10                 |          |
| EDI Memo 1 Line 1                       | 2584          | 2663         | 80       | 0        | M             | SOHDR.FCEDIMEMO1                 |          |
| EDI Memo 1 Line 2                       | 2664          | 2743         | 80       | 0        | M             | SOHDR.FCEDIMEMO1                 |          |
| EDI Memo 2 Line 1                       | 2744          | 2823         | 80       | 0        | M             | SOHDR.FCEDIMEMO2                 |          |
| EDI Memo 2 Line 2                       | 2824          | 2903         | 80       | 0        | M             | SOHDR.FCEDIMEMO2                 |          |
| Available for future use                | 2904          | 4096         |          |          |               |                                  |          |

### 856-HML

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**       |  **Req** |
|------------------------------|---------------|--------------|----------|----------|---------------|------------------------|----------|
| Header Record Tag: 'HML'     | 1             | 3            | 3        | 0        | C             | 'HML'                  | X        |
| Shipper Tracking Number      | 4             | 83           | 80       | 0        | M             | SHMASTTRACKER.FMTRCKNO |          |
| Shipper Comment              | 84            | 163          | 80       | 0        | M             | SHMAST.FMREFERENC      |          |
| Shipper List                 | 164           | 243          | 80       | 0        | M             | SHMAST.FSHIPMEMO       |          |
| BOL Comment                  | 244           | 323          | 80       | 0        | M             | BOLMAST.FMCOMMENT      |          |
| BOL Received                 | 324           | 403          | 80       | 0        | M             | BOLMAST.FMRECEIVED     |          |
| Invoice Notes                | 404           | 483          | 80       | 0        | M             | ARMAST.FMNOTES         |          |
| Invoice Remarks              | 484           | 563          | 80       | 0        | M             | ARMAST.FMREMARKS       |          |
| Invoice Terms Message        | 564           | 643          | 80       | 0        | M             | ARMAST.FMTERMSMSG      |          |
| Terms Notes                  | 644           | 723          | 80       | 0        | M             | UTTERMS.FMNOTES        |          |
| Sales Order User Defined     | 724           | 803          | 80       | 0        | M             | SOMAST.FMUSRMEMO1      |          |
| Sales Order EDI Header 1     | 804           | 883          | 80       | 0        | M             | SOHDR.FCEDIMEMO1       |          |
| Sales Order EDI Header 2     | 884           | 963          | 80       | 0        | M             | SOHDR.FCEDIMEMO2       |          |
| Customer Master User Defined | 964           | 1043         | 80       | 0        | M             | SLCDPM.FMUSRMEMO1      |          |
| Salesperson Notes            | 1044          | 1123         | 80       | 0        | M             | SLSPNS.FMNOTES         |          |
| Available for future use     | 1124          | 4096         |          |          |               |                        |          |

### 856-HL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**              | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**    |  **Req** |
|------------------------------------|---------------|--------------|----------|----------|---------------|---------------------|----------|
| Header Record Tag: 'HL'            | 1             | 3            | 3        | 0        | C             | 'HL'                | X        |
| Hierarchy Level                    | 4             | 5            | 2        | 0        | C             | Calculated          |          |
| Container Number (Internal Number) | 6             | 25           | 20       | 0        | C             | SHIPASN.FCCNTRID    |          |
| Serial Number                      | 26            | 45           | 20       | 0        | C             | SHIPASN.FCSERIALNO  |          |
| Item Quantity                      | 46            | 61           | 16       | 5        | N             | SHIPASN.FNITEMQTY   |          |
| Net Weight                         | 62            | 77           | 16       | 5        | N             | SHIPASN.FNNETWGT    |          |
| Gross Weight                       | 78            | 93           | 16       | 5        | N             | SHIPASN.FNGROSSWGT  |          |
| Container Type                     | 94            | 113          | 20       | 0        | C             | SHIPASN.FCCNTRTYPE  |          |
| Container Name                     | 114           | 153          | 40       | 0        | C             | CONTAINR.FCNAME     |          |
| Container Description Line 1       | 154           | 233          | 80       | 0        | M             | CONTAINR.FMDESC     |          |
| Container Description Line 2       | 234           | 313          | 80       | 0        | M             | CONTAINR.FMDESC     |          |
| Container Color                    | 314           | 333          | 20       | 0        | C             | CONTAINR.FCCOLOR    |          |
| Container Length                   | 334           | 349          | 16       | 5        | N             | CONTAINR.FNLENGTH   |          |
| Container Length Unit of Measure   | 350           | 352          | 3        | 0        | C             | CONTAINR.FCUOMLEN   |          |
| Container Width                    | 353           | 368          | 16       | 5        | N             | CONTAINR.FNWIDTH    |          |
| Container Width Unit of Measure    | 369           | 371          | 3        | 0        | C             | CONTAINR.FCUOMWID   |          |
| Container Height                   | 372           | 387          | 16       | 5        | N             | CONTAINR.FNHEIGHT   |          |
| Container Height Unit of Measure   | 388           | 390          | 3        | 0        | C             | CONTAINR.FCUOMHEI   |          |
| Container Volume                   | 391           | 406          | 16       | 5        | N             | CONTAINR.FNVOLUME   |          |
| Container Volume Unit of Measure   | 407           | 409          | 3        | 0        | C             | CONTAINR.FCUOMVOL   |          |
| Container Weight                   | 410           | 425          | 16       | 5        | N             | CONTAINR.FNWEIGHT   |          |
| Container Weight Unit of Measure   | 426           | 428          | 3        | 0        | C             | CONTAINR.FCUOMWEI   |          |
| Container User Defined Character 1 | 429           | 448          | 20       | 0        | C             | CONTAINR.FCUSRCHR1  |          |
| Container User Defined Character 2 | 449           | 488          | 40       | 0        | C             | CONTAINR.FCUSRCHR2  |          |
| Container User Defined Character 3 | 489           | 528          | 40       | 0        | C             | CONTAINR.FCUSRCHR3  |          |
| Container User Defined Quantity 1  | 529           | 542          | 14       | 5        | N             | CONTAINR.FNUSRQTY1  |          |
| Container User Defined Currency 1  | 543           | 558          | 16       | 5        | N             | CONTAINR.FNUSRCUR1  |          |
| Container User Defined Date 1      | 559           | 566          | 8        | 0        | D             | CONTAINR.FDUSRDATE1 |          |
| Container User Defined Memo Line 1 | 567           | 646          | 80       | 0        | M             | CONTAINR.FMUSRMEMO1 |          |
| Container User Defined Memo Line 2 | 647           | 726          | 80       | 0        | M             | CONTAINR.FMUSRMEMO1 |          |
| Parent Container ID Number         | 727           | 746          | 20       | 0        | C             | SHIPASN.FCPARENTID  |          |
| Available for future use           | 747           | 4096         |          |          |               |                     |          |

### 856-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with O are obsolete.

| **Field Description**                   | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**    |  **Req** |
|-----------------------------------------|---------------|--------------|----------|----------|---------------|---------------------|----------|
| Header Record Tag: 'DET'                | 1             | 3            | 3        | 0        | C             | 'DET'               | X        |
| Part Number                             | 4             | 28           | 25       | 0        | C             | SHITEM.FPARTNO      |          |
| Part Revision                           | 29            | 31           | 3        | 0        | C             | SHITEM.FREV         |          |
| Item Description Line 1                 | 32            | 111          | 80       | 0        | M             | SHITEM.FMDESCRIPT   |          |
| Item Description Line 2                 | 112           | 191          | 80       | 0        | M             | SHITEM.FMDESCRIPT   |          |
| Item UoM                                | 192           | 194          | 3        | 0        | C             | SHITEM.FMEASURE     |          |
| External Line Item Number               | 195           | 200          | 6        | 0        | C             | SHITEM.FENUMBER     |          |
| Internal Line Item Number               | 201           | 206          | 6        | 0        | C             | SHITEM.FITEMNO      |          |
| Item Order Qty                          | 207           | 220          | 14       | 5        | N             | SHITEM.FORDERQTY    |          |
| Item Quantity Shipped                   | 221           | 234          | 14       | 5        | N             | SHITEM.FSHIPQTY     |          |
| Cross Reference Part Number             | 235           | 259          | 25       | 0        | C             | INCROS.FCROSSPART   |          |
| Cross Reference Part Revision           | 260           | 262          | 3        | 0        | C             | INCROS.FCROSSREV    |          |
| Group Code Number                       | 263           | 268          | 6        | 0        | C             | INGRPC.FGC_NUMBER   |          |
| Group Code Description                  | 269           | 333          | 65       | 0        | C             | INGRPC.FGC_DESC     |          |
| Product Class Name                      | 334           | 345          | 12       | 0        | C             | INPROD.FPC_NAME     |          |
| Product Class Code                      | 346           | 349          | 4        | 0        | C             | INPROD.FPC_NUMBER   |          |
| Product Class Description               | 350           | 404          | 55       | 0        | C             | INPROD.FPC_DESC     |          |
| Freight Class of Item                   | 405           | 416          | 12       | 0        | C             | INMAST.FCCLASS      |          |
| Item Master Part Description            | 417           | 451          | 35       | 0        | C             | INMAST.FDESCRIPT    |          |
| Item Master Comment Line 1              | 452           | 531          | 80       | 0        | M             | INMAST.FCOMMENT     |          |
| Item Master Comment Line 2              | 532           | 611          | 80       | 0        | M             | INMAST.FCOMMENT     |          |
| Item Master User Defined Character 1    | 612           | 631          | 20       | 0        | C             | INMAST.FCUSRCHR1    |          |
| Item Master User Defined Character 2    | 632           | 671          | 40       | 0        | C             | INMAST.FCUSRCHR2    |          |
| Item Master User Defined Character 3    | 672           | 711          | 40       | 0        | C             | INMAST.FCUSRCHR3    |          |
| Item Master User Defined Date 1         | 712           | 719          | 8        | 0        | D             | INMAST.FDUSRDATE1   |          |
| Item Master User Defined Memo Line 1    | 720           | 799          | 80       | 0        | M             | INMAST.FMUSRMEMO1   |          |
| Item Master User Defined Memo Line 2    | 800           | 879          | 80       | 0        | M             | INMAST.FMUSRMEMO1   |          |
| Item Master User Defined Currency 1     | 880           | 895          | 16       | 5        | N             | INMAST.FNUSRCUR1    |          |
| Item Master User Defined Quantity 1     | 896           | 909          | 14       | 5        | N             | INMAST.FNUSRQTY1    |          |
| Sales Order Item Group Code             | 910           | 915          | 6        | 0        | C             | SOITEM.FGROUP       |          |
| Sales Order Item Product Class          | 916           | 919          | 4        | 0        | C             | SOITEM.FPRODCL      |          |
| Sales Order Item Line Number            | 920           | 922          | 3        | 0        | C             | SOITEM.FENUMBER     |          |
| Sales Order Item Description Line 1     | 923           | 1002         | 80       | 0        | M             | SOITEM.FDESC        |          |
| Sales Order Item Description Line 2     | 1003          | 1082         | 80       | 0        | M             | SOITEM.FDESC        |          |
| Sales Order Item Memo Descript Line 1   | 1083          | 1162         | 80       | 0        | M             | SOITEM.FDESCMEMO    |          |
| Sales Order Item Memo Descript Line 2   | 1163          | 1242         | 80       | 0        | M             | SOITEM.FDESCMEMO    |          |
| Sales Order Item Due Date               | 1243          | 1250         | 8        | 0        | D             | SOITEM.FDUEDATE     |          |
| Sales Order Item Salesperson            | 1251          | 1253         | 3        | 0        | C             | SOITEM.FSOLDBY      |          |
| Sales Order Release Due Date            | 1254          | 1261         | 8        | 0        | D             | SORELS.FDUEDATE     |          |
| Invoice Line Item Number                | 1262          | 1267         | 6        | 0        | C             | ARITEM.FITEM        |          |
| Invoice User Defined Line Item Number   | 1268          | 1277         | 10       | 0        | C             | ARITEM.FCUSERLINE   |          |
| Type of Item                            | 1278          | 1278         | 1        | 0        | C             | ARITEM.FCTYPE       |          |
| Order Qty                               | 1279          | 1292         | 14       | 5        | N             | ARITEM.FORDQTY      |          |
| Qty Invoiced                            | 1293          | 1306         | 14       | 5        | N             | ARITEM.FSHIPQTY     |          |
| Qty Back Ordered                        | 1307          | 1320         | 14       | 5        | N             | ARITEM.FBKORDQTY    |          |
| Unit Price                              | 1321          | 1336         | 16       | 5        | N             | ARITEM.FPRICE       |          |
| Average Unit Cost                       | 1337          | 1352         | 16       | 4        | Y             | ARITEM.FCOST        |          |
| Discount Amount                         | 1353          | 1368         | 16       | 4        | Y             | ARITEM.FDISCAMT     |          |
| Item Discount Amount in the EURO        | 1369          | 1384         | 16       | 4        | Y             | ARITEM.FDISCEURAMT  | O        |
| Item Discount Amount in TXN             | 1385          | 1400         | 16       | 4        | Y             | ARITEM.FDISCTXNAMT  |          |
| Discount Rate                           | 1401          | 1406         | 6        | 2        | N             | ARITEM.FDISRATE     |          |
| Unit Price in the Transaction Currency  | 1407          | 1422         | 16       | 5        | N             | ARITEM.FEUROPRICE   | O        |
| Total Price in the EURO Currency        | 1423          | 1438         | 16       | 4        | Y             | ARITEM.FTOTEURPRICE | O        |
| Price \* Qty Less Discounts             | 1439          | 1454         | 16       | 4        | Y             | ARITEM.FTOTPRICE    |          |
| Net Price in the TXN Currency           | 1455          | 1470         | 16       | 4        | Y             | ARITEM.FTOTTXNPRICE |          |
| Unit Price in the TXN Currency          | 1471          | 1486         | 16       | 5        | N             | ARITEM.FTXNPRICE    |          |
| Invoice Item Description Line 1         | 1487          | 1566         | 80       | 0        | M             | ARITEM.FMDESCRIPT   |          |
| Invoice Item Description Line 2         | 1567          | 1646         | 80       | 0        | M             | ARITEM.FMDESCRIPT   |          |
| Invoice Number                          | 1647          | 1666         | 20       | 0        | C             | ARITEM.FCINVOICE    |          |
| Sales Tax Code                          | 1667          | 1676         | 10       | 0        | C             | ARITEM.FCTAXCODE    |          |
| Tax Description                         | 1677          | 1711         | 35       | 0        | C             | ARSTAX.FCDESCR      |          |
| EDI Character 1                         | 1712          | 1731         | 20       | 0        | C             | SODET.FCEDICHAR1    |          |
| EDI Character 2                         | 1732          | 1751         | 20       | 0        | C             | SODET.FCEDICHAR2    |          |
| EDI Character 3                         | 1752          | 1771         | 20       | 0        | C             | SODET.FCEDICHAR3    |          |
| EDI Character 4                         | 1772          | 1791         | 20       | 0        | C             | SODET.FCEDICHAR4    |          |
| EDI Character 5                         | 1792          | 1811         | 20       | 0        | C             | SODET.FCEDICHAR5    |          |
| EDI Character 6                         | 1812          | 1831         | 20       | 0        | C             | SODET.FCEDICHAR6    |          |
| EDI Character 7                         | 1832          | 1851         | 20       | 0        | C             | SODET.FCEDICHAR7    |          |
| EDI Character 8                         | 1852          | 1871         | 20       | 0        | C             | SODET.FCEDICHAR8    |          |
| EDI Character 9                         | 1872          | 1891         | 20       | 0        | C             | SODET.FCEDICHAR9    |          |
| EDI Character 10                        | 1892          | 1911         | 20       | 0        | C             | SODET.FCEDICHAR10   |          |
| EDI Character 11                        | 1912          | 1931         | 20       | 0        | C             | SODET.FCEDICHAR11   |          |
| EDI Character 12                        | 1932          | 1951         | 20       | 0        | C             | SODET.FCEDICHAR12   |          |
| EDI Character 13                        | 1952          | 1971         | 20       | 0        | C             | SODET.FCEDICHAR13   |          |
| EDI Character 14                        | 1972          | 1991         | 20       | 0        | C             | SODET.FCEDICHAR14   |          |
| EDI Character 15                        | 1992          | 2011         | 20       | 0        | C             | SODET.FCEDICHAR15   |          |
| EDI Date 1                              | 2012          | 2019         | 8        | 0        | D             | SODET.FCEDIDATE1    |          |
| EDI Date 2                              | 2020          | 2027         | 8        | 0        | D             | SODET.FCEDIDATE2    |          |
| EDI Date 3                              | 2028          | 2035         | 8        | 0        | D             | SODET.FCEDIDATE3    |          |
| EDI Date 4                              | 2036          | 2043         | 8        | 0        | D             | SODET.FCEDIDATE4    |          |
| EDI Date 5                              | 2044          | 2051         | 8        | 0        | D             | SODET.FCEDIDATE5    |          |
| EDI Date 6                              | 2052          | 2059         | 8        | 0        | D             | SODET.FCEDIDATE6    |          |
| EDI Date 7                              | 2060          | 2067         | 8        | 0        | D             | SODET.FCEDIDATE7    |          |
| EDI Date 8                              | 2068          | 2075         | 8        | 0        | D             | SODET.FCEDIDATE8    |          |
| EDI Date 9                              | 2076          | 2083         | 8        | 0        | D             | SODET.FCEDIDATE9    |          |
| EDI Date 10                             | 2084          | 2091         | 8        | 0        | D             | SODET.FCEDIDATE10   |          |
| EDI Date 11                             | 2092          | 2099         | 8        | 0        | D             | SODET.FCEDIDATE11   |          |
| EDI Date 12                             | 2100          | 2107         | 8        | 0        | D             | SODET.FCEDIDATE12   |          |
| EDI Date 13                             | 2108          | 2115         | 8        | 0        | D             | SODET.FCEDIDATE13   |          |
| EDI Date 14                             | 2116          | 2123         | 8        | 0        | D             | SODET.FCEDIDATE14   |          |
| EDI Date 15                             | 2124          | 2131         | 8        | 0        | D             | SODET.FCEDIDATE15   |          |
| EDI Numeric 1                           | 2132          | 2147         | 16       | 5        | N             | SODET.FCEDINUM1     |          |
| EDI Numeric 2                           | 2148          | 2163         | 16       | 5        | N             | SODET.FCEDINUM2     |          |
| EDI Numeric 3                           | 2164          | 2179         | 16       | 5        | N             | SODET.FCEDINUM3     |          |
| EDI Numeric 4                           | 2180          | 2195         | 16       | 5        | N             | SODET.FCEDINUM4     |          |
| EDI Numeric 5                           | 2196          | 2211         | 16       | 5        | N             | SODET.FCEDINUM5     |          |
| EDI Numeric 6                           | 2212          | 2227         | 16       | 5        | N             | SODET.FCEDINUM6     |          |
| EDI Numeric 7                           | 2228          | 2243         | 16       | 5        | N             | SODET.FCEDINUM7     |          |
| EDI Numeric 8                           | 2244          | 2259         | 16       | 5        | N             | SODET.FCEDINUM8     |          |
| EDI Numeric 9                           | 2260          | 2275         | 16       | 5        | N             | SODET.FCEDINUM9     |          |
| EDI Numeric 10                          | 2276          | 2291         | 16       | 5        | N             | SODET.FCEDINUM10    |          |
| EDI Memo 1 Line 1                       | 2292          | 2371         | 80       | 0        | M             | SODET.FCEDIMEMO1    |          |
| EDI Memo 1 Line 2                       | 2372          | 2451         | 80       | 0        | M             | SODET.FCEDIMEMO1    |          |
| EDI Memo 2 Line 1                       | 2452          | 2531         | 80       | 0        | M             | SODET.FCEDIMEMO2    |          |
| EDI Memo 2 Line 2                       | 2532          | 2611         | 80       | 0        | M             | SODET.FCEDIMEMO2    |          |
| Item Master Location 1                  | 2612          | 2613         | 2        | 0        | C             | INMAST.FLOCATE1     |          |
| Delivery Notes Line 1                   | 2614          | 2693         | 80       | 0        | M             | SORELS.FDELIVERY    |          |
| Delivery Notes Line 2                   | 2694          | 2773         | 80       | 0        | M             | SORELS.FDELIVERY    |          |
| Part Number                             | 2774          | 2798         | 25       | 0        | C             | SOITEM.FPARTNO      |          |
| Part Revision                           | 2799          | 2801         | 3        | 0        | C             | SOITEM.FPARTREV     |          |
| Customer Part Number                    | 2802          | 2826         | 25       | 0        | C             | SOITEM.FCUSTPART    |          |
| Customer Part Revision                  | 2827          | 2829         | 3        | 0        | C             | SOITEM.FCUSTPTREV   |          |
| Item Number                             | 2830          | 2832         | 3        | 0        | C             | SOITEM.FENUMBER     |          |
| Quantity                                | 2833          | 2848         | 16       | 5        | N             | SOITEM.FQUANTITY    |          |
| Unit of Measure                         | 2849          | 2851         | 3        | 0        | C             | SOITEM.FMEASURE     |          |
| Source                                  | 2852          | 2852         | 1        | 0        | C             | SOITEM.FSOURCE      |          |
| Unit Price                              | 2853          | 2868         | 16       | 5        | N             | SORELS.FUNETPRICE   |          |
| Customer Purchase Order Number          | 2869          | 2888         | 20       | 0        | C             | SOMAST.FCUSTPONO    |          |
| Item Master Weight                      | 2889          | 2898         | 10       | 3        | N             | INMAST.FNWEIGHT     |          |
| Part+Rev by PO Total Qty Shipped\*      | 2899          | 2913         | 15       | 5        | N             | Calculated          |          |
| Part+Rev by PO Total Qty Shipped YTD\*  | 2914          | 2928         | 15       | 5        | N             | Calculated          |          |
| Part Only by PO Total Qty Shipped\*     | 2929          | 2943         | 15       | 5        | N             | Calculated          |          |
| Part Only by PO Total Qty Shipped YTD\* | 2944          | 2958         | 15       | 5        | N             | Calculated          |          |
| Part+Rev Total Qty Shipped\*            | 2959          | 2973         | 15       | 5        | N             | Calculated          |          |
| Part+Rev Total Qty Shipped YTD\*        | 2974          | 2988         | 15       | 5        | N             | Calculated          |          |
| Part Only Total Qty Shipped\*           | 2989          | 3003         | 15       | 5        | N             | Calculated          |          |
| Part Only Total Qty Shipped YTD\*       | 3004          | 3018         | 15       | 5        | N             | Calculated          |          |
| Container Item Quantity                 | 3019          | 3034         | 16       | 5        | N             | SHIPASN.FNITEMQTY   |          |
| Available for future use                | 3035          | 4092         |          |          |               |                     |          |

**Note:** Certain elements are automatically imported/exported and therefore not listed in XGROUP. These data elements are stored in the M2MDataXX database and are designated with (\*).

### 

### 856-DML

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                 | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**  |  **Req** |
|---------------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'DML'              | 1             | 3            | 3        | 0        | C             | 'DML'             | X        |
| Shipper Item Description              | 4             | 83           | 80       | 0        | M             | SHITEM.FMDESCRIPT |          |
| Invoice Item Description              | 84            | 163          | 80       | 0        | M             | ARITEM.FMDESCRIPT |          |
| Sales Order Item Description          | 164           | 243          | 80       | 0        | M             | SOITEM.FDESC      |          |
| Sales Order Customer Part Description | 244           | 323          | 80       | 0        | M             | SOITEM.FDESCMEMO  |          |
| Sales Order EDI Item 1                | 324           | 403          | 80       | 0        | M             | SODET.FCEDIMEMO1  |          |
| Sales Order EDI Item 2                | 404           | 483          | 80       | 0        | M             | SODET.FCEDIMEMO2  |          |
| Salres Order Release Delivery         | 484           | 563          | 80       | 0        | M             | SORELS.FDELIVERY  |          |
| Item Master Comment                   | 564           | 643          | 80       | 0        | M             | INMAST.FCOMMENT   |          |
| Item Master User Defined              | 644           | 723          | 80       | 0        | M             | INMAST.FMUSRMEMO1 |          |
| Available for future use              | 724           | 4096         |          |          |               |                   |          |

### 

### 

### 

### 

### 

### 856-SAC

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**             | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**  |  **Req** |
|-----------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'SAC'          | 1             | 3            | 3        | 0        | C             | 'SAC'             | X        |
| Part Number                       | 4             | 28           | 25       | 0        | C             | SHITEM.FPARTNO    |          |
| Part Number Revision              | 29            | 31           | 3        | 0        | C             | SHITEM.FREV       |          |
| Description Line 1                | 32            | 111          | 80       | 0        | M             | SHITEM.FMDESCRIPT |          |
| Description Line 2                | 112           | 191          | 80       | 0        | M             | SHITEM.FMDESCRIPT |          |
| Quantity                          | 192           | 205          | 14       | 5        | N             | SHITEM.FSHIPQTY   |          |
| Unit Price                        | 206           | 222          | 17       | 5        | N             | SORELS.FUNETPRICE |          |
| SAC Allowance or Charge Indicator | 223           | 223          | 1        | 0        | C             | XINVEDI.FISACTYPE |          |
| Available for future use          | 224           | 4096         |          |          |               |                   |          |

## 861 - Receiving Advice/Acceptance Certificate

Outbound 861 (Receiving Advice/Acceptance Certificate) originates from the Made2Manage Receiving (RECV) and other Made2Manage data sources. The layout of the 861 Fixed File Format is listed below. The hierarchy of each 861 transaction is single HDR system key segment. The header information is exported into a single BEG segment. Each line item is exported into a single DET segment.

![](media/77e802e799275424af95374112bba605.png)

### 861-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**             |  **Req** |
|----------------------------------------------|---------------|--------------|----------|----------|---------------|------------------------------|----------|
| Header Record Tag: 'HDR'                     | 1             | 3            | 3        | 0        | C             | 'HDR'                        | X        |
| Transaction Set ID (Application Alias Value) | 4             | 9            | 6        | 0        | C             | 'RECADV'                     | X        |
| Receiver EDI ID (Application Code)\#         | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| Test / Production (Test Mode)                | 30            | 30           | 1        | 0        | C             | 'T' = Test; 'P' = Production | X        |
| Original / Resend                            | 31            | 31           | 1        | 0        | C             | 'O' = Original; 'R' = Resend | X        |
| Sender EDI Qualifier                         | 32            | 33           | 2        | 0        | C             | XSETUP.FCTPQUAL              | X        |
| Sender EDI ID                                | 34            | 63           | 30       | 0        | C             | XSETUP.FCTPID                | X        |
| Receiver EDI Qualifier                       | 64            | 65           | 2        | 0        | C             | XCUSTEDI.FCEDIQUAL           | X        |
| Receiver EDI ID                              | 66            | 95           | 30       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| EDI-XML Document Definition                  | 96            | 105          | 10       | 0        | C             | ‘M2M_861’                    | X        |

\# Specific EDI ID exported when populated, otherwise general EDI ID exported

### 861-BEG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with O are obsolete.

| **Field Description**          | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**  |  **Req** |
|--------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'BEG'       | 1             | 3            | 3        | 0        | C             | 'BEG'             | X        |
| Vendor / Customer Number       | 4             | 9            | 6        | 0        | C             | RCMAST.FVENDNO    |          |
| Trading Partner EDI ID         | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID  |          |
| Receiver Number                | 30            | 35           | 6        | 0        | C             | RCMAST.FRECEIVER  |          |
| Returned Material Auth. Number | 36            | 60           | 25       | 0        | C             | RCMAST.FRMANO     |          |
| Company                        | 61            | 95           | 35       | 0        | C             | RCMAST.FCOMPANY   |          |
| Status (S, C or I)             | 96            | 96           | 1        | 0        | C             | RCMAST.FCSTATUS   |          |
| Items Received Date            | 97            | 110          | 14       | 0        | T             | RCMAST.FDATERECV  |          |
| Freight Carrier                | 111           | 130          | 20       | 0        | C             | RCMAST.FFRTCARR   |          |
| Packing List                   | 131           | 145          | 15       | 0        | C             | RCMAST.FPACKLIST  |          |
| Printed Flag                   | 146           | 146          | 1        | 0        | L             | RCMAST.FPRINTED   |          |
| Bill of Lading Number          | 147           | 164          | 18       | 0        | C             | RCMAST.FBILLLAD   |          |
| Returned                       | 165           | 165          | 1        | 0        | C             | RCMAST.FRETSHIP   |          |
| Shipped Weight                 | 166           | 175          | 10       | 2        | N             | RCMAST.FSHIPWGT   |          |
| Receiver Type                  | 176           | 176          | 1        | 0        | C             | RCMAST.FTYPE      |          |
| Initials                       | 177           | 179          | 3        | 0        | C             | RCMAST.FACCPTBY   |          |
| Receiver Created Date          | 180           | 187          | 8        | 0        | D             | RCMAST.START      |          |
| Receiver Transaction Currency  | 188           | 190          | 3        | 0        | C             | RCMAST.FCCURID    |          |
| Currency Conversion Factor     | 191           | 206          | 16       | 5        | N             | RCMAST.FCFACTOR   |          |
| Conversion Factor Date         | 207           | 214          | 8        | 0        | D             | RCMAST.FDCURDATE  |          |
| Euro Factor Date               | 215           | 222          | 8        | 0        | D             | RCMAST.FDEURODATE | O        |
| Euro Conversion Factor         | 223           | 238          | 16       | 5        | N             | RCMAST.FEUROFCTR  | O        |
| Landed Cost                    | 239           | 239          | 1        | 0        | C             | RCMAST.FCLANDCOST |          |
| Pre-Multi-Currency             | 240           | 240          | 1        | 0        | L             | RCMAST.FLPREMCV   |          |
| Business Type Line 1           | 241           | 320          | 80       | 0        | M             | SLCDPM.FBUS_TYPE  |          |
| Business Type Line 2           | 321           | 400          | 80       | 0        | M             | SLCDPM.FBUS_TYPE  |          |
| Contact First Name             | 401           | 415          | 15       | 0        | C             | SLCDPM.FCFNAME    |          |
| Bill-To City                   | 416           | 435          | 20       | 0        | C             | SLCDPM.FCITY      |          |
| Bill-To Company Name           | 436           | 470          | 35       | 0        | C             | SLCDPM.FCOMPANY   |          |
| Contact Last Name              | 471           | 490          | 20       | 0        | C             | SLCDPM.FCONTACT   |          |
| Contact Phone Number           | 491           | 510          | 20       | 0        | C             | SLCDPM.FPHONE     |          |
| Bill-To Country                | 511           | 535          | 25       | 0        | C             | SLCDPM.FCOUNTRY   |          |
| Customer Added Date            | 536           | 543          | 8        | 0        | D             | SLCDPM.FCREATED   |          |
| Customer Status                | 544           | 544          | 1        | 0        | C             | SLCDPM.FCSTATUS   |          |
| Default Currency               | 545           | 547          | 3        | 0        | C             | SLCDPM.FCURRENCY  |          |
| User Defined Character 1       | 548           | 567          | 20       | 0        | C             | SLCDPM.FCUSRCHR1  |          |
| User Defined Character 2       | 568           | 607          | 40       | 0        | C             | SLCDPM.FCUSRCHR2  |          |
| User Defined Character 3       | 608           | 647          | 40       | 0        | C             | SLCDPM.FCUSRCHR3  |          |
| Customer Number                | 648           | 653          | 6        | 0        | C             | SLCDPM.FCUSTNO    |          |
| Customer Discount              | 654           | 660          | 7        | 3        | N             | SLCDPM.FDISRATE   |          |
| Distributor                    | 661           | 666          | 6        | 0        | C             | SLCDPM.FDISTNO    |          |
| Last Payment Date              | 667           | 674          | 8        | 0        | D             | SLCDPM.FDLPAYDATE |          |
| User Defined Date 1            | 675           | 682          | 8        | 0        | D             | SLCDPM.FDUSRDATE1 |          |
| Fax Number                     | 683           | 702          | 20       | 0        | C             | SLCDPM.FFAX       |          |
| Finance Charge                 | 703           | 703          | 1        | 0        | L             | SLCDPM.FFINCHARGE |          |
| Default FOB                    | 704           | 723          | 20       | 0        | C             | SLCDPM.FFOB       |          |
| Long Distance                  | 724           | 724          | 1        | 0        | L             | SLCDPM.FLLONGDIST |          |
| Notes Line 1                   | 725           | 804          | 80       | 0        | M             | SLCDPM.FMNOTES    |          |
| Notes Line 2                   | 805           | 884          | 80       | 0        | M             | SLCDPM.FMNOTES    |          |
| Bill-To Street Address Line 1  | 885           | 964          | 80       | 0        | M             | SLCDPM.FMSTREET   |          |
| Bill-To Street Address Line 2  | 965           | 1044         | 80       | 0        | M             | SLCDPM.FMSTREET   |          |
| User Defined Memo 1 Line 1     | 1045          | 1124         | 80       | 0        | M             | SLCDPM.FMUSRMEMO1 |          |
| User Defined Memo 1 Line 2     | 1125          | 1204         | 80       | 0        | M             | SLCDPM.FMUSRMEMO1 |          |
| Average Days Late              | 1205          | 1220         | 16       | 5        | N             | SLCDPM.FNARDAYSLT |          |
| Number of Employees            | 1221          | 1225         | 5        | 0        | N             | SLCDPM.FNO_EMPLOY |          |
| Last Payment Amount            | 1226          | 1241         | 16       | 5        | N             | SLCDPM.FNPAYAMT   |          |
| User Defined Currency 1        | 1242          | 1257         | 16       | 5        | N             | SLCDPM.FNUSRCUR1  |          |
| User Defined Quantity 1        | 1258          | 1271         | 14       | 5        | N             | SLCDPM.FNUSRQTY1  |          |
| Payment type                   | 1272          | 1272         | 1        | 0        | C             | SLCDPM.FPAYTYPE   |          |
| Priority Rating                | 1273          | 1274         | 2        | 0        | C             | SLCDPM.FPRIORITY  |          |
| Commission Rate                | 1275          | 1281         | 7        | 3        | N             | SLCDPM.FSALCOMPCT |          |
| Salesperson                    | 1282          | 1284         | 3        | 0        | C             | SLCDPM.FSALESPN   |          |
| Ship Via                       | 1285          | 1304         | 20       | 0        | C             | SLCDPM.FSHIPVIA   |          |
| SIC 1                          | 1305          | 1308         | 4        | 0        | C             | SLCDPM.FSICNO1    |          |
| SIC 2                          | 1309          | 1312         | 4        | 0        | C             | SLCDPM.FSICNO2    |          |
| Last Changed                   | 1313          | 1320         | 8        | 0        | D             | SLCDPM.FSINCE     |          |
| Bill To State                  | 1321          | 1340         | 20       | 0        | C             | SLCDPM.FSTATE     |          |
| Tax Location                   | 1341          | 1350         | 10       | 0        | C             | SLCDPM.FTAXCODE   |          |
| Tax Exemption Number           | 1351          | 1365         | 15       | 0        | C             | SLCDPM.FTAXEXEMPT |          |
| Sales Tax Rate                 | 1366          | 1372         | 7        | 3        | N             | SLCDPM.FTAXRATE   |          |
| Terms                          | 1373          | 1376         | 4        | 0        | C             | SLCDPM.FTERM      |          |
| Territory                      | 1377          | 1386         | 10       | 0        | C             | SLCDPM.FTERR      |          |
| Type                           | 1387          | 1387         | 1        | 0        | C             | SLCDPM.FTYPE      |          |
| Sales Code                     | 1388          | 1394         | 7        | 0        | C             | SLCDPM.FUSERCODE  |          |
| Year Established               | 1395          | 1398         | 4        | 0        | C             | SLCDPM.FYR_ESTAB  |          |
| Year-to-Date Sales             | 1399          | 1413         | 15       | 4        | N             | SLCDPM.FYTDSAMT   |          |
| Bill-To Zip Code               | 1414          | 1423         | 10       | 0        | C             | SLCDPM.FZIP       |          |
| Forecast Indicator             | 1424          | 1424         | 1        | 0        | L             | SLCDPM.FLISFCAST  |          |
| Taxable Customer               | 1425          | 1425         | 1        | 0        | L             | SLCDPM.FLISTAXABL |          |
| Contact E-mail Address         | 1426          | 1485         | 60       | 0        | C             | SLCDPM.FCEMAIL    |          |
| Remit Company Name             | 1486          | 1520         | 35       | 0        | C             | UTCOMP.FCOMPANY   |          |
| Remit Address Line 1           | 1521          | 1600         | 80       | 0        | M             | UTCOMP.FMADDRESS  |          |
| Remit Address Line 2           | 1601          | 1680         | 80       | 0        | M             | UTCOMP.FMADDRESS  |          |
| Remit City                     | 1681          | 1700         | 20       | 0        | C             | UTCOMP.FCITY      |          |
| Remit State                    | 1701          | 1703         | 3        | 0        | C             | UTCOMP.FSTATE     |          |
| Remit Zip Code                 | 1704          | 1713         | 10       | 0        | C             | UTCOMP.FZIP       |          |
| Remit Country                  | 1714          | 1738         | 25       | 0        | C             | UTCOMP.FCOUNTRY   |          |
| Remit Telephone Number         | 1739          | 1758         | 20       | 0        | C             | UTCOMP.FPHONE     |          |
| Remit Fax Number               | 1759          | 1778         | 20       | 0        | C             | UTCOMP.FCFAX      |          |
| Available for future use       | 1779          | 4096         |          |          |               |                   |          |

### 861-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

**Note:** All the fields marked with O are obsolete.

| **Field Description**             | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**  |  **Req** |
|-----------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'DET'          | 1             | 3            | 3        | 0        | C             | 'DET'             | X        |
| Receipt Authorized By             | 4             | 23           | 20       | 0        | C             | RCITEM.FAUTHORIZE |          |
| Bin Number                        | 24            | 31           | 8        | 0        | C             | RCITEM.FBINNO     |          |
| Purchase Category                 | 32            | 39           | 8        | 0        | C             | RCITEM.FCATEGORY  |          |
| Comment Line 1                    | 40            | 119          | 80       | 0        | M             | RCITEM.FCOMMENTS  |          |
| Comment Line 2                    | 120           | 199          | 80       | 0        | M             | RCITEM.FCOMMENTS  |          |
| Invoice Status                    | 200           | 200          | 1        | 0        | C             | RCITEM.FCSTATUS   |          |
| Part Description                  | 201           | 360          | 160      | 0        | M             | RCITEM.FDESCRIPT  |          |
| Date Expires                      | 361           | 368          | 8        | 0        | D             | RCITEM.FEXPDATE   |          |
| Inspection Required               | 369           | 369          | 1        | 0        | C             | RCITEM.FINSPECT   |          |
| Inventory Unit Cost               | 370           | 385          | 16       | 5        | N             | RCITEM.FINVCOST   |          |
| Quantity Invoiced, Vendor UoM     | 386           | 399          | 14       | 5        | N             | RCITEM.FINVQTY    |          |
| Quantity Invoiced, Inventory UoM  | 400           | 413          | 14       | 5        | N             | RCITEM.FIQTYINV   |          |
| Receiver Item Number              | 414           | 416          | 3        | 0        | C             | RCITEM.FITEMNO    |          |
| Job Order Number                  | 417           | 426          | 10       | 0        | C             | RCITEM.FJOKEY     |          |
| Expiration Date Required          | 427           | 427          | 1        | 0        | L             | RCITEM.FLEXPREQD  |          |
| Lot Control                       | 428           | 428          | 1        | 0        | L             | RCITEM.FLLOTREQD  |          |
| Location                          | 429           | 430          | 2        | 0        | C             | RCITEM.FLOCATION  |          |
| Lot                               | 431           | 450          | 20       | 0        | C             | RCITEM.FLOT       |          |
| Inventory UoM                     | 451           | 453          | 3        | 0        | C             | RCITEM.FMEASURE   |          |
| Part Number                       | 454           | 478          | 25       | 0        | C             | RCITEM.FPARTNO    |          |
| Part Revision                     | 479           | 481          | 3        | 0        | C             | RCITEM.FPARTREV   |          |
| PO Line Item                      | 482           | 484          | 3        | 0        | C             | RCITEM.FPOITEMNO  |          |
| Quantity Inspected                | 485           | 498          | 14       | 5        | N             | RCITEM.FQTYINSP   |          |
| Quantity Received; Stocking UoM   | 499           | 512          | 14       | 5        | N             | RCITEM.FQTYRECV   |          |
| Release Number                    | 513           | 515          | 3        | 0        | C             | RCITEM.FRELSNO    |          |
| Credited                          | 516           | 516          | 1        | 0        | C             | RCITEM.FRETCREDIT |          |
| Sales Order Item Number           | 517           | 519          | 3        | 0        | C             | RCITEM.FSOITEM    |          |
| Sales Order Number                | 520           | 525          | 6        | 0        | C             | RCITEM.FSOKEY     |          |
| Sales Order Item Release Number   | 526           | 528          | 3        | 0        | C             | RCITEM.FSORELSNO  |          |
| Detail Type                       | 529           | 529          | 1        | 0        | C             | RCITEM.FTYPE      |          |
| Unit Cost                         | 530           | 545          | 16       | 5        | N             | RCITEM.FUCOST     |          |
| Inventory or Vendor UoM           | 546           | 546          | 1        | 0        | C             | RCITEM.FUMVORI    |          |
| Vendor Number                     | 547           | 552          | 6        | 0        | C             | RCITEM.FVENDNO    |          |
| Quantity Received in Vendor Units | 553           | 566          | 14       | 5        | N             | RCITEM.FVQTYRECV  |          |
| To Job Lot                        | 567           | 586          | 20       | 0        | C             | RCITEM.FCTOJOBLOT |          |
| Percent Discount from PO          | 587           | 590          | 4        | 1        | N             | RCITEM.FDISCOUNT  |          |
| Euro Unit Cost                    | 591           | 606          | 16       | 5        | N             | RCITEM.FUEUROCOST | O        |
| Transaction Unit Cost             | 607           | 622          | 16       | 5        | N             | RCITEM.FUTXNCOST  |          |
| Euro Unit Cost Only               | 623           | 638          | 16       | 5        | N             | RCITEM.FUEURCSTON | O        |
| Transaction Unit Cost Only        | 639           | 654          | 16       | 5        | N             | RCITEM.FUTXNCSTON |          |
| Unit Cost Only                    | 655           | 670          | 16       | 5        | N             | RCITEM.FUCOSTONLY |          |
| Available for future use          | 671           | 4096         |          |          |               |                   |          |

## 862 - Shipping Schedule

Outbound 862 (Shipping Schedule) originates from the Made2Manage Shipper (SHIP) and other Made2Manage data sources. The layout of the 862 Fixed File Format is listed below. The hierarchy of each 862 transaction is single HDR system key segment. The header information is exported into a single BEG segment. Each line item is exported into a single DET segment and associated optional REL segment. A single SUM summary segment is exported after the last line item.

![](media/df77b70f544eb3400e66701404faca0f.png)

### 862-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** |  **Made2Manage**             |  **Req** |
|----------------------------------------------|---------------|--------------|----------|----------|---------------|------------------------------|----------|
| Header Record Tag: 'HDR'                     | 1             | 3            | 3        | 0        | C             | 'HDR'                        | X        |
| Transaction Set ID (Application Alias Value) | 4             | 9            | 6        | 0        | C             | 'SOSCH'                      | X        |
| Receiver EDI ID (Application Code)\#         | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| Test / Production (Test Mode)                | 30            | 30           | 1        | 0        | C             | 'T' = Test; 'P' = Production | X        |
| Original / Resend                            | 31            | 31           | 1        | 0        | C             | 'O' = Original; 'R' = Resend | X        |
| Sender EDI Qualifier                         | 32            | 33           | 2        | 0        | C             | XSETUP.FCTPQUAL              | X        |
| Sender EDI ID                                | 34            | 63           | 30       | 0        | C             | XSETUP.FCTPID                | X        |
| Receiver EDI Qualifier                       | 64            | 65           | 2        | 0        | C             | XCUSTEDI.FCEDIQUAL           | X        |
| Receiver EDI ID                              | 66            | 95           | 30       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| EDI-XML Document Definition                  | 96            | 105          | 10       | 0        | C             | ‘M2M_862’                    | X        |

\# Specific EDI ID exported when populated, otherwise general EDI ID exported

### 862-BEG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                     | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|-------------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'BEG'                  | 1             | 3            | 3       | 0       | C             | 'BEG'             | X       |
| Customer Number                           | 4             | 9            | 6       | 0       | C             | SOMAST.FCUSTNO    | X       |
| Trading Partner EDI ID                    | 10            | 29           | 20      | 0       | C             | XCUSTEDI.FCEDIID  |         |
| Customer Purchase Order Number            | 30            | 49           | 20      | 0       | C             | SOMAST.FCUSTPONO  | X       |
| Customer Notes Line 1                     | 50            | 129          | 80      | 0       | M             | SLCDPM.FMNOTES    |         |
| Customer Notes Line 2                     | 130           | 209          | 80      | 0       | M             | SLCDPM.FMNOTES    |         |
| User Defined Character 3                  | 210           | 249          | 40      | 0       | C             | SLCDPM.FCUSRCHR3  |         |
| User Defined Date 1                       | 250           | 257          | 8       | 0       | D             | SLCDPM.FDUSRDATE1 |         |
| User Defined Memo 1 Line 1                | 258           | 337          | 80      | 0       | M             | SLCDPM.FMUSRMEMO1 |         |
| User Defined Memo 1 Line 2                | 338           | 417          | 80      | 0       | M             | SLCDPM.FMUSRMEMO1 |         |
| User Defined Currency 1                   | 418           | 433          | 16      | 5       | N             | SLCDPM.FNUSRCUR1  |         |
| User Defined Qty 1                        | 434           | 447          | 14      | 5       | N             | SLCDPM.FNUSRQTY1  |         |
| User Defined Code                         | 448           | 454          | 7       | 0       | C             | SLCDPM.FUSERCODE  |         |
| Tax Exemption Number                      | 455           | 469          | 15      | 0       | C             | SLCDPM.FTAXEXEMPT |         |
| Sold-To Company Name                      | 470           | 504          | 35      | 0       | C             | SOMAST.FCOMPANY   |         |
| Sold-To Address Key                       | 505           | 510          | 6       | 0       | C             | SOMAST.FSOLDADDR  |         |
| Sold-To Address Line 1                    | 511           | 590          | 80      | 0       | M             | SOMAST.FMSTREET   |         |
| Sold-To Address Line 2                    | 591           | 670          | 80      | 0       | M             | SOMAST.FMSTREET   |         |
| Sold-To City                              | 671           | 690          | 20      | 0       | C             | SOMAST.FCITY      |         |
| Sold-To State                             | 691           | 710          | 20      | 0       | C             | SOMAST.FSTATE     |         |
| Sold-To Zip Code                          | 711           | 720          | 10      | 0       | C             | SOMAST.FZIP       |         |
| Sold-To Country                           | 721           | 745          | 25      | 0       | C             | SOMAST.FCOUNTRY   |         |
| Contact First Name                        | 746           | 760          | 15      | 0       | C             | SOMAST.FCFNAME    |         |
| Contact Last Name                         | 761           | 790          | 30      | 0       | C             | SOMAST.FCONTACT   |         |
| Sold-To Phone Number                      | 791           | 810          | 20      | 0       | C             | SOMAST.FPHONE     |         |
| Sold-To Fax Number                        | 811           | 830          | 20      | 0       | C             | SOMAST.FFAX       |         |
| Sales Order Number                        | 831           | 840          | 10      | 0       | C             | SOMAST.FSONO      |         |
| Sales Order Revision                      | 841           | 843          | 3       | 0       | C             | SOMAST.FSOREV     |         |
| Sales Order Name                          | 844           | 878          | 35      | 0       | C             | SOMAST.FORDERNAME |         |
| Order Date                                | 879           | 886          | 8       | 0       | D             | SOMAST.FORDERDATE |         |
| Due Date                                  | 887           | 894          | 8       | 0       | D             | SOMAST.FDUEDATE   |         |
| Acknowledgement Date                      | 895           | 902          | 8       | 0       | D             | SOMAST.FACKDATE   |         |
| Acknowledgement Memo Line 1               | 903           | 982          | 80      | 0       | M             | SOMAST.FACKMEMO   |         |
| Acknowledgement Memo Line 2               | 983           | 1062         | 80      | 0       | M             | SOMAST.FACKMEMO   |         |
| Cancelled Date                            | 1063          | 1070         | 8       | 0       | D             | SOMAST.FCANC_DT   |         |
| Closed Date                               | 1071          | 1078         | 8       | 0       | D             | SOMAST.FCLOS_DT   |         |
| Discount Rate                             | 1079          | 1085         | 7       | 3       | N             | SOMAST.FDISRATE   |         |
| Order Date Revision                       | 1086          | 1093         | 8       | 0       | D             | SOMAST.FORDREVDT  |         |
| Salesperson                               | 1094          | 1096         | 3       | 0       | C             | SOMAST.FSOLDBY    |         |
| Salespersons Last Name                    | 1097          | 1121         | 25      | 0       | C             | SLSPNS.FLASTNAME  |         |
| Sales Person Notes Line 1                 | 1122          | 1201         | 80      | 0       | M             | SLSPNS.FMNOTES    |         |
| Sales Person Notes Line 2                 | 1202          | 1281         | 80      | 0       | M             | SLSPNS.FMNOTES    |         |
| Sales Order Coordinator                   | 1282          | 1284         | 3       | 0       | C             | SOMAST.FSOCOORD   |         |
| Sales Order Transaction Currency          | 1285          | 1287         | 3       | 0       | C             | SOMAST.FCCURID    |         |
| Ship-To Address Key                       | 1288          | 1293         | 6       | 0       | C             | SOMAST.FSHPTOADDR |         |
| Ship Via                                  | 1294          | 1313         | 20      | 0       | C             | SOMAST.FSHIPVIA   |         |
| Ship-To Company                           | 1314          | 1348         | 35      | 0       | C             | SYADDR.FCCOMPANY  |         |
| Ship-To Address Line 1                    | 1349          | 1428         | 80      | 0       | M             | SYADDR.FMSTREET   |         |
| Ship-To Address Line 2                    | 1429          | 1508         | 80      | 0       | M             | SYADDR.FMSTREET   |         |
| Ship-To City                              | 1509          | 1528         | 20      | 0       | C             | SYADDR.FCITY      |         |
| Ship-To State                             | 1529          | 1548         | 20      | 0       | C             | SYADDR.FCSTATE    |         |
| Ship-To Zip                               | 1549          | 1558         | 10      | 0       | C             | SYADDR.FCZIP      |         |
| Ship-To Country                           | 1559          | 1583         | 25      | 0       | C             | SYADDR.FCCOUNTRY  |         |
| Ship-To Phone                             | 1584          | 1603         | 20      | 0       | C             | SYADDR.FCPHONE    |         |
| Ship-To Fax Number                        | 1604          | 1623         | 20      | 0       | C             | SYADDR.FCFAX      |         |
| Ship-To Email Address                     | 1624          | 1683         | 60      | 0       | C             | SYADDR.FCEMAIL    |         |
| Ship-To Contact First Name                | 1684          | 1698         | 15      | 0       | C             | SYADDR.FCFNAME    |         |
| Ship-To Contact Last Name                 | 1699          | 1718         | 20      | 0       | C             | SYADDR.FCLNAME    |         |
| Payment Type                              | 1719          | 1719         | 1       | 0       | C             | SOMAST.FPAYTYPE   |         |
| Terms For A Cash Payment                  | 1720          | 1723         | 4       | 0       | C             | SOMAST.FTERM      |         |
| Terms Description                         | 1724          | 1743         | 20      | 0       | C             | UTTERMS.FCDESCR   |         |
| Percent Discount after 1st Days           | 1744          | 1750         | 7       | 3       | N             | UTTERMS.FNPERCENT |         |
| Grace Allowed                             | 1751          | 1754         | 4       | 0       | I             | UTTERMS.FNGRACE   |         |
| Final Days Due                            | 1755          | 1758         | 4       | 0       | I             | UTTERMS.FNDUEDAYS |         |
| Days for which the 1st Discount Applies   | 1759          | 1762         | 4       | 0       | I             | UTTERMS.FNDAYS    |         |
| 2nd Percent Discount                      | 1763          | 1769         | 7       | 3       | N             | UTTERMS.FN2NDPER  |         |
| 2nd Days Due                              | 1770          | 1773         | 4       | 0       | I             | UTTERMS.FN2NDDAYS |         |
| Terms Notes Line 1                        | 1774          | 1853         | 80      | 0       | M             | UTTERMS.FMNOTES   |         |
| Terms Notes Line 2                        | 1854          | 1933         | 80      | 0       | M             | UTTERMS.FMNOTES   |         |
| Deposit Received                          | 1934          | 1949         | 16      | 5       | N             | SOMAST.FNDPSTRCVD |         |
| Deposit Required                          | 1950          | 1965         | 16      | 5       | N             | SOMAST.FNDPSTRQD  |         |
| Sales Tax Code                            | 1966          | 1968         | 3       | 0       | C             | SOMAST.FTAXCODE   |         |
| Sales Tax Rate                            | 1969          | 1973         | 5       | 3       | N             | SOMAST.FTAXRATE   |         |
| Freight on Board Point                    | 1974          | 1993         | 20      | 0       | C             | SOMAST.FFOB       |         |
| Sales Order Status                        | 1994          | 1994         | 1       | 0       | C             | SOMAST.FSTATUS    |         |
| User Defined Character 1                  | 1995          | 2014         | 20      | 0       | C             | SOMAST.FCUSRCHR1  |         |
| User Defined Character 2                  | 2015          | 2054         | 40      | 0       | C             | SOMAST.FCUSRCHR2  |         |
| User Defined Character 3                  | 2055          | 2094         | 40      | 0       | C             | SOMAST.FCUSRCHR3  |         |
| User Defined Quantity 1                   | 2095          | 2108         | 14      | 5       | N             | SOMAST.FNUSRQTY1  |         |
| User Defined Currency 1                   | 2109          | 2124         | 16      | 5       | N             | SOMAST.FNUSRCUR1  |         |
| User Defined Date 1                       | 2125          | 2132         | 8       | 0       | D             | SOMAST.FDUSRDATE1 |         |
| User Defined Memo 1 Line 1                | 2133          | 2212         | 80      | 0       | M             | SOMAST.FMUSRMEMO1 |         |
| User Defined Memo 1 Line 2                | 2213          | 2292         | 80      | 0       | M             | SOMAST.FMUSRMEMO1 |         |
| Remit Company Name                        | 2293          | 2327         | 35      | 0       | C             | UTCOMP.FCOMPANY   |         |
| Remit Address Line 1                      | 2328          | 2407         | 80      | 0       | M             | UTCOMP.FMADDRESS  |         |
| Remit Address Line 2                      | 2408          | 2487         | 80      | 0       | M             | UTCOMP.FMADDRESS  |         |
| Remit City                                | 2488          | 2507         | 20      | 0       | C             | UTCOMP.FCITY      |         |
| Remit State                               | 2508          | 2510         | 3       | 0       | C             | UTCOMP.FSTATE     |         |
| Remit Zip Code                            | 2511          | 2520         | 10      | 0       | C             | UTCOMP.FZIP       |         |
| Remit Country                             | 2521          | 2545         | 25      | 0       | C             | UTCOMP.FCOUNTRY   |         |
| Remit Telephone Number                    | 2546          | 2565         | 20      | 0       | C             | UTCOMP.FPHONE     |         |
| Remit Fax Number Available for future use | 2566          | 2585         | 20      | 0       | C             | UTCOMP.FCFAX      |         |

### 862-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|--------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'DET'             | 1             | 3            | 3       | 0       | C             | 'DET'             | X       |
| Part Number                          | 4             | 28           | 25      | 0       | C             | SOITEM.FPARTNO    | X       |
| Part Revision                        | 29            | 31           | 3       | 0       | C             | SOITEM.FPARTREV   |         |
| Item Number                          | 32            | 34           | 3       | 0       | C             | SOITEM.FENUMBER   |         |
| Next Item Number                     | 35            | 38           | 4       | 0       | C             | SOITEM.FNEXTINUM  |         |
| Next Release Number                  | 39            | 41           | 3       | 0       | C             | SOITEM.FNEXTREL   |         |
| Quantity                             | 42            | 57           | 16      | 5       | N             | SOITEM.FQUANTITY  | X       |
| Unit of Measure                      | 58            | 60           | 3       | 0       | C             | SOITEM.FMEASURE   |         |
| Source                               | 61            | 61           | 1       | 0       | C             | SOITEM.FSOURCE    |         |
| Part Number Description Line 1       | 62            | 141          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Part Number Description Line 2       | 142           | 221          | 80      | 0       | M             | SOITEM.FDESC      |         |
| Product Class                        | 222           | 225          | 4       | 0       | C             | SOITEM.FPRODCL    |         |
| Group Code                           | 226           | 231          | 6       | 0       | C             | SOITEM.FGROUP     |         |
| Unit Price                           | 232           | 247          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Customer Part Number                 | 248           | 272          | 25      | 0       | C             | SOITEM.FCUSTPART  |         |
| Customer Part Revision               | 273           | 275          | 3       | 0       | C             | SOITEM.FCUSTPTREV |         |
| Part Number Description Line 1       | 276           | 355          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Part Number Description Line 2       | 356           | 435          | 80      | 0       | M             | SOITEM.FDESCMEMO  |         |
| Delivery Notes Line 1                | 436           | 515          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2                | 516           | 595          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Order Billing Type                   | 596           | 598          | 3       | 0       | C             | SOITEM.FORDERTYPE |         |
| Use Standard BOMs and Routings       | 599           | 599          | 1       | 0       | L             | SOITEM.FSTANDPART |         |
| Lot/Serial Number Required           | 600           | 600          | 1       | 0       | L             | SOITEM.FLLOTREQD  |         |
| Extent of Lot Control                | 601           | 601          | 1       | 0       | C             | SOITEM.FCLOTEXT   |         |
| Taxable                              | 602           | 602          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Price Schedule Code                  | 603           | 608          | 6       | 0       | C             | SOITEM.FSCHECODE  |         |
| Ship-to Address Key                  | 609           | 614          | 6       | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                             | 615           | 622          | 8       | 0       | D             | SOITEM.FDUEDATE   |         |
| Close within minimum %               | 623           | 633          | 11      | 5       | N             | SOITEM.FNUNDER    |         |
| Close within maximum %               | 634           | 644          | 11      | 5       | N             | SOITEM.FNOVER     |         |
| Multi-Release                        | 645           | 645          | 1       | 0       | L             | SOITEM.FMULTIPLE  |         |
| Ship Item                            | 646           | 646          | 1       | 0       | L             | SOITEM.FSHIPITEM  |         |
| Split Ship                           | 647           | 647          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Create Jobs                          | 648           | 648          | 1       | 0       | L             | SOITEM.FAUTOCREAT |         |
| Print Memo                           | 649           | 649          | 1       | 0       | L             | SOITEM.FPRINTMEMO |         |
| Ship Early                           | 650           | 650          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| CTP Approved                         | 651           | 651          | 1       | 0       | L             | SORELS.FLATP      |         |
| Cross Reference Part Number          | 652           | 676          | 25      | 0       | C             | INCROS.FCROSSPART |         |
| Cross Reference Part Revision        | 677           | 679          | 3       | 0       | C             | INCROS.FCROSSREV  |         |
| Group Code Number                    | 680           | 685          | 6       | 0       | C             | INGRPC.FGC_NUMBER |         |
| Group Code Description               | 686           | 815          | 130     | 0       | C             | INGRPC.FPC_DESC   |         |
| Product Class Name                   | 816           | 827          | 12      | 0       | C             | INPROD.FPC_NAME   |         |
| Product Class Code                   | 828           | 831          | 4       | 0       | C             | INPROD.FPC_NUMBER |         |
| Product Class Description            | 832           | 886          | 55      | 0       | C             | INPROD.FPC_DESC   |         |
| Freight Class of Item                | 887           | 898          | 12      | 0       | C             | INMAST.FCCLASS    |         |
| Item Master Part Description         | 899           | 933          | 35      | 0       | C             | INMAST.FDESCRIPT  |         |
| Item Master Comment Line 1           | 934           | 1013         | 80      | 0       | M             | INMAST.FCOMMENT   |         |
| Item Master Comment Line 2           | 1014          | 1093         | 80      | 0       | M             | INMAST.FCOMMENT   |         |
| Item Master User Defined Character 1 | 1094          | 1113         | 20      | 0       | C             | INMAST.FCUSRCHR1  |         |
| Item Master User Defined Character 2 | 1114          | 1153         | 40      | 0       | C             | INMAST.FCUSRCHR2  |         |
| Item Master User Defined Character 3 | 1154          | 1193         | 40      | 0       | C             | INMAST.FCUSRCHR3  |         |
| Item Master User Defined Date 1      | 1194          | 1201         | 8       | 0       | D             | INMAST.FDUSRDATE1 |         |
| Item Master User Defined Memo Line 1 | 1202          | 1281         | 80      | 0       | M             | INMAST.FMUSRMEMO1 |         |
| Item Master User Defined Memo Line 2 | 1282          | 1361         | 80      | 0       | M             | INMAST.FMUSRMEMO1 |         |
| Item Master User Defined Currency 1  | 1362          | 1377         | 16      | 5       | N             | INMAST.FNUSRCUR1  |         |
| Item Master User Defined Quantity 1  | 1378          | 1391         | 14      | 5       | N             | INMAST.FNUSRQTY1  |         |
| Delivery Notes Line 1                | 1392          | 1471         | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2                | 1472          | 1551         | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Available for future use             | 1552          | 4090         |         |         |               |                   |         |

### 

### 862-REL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**              | **Beg. Pos.** | **End Pos.** | **Len** | **Dec** | **Data Type** | **Made2Manage**   | **Req** |
|------------------------------------|---------------|--------------|---------|---------|---------------|-------------------|---------|
| Header Record Tag: 'REL'           | 1             | 3            | 3       | 0       | C             | 'REL'             | X       |
| Ship-To Address Key                | 4             | 9            | 6       | 0       | C             | SORELS.FSHPTOADDR |         |
| Due Date                           | 10            | 17           | 8       | 0       | D             | SORELS.FDUEDATE   |         |
| Delivery Notes Line 1              | 18            | 97           | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Delivery Notes Line 2              | 98            | 177          | 80      | 0       | M             | SORELS.FDELIVERY  |         |
| Taxable                            | 178           | 178          | 1       | 0       | L             | SORELS.FLISTAXABL |         |
| Allow Split Shipments              | 179           | 179          | 1       | 0       | L             | SORELS.FSPLITSHP  |         |
| Ship Early                         | 180           | 180          | 1       | 0       | L             | SORELS.FSHPBEFDUE |         |
| Release Quantity                   | 181           | 194          | 14      | 5       | N             | SORELS.FORDERQTY  |         |
| Release Number                     | 195           | 197          | 3       | 0       | C             | SORELS.FRELEASE   |         |
| Unit Price                         | 198           | 213          | 16      | 5       | N             | SORELS.FUNETPRICE |         |
| Discount                           | 214           | 229          | 16      | 5       | N             | SORELS.FDISCOUNT  |         |
| Discount Percent                   | 230           | 245          | 16      | 5       | N             | SORELS.FDISCPCT   |         |
| Invoiced Quantity                  | 246           | 259          | 14      | 5       | N             | SORELS.FINVQTY    |         |
| Invoiced Amount                    | 260           | 273          | 14      | 5       | N             | SORELS.FINVAMOUNT |         |
| Last Shipped Date                  | 274           | 281          | 8       | 0       | D             | SORELS.FLSHIPDATE |         |
| Confirmed Stock Quantity Shipped   | 282           | 295          | 14      | 5       | N             | SORELS.FSHIPBOOK  |         |
| Confirmed Buy Quantity Shipped     | 296           | 309          | 14      | 5       | N             | SORELS.FSHIPBUY   |         |
| Confirmed Make Quantity Shipped    | 310           | 323          | 14      | 5       | N             | SORELS.FSHIPMAKE  |         |
| Unconfirmed Stock Quantity Shipped | 324           | 337          | 14      | 5       | N             | SORELS.FTOSHPBOOK |         |
| Unconfirmed Buy Quantity Shipped   | 338           | 351          | 14      | 5       | N             | SORELS.FTOSHPBUY  |         |
| Unconfirmed Make Quantity Shipped  | 352           | 365          | 14      | 5       | N             | SORELS.FTOSHPMAKE |         |
| Available for future use           | 366           | 4094         |         |         |               |                   |         |

### 

### 862-SUM

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**     | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage** |  **Req** |
|---------------------------|---------------|--------------|----------|----------|---------------|-----------------|----------|
| Summary Record Tag: 'SUM' | 1             | 3            | 3        | 0        | C             | 'SUM'           | X        |

## 865 - Purchase Order Change Acknowledgment

Outbound 865 (Purchase Order Change Acknowledgment) originates from the Made2Manage Sales Order (SO) and other Made2Manage data sources. The layout of the 865 Fixed File Format is listed below. The hierarchy of each 865 transaction is single HDR system key segment. The header information is exported into a single BEG segment. Each line item is exported into a single DET segment and associated optional REL segments. A single SUM summary segment is exported after the last line item.

![](media/df77b70f544eb3400e66701404faca0f.png)

### 865-HDR

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**              |  **Req** |
|----------------------------------------------|---------------|--------------|----------|----------|---------------|------------------------------|----------|
| Header Record Tag: 'HDR'                     | 1             | 3            | 3        | 0        | C             | 'HDR'                        | X        |
| Transaction Set ID (Application Alias Value) | 4             | 9            | 6        | 0        | C             | 'POCACK'                     | X        |
| Receiver EDI ID (Application Code)\#         | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| Test / Production (Test Mode)                | 30            | 30           | 1        | 0        | C             | 'T' = Test; 'P' = Production | X        |
| Original / Resend                            | 31            | 31           | 1        | 0        | C             | 'O' = Original; 'R' = Resend | X        |
| Sender EDI Qualifier                         | 32            | 33           | 2        | 0        | C             | XSETUP.FCTPQUAL              | X        |
| Sender EDI ID                                | 34            | 63           | 30       | 0        | C             | XSETUP.FCTPID                | X        |
| Receiver EDI Qualifier                       | 64            | 65           | 2        | 0        | C             | XCUSTEDI.FCEDIQUAL           | X        |
| Receiver EDI ID                              | 66            | 95           | 30       | 0        | C             | XCUSTEDI.FCEDIID             | X        |
| EDI-XML Document Definition                  | 96            | 105          | 10       | 0        | C             | ‘M2M_865’                    | X        |

\# Specific EDI ID exported when populated, otherwise general EDI ID exported

### 865-BEG

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                   | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|-----------------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'BEG'                | 1             | 3            | 3        | 0        | C             | 'BEG'             | X        |
| Customer Number                         | 4             | 9            | 6        | 0        | C             | SOMAST.FCUSTNO    | X        |
| Trading Partner EDI ID                  | 10            | 29           | 20       | 0        | C             | XCUSTEDI.FCEDIID  |          |
| Customer Purchase Order Number          | 30            | 49           | 20       | 0        | C             | SOMAST.FCUSTPONO  | X        |
| Customer Notes                          | 50            | 129          | 80       | 0        | M             | SLCDPM.FMNOTES    |          |
| Customer Notes                          | 130           | 209          | 80       | 0        | M             | SLCDPM.FMNOTES    |          |
| User Defined Character 3                | 210           | 249          | 40       | 0        | C             | SLCDPM.FCUSRCHR3  |          |
| User Defined Date 1                     | 250           | 257          | 8        | 0        | D             | SLCDPM.FDUSRDATE1 |          |
| User Defined Memo 1 Line 1              | 258           | 337          | 80       | 0        | M             | SLCDPM.FMUSRMEMO1 |          |
| User Defined Memo 1 Line 2              | 338           | 417          | 80       | 0        | M             | SLCDPM.FMUSRMEMO1 |          |
| User Defined Currency 1                 | 418           | 433          | 16       | 5        | N             | SLCDPM.FNUSRCUR1  |          |
| User Defined Quantity 1                 | 434           | 447          | 14       | 5        | N             | SLCDPM.FNUSRQTY1  |          |
| User Defined Code                       | 448           | 454          | 7        | 0        | C             | SLCDPM.FUSERCODE  |          |
| Tax Exemption Number                    | 455           | 469          | 15       | 0        | C             | SLCDPM.FTAXEXEMPT |          |
| Sold-To Company Name                    | 470           | 504          | 35       | 0        | C             | SOMAST.FCOMPANY   |          |
| Sold-To Address Key                     | 505           | 510          | 6        | 0        | C             | SOMAST.FSOLDADDR  |          |
| Sold-To Address Line 1                  | 511           | 590          | 80       | 0        | M             | SOMAST.FMSTREET   |          |
| Sold-To Address Line 2                  | 591           | 670          | 80       | 0        | M             | SOMAST.FMSTREET   |          |
| Sold-To City                            | 671           | 690          | 20       | 0        | C             | SOMAST.FCITY      |          |
| Sold-To State                           | 691           | 710          | 20       | 0        | C             | SOMAST.FSTATE     |          |
| Sold-To Zip Code                        | 711           | 720          | 10       | 0        | C             | SOMAST.FZIP       |          |
| Sold-To Country                         | 721           | 745          | 25       | 0        | C             | SOMAST.FCOUNTRY   |          |
| Contact First Name                      | 746           | 760          | 15       | 0        | C             | SOMAST.FCFNAME    |          |
| Contact Last Name                       | 761           | 790          | 30       | 0        | C             | SOMAST.FCONTACT   |          |
| Sold-To Phone Number                    | 791           | 810          | 20       | 0        | C             | SOMAST.FPHONE     |          |
| Sold-To Fax Number                      | 811           | 830          | 20       | 0        | C             | SOMAST.FFAX       |          |
| Sales Order Number                      | 831           | 840          | 10       | 0        | C             | SOMAST.FSONO      |          |
| Sales Order Revision                    | 841           | 843          | 3        | 0        | C             | SOMAST.FSOREV     |          |
| Sales Order Name                        | 844           | 878          | 35       | 0        | C             | SOMAST.FORDERNAME |          |
| Order Date                              | 879           | 886          | 8        | 0        | D             | SOMAST.FORDERDATE |          |
| Due Date                                | 887           | 894          | 8        | 0        | D             | SOMAST.FDUEDATE   |          |
| Acknowledgement Date                    | 895           | 902          | 8        | 0        | D             | SOMAST.FACKDATE   |          |
| Acknowledgement Memo Line 1             | 903           | 982          | 80       | 0        | M             | SOMAST.FACKMEMO   |          |
| Acknowledgement Memo Line 2             | 983           | 1062         | 80       | 0        | M             | SOMAST.FACKMEMO   |          |
| Cancelled Date                          | 1063          | 1070         | 8        | 0        | D             | SOMAST.FCANC_DT   |          |
| Closed Date                             | 1071          | 1078         | 8        | 0        | D             | SOMAST.FCLOS_DT   |          |
| Discount Rate                           | 1079          | 1085         | 7        | 3        | N             | SOMAST.FDISRATE   |          |
| Order Date Revision                     | 1086          | 1093         | 8        | 0        | D             | SOMAST.FORDREVDT  |          |
| Salesperson                             | 1094          | 1096         | 3        | 0        | C             | SOMAST.FSOLDBY    |          |
| Sales Person Last Name                  | 1097          | 1121         | 25       | 0        | C             | SLSPNS.FLASTNAME  |          |
| Sales Person Notes Line 1               | 1122          | 1201         | 80       | 0        | M             | SLSPNS.FMNOTES    |          |
| Sales Person Notes Line 2               | 1202          | 1281         | 80       | 0        | M             | SLSPNS.FMNOTES    |          |
| Sales Order Coordinator                 | 1282          | 1284         | 3        | 0        | C             | SOMAST.FSOCOORD   |          |
| Sales Order Transaction Currency        | 1285          | 1287         | 3        | 0        | C             | SOMAST.FCCURID    |          |
| Ship To Address Key                     | 1288          | 1293         | 6        | 0        | C             | SOMAST.FSHPTOADDR |          |
| Ship Via                                | 1294          | 1313         | 20       | 0        | C             | SOMAST.FSHIPVIA   |          |
| Ship-To Company                         | 1314          | 1348         | 35       | 0        | C             | SYADDR.FCCOMPANY  |          |
| Ship-To Address Line 1                  | 1349          | 1428         | 80       | 0        | M             | SYADDR.FMSTREET   |          |
| Ship-To Address Line 2                  | 1429          | 1508         | 80       | 0        | M             | SYADDR.FMSTREET   |          |
| Ship-To City                            | 1509          | 1528         | 20       | 0        | C             | SYADDR.FCITY      |          |
| Ship-To State                           | 1529          | 1548         | 20       | 0        | C             | SYADDR.FCSTATE    |          |
| Ship-To Zip                             | 1549          | 1558         | 10       | 0        | C             | SYADDR.FCZIP      |          |
| Ship-To Country                         | 1559          | 1583         | 25       | 0        | C             | SYADDR.FCCOUNTRY  |          |
| Ship-To Phone                           | 1584          | 1603         | 20       | 0        | C             | SYADDR.FCPHONE    |          |
| Ship-To Fax Number                      | 1604          | 1623         | 20       | 0        | C             | SYADDR.FCFAX      |          |
| Ship-To Email Address                   | 1624          | 1683         | 60       | 0        | C             | SYADDR.FCEMAIL    |          |
| Ship-To Contact First Name              | 1684          | 1698         | 15       | 0        | C             | SYADDR.FCFNAME    |          |
| Ship-To Contact Last Name               | 1699          | 1718         | 20       | 0        | C             | SYADDR.FCLNAME    |          |
| Payment Type                            | 1719          | 1719         | 1        | 0        | C             | SOMAST.FPAYTYPE   |          |
| Terms For A Cash Payment                | 1720          | 1723         | 4        | 0        | C             | SOMAST.FTERM      |          |
| Terms Description                       | 1724          | 1743         | 20       | 0        | C             | UTTERMS.FCDESCR   |          |
| Percent Discount after 1st Days         | 1744          | 1750         | 7        | 3        | N             | UTTERMS.FNPERCENT |          |
| Grace Allowed                           | 1751          | 1754         | 4        | 0        | I             | UTTERMS.FNGRACE   |          |
| Final Days Due                          | 1755          | 1758         | 4        | 0        | I             | UTTERMS.FNDUEDAYS |          |
| Days for which the 1st Discount Applies | 1759          | 1762         | 4        | 0        | I             | UTTERMS.FNDAYS    |          |
| 2nd Percent Discount                    | 1763          | 1769         | 7        | 3        | N             | UTTERMS.FN2NDPER  |          |
| 2nd Days Due                            | 1770          | 1773         | 4        | 0        | I             | UTTERMS.FN2NDDAYS |          |
| Terms Notes Line 1                      | 1774          | 1853         | 80       | 0        | M             | UTTERMS.FMNOTES   |          |
| Terms Notes Line 2                      | 1854          | 1933         | 80       | 0        | M             | UTTERMS.FMNOTES   |          |
| Deposit Received                        | 1934          | 1949         | 16       | 5        | N             | SOMAST.FNDPSTRCVD |          |
| Deposit Required                        | 1950          | 1965         | 16       | 5        | N             | SOMAST.FNDPSTRQD  |          |
| Sales Tax Code                          | 1966          | 1968         | 3        | 0        | C             | SOMAST.FTAXCODE   |          |
| Sales Tax Rate                          | 1969          | 1973         | 5        | 3        | N             | SOMAST.FTAXRATE   |          |
| Freight on Board Point                  | 1974          | 1993         | 20       | 0        | C             | SOMAST.FFOB       |          |
| Sales Order Status                      | 1994          | 1994         | 1        | 0        | C             | SOMAST.FSTATUS    |          |
| User Defined Character 1                | 1995          | 2014         | 20       | 0        | C             | SOMAST.FCUSRCHR1  |          |
| User Defined Character 2                | 2015          | 2054         | 40       | 0        | C             | SOMAST.FCUSRCHR2  |          |
| User Defined Character 3                | 2055          | 2094         | 40       | 0        | C             | SOMAST.FCUSRCHR3  |          |
| User Defined Quantity 1                 | 2095          | 2108         | 14       | 5        | N             | SOMAST.FNUSRQTY1  |          |
| User Defined Currency1                  | 2109          | 2124         | 16       | 5        | N             | SOMAST.FNUSRCUR1  |          |
| User Defined Date 1                     | 2125          | 2132         | 8        | 0        | D             | SOMAST.FDUSRDATE1 |          |
| User Defined Memo 1 Line 1              | 2133          | 2212         | 80       | 0        | M             | SOMAST.FMUSRMEMO1 |          |
| User Defined Memo 1 Line 2              | 2213          | 2292         | 80       | 0        | M             | SOMAST.FMUSRMEMO1 |          |
| Remit Company Name                      | 2293          | 2327         | 35       | 0        | C             | UTCOMP.FCOMPANY   |          |
| Remit Address Line 1                    | 2328          | 2407         | 80       | 0        | M             | UTCOMP.FMADDRESS  |          |
| Remit Address Line 2                    | 2408          | 2487         | 80       | 0        | M             | UTCOMP.FMADDRESS  |          |
| Remit City                              | 2488          | 2507         | 20       | 0        | C             | UTCOMP.FCITY      |          |
| Remit State                             | 2508          | 2510         | 3        | 0        | C             | UTCOMP.FSTATE     |          |
| Remit Zip Code                          | 2511          | 2520         | 10       | 0        | C             | UTCOMP.FZIP       |          |
| Remit Country                           | 2521          | 2545         | 25       | 0        | C             | UTCOMP.FCOUNTRY   |          |
| Remit Telephone Number                  | 2546          | 2565         | 20       | 0        | C             | UTCOMP.FPHONE     |          |
| Remit Fax Number                        | 2566          | 2585         | 20       | 0        | C             | UTCOMP.FCFAX      |          |
| Available for future use                | 2586          | 4082         |          |          |               |                   |          |

### 865-DET

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**                | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|--------------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'DET'             | 1             | 3            | 3        | 0        | C             | 'DET'             | X        |
| Part Number                          | 4             | 28           | 25       | 0        | C             | SOITEM.FPARTNO    | X        |
| Part Revision                        | 29            | 31           | 3        | 0        | C             | SOITEM.FPARTREV   |          |
| Item Number                          | 32            | 34           | 3        | 0        | C             | SOITEM.FENUMBER   |          |
| Next Item Number                     | 35            | 38           | 4        | 0        | C             | SOITEM.FNEXTINUM  |          |
| Next Release Number                  | 39            | 41           | 3        | 0        | C             | SOITEM.FNEXTREL   |          |
| Quantity                             | 42            | 57           | 16       | 5        | N             | SOITEM.FQUANTITY  | X        |
| Unit of Measure                      | 58            | 60           | 3        | 0        | C             | SOITEM.FMEASURE   |          |
| Source                               | 61            | 61           | 1        | 0        | C             | SOITEM.FSOURCE    |          |
| Part Number Description Line 1       | 62            | 141          | 80       | 0        | M             | SOITEM.FDESC      |          |
| Part Number Description Line 2       | 142           | 221          | 80       | 0        | M             | SOITEM.FDESC      |          |
| Product Class                        | 222           | 225          | 4        | 0        | C             | SOITEM.FPRODCL    |          |
| Group Code                           | 226           | 231          | 6        | 0        | C             | SOITEM.FGROUP     |          |
| Unit Price                           | 232           | 247          | 16       | 5        | N             | SORELS.FUNETPRICE |          |
| Customer Part Number                 | 248           | 272          | 25       | 0        | C             | SOITEM.FCUSTPART  |          |
| Customer Part Revision               | 273           | 275          | 3        | 0        | C             | SOITEM.FCUSTPTREV |          |
| Part Number Description Line 1       | 276           | 355          | 80       | 0        | M             | SOITEM.FDESCMEMO  |          |
| Part Number Description Line 2       | 356           | 435          | 80       | 0        | M             | SOITEM.FDESCMEMO  |          |
| Delivery Notes Line 1                | 436           | 515          | 80       | 0        | M             | SORELS.FDELIVERY  |          |
| Delivery Notes Line 2                | 516           | 595          | 80       | 0        | M             | SORELS.FDELIVERY  |          |
| Order Billing Type                   | 596           | 598          | 3        | 0        | C             | SOITEM.FORDERTYPE |          |
| Use Standard BOMs and Routings       | 599           | 599          | 1        | 0        | L             | SOITEM.FSTANDPART |          |
| Lot/Serial Number Required           | 600           | 600          | 1        | 0        | L             | SOITEM.FLLOTREQD  |          |
| Extent of Lot Control                | 601           | 601          | 1        | 0        | C             | SOITEM.FCLOTEXT   |          |
| Taxable                              | 602           | 602          | 1        | 0        | L             | SORELS.FLISTAXABL |          |
| Price Schedule Code                  | 603           | 608          | 6        | 0        | C             | SOITEM.FSCHECODE  |          |
| Ship-To Address Key                  | 609           | 614          | 6        | 0        | C             | SORELS.FSHPTOADDR |          |
| Due Date                             | 615           | 622          | 8        | 0        | D             | SOITEM.FDUEDATE   |          |
| Close within minimum %               | 623           | 633          | 11       | 5        | N             | SOITEM.FNUNDER    |          |
| Close within maximum %               | 634           | 644          | 11       | 5        | N             | SOITEM.FNOVER     |          |
| Multi-Release                        | 645           | 645          | 1        | 0        | L             | SOITEM.FMULTIPLE  |          |
| Ship Item                            | 646           | 646          | 1        | 0        | L             | SOITEM.FSHIPITEM  |          |
| Split Ship                           | 647           | 647          | 1        | 0        | L             | SORELS.FSPLITSHP  |          |
| Create Jobs                          | 648           | 648          | 1        | 0        | L             | SOITEM.FAUTOCREAT |          |
| Print Memo                           | 649           | 649          | 1        | 0        | L             | SOITEM.FPRINTMEMO |          |
| Ship Early                           | 650           | 650          | 1        | 0        | L             | SORELS.FSHPBEFDUE |          |
| CTP Approved                         | 651           | 651          | 1        | 0        | L             | SORELS.FLATP      |          |
| Cross Reference Part Number          | 652           | 676          | 25       | 0        | C             | INCROS.FCROSSPART |          |
| Cross Reference Part Revision        | 677           | 679          | 3        | 0        | C             | INCROS.FCROSSREV  |          |
| Group Code Number                    | 680           | 685          | 6        | 0        | C             | INGRPC.FGC_NUMBER |          |
| Group Code Description               | 686           | 815          | 130      | 0        | C             | INGRPC.FPC_DESC   |          |
| Product Class Name                   | 816           | 827          | 12       | 0        | C             | INPROD.FPC_NAME   |          |
| Product Class Code                   | 828           | 831          | 4        | 0        | C             | INPROD.FPC_NUMBER |          |
| Product Class Description            | 832           | 886          | 55       | 0        | C             | INPROD.FPC_DESC   |          |
| Item Master Freight Class            | 887           | 898          | 12       | 0        | C             | INMAST.FCCLASS    |          |
| Item Master Part Description         | 899           | 933          | 35       | 0        | C             | INMAST.FDESCRIPT  |          |
| Item Master Comment Line 1           | 934           | 1013         | 80       | 0        | M             | INMAST.FCOMMENT   |          |
| Item Master Comment Line2            | 1014          | 1093         | 80       | 0        | M             | INMAST.FCOMMENT   |          |
| Item Master User Defined Character 1 | 1094          | 1113         | 20       | 0        | C             | INMAST.FCUSRCHR1  |          |
| Item Master User Defined Character 2 | 1114          | 1153         | 40       | 0        | C             | INMAST.FCUSRCHR2  |          |
| Item Master User Defined Character 3 | 1154          | 1193         | 40       | 0        | C             | INMAST.FCUSRCHR3  |          |
| Item Master User Defined Date 1      | 1194          | 1201         | 8        | 0        | D             | INMAST.FDUSRDATE1 |          |
| Item Master User Defined Memo Line 1 | 1202          | 1281         | 80       | 0        | M             | INMAST.FMUSRMEMO1 |          |
| Item Master User Defined Memo Line 2 | 1282          | 1361         | 80       | 0        | M             | INMAST.FMUSRMEMO1 |          |
| Item Master User Defined Currency 1  | 1362          | 1377         | 16       | 5        | N             | INMAST.FNUSRCUR1  |          |
| Item Master User Defined Quantity 1  | 1378          | 1391         | 14       | 5        | N             | INMAST.FNUSRQTY1  |          |
| Available for future use             | 1392          | 4090         |          |          |               |                   |          |

### 

### 865-REL

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**              | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage**   |  **Req** |
|------------------------------------|---------------|--------------|----------|----------|---------------|-------------------|----------|
| Header Record Tag: 'REL'           | 1             | 3            | 3        | 0        | C             | 'REL'             | X        |
| Ship-To Address Key                | 4             | 9            | 6        | 0        | C             | SORELS.FSHPTOADDR |          |
| Due Date                           | 10            | 17           | 8        | 0        | D             | SORELS.FDUEDATE   |          |
| Delivery Notes Line 1              | 18            | 97           | 80       | 0        | M             | SORELS.FDELIVERY  |          |
| Delivery Notes Line 2              | 98            | 177          | 80       | 0        | M             | SORELS.FDELIVERY  |          |
| Taxable                            | 178           | 178          | 1        | 0        | L             | SORELS.FLISTAXABL |          |
| Allow Split Shipments              | 179           | 179          | 1        | 0        | L             | SORELS.FSPLITSHP  |          |
| Ship Early                         | 180           | 180          | 1        | 0        | L             | SORELS.FSHPBEFDUE |          |
| Release Quantity                   | 181           | 194          | 14       | 5        | N             | SORELS.FORDERQTY  |          |
| Release Number                     | 195           | 197          | 3        | 0        | C             | SORELS.FRELEASE   |          |
| Unit Price                         | 198           | 213          | 16       | 5        | N             | SORELS.FUNETPRICE |          |
| Discount                           | 214           | 229          | 16       | 5        | N             | SORELS.FDISCOUNT  |          |
| Discount Percent                   | 230           | 245          | 16       | 5        | N             | SORELS.FDISCPCT   |          |
| Invoiced Quantity                  | 246           | 259          | 14       | 5        | N             | SORELS.FINVQTY    |          |
| Invoiced Amount                    | 260           | 273          | 14       | 5        | N             | SORELS.FINVAMOUNT |          |
| Last Shipped Date                  | 274           | 281          | 8        | 0        | D             | SORELS.FLSHIPDATE |          |
| Confirmed Stock Quantity Shipped   | 282           | 295          | 14       | 5        | N             | SORELS.FSHIPBOOK  |          |
| Confirmed Buy Quantity Shipped     | 296           | 309          | 14       | 5        | N             | SORELS.FSHIPBUY   |          |
| Confirmed Make Quantity Shipped    | 310           | 323          | 14       | 5        | N             | SORELS.FSHIPMAKE  |          |
| Unconfirmed Stock Quantity Shipped | 324           | 337          | 14       | 5        | N             | SORELS.FTOSHPBOOK |          |
| Unconfirmed Buy Quantity Shipped   | 338           | 351          | 14       | 5        | N             | SORELS.FTOSHPBUY  |          |
| Unconfirmed Make Quantity Shipped  | 352           | 365          | 14       | 5        | N             | SORELS.FTOSHPMAKE |          |
| Available for future use           | 366           | 4094         |          |          |               |                   |          |

### 865-SUM

The table below outlines the field descriptions, positions, lengths, data types, and Made2Manage fields for each record.

| **Field Description**        | **Beg. Pos.** | **End Pos.** |  **Len** |  **Dec** | **Data Type** | **Made2Manage** |  **Req** |
|------------------------------|---------------|--------------|----------|----------|---------------|-----------------|----------|
| Summary Record Tag: 'SUM'    | 1             | 3            | 3        | 0        | C             | ‘SUM’           | X        |
| Number of Line Items         | 4             | 7            | 4        | 0        | N             | Calculated      | X        |
| Total Line-Item Quantity Sum | 8             | 23           | 16       | 5        | N             | Calculated      | X        |
