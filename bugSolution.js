```javascript
// use transactions to ensure atomicity. 
// Add a retry mechanism to handle transient errors.
const session = db.getMongo().startSession();
session.startTransaction();
try {
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
  await db.collection('users').aggregate(pipeline, { session });
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
}
finally {
  session.endSession();
}
```