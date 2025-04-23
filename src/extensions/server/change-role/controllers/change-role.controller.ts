import { Context } from 'koa';

export const user = {
  async changeRole(ctx: Context) {
    const { userId, newRoleId } = ctx.request.body;

    if (!userId || !newRoleId) {
      return ctx.badRequest("Se requieren 'userId' y 'newRoleId'");
    }

    const user = await strapi.db.query('plugin::users-permissions.user').findOne({
      where: { id: userId },
    });

    if (!user) {
      return ctx.notFound("Usuario no encontrado");
    }

    const role = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { id: newRoleId },
    });

    if (!role) {
      return ctx.notFound("Rol no válido");
    }

    await strapi.db.query('plugin::users-permissions.user').update({
      where: { id: userId },
      data: { role: newRoleId },
    });

    ctx.send({ message: '✅ Rol actualizado correctamente' });
  }
};