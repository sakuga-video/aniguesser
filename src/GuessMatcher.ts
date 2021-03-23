import Fuse from "fuse.js";
import { Tag } from "./App";

export type MatchResult = {
    readonly matches: boolean,
    readonly exact: boolean,
    readonly closest?: string,
}

const Matches = (guess: Guess): MatchResult => {
    if (!guess.guess) {
        return {
            matches: false,
            exact: false,
        };
    }
    const options = {
        includeScore: true,
        threshold: 0.1,
      };
    const fuse = new Fuse(guess.answers.map(tag => tag.name), options);
    const search_results = fuse.search(guess.guess);
    return {
        matches: search_results.length > 0,
        exact: search_results[0]?.score === 0,
        closest: search_results[0]?.item,
    }
}

export type Guess = {
    readonly answers: Tag[],
    readonly guess?: string,
}

export default Matches;