export class BaseModel
{
    constructor()
    {
    }

    serialize()
    {
        return JSON.stringify(this);
    }
}