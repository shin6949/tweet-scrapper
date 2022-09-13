import { EmbedBuilder, WebhookClient } from 'discord.js';
import { SubscriptionFormDto } from '../domain/SubscriptionFormDto';

export const configureWebhookClient = (
    subscriptionFormDto: SubscriptionFormDto,
    embedData: Array<EmbedBuilder>
): WebhookClient => {
    const webhook: WebhookClient = new WebhookClient({
        url: subscriptionFormDto.webhookUrl,
    });

    webhook.edit({
        name: subscriptionFormDto.authorName,
        avatar: subscriptionFormDto.authorProfileUrl,
    });

    return webhook;
};
