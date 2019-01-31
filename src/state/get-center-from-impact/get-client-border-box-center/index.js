// @flow
import type { Position } from 'css-box-model';
import type {
  DroppableDimension,
  Viewport,
  DragImpact,
  DraggableDimension,
  DraggableDimensionMap,
} from '../../../types';
import getPageBorderBoxCenterFromImpact from '../get-page-border-box-center';
import getClientFromPageBorderBoxCenter from './get-client-from-page-border-box-center';

type Args = {|
  impact: DragImpact,
  draggable: DraggableDimension,
  droppable: DroppableDimension,
  draggables: DraggableDimensionMap,
  viewport: Viewport,
  wasDisplacedOnLift: DraggableIdMap,
|};

export default ({
  impact,
  draggable,
  droppable,
  draggables,
  viewport,
  wasDisplacedOnLift,
}: Args): Position => {
  const pageBorderBoxCenter: Position = getPageBorderBoxCenterFromImpact({
    impact,
    draggable,
    draggables,
    droppable,
    wasDisplacedOnLift,
  });

  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable,
    viewport,
  });
};
