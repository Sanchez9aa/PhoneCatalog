<h1> Phone Catalog </h1>

This project has been created as a website where mobile data can be obtained, uploaded, modified and deleted.

You can search through all the mobiles in the database.

A dark mode has also been implemented.

<h2>API</h2>

The project has been treated as if it were an api.

The port that has been treated has been 8802, if that port was busy by default it uses 8801.

Deployed at - https://phonescatalog.herokuapp.com/

<h2>ENDPOINTS</h2>

1 ENDPOINT have been created, this ENDPOINT got 1 post, 1 update, 1 delete and 2 get.

<h3>POST /phones </h3>

The body of the message shall be as follows:

<pre>

{
    "name": "TCL 10 SE",
    "manufacturer": "Tcl",
    "description": "NXTVISION, Notch Gota, resistente a rayones",
    "color": "Black",
    "price": 190,
    "screen": "6,52 inch",
    "processor": "Helio P22",
    "ram": 4
}

</pre>

The following answer will be found:

<pre>

{
  message:phone added
}

</pre>

There is an error response for the following cases :

- Check if all fields are sent, except imageFileName that take the manufacturer one + .png

<h3> GET /phones </h3>

All the phones in the DB will be returned to us.

<h3> GET /robot/:name </h3>

The phone will be returned to us with the requested name.

<h3> DELETE /phones/:id </h3>

The phone with that id will be deleted

<h3> PUT /phones/:name </h3>

The phone with that name will be updated if any fields are being sent in the body.

<h2>Test</h2>

There is not testing yet.