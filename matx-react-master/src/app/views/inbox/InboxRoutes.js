import { EgretLoadable } from "egret";

const Inbox = EgretLoadable({
  loader: () => import("./AppInbox")
});

const inboxRoute = [
  {
    path: "/inbox",
    exact: true,
    component: Inbox
  }
];

export default inboxRoute;
