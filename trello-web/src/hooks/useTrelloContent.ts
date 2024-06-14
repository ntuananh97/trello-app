import { useSelector } from "react-redux";
import { cardDataSelector, columnDataSelector } from "../redux/trelloContent/trelloContentSelector";

export const useGetColumnDetailById = (columnId: string) => {
  const columnData = useSelector(columnDataSelector);
  return columnData[columnId]
}


export const useGetCardDetailById = (cardId: string) => {
  const cardData = useSelector(cardDataSelector);
  return cardData[cardId]
}
