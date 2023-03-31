import { z } from 'zod';

export const ExamSheetSectionScalarFieldEnumSchema = z.enum([
  'id',
  'exam_sheet_id',
  'section_id',
]);
