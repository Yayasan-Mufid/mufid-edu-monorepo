import { z } from 'zod';
import { ModuleAdminModule_idUser_idCompoundUniqueInputObjectSchema } from './ModuleAdminModule_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    module_id_user_id: z
      .lazy(() => ModuleAdminModule_idUser_idCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ModuleAdminWhereUniqueInputObjectSchema = Schema;
