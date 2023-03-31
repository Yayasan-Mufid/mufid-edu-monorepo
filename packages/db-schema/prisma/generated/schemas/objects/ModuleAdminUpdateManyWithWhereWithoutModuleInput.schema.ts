import { z } from 'zod';
import { ModuleAdminScalarWhereInputObjectSchema } from './ModuleAdminScalarWhereInput.schema';
import { ModuleAdminUpdateManyMutationInputObjectSchema } from './ModuleAdminUpdateManyMutationInput.schema';
import { ModuleAdminUncheckedUpdateManyWithoutAdminsInputObjectSchema } from './ModuleAdminUncheckedUpdateManyWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUpdateManyWithWhereWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleAdminScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAdminUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ModuleAdminUncheckedUpdateManyWithoutAdminsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleAdminUpdateManyWithWhereWithoutModuleInputObjectSchema =
  Schema;
