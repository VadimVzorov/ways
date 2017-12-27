import { Friend } from '../friends/friend';
import { Place } from '../city-places/place';

export class City {

    constructor(
        public id: any,
        public name: any,
        public link_id: any,
        public country: any,
        public following: any,
        public followers: Friend[],
        public places: Place[]
    ) { }

}
