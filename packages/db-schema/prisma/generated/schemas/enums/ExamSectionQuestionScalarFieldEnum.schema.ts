import { z } from 'zod';

export const ExamSectionQuestionScalarFieldEnumSchema = z.enum([
  'section_id',
  'question_id',
  'min_score',
  'max_scrore',
]);
