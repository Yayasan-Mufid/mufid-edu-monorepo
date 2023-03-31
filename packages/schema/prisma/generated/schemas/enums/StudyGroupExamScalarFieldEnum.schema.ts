import { z } from 'zod';

export const StudyGroupExamScalarFieldEnumSchema = z.enum([
  'id',
  'exam_id',
  'group_id',
  'start_time',
  'end_time',
  'duration_hour',
  'weight',
]);
