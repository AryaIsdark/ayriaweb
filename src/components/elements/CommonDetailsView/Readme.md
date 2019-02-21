###CommonDetailsView Component

#### Description:

CommonDetailsView is a reusable component for previewing a JSON object, accepting 2 parameters :

- dataObject ( the actual object)
- fileds ( the properties to be shown)

Any complex object within the dataObject is ignored. for example in the following example properties B and C will be ignored

```json
{
  "A": "",
  "B": { "id": 1, "name": "test" },
  "C": [{ "id": 1, "name": "test" }]
}
```

Example:

    <CommonDetailsView dataObject={sampleObject} />
