import { z } from 'zod';
import { ModuleItemStatusWhereUniqueInputObjectSchema } from './ModuleItemStatusWhereUniqueInput.schema';
import { ModuleItemStatusCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusCreateWithoutModule_itemInput.schema';
import { ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemStatusUncheckedCreateWithoutModule_itemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusCreateOrConnectWithoutModule_itemInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemStatusWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleItemStatusCreateWithoutModule_itemInputObjectSchema),
        z.lazy(
          () =>
            ModuleItemStatusUncheckedCreateWithoutModule_itemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemStatusCreateOrConnectWithoutModule_itemInputObjectSchema =
  Schema;
