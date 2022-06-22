Theres one main thread ("Поток" in rus) by default for Node.js app and there can be extra threads. E.g., garbage-collector uses extra thread.

Node.js can run many Processes.

As developers we can run new processes using a package from the standart lib called 'child.processes'
Most known methods are

exec() – execute code in async way
execSync() – execute code in sync way
spawn()- The child_process.spawn() method spawns a new process using the given command, with command-line arguments in args. If omitted, args defaults to an empty array.

fork() – is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like child_process.spawn(), a ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be passed back and forth between the parent and child. See subprocess.send() for details.


if you care only about process completion then 'exec' would be your choice.
Spawn opens streams for stdout en stderr with ondata events, exec just returns a buffer with stdout and stderr as strings.