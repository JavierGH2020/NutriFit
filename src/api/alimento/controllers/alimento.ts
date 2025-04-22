/**
 * alimento controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::alimento.alimento', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("Debes estar autenticado para crear un alimento.");
    }

    const { data } = ctx.request.body;

    const response = await strapi.entityService.create('api::alimento.alimento', {
      data: {
        ...data,
        user: user.id, // 💾 Guardamos el ID del usuario autenticado
      },
    });

    return ctx.send({ data: response });
  },
}));
