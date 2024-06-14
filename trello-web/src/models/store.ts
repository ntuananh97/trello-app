import { ICardData, IColumnData } from "./trello-content-type";

export interface IStateColumnData {
    [key: string]: IColumnData
}

export interface IStateCardData {
    [key: string]: ICardData
}