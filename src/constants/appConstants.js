export const MenuItems = [
  {
    label: "Home",
    items: [{ route: "/u/dashboard", label: "dashboard", icon: "dashboard" }],
  },
  {
    label: "Personal",
    items: [
      { route: "/u/user/profile", label: "profile", icon: "user" },
      { route: "/u/user/account", label: "account", icon: "account" },
    ],
  },
  {
    label: "Management",
    items: [
      { route: "/u/manage/members", label: "members", icon: "groups" },
      { route: "/u/manage/lesson", label: "lessons", icon: "lesson" },
    ],
  },
  {
    label: "Admin",
    items: [{ route: "/u/admin", label: "users", icon: "account" }],
  },
];
