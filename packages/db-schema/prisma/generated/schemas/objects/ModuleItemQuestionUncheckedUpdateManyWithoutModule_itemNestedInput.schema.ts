import { z } from 'zod';
import { ModuleItemQuestionCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateWithoutModule_itemInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutModule_itemInput.schema';
import { ModuleItemQuestionCreateOrConnectWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionCreateOrConnectWithoutModule_itemInput.schema';
import { ModuleItemQuestionUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUpsertWithWhereUniqueWithoutModule_itemInput.schema';
import { ModuleItemQuestionCreateManyModule_itemInputEnvelopeObjectSchema } from './ModuleItemQuestionCreateManyModule_itemInputEnvelope.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUpdateWithWhereUniqueWithoutModule_itemInput.schema';
import { ModuleItemQuestionUpdateManyWithWhereWithoutModule_itemInputObjectSchema } from './ModuleItemQuestionUpdateManyWithWhereWithoutModule_itemInput.schema';
import { ModuleItemQuestionScalarWhereInputObjectSchema } from './ModuleItemQuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUncheckedUpdateManyWithoutModule_itemNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUpsertWithWhereUniqueWithoutModule_itemInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleItemQuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUpdateWithWhereUniqueWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUpdateManyWithWhereWithoutModule_itemInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleItemQuestionScalarWhereInputObjectSchema),
          z.lazy(() => ModuleItemQuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionUncheckedUpdateManyWithoutModule_itemNestedInputObjectSchema =
  Schema;
