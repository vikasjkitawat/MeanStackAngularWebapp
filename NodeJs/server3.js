const ObservableCollection = require("./observableCollection");

var collection = new ObservableCollection();

collection.on(
    "INSERT",
    function onInsert(addedItem)
    {
        console.log(addedItem + " has just been added");
    }
)

function nodeEventforObservables()
{
    collection.add("NodeJs");
    collection.add("AngularJs");
    collection.add("VueJs");
    collection.add("ReactJs");
    var result = collection.getAll();
    console.log(result);
}

nodeEventforObservables();