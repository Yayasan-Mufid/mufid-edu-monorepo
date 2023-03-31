import { z } from 'zod';
import { ExamCreateWithoutModuleInputObjectSchema } from './ExamCreateWithoutModuleInput.schema';
import { ExamUncheckedCreateWithoutModuleInputObjectSchema } from './ExamUncheckedCreateWithoutModuleInput.schema';
import { ExamCreateOrConnectWithoutModuleInputObjectSchema } from './ExamCreateOrConnectWithoutModuleInput.schema';
import { ExamCreateManyModuleInputEnvelopeObjectSchema } from './ExamCreateManyModuleInputEnvelope.schema';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateNestedManyWithoutModuleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExamCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ExamCreateWithoutModuleInputObjectSchema).array(),
        z.lazy(() => ExamUncheckedCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ExamUncheckedCreateWithoutModuleInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ExamCreateOrConnectWithoutModuleInputObjectSchema),
        z.lazy(() => ExamCreateOrConnectWithoutModuleInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ExamCreateManyModuleInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExamWhereUniqueInputObjectSchema),
        z.lazy(() => ExamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExamCreateNestedManyWithoutModuleInputObjectSchema = Schema;
