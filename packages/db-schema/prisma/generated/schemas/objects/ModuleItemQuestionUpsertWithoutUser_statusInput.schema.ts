import { z } from 'zod';
import { ModuleItemQuestionUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUpdateWithoutUser_statusInput.schema';
import { ModuleItemQuestionUncheckedUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateWithoutUser_statusInput.schema';
import { ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateWithoutUser_statusInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpsertWithoutUser_statusInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => ModuleItemQuestionUpdateWithoutUser_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedUpdateWithoutUser_statusInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionUpsertWithoutUser_statusInputObjectSchema =
  Schema;
