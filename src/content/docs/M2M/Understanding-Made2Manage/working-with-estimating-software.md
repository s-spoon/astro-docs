---

title: "Working with estimating software"
draft: false
type: Article

---

You can use estimating software produced by other vendors to create quotations for products you sell. The estimating software produces an estimate file you can import into Made2Manage.

> [!Important] Import data only with the complete involvement of **Implementation Consulting and/or Customer Support**, which provide expertise and additional tools to ensure success. If you import data without our complete involvement, your support contract does not cover us fixing any problems that arise. In such cases, you can arrange for support of data import problems from Consona ERP, Inc. for an extra charge of time and materials.

Before you import a quotation, export the information from the estimating software into a comma-delimited text file. In the estimating software, arrange the data to use these field names and properties:

| Field      | Type      | Size | Description            | Required |
|------------|-----------|------|------------------------|----------|
| fac        | Character | 20   | Distribution Facility  | Y        |
| fafile     | Character | 1    | Estimate Imported      | Y        |
| faqty      | Number    | 15   | Quantity               | N        |
| fatype     | Character | 1    | Import Type            | Y        |
| fscustpart | Character | 25   | Customer Part Number   | N        |
| fscustptre | Character | 3    | Customer Part Revision | N        |
| fsdesc     | Character | Max  | Part Description       | N        |
| fsdesc1    | Character | Max  | Memo 1                 | N        |
| fsdesc2    | Character | Max  | Memo 2                 | N        |
| fsdesc3    | Character | Max  | Memo 3                 | N        |
| fsdesc4    | Character | Max  | Memo 4                 | N        |
| fsmeasure  | Character | 3    | Unit of Measure        | Y        |
| fspartno   | Character | 25   | Part Number            | Y        |
| fspartrev  | Character | 3    | Part Revision Number   | N        |
| fsprice    | Number    | 15   | Unit Price             | N        |

The text file is a database with one record for the item, one record for each item on the BOM, and one record for each routing operation.

- In the **faType** field, enter **S** for an item record.

- Include fields that begin with **fa** in all records. Include fields that begin with **fs** only in **S** records.

- Numerical fields can hold up to **five digits** after the decimal point.

​