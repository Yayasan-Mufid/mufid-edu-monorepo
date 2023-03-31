import { z } from 'zod';
import { QuestionCreateWithoutModuleInputObjectSchema } from './QuestionCreateWithoutModuleInput.schema';
import { QuestionUncheckedCreateWithoutModuleInputObjectSchema } from './QuestionUncheckedCreateWithoutModuleInput.schema';
import { QuestionCreateOrConnectWithoutModuleInputObjectSchema } from './QuestionCreateOrConnectWithoutModuleInput.schema';
import { QuestionCreateManyModuleInputEnvelopeObjectSchema } from './QuestionCreateManyModuleInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutModuleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutModuleInputObjectSchema),
          z.lazy(() => QuestionCreateWithoutModuleInputObjectSchema).array(),
          z.lazy(() => QuestionUncheckedCreateWithoutModuleInputObjectSchema),
          z
            .lazy(() => QuestionUncheckedCreateWithoutModuleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => QuestionCreateOrConnectWithoutModuleInputObjectSchema),
          z
            .lazy(() => QuestionCreateOrConnectWithoutModuleInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => QuestionCreateManyModuleInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const QuestionUncheckedCreateNestedManyWithoutModuleInputObjectSchema =
  Schema;
