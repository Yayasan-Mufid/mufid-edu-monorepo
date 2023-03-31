import { z } from 'zod';

export const ExamSheetItemScalarFieldEnumSchema = z.enum([
  'id',
  'section_id',
  'question_id',
  'choices_id',
  'answer',
  'score',
  'graded_note',
  'graded_at',
  'graded_by_id',
  'seq',
]);
