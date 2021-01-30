import {EgretLoadable} from "egret";

const AppDragAndDrop = EgretLoadable({
  loader: () => import("./AppDragAndDrop")
});

const dragAndDropRoute = [
  {
    path: "/others/drag-and-drop",
    component: AppDragAndDrop
  }
];

export default dragAndDropRoute;
