import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

export const parseToHtml = (data: Document): string => documentToHtmlString(data);
