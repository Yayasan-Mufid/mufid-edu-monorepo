import { z } from 'zod';
import { ModuleAdminScalarWhereInputObjectSchema } from './ModuleAdminScalarWhereInput.schema';
import { ModuleAdminUpdateManyMutationInputObjectSchema } from './ModuleAdminUpdateManyMutationInput.schema';
import { ModuleAdminUncheckedUpdateManyWithoutManaged_modulesInputObjectSchema } from './ModuleAdminUncheckedUpdateManyWithoutManaged_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleAdminScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAdminUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ModuleAdminUncheckedUpdateManyWithoutManaged_modulesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleAdminUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
