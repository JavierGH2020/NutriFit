/**
 * calculadora controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::calculadora.calculadora', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized("Debes estar autenticado para crear un calculadora.");
    }

    const { data } = ctx.request.body;

    const response = await strapi.entityService.create('api::calculadora.calculadora', {
      data: {
        ...data,
        user: user.id, // 💾 Guardamos el ID del usuario autenticado
      },
    });

    return ctx.send({ data: response });
  },
}));
