import { PostResponse } from 'src/app/services/json-placeholder.service';

export interface Post extends PostResponse {
  displayIndex: number;
}
