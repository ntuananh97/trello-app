import Box from '@mui/material/Box'
import ContentColumn from './ContentColumn'
import AddContentColumn from './AddContentColumn';
import { useSelector } from 'react-redux';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from "@dnd-kit/core";
import { columnOrderIdSelector } from '../../../redux/trelloContent/trelloContentSelector';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';


function TrelloContent() {
  const columnOrderIds = useSelector(columnOrderIdSelector);
  console.log("TrelloContent ~ columnOrderIds:", columnOrderIds);

  const handleDragStart = () => {
    console.log('drag start');
    
  }

  const handleDragEnd = (event: DragEndEvent) => {
    console.log('drag end', event);
    const { active, over } = event;
    const { id: activeId } = active
    const overId = over?.id;

    if (!overId) return;

    const notSortable = activeId === overId;
    if (notSortable) return;

    
    
  }

  return (
    <DndContext
      // collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={columnOrderIds} strategy={horizontalListSortingStrategy}>
        <Box
          className="trello-column__list"
          component="ul"
          sx={{ display: "flex", gap: "20px", height: "100%" }}
        >
          {columnOrderIds.map((columnId) => (
            <ContentColumn key={columnId} columnId={columnId} />
          ))}
          <AddContentColumn />
        </Box>
      </SortableContext>
    </DndContext>
  );
}

export default TrelloContent