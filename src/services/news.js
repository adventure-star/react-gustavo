import { jsonQuery, query, getLocalToken, generatePagenationParameters } from "./common";

export const getMemberInfoFromLocal = () => {
  const token = getLocalToken();
  const userInfo = token ? token.member : null;
  return userInfo;
}

export async function apiNews(searchParams) {
  return await query(`/news/all/`, {searchParams});
}

export async function apiNewsById(id) {
  return await query(`/news/${id}/`);
}

export async function apiUpdateNews(id, data) {
  return await jsonQuery(`/news/${id}/`, 'PUT', data);
}

export async function apiNewsCreate(data) {
  const res = await jsonQuery(`/news/create/`, 'POST', data, true);
  return res;
}

export async function apiDeleteNewsById(id) {
  return await jsonQuery(`/news/${id}/`, 'DELETE', {}, true);
}

export async function apiDraftCreate(data) {
  const res = await jsonQuery(`/draft/create/`, 'POST', data, true);
  return res;
}

export async function apiGetAllImages() {
  return await query(`/images/all`);
}

export async function apiGetAllVideos() {
  return await query(`/videos/all`);
}

export async function apiGetAllTexts() {
  return await query(`/texts/all`);
}

export async function apiGetAllAnimations() {
  return await query(`/animations/all`);
}

export async function apiGetAllPresentations() {
  return await query(`/presentations/all`);
}

export async function apiGetAllLinkVideos() {
  return await query(`/linkvideos/all`);
}

export async function apiGetRecentLessons() {
  return await query(`/lesson/recent`);
}

export async function apiCreateLesson(data) {
  return await jsonQuery(`/lesson/create`, 'POST', data, true);
}

export async function apiUpdateLesson(id, data) {
  return await jsonQuery(`/lesson/${id}`, 'PUT', data, true);
}

export async function apiGetLessonById(id) {
  return await query(`/lesson/${id}/`);
}

export async function apiCreateLessonHistory(data) {
  return await jsonQuery(`/lesson/historycreate`, 'POST', data, true);
}

export async function apiGetLessonHistory() {
  return await query(`/lessonhistory`);
}

export async function apiGetLessonHistoryById(id) {
  return await query(`/history/${id}`);
}
