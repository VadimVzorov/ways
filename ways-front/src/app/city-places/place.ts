export class Place {

    constructor(
        public google_place_id: number,
        public name: string,
        public types: Array<string>,
        public formatted_address: string,
        public lat: string,
        public lng: string,
    ) { }

}
