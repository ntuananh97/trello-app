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

export interface IBoardData {
    _id: string;
    title: string;
    description: string;
    columnOrderIds: string[];
    columns: IColumnData[];
}


export interface IResponseData {
    data: {
        board: IBoardData
    }
}

