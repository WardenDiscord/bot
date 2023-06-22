/**
 * Matches bold text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is in bold
 */
export const BOLD_REGEX = /\*\*(.+)\*\*/g;

/**
 * Matches italic text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is in italics
 */
export const ITALICS_REGEX = /\*(.+)\*/g;

/**
 * Matches struckthrough text
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text that is struckthrough
 */
export const STRIKETHROUGH_REGEX = /~~(.+)~~/g;

/**
 * Matches headers
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text serving as the header
 */
export const HEADER_REGEX = /#{1,3}\s+(.+)/g;

/**
 * Matches masked links
 * 
 * Groups:
 * - 0: Full match
 * - 1: The text serving as the masked link's title
 * - 2: The url the masked link points too
 */
export const MASKED_LINKS_REGEX = /\[([^\[\]]+)\]\(([^\(\)]+)\)/g;

/**
 * Matches slash command mentions
 * 
 * Groups:
 * - 0: Full match
 * - 1: The full slash command name
 * - 2: The slash command's snowflake ID
 */
// regex ref: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-naming
export const SLASH_COMMAND_MENTION_REGEX = /<\/((?:[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}\s?){1,3}):(\d+)>/gu;

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
export const STATIC_CUSTOM_EMOJI_REGEX = /<:([\S]+):(\d+)>/g;

/**
 * Matches animated custom emojis
 * 
 * Groups:
 * - 0: Full match
 * - 1: The emoji's name
 * - 2: The emoji's snowflake ID
 */
export const ANIMATED_CUSTOM_EMOJI_REGEX = /<a:([\S]+):(\d+)>/g;

/**
 * Matches all custom emojis
 * 
 * Groups:
 * - 0: Full match
 * - 1: The emoji's name
 * - 2: The emoji's snowflake ID
 */
export const ALL_CUSTOM_EMOJI_REGEX = /<a?:([\S]+):(\d+)>/g;

/**
 * Matches timestamp mentions
 * 
 * Groups:
 * - 0: Full match
 * - 1: Timestamp's unix timestamp value
 * - 2: The letter corresponding to the formatting option to use
 */
export const TIMESTAMP_REGEX = /<t:(\d+)(?::([tTdDfFR]))?>/g;

// Discord links
/**
 * Matches native Discord Guild (aka "Server") invites.
 * 
 * Note that this does not cover 3rd party domains used for server invite distribution.
 * 
 * Groups:
 * - 0: Full match
 * - 1: The invite code
 */
export const INVITE_REGEX = /discord\.(?:(?:com\/invite)|gg)\/([\w\d]+)/gi;
