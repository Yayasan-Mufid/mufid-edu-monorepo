import { z } from 'zod';
import { ModuleItemStatusModule_item_idUser_idCompoundUniqueInputObjectSchema } from './ModuleItemStatusModule_item_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusWhereUniqueInput> = z
  .object({
    module_item_id_user_id: z
      .lazy(
        () =>
          ModuleItemStatusModule_item_idUser_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleItemStatusWhereUniqueInputObjectSchema = Schema;
