import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { EncryptionService } from './encryption.service';
import { TeamworkService } from './teamwork.service';
import { SessionService } from './session.service';

export const config = functions.config();

admin.initializeApp(config.firebase);

export const auth = admin.auth();
export const firestore = admin.firestore();

export const encryptionService = new EncryptionService();
export const teamworkService = new TeamworkService();
export const sessionService = new SessionService(firestore);
