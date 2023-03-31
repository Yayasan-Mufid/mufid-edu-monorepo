import { z } from 'zod';
import { ModuleItemCreateWithoutUser_statusInputObjectSchema } from './ModuleItemCreateWithoutUser_statusInput.schema';
import { ModuleItemUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemUncheckedCreateWithoutUser_statusInput.schema';
import { ModuleItemCreateOrConnectWithoutUser_statusInputObjectSchema } from './ModuleItemCreateOrConnectWithoutUser_statusInput.schema';
import { ModuleItemUpsertWithoutUser_statusInputObjectSchema } from './ModuleItemUpsertWithoutUser_statusInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemUpdateWithoutUser_statusInput.schema';
import { ModuleItemUncheckedUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateOneRequiredWithoutUser_statusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleItemCreateWithoutUser_statusInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedCreateWithoutUser_statusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ModuleItemCreateOrConnectWithoutUser_statusInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ModuleItemUpsertWithoutUser_statusInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ModuleItemUpdateWithoutUser_statusInputObjectSchema),
          z.lazy(
            () => ModuleItemUncheckedUpdateWithoutUser_statusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema =
  Schema;
