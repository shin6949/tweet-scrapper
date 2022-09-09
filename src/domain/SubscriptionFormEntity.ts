import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';
import { SubscriptionFormDto } from './SubscriptionFormDto';

@Entity({ name: 'subscription_form' })
export class SubscriptionFormEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
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

    @Column({ type: 'varchar', length: 2000, name: 'content', nullable: false })
    private _content: string;

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
        type: 'varchar',
        length: 100,
        name: 'last_checked_tweet_id',
        nullable: true,
        default: null,
    })
    private _lastCheckedTweetId: string;

    @Column({
        type: 'datetime',
        name: 'last_checked_time',
        nullable: true,
        default: null,
    })
    private _lastCheckedTime: Date;

    @CreateDateColumn()
    private _createdAt: Date;

    static from(
        authorName: string,
        authorProfileUrl: string,
        colorHex: string,
        content: string,
        webhookUrl: string,
        toGetAccountId: string,
        lastCheckedTweetId: string,
        lastCheckedTime: Date
    ) {
        const subscriptionForm = new SubscriptionFormEntity();
        subscriptionForm._authorName = authorName;
        subscriptionForm._authorProfileUrl = authorProfileUrl;
        subscriptionForm._colorHex = colorHex;
        subscriptionForm._content = content;
        subscriptionForm._webhookUrl = webhookUrl;
        subscriptionForm._toGetAccountId = toGetAccountId;
        subscriptionForm._lastCheckedTweetId = lastCheckedTweetId;
        subscriptionForm._lastCheckedTime = lastCheckedTime;
        return subscriptionForm;
    }

    toSubscriptionFormDto() {
        return SubscriptionFormDto.from(
            this._authorName,
            this._authorProfileUrl,
            this._colorHex,
            this._content,
            this._webhookUrl,
            this._toGetAccountId,
            this._lastCheckedTweetId,
            this._lastCheckedTime
        );
    }
}
