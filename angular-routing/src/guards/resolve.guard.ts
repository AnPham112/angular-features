import { ResolveFn } from '@angular/router';
import { Post } from '../app/models/post.model';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export const PostResolver: ResolveFn<Post[]> = () => {
  const http = inject(HttpClient);
  return http.get<any[]>('https://dummyjson.com/products');
};
