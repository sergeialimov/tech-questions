GET is used for viewing something, without changing it

POST is used for changing something.

PUT
The PUT method replaces all current representations of the target resource with the request payload.

DELETE
The DELETE method deletes the specified resource.
Example – logout method in Auth class, delete token from db 

If you make HTTPS GET request, only the following information will be known to the attacker monitoring your web traffic:

The fact that you made an HTTPS connection
The hostname www.example.com
The total length of the request
The length of the response


Web servers tend to log the entire URL in plain text in their access logs; so sending sensitive information over GET is not a good idea. This applies irrespective of whether HTTP or HTTPS is used.



HEAD
The HEAD method asks for a response identical to a GET request, but without the response body.

OPTIONS
The OPTIONS method describes the communication options for the target resource.

TRACE
The TRACE method performs a message loop-back test along the path to the target resource.