// class Link {
//     static links = [];

//     id: number;
//     shortLink: string;
//     longLink: string;

//     constructor(id:number, shortLink:string) {
//         this.id = id;
//         this.shortLink = shortLink;
//     }

//     static getOne(linkId:number) {
//         return Link.links.find(link => link.id === linkId);
//     };

//     static getAll() {
//         return Link.links;
//     };

//     static createOne(shortLink:string, longLink:string) {
//         const id = +new Date()
//         const newLink = new Link(id, shortLink);
//         Link.links.push(newLink);
//         return newLink; 
//     };

//     static deleteOne(linkId:number) {
//         const index = Link.links.findIndex(link => link.id === linkId);
//         if (index !== -1) {
//             return Link.links.splice(index, 1)[0];
//         }
//         return null;
//     };

//     static updateOne(linkId:number, {shortLink:string, longLink:string}) {
//         const link = Link.getOne(linkId);
//         if (link) {
//             link.shortLink = shortLink;
//             link.longLink = longLink;
//             return link;
//         }
//         return null;
//     };
// }

class Link {
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

    static deleteOne(linkId: number): Link | null {
        const index = Link.links.findIndex(link => link.id === linkId);
        if (index !== -1) {
            return Link.links.splice(index, 1)[0];
        }
        return null;
    }

    static updateOne(linkId: number, shortLink: string, longLink: string): Link | null {
        const link = Link.getOne(linkId);
        if (link) {
            link.shortLink = shortLink;
            link.longLink = longLink;
            return link;
        }
        return null;
    }
}

// Change js to ts/d
// update one should accept 2 parametrs/d
// create one shpuldn't accept id/d
// getall should accept pagination/d
// constructor should accept object without longlink/d
// longlink should be getter (js getter and setter)/d