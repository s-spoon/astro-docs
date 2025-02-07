---
title: "Populating Fields"
draft: false
type: Article
---


Selecting fields is achieved by first selecting the field to populate, once open clicking and dragging over an area of text on the document will create a coloured overlay indicating which area of the document will be checked for any text and placed into that document field.

If the selection is not quite correct you can modify the selection area in multiple ways:

- Using the drag handles on each edge to change the dimensions of the selection area.
- Moving the selection area to a different position on the page by clicking and dragging the coloured overlay.
- Creating a new area elsewhere on the page by dragging in a new position.
- Deleting the area by using the delete button

Additionally when dragging the selection area for a table the overlay will contain areas for each column, these can be moved left and right by clicking and dragging & their width can be altered by clicking and dragging the left and right edge. Columns can be added and removed by enabling/disabling the respective column in the list.

After selecting a field to populate there are numerous options available.

-	Use Static Value: Allows for the field to be populated with a single static value across all documents for this template.
-	Prefix & Suffix: Allows for the addition of a prefix and/or suffix on the field as well as the removal of any number of prefixes and/or suffixes from the value. This can be used for example to apply a standard prefix to detected Purchase Order Numbers to match a prefix in the connected ERP solution.
-	Add Anchor: See [Anchors](./anchors.md).

Table type document fields have additional configuration options per column.

-	Enabled: Whether this column should be used for this document field.
-	Required: Whether this column should be used to determine if the detected text on this row forms a new item in the table or is a continuation of the previous item. Note: A field marked as required must exist on the first row of a multi-line item & there has to be at least one required field per table.
-	Specific Rows: Filters down the column content to only specific row of a multi-line item, this is most often used when the table in question stacks multiple columns atop of each other.
-	Prefix & Suffixes: This functions the same as the Document Field prefix and suffix options.

Tables also contain 2 additional columns that are not presented in the output, Row Identifier 1 and Row Identifier 2. These columns can be used in cases where there are no combination of columns that can be marked as required without still picking up incorrect information not relating to the table. These fields are only used to identify what is an item in table and are not included in the output in the Document Viewer or sent to the connected ERP solution. A common use case for this is to attach one to a line number column on the document.

Tables also contain an option for ‘Row Height Tolerance’ this option configures how much each line of text in the table can move up and/or down before it is considered a new line. The left most character is used as the basis for this with 0% being no movement & 100% being one entire character either above or below. This can be used to account for small differences in font size or alignment in some documents.

Dates contain an option to select the formatting of the date on the document to allow this to be reliably converted to a format Invoice Automation can understand. This is required due to the ambiguity in the formatting of dates from different countries, for example 02/03/2023 could be both interpreted as 2nd March or 3rd February 2023.
