---

title: "Understanding the Restricted Character Combinations in Made2Manage 8.0"
draft: false
type: Article

---

With the .NET upgrade and increased security requirements, the following character combinations are no longer allowed within Made2Manage.

| ='    | >'   | \<'  | = '   | > ' | \< ' | like ' | ,   |
|-------|-------|------|-------|------|------|--------|-----|
| ' + ' | ' and | ' or | ' not | ('   | ')   | ',     | ' , |
|  ' ,  | ,'    | , '  | [     | ]    | "    | [","]  | ,   |


> [!Note] Starting with Made2Manage 8.0, the upgrade process includes Pre-Migration validation checks for invalid character combinations in part numbers. If any invalid combinations are detected, the migration to 8.0 will be halted until these records are corrected.
Before upgrading, run the Validate Existing Data against your company’s to identify any invalid character combinations that prevent the migration. Click the See Details link to view the invalid character combinations and the associated tables for manual correction.
If the migration fails during the upgrade, you can view the failed records by navigating to the Server and Database files (Upgrade) screen. Click the See Details link next to the Validate databases (Schema and data). The .CSV file containing the failed records will be saved at the following path, regardless of whether the issue arose during Validate Existing Database or Installation and Upgrade:   
Syspath\Common\RestrictedCharacersScanner\RestrictedCharacterList.csv