import { z } from 'zod';
import { StudyGroupCreateWithoutStudentsInputObjectSchema } from './StudyGroupCreateWithoutStudentsInput.schema';
import { StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutStudentsInput.schema';
import { StudyGroupCreateOrConnectWithoutStudentsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutStudentsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateNestedOneWithoutStudentsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutStudentsInputObjectSchema),
          z.lazy(
            () => StudyGroupUncheckedCreateWithoutStudentsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StudyGroupCreateOrConnectWithoutStudentsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const StudyGroupCreateNestedOneWithoutStudentsInputObjectSchema = Schema;
