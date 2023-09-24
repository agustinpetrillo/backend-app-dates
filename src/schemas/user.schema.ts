import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  description: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  sex_preference: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
