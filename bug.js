```javascript
const pipeline = [
  {
    $match: {
      active: true,
    }
  },
  {
    $group: {
      _id: "$userId",
      count: { $sum: 1 },
    }
  },
  {
    $sort: {
      count: -1,
    }
  },
  {
    $limit: 10
  }
];

await db.collection('users').aggregate(pipeline);
```