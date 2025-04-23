// src/extensions/users-permissions/routes/user-role.ts

export default [
  {
    method: 'POST',
    path: '/user/change-role',
    handler: 'change-role.controller.changeRole',
    config: {
      auth: false,
    },
  },
];