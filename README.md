1. mongoose.startSession()

In MongoDB, a session is like opening a "safe work area" where you can group multiple database operations.

It allows you to run actions inside a transaction.

The returned session object is required to control the transaction.

👉 Think of it like opening a file in edit mode but not saving yet.

2. session.startTransaction()

This starts a transaction, meaning all the DB operations you perform using this session will either:

ALL succeed, OR

ALL fail and roll back (undo everything)

👉 It ensures atomicity — everything happens together or nothing happens.

Why do we use it?

When your API needs to create/update multiple collections at the same time, you don’t want one to succeed and the other to fail.

Example:
In a sign-up API, you might:

Create a user

Create a user profile

Update some other collection

If one of these fails, the DB should rollback everything → no partial data.