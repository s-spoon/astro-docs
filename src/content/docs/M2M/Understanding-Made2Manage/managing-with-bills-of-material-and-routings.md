---

title: "Managing Bills of Material and Routings"
draft: false
type: Article

---

Once you add a part to the item master, you can add bills of material and routings for the production process. A bill of material (BOM) is a comprehensive list of all parts and assemblies need to produce an item. This information is utilized in quotations, sales orders, and job orders.
A routing sequentially lists all operations required to manufacture a part.

While parts have standard bills of material and routings, you can associate a casual or detailed BOM and routing with a part when including it in a quotation, sales order, or job order. Casual bills and routings loosely specify information and include broad cost estimates while detailed bills and routings are precise and include detailed cost estimates.

For organizations with multiple manufacturing facilities, detailed BOMs allow you to select where you manufacture a component part.. You can add a component part to a detailed BOM with a source facility different from the destination facility. For example, if you create a sales or job order detailed BOM at facility A that includes a make component part with a source facility of facility B. When you open the job or sales order containing this part, Made2Manage adds an inter-facility supply order (ISO) to the inter- facility supply order queue. When you set the ISO to open status, Made2Manage creates an inter-facil- ity demand order (IDO) for facility B. Facility B receives the IDO, manufactures the component part, and ships it to facility A. 

If you maintain inventory across multiple facilities, detailed BOMs also enable you to get materials from other facilities' inventory. For example, adding a sales or job order detailed BOM at facility A that includes a stock component part with a source facility of facility B. When you open the job or sales order containing this part, Made2Manage adds an inter-facility supply order to the inter-facility supply order queue. When you set the ISO to open status, Made2Manage creates an inter-facility demand order for facility B. Facility B receives the IDO and ships it to facility A.

Made2Manage allows you to associate BOM component parts with routing operations. The operation start date is used to calculate the component's need date, enabling time-phased material requirements and more efficient scheduling material releases and production phases.

You can associate routing operations with components in detailed or standard bills of material.


​