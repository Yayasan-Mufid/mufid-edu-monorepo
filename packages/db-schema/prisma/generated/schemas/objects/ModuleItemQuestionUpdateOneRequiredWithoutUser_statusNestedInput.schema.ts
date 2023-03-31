import { z } from 'zod';
import { ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateWithoutUser_statusInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutUser_statusInput.schema';
import { ModuleItemQuestionCreateOrConnectWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionCreateOrConnectWithoutUser_statusInput.schema';
import { ModuleItemQuestionUpsertWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUpsertWithoutUser_statusInput.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUpdateWithoutUser_statusInput.schema';
import { ModuleItemQuestionUncheckedUpdateWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionUncheckedUpdateWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUpdateOneRequiredWithoutUser_statusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemQuestionCreateWithoutUser_statusInputObjectSchema,
          ),
          z.lazy(
            () =>
              ModuleItemQuestionUncheckedCreateWithoutUser_statusInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ModuleItemQuestionCreateOrConnectWithoutUser_statusInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ModuleItemQuestionUpsertWithoutUser_statusInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ModuleItemQuestionUpdateWithoutUser_statusInputObjectSchema,
          ),
          z.lazy(
            () =>
              ModuleItemQuestionUncheckedUpdateWithoutUser_statusInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema =
  Schema;
