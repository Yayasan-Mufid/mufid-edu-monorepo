import { z } from 'zod';
import { ModuleItemCreateWithoutUser_statusInputObjectSchema } from './ModuleItemCreateWithoutUser_statusInput.schema';
import { ModuleItemUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemUncheckedCreateWithoutUser_statusInput.schema';
import { ModuleItemCreateOrConnectWithoutUser_statusInputObjectSchema } from './ModuleItemCreateOrConnectWithoutUser_statusInput.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateNestedOneWithoutUser_statusInput> =
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
      connect: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ModuleItemCreateNestedOneWithoutUser_statusInputObjectSchema =
  Schema;
