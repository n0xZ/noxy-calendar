/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.15.1.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as createReminder from "../createReminder";
import type * as crons from "../crons";
import type * as deleteReminder from "../deleteReminder";
import type * as getReminderById from "../getReminderById";
import type * as getReminders from "../getReminders";
import type * as getRemindersByUserId from "../getRemindersByUserId";
import type * as updateReminder from "../updateReminder";
import type * as updateRemindersStatus from "../updateRemindersStatus";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  createReminder: typeof createReminder;
  crons: typeof crons;
  deleteReminder: typeof deleteReminder;
  getReminderById: typeof getReminderById;
  getReminders: typeof getReminders;
  getRemindersByUserId: typeof getRemindersByUserId;
  updateReminder: typeof updateReminder;
  updateRemindersStatus: typeof updateRemindersStatus;
}>;
