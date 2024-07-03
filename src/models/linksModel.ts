export class Link {
    static links: Link[] = [];

    id: number;
    shortLink: string;
    private _longLink?: string;

    constructor({ id, shortLink }: { id: number; shortLink: string }) {
        this.id = id;
        this.shortLink = shortLink;
    }

    get longLink(): string | undefined {
        return this._longLink;
    }

    set longLink(value: string | undefined) {
        this._longLink = value;
    }

    static getOne(linkId: number): Link | undefined {
        return Link.links.find(link => link.id === linkId);
    }

    static getAll(page: number = 1, pageSize: number = 10): Link[] {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        return Link.links.slice(start, end);
    }

    static createOne(shortLink: string, longLink?: string): Link {
        const id = +new Date();
        const newLink = new Link({ id, shortLink });
        Link.links.push(newLink);
        return newLink;
    }

    static deleteOne(linkId: number): boolean {
        const index = Link.links.findIndex(link => link.id === linkId)
        if (index !== -1) {
            Link.links.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    static updateOne(linkId: number, shortLink: string): Link | null {
        const link = Link.getOne(linkId);
        if (link) {
            link.shortLink = shortLink;
            return link;
        }
        return null;
    }
}
