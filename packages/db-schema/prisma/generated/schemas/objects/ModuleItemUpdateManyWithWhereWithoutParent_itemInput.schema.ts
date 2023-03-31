import { z } from 'zod';
import { ModuleItemScalarWhereInputObjectSchema } from './ModuleItemScalarWhereInput.schema';
import { ModuleItemUpdateManyMutationInputObjectSchema } from './ModuleItemUpdateManyMutationInput.schema';
import { ModuleItemUncheckedUpdateManyWithoutChildrenInputObjectSchema } from './ModuleItemUncheckedUpdateManyWithoutChildrenInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateManyWithWhereWithoutParent_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedUpdateManyWithoutChildrenInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemUpdateManyWithWhereWithoutParent_itemInputObjectSchema =
  Schema;
