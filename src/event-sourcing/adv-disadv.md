Advantages
Achieving elasticity(on demand), responsive(performance + availability + eventual consistency with low latency ) and resiliency(auto-recovery in case of failure) all three together is hard problem in distributed system. Reactive architecture(CQRS+ES, actor-model/akka/protector + FSM ) can be very useful to solve this.

Disadvantages -
This needs relatively big amount of investments since these concepts are not state forward. Learning curve is steep.
Also according to GDPR compliance if we want to delete entire data set related to users/tenant that can be challenging.
1. If we want to delete records for particular tenants then may be star deployment can help here or tenants wise data sharding will be savior here.
2. But if want to delete record for only single user, only solution is to adding new command + event to encrypt the old records in some unknow format. But we will not be able to delete events from event-store, since it will create lots of problems.