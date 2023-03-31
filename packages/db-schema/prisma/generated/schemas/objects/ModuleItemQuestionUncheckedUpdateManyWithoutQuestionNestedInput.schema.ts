import { z } from 'zod';
import { ModuleItemQuestionCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionCreateOrConnectWithoutQuestionInputObjectSchema } from './ModuleItemQuestionCreateOrConnectWithoutQuestionInput.schema';
import { ModuleItemQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { ModuleItemQuestionCreateManyQuestionInputEnvelopeObjectSchema } from './ModuleItemQuestionCreateManyQuestionInputEnvelope.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';
import { ModuleItemQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { ModuleItemQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUpdateManyWithWhereWithoutQuestionInput.schema';
import { ModuleItemQuestionScalarWhereInputObjectSchema } from './ModuleItemQuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUncheckedUpdateManyWithoutQuestionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ModuleItemQuestionCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleItemQuestionCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionCreateOrConnectWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ModuleItemQuestionCreateManyQuestionInputEnvelopeObjectSchema,
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
              ModuleItemQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionUpdateManyWithWhereWithoutQuestionInputObjectSchema,
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

export const ModuleItemQuestionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
