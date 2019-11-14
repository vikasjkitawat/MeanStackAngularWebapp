const events = require("events");

class ObservableCollection extends events.EventEmitter
{
    constructor()
    {
        super();

        var data = []; // Encasulated Data
        this.getData = function ()
        {
            return data;
        }
    }

    getAll()
    {
        return this.getData();
    }

    add(newItem)
    {
        this.getData().push(newItem);
        this.emit("INSERT", newItem);
    }
}

module.exports = ObservableCollection; // Export the Observable Class