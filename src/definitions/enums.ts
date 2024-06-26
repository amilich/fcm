import { FcmApiDefinitions } from './apis/fcm-api-definitions.js'

export const FcmApiAndroidErrorCode: typeof FcmApiDefinitions.V1.ErrorCode = FcmApiDefinitions.V1.ErrorCode
export const FcmApiAndroidMessagePriority: typeof FcmApiDefinitions.V1.AndroidMessagePriority = FcmApiDefinitions.V1.AndroidMessagePriority
export const FcmApiAndroidNotificationPriority: typeof FcmApiDefinitions.V1.NotificationPriority = FcmApiDefinitions.V1.NotificationPriority
export const FcmApiAndroidVisibility: typeof FcmApiDefinitions.V1.Visibility = FcmApiDefinitions.V1.Visibility

export enum LoggerName {
  CLASS = 'FCM_CLASS',
  FUNCTION = 'FCM_FUNCTION',
  REQUEST = 'FCM_REQUEST'
}

export enum McsState {
  VERSION_TAG_AND_SIZE = 0,
  TAG_AND_SIZE = 1,
  SIZE = 2,
  BYTES = 3
}

export enum McsTag {
  HEARTBEAT_PING = 0,
  HEARTBEAT_ACK = 1,
  LOGIN_REQUEST = 2,
  LOGIN_RESPONSE = 3,
  CLOSE = 4,
  //   MESSAGE_STANZA,
  //   PRESENCE_STANZA,
  IQ_STANZA = 7,
  DATA_MESSAGE_STANZA = 8
  //   BATCH_PRESENCE_STANZA,
  //   STREAM_ERROR_STANZA,
  //   HTTP_REQUEST,
  //   HTTP_RESPONSE,
  //   BIND_ACCOUNT_REQUEST,
  //   BIND_ACCOUNT_RESPONSE,
  //   TALK_METADATA,
  //   NUM_PROTO_TYPES
}
