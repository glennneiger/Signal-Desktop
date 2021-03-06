import { Attachment } from './Attachment';


export type Message
  = IncomingMessage
  | OutgoingMessage
  | VerifiedChangeMessage;

export type IncomingMessage = Readonly<{
  type: 'incoming';
  attachments: Array<Attachment>;
  body?: string;
  decrypted_at?: number;
  errors?: Array<any>;
  flags?: number;
  id: string;
  received_at: number;
  source?: string;
  sourceDevice?: number;
} & SharedMessageProperties & Message4 & ExpirationTimerUpdate>;

export type OutgoingMessage = Readonly<{
  type: 'outgoing';
  attachments: Array<Attachment>;
  body?: string;
  delivered: number;
  delivered_to: Array<string>;
  destination: string; // PhoneNumber
  expirationStartTimestamp: number;
  expires_at?: number;
  expireTimer?: number;
  id: string;
  received_at: number;
  recipients?: Array<string>; // Array<PhoneNumber>
  sent: boolean;
  sent_to: Array<string>; // Array<PhoneNumber>
  synced: boolean;
} & SharedMessageProperties & Message4 & ExpirationTimerUpdate>;

export type VerifiedChangeMessage = Readonly<{
  type: 'verified-change';
} & SharedMessageProperties & Message4 & ExpirationTimerUpdate>;

type SharedMessageProperties = Readonly<{
  conversationId: string;
  sent_at: number;
  timestamp: number;
}>;

type ExpirationTimerUpdate = Readonly<{
  expirationTimerUpdate?: Readonly<{
    expireTimer: number;
    fromSync: boolean;
    source: string; // PhoneNumber
  }>,
}>;

type Message4 = Readonly<{
  numAttachments?: number;
  numVisualMediaAttachments?: number;
  numFileAttachments?: number;
}>;
