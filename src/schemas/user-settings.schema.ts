import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class UserSettings {
  @Prop()
  avatar: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  description: string;

  @Prop()
  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  sex_preference: string;
}

export const UserSettingsSchema = SchemaFactory.createForClass(UserSettings);
