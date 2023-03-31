import { z } from 'zod';
import { StudyGroupAdminCreateManyUserInputObjectSchema } from './StudyGroupAdminCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => StudyGroupAdminCreateManyUserInputObjectSchema),
      z.lazy(() => StudyGroupAdminCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const StudyGroupAdminCreateManyUserInputEnvelopeObjectSchema = Schema;
