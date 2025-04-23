/**
 * rutina controller
 */


import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::rutina.rutina', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("Debes estar autenticado para crear un rutina.");
    }

    const { data } = ctx.request.body;

    const response = await strapi.entityService.create('api::rutina.rutina', {
      data: {
        ...data,
        user: user.id, // 💾 Guardamos el ID del usuario autenticado
      },
    });

    return ctx.send({ data: response });
  },
}));
