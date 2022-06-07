https://www.kaspersky.com/resource-center/definitions/what-is-a-ssl-certificate


Types of SSL certificate
There are different types of SSL certificates with different validation levels. The six main types are:

Extended Validation certificates (EV SSL)
Organization Validated certificates (OV SSL)
Domain Validated certificates (DV SSL)
Wildcard SSL certificates
Multi-Domain SSL certificates (MDC)
Unified Communications Certificates (UCC)


The process works like this:

A browser or server attempts to connect to a website (i.e., a web server) secured with SSL.
The browser or server requests that the web server identifies itself.
The web server sends the browser or server a copy of its SSL certificate in response.
The browser or server checks to see whether it trusts the SSL certificate. If it does, it signals this to the webserver.
The web server then returns a digitally signed acknowledgment to start an SSL encrypted session.
Encrypted data is shared between the browser or server and the webserver.


To view an SSL certificate's details, you can click on the padlock symbol located within the browser bar. Details typically included within SSL certificates include:

The domain name that the certificate was issued for
Which person, organization, or device it was issued to
Which Certificate Authority issued it
The Certificate Authority's digital signature
Associated subdomains
Issue date of the certificate
The expiry date of the certificate
The public key (the private key is not revealed)