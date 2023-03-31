import { z } from 'zod';
import { StudyGroupApplicantOrderByWithRelationInputObjectSchema } from './objects/StudyGroupApplicantOrderByWithRelationInput.schema';
import { StudyGroupApplicantWhereInputObjectSchema } from './objects/StudyGroupApplicantWhereInput.schema';
import { StudyGroupApplicantWhereUniqueInputObjectSchema } from './objects/StudyGroupApplicantWhereUniqueInput.schema';
import { StudyGroupApplicantCountAggregateInputObjectSchema } from './objects/StudyGroupApplicantCountAggregateInput.schema';
import { StudyGroupApplicantMinAggregateInputObjectSchema } from './objects/StudyGroupApplicantMinAggregateInput.schema';
import { StudyGroupApplicantMaxAggregateInputObjectSchema } from './objects/StudyGroupApplicantMaxAggregateInput.schema';

export const StudyGroupApplicantAggregateSchema = z.object({
  orderBy: z
    .union([
      StudyGroupApplicantOrderByWithRelationInputObjectSchema,
      StudyGroupApplicantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StudyGroupApplicantWhereInputObjectSchema.optional(),
  cursor: StudyGroupApplicantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      StudyGroupApplicantCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: StudyGroupApplicantMinAggregateInputObjectSchema.optional(),
  _max: StudyGroupApplicantMaxAggregateInputObjectSchema.optional(),
});
