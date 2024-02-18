import { type IJoke } from "./joke"

interface IJokeAction {
    type: string;
    payload: IJoke;
}

export {type IJokeAction}