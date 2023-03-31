import { z } from 'zod';
import { ModuleAccessModule_idUser_idCompoundUniqueInputObjectSchema } from './ModuleAccessModule_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    module_id_user_id: z
      .lazy(() => ModuleAccessModule_idUser_idCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleAccessWhereUniqueInputObjectSchema = Schema;
