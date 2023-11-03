import { UUID } from 'crypto';

class CategoryV1NameModel {
  id: UUID;
  name: string;
  pid: string | null;
}

export default CategoryV1NameModel;

export class CategoryV1UpdateModel {
  id: UUID;
  name: string;
  pid: string;
}
