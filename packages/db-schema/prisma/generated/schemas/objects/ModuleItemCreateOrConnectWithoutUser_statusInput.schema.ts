import { z } from 'zod';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemCreateWithoutUser_statusInputObjectSchema } from './ModuleItemCreateWithoutUser_statusInput.schema';
import { ModuleItemUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemUncheckedCreateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemCreateOrConnectWithoutUser_statusInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ModuleItemCreateWithoutUser_statusInputObjectSchema),
        z.lazy(
          () => ModuleItemUncheckedCreateWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemCreateOrConnectWithoutUser_statusInputObjectSchema =
  Schema;
