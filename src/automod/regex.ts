/**
 * Warden: A Content Moderation Application for Discord
 * Copyright (C) 2023 CheesyGamer77 and the Warden Maintainers 
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>
 */

/**
 * Matches bold text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is in bold
 */
export const BOLD_REGEX = /\*\*(.+)\*\*/;

/**
 * Matches italic text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is in italics
 */
export const ITALICS_REGEX = /\*(.+)\*/;

/**
 * Matches bold italic text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is in bold italics
 */
export const BOLD_ITALICS_REGEX = /\*{3}(.+)\*{3}/;

/**
 * Matches underlined text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is underlined
 */
export const UNDERLINE_REGEX = /__(.+)__/;

/**
 * Matches struckthrough text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is struckthrough
 */
export const STRIKETHROUGH_REGEX = /~~(.+)~~/;

/**
 * Matches bullet lists
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is bulleted
 */
export const BULLET_LIST_REGEX = /^\s*(?:[\*-]\s)(.+)/;

/**
 * Matches headers
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text serving as the header
 */
export const HEADER_REGEX = /#{1,3}\s+(.+)/;

/**
 * Matches masked links
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text serving as the masked link's title
 * - 2: The url the masked link points too
 */
export const MASKED_LINKS_REGEX = /\[([^\[\]]+)\]\(([^\(\)]+)\)/;

/**
 * Matches slash command mentions
 * 
 * Groups:
 * - 0: Full match
 * - 1: The full slash command name
 * - 2: The slash command's snowflake ID
 */
// regex ref: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming
export const SLASH_COMMAND_MENTION_REGEX = /<\/((?:[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}\s?){1,3}):(\d+)>/u;

// We intentionally do not provide a regex for unicode
// emojis cause it ends up going down a huge rabit hole
// ref: https://stackoverflow.com/questions/43242440/javascript-regular-expression-for-unicode-emoji
// export const UNICODE_EMOJI_REGEX = /no thank you/;

/**
 * Matches static custom emojis
 * 
 * Groups:
 * - 0: Full match
 * - 1: The emoji's name
 * - 2: The emoji's snowflake ID
 */
export const STATIC_CUSTOM_EMOJI_REGEX = /<:([\S]+):(\d+)>/;

/**
 * Matches animated custom emojis
 * 
 * Groups:
 * - 0: Full match
 * - 1: The emoji's name
 * - 2: The emoji's snowflake ID
 */
export const ANIMATED_CUSTOM_EMOJI_REGEX = /<a:([\S]+):(\d+)>/;

/**
 * Matches all custom emojis
 * 
 * Groups:
 * - 0: Full match
 * - 1: The emoji's name
 * - 2: The emoji's snowflake ID
 */
export const ALL_CUSTOM_EMOJI_REGEX = /<a?:([\S]+):(\d+)>/;

/**
 * Matches timestamp mentions
 * 
 * Groups:
 * - 0: Full match
 * - 1: Timestamp's unix timestamp value
 * - 2: The letter corresponding to the formatting option to use
 */
export const TIMESTAMP_REGEX = /<t:(\d+)(?::([tTdDfFR]))?>/;

/**
 * Matches native Discord Guild (aka "Server") invites.
 * 
 * Note that this does not cover 3rd party domains used for server invite distribution.
 * 
 * Groups:
 * - 0: Full match
 * - 1: The invite code
 */
export const INVITE_REGEX = /discord\.(?:(?:com\/invite)|gg)\/([\w\d]+)/i;

/**
 * Matches message urls
 * 
 * Groups:
 * - 0: Full match
 * - 1: Guild/"Server" ID
 * - 2: Channel ID
 * - 3: Message ID
 */
export const MESSAGE_REGEX = /discord\.com\/channels\/(\d+)\/(\d+)\/(\d+)/;