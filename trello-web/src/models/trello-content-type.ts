export interface ICardData {
    _id: string;
    boardId: string;
    columnId: string;
    description: string;
    title: string;
    cover: string;
}

export interface IColumnData {
    _id: string;
    boardId: string;
    title: string;
    cardOrderIds: string[];
    cards: ICardData[];
}
