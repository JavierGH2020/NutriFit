/**
 * usuario controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::usuario.usuario', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("Debes estar autenticado para crear un usuario.");
    }

    const { data } = ctx.request.body;

    const response = await strapi.entityService.create('api::usuario.usuario', {
      data: {
        ...data,
        user: user.id, // 💾 Guardamos el ID del usuario autenticado
      },
    });

    return ctx.send({ data: response });
  },
}));
