export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    link: string;
    image: string;
    description: string;

    constructor(index: number, name: string, seasons: number, channel: string, description: string, link: string, image: string) {
        this.id = index;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.link = link;
        this.image = image;
    }
    
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSeasons() {
        return this.seasons;
    }
    getChannel() {
        return this.channel;
    }
    getDescription() {
        return this.description;
    }
    getLink() {
        return this.link;
    }
    getImage() {
        return this.image;
    }
}