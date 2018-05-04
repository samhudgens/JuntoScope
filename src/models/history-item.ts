import { ScopingSession, SessionStatus } from '@models/scoping-session';
import { SessionUserType } from '@models/user';

export interface HistoryItem extends Partial<ScopingSession> {
  id?: string;
  userId: string;
  connectionId: string;
  sessionId: string;
  users: { [uid: string]: number };
}

export interface HistoryItemOptionEvent {
  userType: SessionUserType;
  item: HistoryItem;
}

export interface HistoryItemDetailEvent {
  status: SessionStatus;
  item: HistoryItem;
}