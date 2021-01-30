import { EgretLoadable } from "egret";

const BasicForm = EgretLoadable({
  loader: () => import("./BasicForm")
});

const EditorForm = EgretLoadable({
  loader: () => import("./EditorForm")
});

const WizardForm = EgretLoadable({
  loader: () => import("./WizardForm")
});

const UploadForm = EgretLoadable({
  loader: () => import("./UploadForm")
});

const formsRoutes = [
  {
    path: "/forms/basic",
    component: BasicForm
  },
  {
    path: "/forms/editor",
    component: EditorForm
  },
  {
    path: "/forms/upload",
    component: UploadForm
  },
  {
    path: "/forms/wizard",
    component: WizardForm
  }
];

export default formsRoutes;
