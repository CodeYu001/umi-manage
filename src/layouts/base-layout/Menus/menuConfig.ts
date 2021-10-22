export type MenuType = {
  key: string;
  icon?: string;
  link?: string;
  title: string;
  parent?: boolean; //面包屑父集href特殊处理
  authority?: string[];
  children?: MenuType[];
};

export const menus: MenuType[] = [
  {
    key: "/project",
    icon: "icon-tuichu",
    title: "项目管理",
    parent: true,
    children: [
      {
        key: "project",
        title: "项目列表",
        link: "/project/list",
      },
    ],
  },
  {
    key: "/workOrder",
    icon: "icon-tuichu",
    title: "工单管理",
    parent: true,
    children: [
      {
        key: "workOrder",
        title: "工单列表",
        link: "/workOrder/list",
      },
    ],
  },
  {
    key: "/report",
    icon: "icon-tuichu",
    title: "报告管理",
    parent: true,
    children: [
      {
        key: "report",
        title: "报告列表",
        link: "/report/list",
      },
    ],
  },
  {
    key: "/system",
    icon: "icon-tuichu",
    title: "系统管理",
    parent: true,
    children: [
      {
        key: "user",
        title: "用户管理",
        link: "/system/user",
      },
      {
        key: "department",
        title: "部门管理",
        link: "/system/department",
      },
      {
        key: "character",
        title: "角色管理",
        link: "/system/character",
      },
    ],
  },
];
