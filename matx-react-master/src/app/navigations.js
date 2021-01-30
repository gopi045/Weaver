export const navigations = [
  {
    name: "Dashboard",
    // path: "/dashboard/learning-management",
    icon: "dashboard",

    children: [
      // {
      //   name: "Learning Management",
      //   path: "/dashboard/learning-management",
      //   iconText: "O"
      // },
      // {
      //   name: "Analytics",
      //   path: "/dashboard/analytics",
      //   iconText: "A"
      // },
      {
        name: "Sales",
        path: "/dashboard/sales",
        iconText: "S"
      }
    ]
  },
  // {
  //   name: "CRUD Table",
  //   icon: "format_list_bulleted",
  //   path: "/crud-table",
  //   badge: { value: "68", color: "primary" }
  // },
  // {
  //   name: "Ecommerce",
  //   icon: "shopping_basket",
  //   children: [
  //     {
  //       name: "Shop",
  //       path: "/ecommerce/shop",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Cart",
  //       path: "/ecommerce/cart",
  //       iconText: "C"
  //     },
  //     {
  //       name: "Checkout",
  //       path: "/ecommerce/checkout",
  //       iconText: "CO"
  //     },
  //   ]
  // },
  {
    name: "Users",
    icon: "people",
    children: [
      {
        name: "Users List",
        path: "/user-list",
        iconText: "I"
      },
      {
        name: "New User",
        path: "/add-user",
        iconText: "L"
      },
      {
        name: "View User",
        path: "/add-user",
        iconText: "L"
      }
    ]
  },
  {
    name: "Customers",
    icon: "people",
    children: [
      {
        name: "Infinite Scroll",
        path: "/infinite-scroll",
        iconText: "I"
      },
      {
        name: "List",
        path: "/egret-list",
        iconText: "L"
      }
    ]
  },
  {
    name: "Products",
    icon: "shopping_cart",
    children: [
      {
        name: "Infinite Scroll",
        path: "/infinite-scroll",
        iconText: "I"
      },
      {
        name: "List",
        path: "/egret-list",
        iconText: "L"
      }
    ]
  },
  {
    name: "Orders",
    icon: "folder",
    children: [
      {
        name: "Infinite Scroll",
        path: "/infinite-scroll",
        iconText: "I"
      },
      {
        name: "List",
        path: "/egret-list",
        iconText: "L"
      }
    ]
  },
  {
    name: "Invoice",
    icon: "receipt",
    path: "/invoice/list"
  },
  // {
  //   name: "Scrum Board",
  //   icon: "group_work",
  //   path: "/scrum-board"
  // },
  // {
  //   name: "Calendar",
  //   icon: "date_range",
  //   path: "/calendar",
  //   badge: { value: "5", color: "secondary" }
  // },
  // {
  //   name: "Chat",
  //   icon: "chat",
  //   path: "/chat",
  //   badge: { value: "3", color: "primary" }
  // },
  // {
  //   name: "Inbox",
  //   icon: "inbox",
  //   path: "/inbox",
  //   badge: { value: "6", color: "primary" }
  // },
  // {
  //   name: "Map",
  //   icon: "add_location",
  //   path: "/map"
  // },
  // {
  //   name: "Todo",
  //   icon: "center_focus_strong",
  //   path: "/todo/list"
  // },
  // {
  //   name: "Forms",
  //   icon: "description",
  //   children: [
  //     {
  //       name: "Basic",
  //       path: "/forms/basic",
  //       iconText: "B"
  //     },
  //     {
  //       name: "Editor",
  //       path: "/forms/editor",
  //       iconText: "E"
  //     },
  //     {
  //       name: "Upload",
  //       path: "/forms/upload",
  //       iconText: "U"
  //     },
  //     {
  //       name: "Wizard",
  //       path: "/forms/wizard",
  //       iconText: "W"
  //     }
  //   ]
  // },
  // {
  //   name: "Page Layouts",
  //   icon: "view_carousel",
  //   children: [
  //     {
  //       name: "Left Sidebar Card",
  //       path: "/page-layouts/Left-sidebar-card",
  //       iconText: "L"
  //     },
  //     {
  //       name: "User Profile",
  //       path: "/page-layouts/user-profile",
  //       iconText: "U"
  //     }
  //   ]
  // },

  // {
  //   name: "UI Kits",
  //   icon: "favorite",
  //   badge: { value: "50+", color: "secondary" },
  //   children: [
  //     {
  //       name: "Auto Complete",
  //       path: "/material/autocomplete",
  //       iconText: "A"
  //     },
  //     {
  //       name: "Buttons",
  //       path: "/material/buttons",
  //       iconText: "B"
  //     },
  //     {
  //       name: "Checkbox",
  //       path: "/material/checkbox",
  //       iconText: "C"
  //     },
  //     {
  //       name: "Dialog",
  //       path: "/material/dialog",
  //       iconText: "D"
  //     },
  //     {
  //       name: "Expansion Panel",
  //       path: "/material/expansion-panel",
  //       iconText: "E"
  //     },
  //     {
  //       name: "Form",
  //       path: "/material/form",
  //       iconText: "F"
  //     },
  //     {
  //       name: "Icons",
  //       path: "/material/icons",
  //       iconText: "I"
  //     },
  //     {
  //       name: "Menu",
  //       path: "/material/menu",
  //       iconText: "M"
  //     },
  //     {
  //       name: "Progress",
  //       path: "/material/progress",
  //       iconText: "P"
  //     },
  //     {
  //       name: "Radio",
  //       path: "/material/radio",
  //       iconText: "R"
  //     },
  //     {
  //       name: "Switch",
  //       path: "/material/switch",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Slider",
  //       path: "/material/slider",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Snackbar",
  //       path: "/material/snackbar",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Table",
  //       path: "/material/table",
  //       iconText: "T"
  //     }
  //   ]
  // },
  // {
  //   name: "Charts",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Echarts",
  //       path: "/charts/echarts",
  //       iconText: "E"
  //     },
  //     {
  //       name: "Recharts",
  //       path: "/charts/recharts",
  //       iconText: "R"
  //     },
  //     {
  //       name: "React Vis",
  //       path: "/charts/react-vis",
  //       iconText: "R"
  //     },
  //     {
  //       name: "Victory Chart",
  //       path: "/charts/victory-charts",
  //       iconText: "V"
  //     }
  //   ]
  // },
  // {
  //   name: "Drag and Drop",
  //   icon: "control_camera",
  //   path: "/others/drag-and-drop"
  // },
  // {
  //   name: "Others",
  //   icon: "blur_on",
  //   children: [
  //     {
  //       name: "Pricing",
  //       path: "/others/pricing",
  //       iconText: "P"
  //     }
  //   ]
  // },
  // {
  //   name: "Multilevel",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Level 1",
  //       iconText: "E",
  //       children: [
  //         {
  //           name: "Item 1",
  //           path: "/chart"
  //         },
  //         {
  //           name: "Item 2",
  //           path: "/chart"
  //         },
  //         {
  //           name: "Item 3",
  //           path: "/chart"
  //         },
  //         {
  //           name: "Item 4",
  //           path: "/chart"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: "Utilities",
  //   icon: "format_list_bulleted",
  //   children: [
  //     {
  //       name: "Color",
  //       path: "/utilities/color",
  //       iconText: "C"
  //     },
  //     {
  //       name: "Spacing",
  //       path: "/utilities/spacing",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Typography",
  //       path: "/utilities/typography",
  //       iconText: "T"
  //     },
  //     {
  //       name: "Display",
  //       path: "/utilities/display",
  //       iconText: "D"
  //     }
  //   ]
  // },
  // {
  //   name: "Sessions",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Sign in",
  //       iconText: "SI",
  //       path: "/session/signin"
  //     },
  //     {
  //       name: "Sign up",
  //       iconText: "SU",
  //       path: "/session/signup"
  //     },
  //     {
  //       name: "Error",
  //       iconText: "404",
  //       path: "/session/404"
  //     }
  //   ]
  // }
];
