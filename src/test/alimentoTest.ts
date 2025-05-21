import { factories , EntityService } from '@strapi/strapi';

import { mock } from 'ts-mockery';
import { describe, it, expect, beforeEach } from 'vitest';


describe('Alimento Controller - Create', () => {
  const ctx = mock();
  const strapi = mock();
  const entityService = mock<EntityService>();

  strapi.entityService = entityService;

  const controller = factories.createCoreController('api::alimento.alimento', ({ }) => ({
    async create(ctx) {
      // function code block
    },
  }));

  beforeEach(() => {
    ctx.state.user = null;
    ctx.request.body = { data: {} };
  });

  it('should return unauthorized response when user is not authenticated', async () => {
    await controller.create(ctx);
    expect(ctx.unauthorized).toHaveBeenCalledTimes(1);
    expect(ctx.unauthorized).toHaveBeenCalledWith("Debes estar autenticado para crear un alimento.");
  });

  it('should create alimento with authenticated user', async () => {
    ctx.state.user = { id: 1 };
    entityService.create.mockResolvedValue({ id: 1, user: 1 });
    await controller.create(ctx);
    expect(entityService.create).toHaveBeenCalledTimes(1);
    expect(entityService.create).toHaveBeenCalledWith('api::alimento.alimento', {
      data: { user: 1 },
    });
    expect(ctx.send).toHaveBeenCalledTimes(1);
    expect(ctx.send).toHaveBeenCalledWith({ data: { id: 1, user: 1 } });
  });

  it('should handle error when strapi.entityService.create fails', async () => {
    ctx.state.user = { id: 1 };
    entityService.create.mockRejectedValue(new Error('Error creating alimento'));
    await controller.create(ctx);
    expect(entityService.create).toHaveBeenCalledTimes(1);
    expect(entityService.create).toHaveBeenCalledWith('api::alimento.alimento', {
      data: { user: 1 },
    });
    expect(ctx.send).not.toHaveBeenCalled();
  });
});