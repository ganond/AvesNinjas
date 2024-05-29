
export default class BirdModel {
    constructor(data) {
        this.uid = data.uid;
        this.name = {
            spanish: data.name.spanish,
            english: data.name.english,
            latin: data.name.latin
        };
        this.images = {
            main: data.images.main,
            full: data.images.full,
            thumb: data.images.thumb
        };
        this.links = {
            self: data._links.self,
            parent: data._links.parent
        };
        this.sort = data.sort;
    }
}
