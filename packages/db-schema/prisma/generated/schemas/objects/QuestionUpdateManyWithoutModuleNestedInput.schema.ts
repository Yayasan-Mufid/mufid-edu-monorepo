import { z } from 'zod';
import { QuestionCreateWithoutModuleInputObjectSchema } from './QuestionCreateWithoutModuleInput.schema';
import { QuestionUncheckedCreateWithoutModuleInputObjectSchema } from './QuestionUncheckedCreateWithoutModuleInput.schema';
import { QuestionCreateOrConnectWithoutModuleInputObjectSchema } from './QuestionCreateOrConnectWithoutModuleInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutModuleInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutModuleInput.schema';
import { QuestionCreateManyModuleInputEnvelopeObjectSchema } from './QuestionCreateManyModuleInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutModuleInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutModuleInput.schema';
import { QuestionUpdateManyWithWhereWithoutModuleInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutModuleInput.schema';
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateManyWithoutModuleNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => QuestionUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
        ),
        z
          .lazy(
            () => QuestionUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => QuestionCreateManyModuleInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => QuestionWhereUniqueInputObjectSchema),
        z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => QuestionWhereUniqueInputObjectSchema),
        z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => QuestionWhereUniqueInputObjectSchema),
        z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => QuestionWhereUniqueInputObjectSchema),
        z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => QuestionUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
        ),
        z
          .lazy(
            () => QuestionUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => QuestionUpdateManyWithWhereWithoutModuleInputObjectSchema),
        z
          .lazy(() => QuestionUpdateManyWithWhereWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => QuestionScalarWhereInputObjectSchema),
        z.lazy(() => QuestionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const QuestionUpdateManyWithoutModuleNestedInputObjectSchema = Schema;
