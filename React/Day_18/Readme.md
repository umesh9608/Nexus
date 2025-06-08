 Never use array index as key in React unless you have no other option.

✅ Recommended: Use a unique, stable ID
jsx
Copy
Edit
array.map((item) => <Component key={item.id} />)
 Why not use index as key?
Using array index as key causes bugs and performance issues, especially when items are added/removed/reordered.

Example:
jsx
Copy
Edit
array.map((item, index) => <li key={index}>{item.name}</li>)
If the list changes (like deleting one item), React gets confused and may reuse wrong DOM nodes. This causes:

Wrong data showing up

Unstable animations

State attached to wrong components

When is using index okay?
Only when:

The list will never change (no add/delete/reorder)

Items have no unique ID

But in 99% cases, use a stable ID like item.id.

