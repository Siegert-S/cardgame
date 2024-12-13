export interface Game {
    id?: string;
    players: string[];
    stack: string[];
    playedCards: string[];
    currentPlayer: number;
}
