# MongoDB Aggregation Data Race Condition

This repository demonstrates a potential data race condition in MongoDB aggregations when dealing with concurrent operations. The issue can lead to inconsistent aggregation results under high load. 

## Bug Description

The provided code snippet uses a MongoDB aggregation pipeline to find the top 10 most active users. However, if multiple operations modify the `users` collection concurrently while the aggregation is running, the final result may be inaccurate due to the race condition.