import { z } from 'zod';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUpdateWithoutModule_itemInput.schema';
import { ModuleItemStatusUncheckedUpdateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUncheckedUpdateWithoutModule_itemInput.schema';
import { ModuleItemStatusCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateWithoutModule_itemInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpsertWithWhereUniqueWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ModuleItemStatusUpdateWithoutModule_itemInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemStatusUncheckedUpdateWithoutModule_itemInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ModuleItemStatusCreateWithoutModule_itemInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema =
  Schema;
