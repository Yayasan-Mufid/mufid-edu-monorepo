import { z } from 'zod';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUpdateWithoutModule_itemInput.schema';
import { ModuleItemStatusUncheckedUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUncheckedUpdateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpdateWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ModuleItemStatusUpdateWithoutModule_itemInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemStatusUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
