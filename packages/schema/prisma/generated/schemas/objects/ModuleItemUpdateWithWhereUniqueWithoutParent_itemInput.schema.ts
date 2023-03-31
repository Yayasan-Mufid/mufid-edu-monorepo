import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutParent_itemInputObjectSchema } from './ModuleItemUpdateWithoutParent_itemInput.schema';
import { ModuleItemUncheckedUpdateWithoutParent_itemInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutParent_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateWithWhereUniqueWithoutParent_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemUpdateWithoutParent_itemInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedUpdateWithoutParent_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemUpdateWithWhereUniqueWithoutParent_itemInputObjectSchema =
  Schema;
