import { z } from 'zod';
import { StudyGroupApplicantSelectObjectSchema } from './StudyGroupApplicantSelect.schema';
import { StudyGroupApplicantIncludeObjectSchema } from './StudyGroupApplicantInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupApplicantArgs> = z
  .object({
    select: z.lazy(() => StudyGroupApplicantSelectObjectSchema).optional(),
    include: z.lazy(() => StudyGroupApplicantIncludeObjectSchema).optional(),
  })
  .strict();

export const StudyGroupApplicantArgsObjectSchema = Schema;
