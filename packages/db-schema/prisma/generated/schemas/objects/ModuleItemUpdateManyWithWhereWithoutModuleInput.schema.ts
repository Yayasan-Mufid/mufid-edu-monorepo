import { z } from 'zod';
import { ModuleItemScalarWhereInputObjectSchema } from './ModuleItemScalarWhereInput.schema';
import { ModuleItemUpdateManyMutationInputObjectSchema } from './ModuleItemUpdateManyMutationInput.schema';
import { ModuleItemUncheckedUpdateManyWithoutItemsInputObjectSchema } from './ModuleItemUncheckedUpdateManyWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateManyWithWhereWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedUpdateManyWithoutItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemUpdateManyWithWhereWithoutModuleInputObjectSchema =
  Schema;
