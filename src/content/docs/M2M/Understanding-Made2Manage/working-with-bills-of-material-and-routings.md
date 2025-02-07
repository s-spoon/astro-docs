---

title: "Working with bills of material and routings"
draft: false
type: Article

---

Once you add a part's item master, you can add bills of material and routings for the production process. A bill of material is a list of all the parts and assemblies you need to produce an item. Quotations, sales orders, and job orders use the information on bills of material.

A routing sequentially lists all operations needed to make a part.

Parts generally have standard bills of material and routings, but when a part does not, you can associate a casual or detailed  bill of material and routing with the part when you include it in a quotation, sales order, or job order. Casual bills and routings loosely specify information and include broad cost estimates while detailed bills and routings are precise and include detailed cost estimates.

If you have multiple manufacturing facilities, detailed bills of material let you select where you manufacture a component part. You can manufacture a component part at a different facility than the parent part by adding a component part to a detailed bill of material where the source facility is different from the destination facility. For example, add a sales or job order detailed bill of material at facility A that includes a make component part with a source facility of facility B. When you open the job or sales order containing this part, Made2Manage adds an inter-facility supply order (ISO) to the inter-facility supply order queue. When you set the ISO to open status, Made2Manage creates an inter-facility demand order (IDO) for facility B. Facility B receives the IDO, manufactures the component part, and ships it to facility A.

Additionally, if you store inventory at multiple facilities, detailed bills of material let you get materials from other facilities' inventory. For example, add a sales or job order detailed bill of material at facility A that includes a stock component part with a source facility of facility B. When you open the job or sales order containing this part, Made2Manage adds an inter-facility supply order to the inter-facility supply order queue. When you set the ISO to open status, Made2Manage creates an inter-facility demand order for facility B. Facility B receives the IDO and ships it to facility A.


Made2Manage lets you associate bill of material component parts with routing operations. Made2Manage then uses the operation start date to calculate the component's need date. Specifying separate need dates for component parts enables you to time-phase material requirements and allows you to more efficiently schedule material releases and production phases.

You can associate routing operations with components in detailed or standard bills of material.

​