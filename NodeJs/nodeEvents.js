const events = require("events")

function nodeEvents()
{
    //understanding Event emmitter
    var em = new events.EventEmitter();
    em.on(
        "TEST_EVENT", // Event Name
        function onTestEvent(param) //callback
        {
            console.log("Test Event Handeled");
            console.log(param);
        }
    )

    setInterval(
        function timeTicked()
        {
            em.emit(
                "TEST_EVENT",
                {
                    timeStamp : new Date().toLocaleTimeString()
                }
            )
        },2000
    )
}

nodeEvents();