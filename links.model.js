class Link {
    static links = [];

    constructor(id,shortLink, longLink) {
        this.id = id;
        this.shortLink = shortLink;
        this.longLink = longLink;
    }

    static getOne(linkId) {
        return Link.links.find(link => link.id === linkId);
    };

    static getAll() {
        return Link.links;
    };

    static createOne(id, shortLink, longLink) {
        const newLink = new Link(id, shortLink, longLink);
        Link.links.push(newLink);
        return newLink; 
    };

    static deleteOne(linkId) {
        const index = Link.links.findIndex(link => link.id === linkId);
        if (index !== -1) {
            return Link.links.splice(index, 1)[0];
        }
        return null;
    };

    static updateOne(linkId, shortLink, longLink) {
        const link = Link.getOne(linkId);
        if (link) {
            link.shortLink = shortLink;
            link.longLink = longLink;
            return link;
        }
        return null;
    };
}
