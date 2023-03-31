import { z } from 'zod';
import { StudyGroupCreateWithoutModuleInputObjectSchema } from './StudyGroupCreateWithoutModuleInput.schema';
import { StudyGroupUncheckedCreateWithoutModuleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutModuleInput.schema';
import { StudyGroupCreateOrConnectWithoutModuleInputObjectSchema } from './StudyGroupCreateOrConnectWithoutModuleInput.schema';
import { StudyGroupCreateManyModuleInputEnvelopeObjectSchema } from './StudyGroupCreateManyModuleInputEnvelope.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateNestedManyWithoutModuleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StudyGroupCreateWithoutModuleInputObjectSchema),
        z.lazy(() => StudyGroupCreateWithoutModuleInputObjectSchema).array(),
        z.lazy(() => StudyGroupUncheckedCreateWithoutModuleInputObjectSchema),
        z
          .lazy(() => StudyGroupUncheckedCreateWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => StudyGroupCreateOrConnectWithoutModuleInputObjectSchema),
        z
          .lazy(() => StudyGroupCreateOrConnectWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => StudyGroupCreateManyModuleInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
        z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const StudyGroupCreateNestedManyWithoutModuleInputObjectSchema = Schema;
