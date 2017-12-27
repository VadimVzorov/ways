export class Place {

    constructor(
        public id: number,
        public following: boolean,
        public name: string,
        public categoty: string,
        public description: string,
        public picture: string,
        public recommendation: Object
    ) { }

}
