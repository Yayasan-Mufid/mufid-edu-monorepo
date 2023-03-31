import { z } from 'zod';
import { ModuleAccessScalarWhereInputObjectSchema } from './ModuleAccessScalarWhereInput.schema';
import { ModuleAccessUpdateManyMutationInputObjectSchema } from './ModuleAccessUpdateManyMutationInput.schema';
import { ModuleAccessUncheckedUpdateManyWithoutStudentsInputObjectSchema } from './ModuleAccessUncheckedUpdateManyWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpdateManyWithWhereWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleAccessScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleAccessUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ModuleAccessUncheckedUpdateManyWithoutStudentsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleAccessUpdateManyWithWhereWithoutModuleInputObjectSchema =
  Schema;
