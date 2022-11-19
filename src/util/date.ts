import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

export default function dateAgo(date: string) {
  register('ko', koLocale);
  return format(date, 'ko');
}
