import { z } from 'zod';
import { StudyGroupApplicantCreateManyStudy_groupInputObjectSchema } from './StudyGroupApplicantCreateManyStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantCreateManyStudy_groupInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => StudyGroupApplicantCreateManyStudy_groupInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupApplicantCreateManyStudy_groupInputEnvelopeObjectSchema =
  Schema;
