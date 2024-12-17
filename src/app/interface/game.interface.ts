export interface Game {
    type: "game";
    id?: string;
    players: string[];
    stack: string[];
    playedCards: string[];
    currentPlayer: number;
}
