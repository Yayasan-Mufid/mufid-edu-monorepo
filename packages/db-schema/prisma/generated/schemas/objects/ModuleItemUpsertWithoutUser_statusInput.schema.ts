import { z } from 'zod';
import { ModuleItemUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemUpdateWithoutUser_statusInput.schema';
import { ModuleItemUncheckedUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemUncheckedUpdateWithoutUser_statusInput.schema';
import { ModuleItemCreateWithoutUser_statusInputObjectSchema } from './ModuleItemCreateWithoutUser_statusInput.schema';
import { ModuleItemUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemUncheckedCreateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpsertWithoutUser_statusInput> = z
  .object({
    update: z.union([
      z.lazy(() => ModuleItemUpdateWithoutUser_statusInputObjectSchema),
      z.lazy(
        () => ModuleItemUncheckedUpdateWithoutUser_statusInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ModuleItemCreateWithoutUser_statusInputObjectSchema),
      z.lazy(
        () => ModuleItemUncheckedCreateWithoutUser_statusInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ModuleItemUpsertWithoutUser_statusInputObjectSchema = Schema;
