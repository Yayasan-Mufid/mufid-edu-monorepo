import { z } from 'zod';
import { ModuleItemCreateWithoutQuizInputObjectSchema } from './ModuleItemCreateWithoutQuizInput.schema';
import { ModuleItemUncheckedCreateWithoutQuizInputObjectSchema } from './ModuleItemUncheckedCreateWithoutQuizInput.schema';
import { ModuleItemCreateOrConnectWithoutQuizInputObjectSchema } from './ModuleItemCreateOrConnectWithoutQuizInput.schema';
import { ModuleItemUpsertWithoutQuizInputObjectSchema } from './ModuleItemUpsertWithoutQuizInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutQuizInputObjectSchema } from './ModuleItemUpdateWithoutQuizInput.schema';
import { ModuleItemUncheckedUpdateWithoutQuizInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutQuizInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateOneRequiredWithoutQuizNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleItemCreateWithoutQuizInputObjectSchema),
          z.lazy(() => ModuleItemUncheckedCreateWithoutQuizInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ModuleItemCreateOrConnectWithoutQuizInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ModuleItemUpsertWithoutQuizInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleItemUpdateWithoutQuizInputObjectSchema),
          z.lazy(() => ModuleItemUncheckedUpdateWithoutQuizInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemUpdateOneRequiredWithoutQuizNestedInputObjectSchema =
  Schema;
