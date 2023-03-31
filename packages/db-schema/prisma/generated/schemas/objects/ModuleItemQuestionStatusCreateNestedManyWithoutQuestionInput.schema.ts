import { z } from 'zod';
import { ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInputObjectSchema } from './ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInput.schema';
import { ModuleItemQuestionStatusCreateManyQuestionInputEnvelopeObjectSchema } from './ModuleItemQuestionStatusCreateManyQuestionInputEnvelope.schema';
import { ModuleItemQuestionStatusWhereUniqueInputObjectSchema } from './ModuleItemQuestionStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleItemQuestionStatusCreateOrConnectWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ModuleItemQuestionStatusCreateManyQuestionInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema),
          z
            .lazy(() => ModuleItemQuestionStatusWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleItemQuestionStatusCreateNestedManyWithoutQuestionInputObjectSchema =
  Schema;
