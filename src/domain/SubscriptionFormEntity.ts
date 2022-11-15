import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { SubscriptionFormDto } from '../dto/SubscriptionFormDto';

@Entity({ name: 'subscription_form' })
export class SubscriptionFormEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id' })
  private _id: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'author_name',
    nullable: false,
  })
  private _authorName: string;

  @Column({
    type: 'varchar',
    length: 1000,
    name: 'author_profile_url',
    nullable: true,
  })
  private _authorProfileUrl: string;

  @Column({ type: 'varchar', length: 11, name: 'color_hex', nullable: false })
  private _colorHex: string;

  @Column({
    type: 'varchar',
    length: 1000,
    name: 'webhook_url',
    nullable: false,
  })
  private _webhookUrl: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'to_get_account_id',
    nullable: false,
  })
  private _toGetAccountId: string;

  @Column({
    type: 'datetime',
    name: 'last_checked_time',
    nullable: true,
    default: null,
  })
  private _lastCheckedTime: Date;

  @CreateDateColumn({ name: 'created_at' })
  private _createdAt: Date;

  static from(
    id: string,
    authorName: string,
    authorProfileUrl: string,
    colorHex: string,
    webhookUrl: string,
    toGetAccountId: string,
    lastCheckedTime: Date
  ) {
    const subscriptionForm = new SubscriptionFormEntity();
    subscriptionForm._id = id;
    subscriptionForm._authorName = authorName;
    subscriptionForm._authorProfileUrl = authorProfileUrl;
    subscriptionForm._colorHex = colorHex;
    subscriptionForm._webhookUrl = webhookUrl;
    subscriptionForm._toGetAccountId = toGetAccountId;
    subscriptionForm._lastCheckedTime = lastCheckedTime;
    return subscriptionForm;
  }

  toSubscriptionFormDto() {
    return SubscriptionFormDto.from(
      this._id,
      this._authorName,
      this._authorProfileUrl,
      this._colorHex,
      this._webhookUrl,
      this._toGetAccountId,
      this._lastCheckedTime
    );
  }
}
