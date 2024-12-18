# C.R.U.D

(Create,Read,Update,Delete)

Explanation:

- Dependencies: We require express for the web framework, and mongoose for interacting with MongoDB.

- Database Connection: We establish a connection to a MongoDB database

- Schema and Model: We define a schema for our data (in this case, comics) and create a model.

- CRUD Routes:
  - Create: The POST /comics route creates a new comic.
  - Read: The GET /comics route fetches all books, and GET /comics/:id fetches a specific book.
  - Update: The PUT /comics/:id route updates a book.
  - Delete: The DELETE /comics/:id route deletes a book.
