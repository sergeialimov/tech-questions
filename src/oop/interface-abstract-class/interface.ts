/**
 * Interface is a "contract" that defines the properties and what the object can do.
 */

 interface Electrician {
  layWires(): void
}

interface Plumber {
  layPipes(): void
}

// then you can consume the services of your interfaces

function restoreHouses(e: Electrician, p: Plumber) {
  e.layWires();
  p.layPipes();
}

// Notice that the way you have to implement an interface is free. You can do that by instantiating a class, or with a simple object:

let imAnElectrician = {
  layWires: () => { console.log('Work with wires') }
}

/**
 * An interface doesn't exist at all at runtime, so it is not possible to make an introspection.
 * It is the classic JavaScript way to deal with object programming,
 * but with a good control at compile time of the defined contracts.
 */