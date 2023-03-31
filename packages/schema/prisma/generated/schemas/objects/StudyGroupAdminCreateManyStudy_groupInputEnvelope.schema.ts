import { z } from 'zod';
import { StudyGroupAdminCreateManyStudy_groupInputObjectSchema } from './StudyGroupAdminCreateManyStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateManyStudy_groupInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => StudyGroupAdminCreateManyStudy_groupInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StudyGroupAdminCreateManyStudy_groupInputEnvelopeObjectSchema =
  Schema;
