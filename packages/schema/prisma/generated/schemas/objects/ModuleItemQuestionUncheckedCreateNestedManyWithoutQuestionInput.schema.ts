import { z } from 'zod';
import { ModuleItemQuestionCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionUncheckedCreateWithoutQuestionInputObjectSchema } from './ModuleItemQuestionUncheckedCreateWithoutQuestionInput.schema';
import { ModuleItemQuestionCreateOrConnectWithoutQuestionInputObjectSchema } from './ModuleItemQuestionCreateOrConnectWithoutQuestionInput.schema';
import { ModuleItemQuestionCreateManyQuestionInputEnvelopeObjectSchema } from './ModuleItemQuestionCreateManyQuestionInputEnvelope.schema';
import { ModuleItemQuestionWhereUniqueInputObjectSchema } from './ModuleItemQuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionUncheckedCreateNestedManyWithoutQuestionInput> =
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
      createMany: z
        .lazy(
          () => ModuleItemQuestionCreateManyQuestionInputEnvelopeObjectSchema,
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

export const ModuleItemQuestionUncheckedCreateNestedManyWithoutQuestionInputObjectSchema =
  Schema;
