---  
 
title: "Not getting desired output when the Not In operator is used in a query"  
draft: false 
type: KB Article
 
---

## Problem

The **IN** and **NOT IN** operators fail to include records with blank values. For instance, consider the
**Approved By** field in a **Work Order** search. Initially, the **Approved By** value is blank until it is
approved by someone. When crafting a query to retrieve records not approved by **XYZ**, the
expectation is to obtain all non-approved records (those with a blank value) along with records
approved by values other than **XYZ**. However, the NOT IN operator only provides a set of rows
where the Approved By field does not contain **XYZ** but it neglects to include the non-approved
records in the result set.

**Solution**:  
The use of the **IN** and **NOT IN** operators in combination with a blank or null value for the
**Approved By field** does not return records as expected, and this behavior observed is by design.

## FAQ

### Q1. Why are records with a blank "Approved By" value not retrieved when using the NOT IN operator?

**Solution**:   
The behavior observed is consistent with the design of the system. The **In List** and **Not
In List** operators typically evaluate a predefined set of values. However, when encountering a
blank or null value, their behavior might not align with expectations.

When you use the Not In operator, SQL compares the values in the specified list. However, a
blank or null value is not considered as a regular value in this comparison. It's like having an
empty slot in the list which doesn't match anything explicitly.

Think of it like this: if you have a list of fruits and you say Not In (apple and orange), the empty slot
doesn't match any fruit, so it's not included in the result.

## Q2: What should I use to retrieve records with blank values?

**Solution**:   
To retrieve records with blank values, users should use the **Is Empty** operator in their
query. This operator explicitly identifies fields that contain no value at all, including blank or null 
values, ensuring that records with blank values are included in their search results. Using **Is
Empty** is the recommended method for querying and retrieving blank records within their dataset.

