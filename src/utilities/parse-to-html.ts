import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { type Document } from '@contentful/rich-text-types';

export const parseToHtml = (data: Document): string => documentToHtmlString(data);
