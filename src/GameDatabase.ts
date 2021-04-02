import Dexie from 'dexie';
import { Tag } from './App';
import { Video } from './VideoWrapper';

class GameDatabase extends Dexie {
    rounds: Dexie.Table<Round, number>;

    constructor(database_name: string) {
        super(database_name);
        this.version(1).stores({
            rounds: '++id,date,guess,videos,time_to_guess,tag'
        });
        this.rounds = this.table('rounds');
    }
}

export interface Round {
    id?: number,
    date: number,
    guess?: string,
    videos: Video[],
    time_to_guess: number,
    tag: Tag,
}

const database = new GameDatabase("aniguesser");

export default database;