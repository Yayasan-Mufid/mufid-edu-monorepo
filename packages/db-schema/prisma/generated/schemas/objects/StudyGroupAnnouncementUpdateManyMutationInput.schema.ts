import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAnnouncementUpdateManyMutationInput> =
  z.object({}).strict();

export const StudyGroupAnnouncementUpdateManyMutationInputObjectSchema = Schema;
