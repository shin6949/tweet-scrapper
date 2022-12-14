import { EmbedBuilder, WebhookClient } from 'discord.js';
import { SubscriptionFormDto } from '../dto/SubscriptionFormDTO';

export const configureWebhookClient = (
  subscriptionFormDto: SubscriptionFormDto,
  embedData: Array<EmbedBuilder>
): WebhookClient => {
  const webhook: WebhookClient = new WebhookClient({
    url: subscriptionFormDto.webhookUrl,
  });

  return webhook;
};
