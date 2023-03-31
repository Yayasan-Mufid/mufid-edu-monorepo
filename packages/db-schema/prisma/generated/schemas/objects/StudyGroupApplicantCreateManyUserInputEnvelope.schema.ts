import { z } from 'zod';
import { StudyGroupApplicantCreateManyUserInputObjectSchema } from './StudyGroupApplicantCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => StudyGroupApplicantCreateManyUserInputObjectSchema),
        z
          .lazy(() => StudyGroupApplicantCreateManyUserInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupApplicantCreateManyUserInputEnvelopeObjectSchema =
  Schema;
