import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateManyMutationInput> = z
  .object({})
  .strict();

export const StudyGroupStudentUpdateManyMutationInputObjectSchema = Schema;
