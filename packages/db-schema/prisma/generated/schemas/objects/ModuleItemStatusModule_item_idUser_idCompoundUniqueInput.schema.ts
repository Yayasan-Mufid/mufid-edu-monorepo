import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusModule_item_idUser_idCompoundUniqueInput> =
  z
    .object({
      module_item_id: z.string(),
      user_id: z.string(),
    })
    .strict();

export const ModuleItemStatusModule_item_idUser_idCompoundUniqueInputObjectSchema =
  Schema;
