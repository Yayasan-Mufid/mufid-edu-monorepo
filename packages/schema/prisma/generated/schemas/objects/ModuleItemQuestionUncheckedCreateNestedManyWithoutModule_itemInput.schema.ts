import { z } from 'zod';
import { ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateWithoutModule_itemInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutModule_itemInput.schema';
import { ModuleItemQuestionCreateOrConnectWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateOrConnectWithoutModule_itemInput.schema';
import { ModuleItemQuestionCreateManyModule_itemInputEnvelopeObjectSchema } from './ModuleItemQuestionCreateManyModule_itemInputEnvelope.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUncheckedCreateNestedManyWithoutModule_itemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionCreateOrConnectWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionCreateOrConnectWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ModuleItemQuestionCreateManyModule_itemInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionUncheckedCreateNestedManyWithoutModule_itemInputObjectSchema =
  Schema;
