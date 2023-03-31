import { z } from 'zod';
import { ExamCreateWithoutModuleInputObjectSchema } from './ExamCreateWithoutModuleInput.schema';
import { ExamUncheckedCreateWithoutModuleInputObjectSchema } from './ExamUncheckedCreateWithoutModuleInput.schema';
import { ExamCreateOrConnectWithoutModuleInputObjectSchema } from './ExamCreateOrConnectWithoutModuleInput.schema';
import { ExamUpsertWithWhereUniqueWithoutModuleInputObjectSchema } from './ExamUpsertWithWhereUniqueWithoutModuleInput.schema';
import { ExamCreateManyModuleInputEnvelopeObjectSchema } from './ExamCreateManyModuleInputEnvelope.schema';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithWhereUniqueWithoutModuleInputObjectSchema } from './ExamUpdateWithWhereUniqueWithoutModuleInput.schema';
import { ExamUpdateManyWithWhereWithoutModuleInputObjectSchema } from './ExamUpdateManyWithWhereWithoutModuleInput.schema';
import { ExamScalarWhereInputObjectSchema } from './ExamScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpdateManyWithoutModuleNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ExamUpsertWithWhereUniqueWithoutModuleInputObjectSchema),
        z
          .lazy(() => ExamUpsertWithWhereUniqueWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ExamCreateManyModuleInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ExamWhereUniqueInputObjectSchema),
        z.lazy(() => ExamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ExamWhereUniqueInputObjectSchema),
        z.lazy(() => ExamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ExamWhereUniqueInputObjectSchema),
        z.lazy(() => ExamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ExamWhereUniqueInputObjectSchema),
        z.lazy(() => ExamWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ExamUpdateWithWhereUniqueWithoutModuleInputObjectSchema),
        z
          .lazy(() => ExamUpdateWithWhereUniqueWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ExamUpdateManyWithWhereWithoutModuleInputObjectSchema),
        z
          .lazy(() => ExamUpdateManyWithWhereWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ExamScalarWhereInputObjectSchema),
        z.lazy(() => ExamScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ExamUpdateManyWithoutModuleNestedInputObjectSchema = Schema;
