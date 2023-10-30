import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

class CreateDTO {
  @IsUUID()
  @IsNotEmpty()
  id: UUID;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export default CreateDTO;
