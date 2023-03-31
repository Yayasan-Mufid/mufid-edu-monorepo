import { z } from 'zod';
import { ModuleAccessScalarWhereInputObjectSchema } from './ModuleAccessScalarWhereInput.schema';
import { ModuleAccessUpdateManyMutationInputObjectSchema } from './ModuleAccessUpdateManyMutationInput.schema';
import { ModuleAccessUncheckedUpdateManyWithoutAccessible_modulesInputObjectSchema } from './ModuleAccessUncheckedUpdateManyWithoutAccessible_modulesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ModuleAccessScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAccessUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ModuleAccessUncheckedUpdateManyWithoutAccessible_modulesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleAccessUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
