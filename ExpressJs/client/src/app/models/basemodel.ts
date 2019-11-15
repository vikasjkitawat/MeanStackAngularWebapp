export class BaseModel
{
    constructor()
    {
    }

    serialize()
    {
        return JSON.stringify(this);
    }

    prep()
    {
        delete this["_id"];
        return this;
    }
}