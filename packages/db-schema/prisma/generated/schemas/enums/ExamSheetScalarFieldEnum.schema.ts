import { z } from 'zod';

export const ExamSheetScalarFieldEnumSchema = z.enum([
  'id',
  'group_exam_id',
  'user_id',
  'grader_id',
  'status',
  'start_time',
  'end_time',
  'graded_at',
  'grader_notes',
  'score',
  'token_text',
]);
