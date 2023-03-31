import { z } from 'zod';
import { StudyGroupApplicantSelectObjectSchema } from './objects/StudyGroupApplicantSelect.schema';
import { StudyGroupApplicantIncludeObjectSchema } from './objects/StudyGroupApplicantInclude.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './objects/StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantCreateInputObjectSchema } from './objects/StudyGroupApplicantCreateInput.schema';
import { StudyGroupApplicantUncheckedCreateInputObjectSchema } from './objects/StudyGroupApplicantUncheckedCreateInput.schema';
import { StudyGroupApplicantUpdateInputObjectSchema } from './objects/StudyGroupApplicantUpdateInput.schema';
import { StudyGroupApplicantUncheckedUpdateInputObjectSchema } from './objects/StudyGroupApplicantUncheckedUpdateInput.schema';

export const StudyGroupApplicantUpsertSchema = z.object({
  select: StudyGroupApplicantSelectObjectSchema.optional(),
  include: StudyGroupApplicantIncludeObjectSchema.optional(),
  where: StudyGroupApplicantWhereUniqueInputObjectSchema,
  create: z.union([
    StudyGroupApplicantCreateInputObjectSchema,
    StudyGroupApplicantUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StudyGroupApplicantUpdateInputObjectSchema,
    StudyGroupApplicantUncheckedUpdateInputObjectSchema,
  ]),
});
